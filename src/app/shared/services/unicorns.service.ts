import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Unicorn} from '../../models/unicorn.model';
import {forkJoin, from, Observable, of} from 'rxjs';
import {filter, flatMap, map, mergeMap, pluck, reduce, tap, toArray} from 'rxjs/operators';
import {CapacitiesService} from './capacities.service';
import {Capacity} from '../../models/capacity.model';

@Injectable({
    providedIn: 'root'
})
export class UnicornsService {

    private url = 'http://localhost:3000/unicorns';

    constructor(private http: HttpClient,
                private capacitiesService: CapacitiesService) {
    }

    public list(): Observable<Unicorn[]> {
        return this.http.get<Unicorn[]>(this.url);
    }

    public delete(unicorn: Unicorn): Observable<any> {
        return this.http.delete(`${this.url}/${unicorn.id}`).pipe(
            tap(() => {
                // MAJ STORE
            })
        );
    }

    public listAtLeastOneYearUpperCase(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            filter((u: Unicorn) => new Date().getFullYear() - u.birthyear >= 1),
            map((u: Unicorn) => ({...u, name: u.name.toUpperCase()})),
            toArray(),
        );
    }

    public getAverageAge(): Observable<number> {
        return this.list().pipe(
            flatMap(e => e),
            pluck('birthyear'),
            map((birthyear: number): number => new Date().getFullYear() - birthyear),
            reduce((acc: { sum, nb }, age: number) => {
                return {
                    sum: acc.sum += age,
                    nb: acc.nb + 1,
                };
            }, {sum: 0, nb: 0}),
            map((acc) => acc.sum / acc.nb),
        );
    }

    public listWithCapacityLabels(): Observable<Unicorn[]> {
        return this.list().pipe(
            flatMap(e => e),
            mergeMap((unicorn: Unicorn) => this.setLabels(unicorn)),
            toArray(),
        );
    }

    private setLabels(unicorn: Unicorn): Observable<Unicorn> {

        if (!unicorn.capacities) {
            return of({...unicorn, capacityLabels: []});
        }

        return from(unicorn.capacities).pipe(
            mergeMap((capacityId: number): Observable<Capacity> => {
                return this.capacitiesService.get(capacityId);
            }),
            pluck('label'),
            toArray(),
            map((labels: string[]): Unicorn => {
                return {...unicorn, capacityLabels: labels};
            })
        );
    }

    public listWithCapacityLabels2(): any {
        return forkJoin(
            this.list(),
            this.capacitiesService.list(),
        ).pipe(
            map(([unicorns, capacities]): Unicorn[] =>
                unicorns.map((u: Unicorn): Unicorn =>
                    ({
                        ...u,
                        capacityLabels: u.capacities.map((c: number): string => {
                            return capacities.find((c2: Capacity) => c2.id === c).label;
                        })
                    })
                )
            )
        );
    }

    public get(id: number): Observable<Unicorn> {
        return this.http.get<Unicorn>(`${this.url}/${id}`);
    }

    public getSingleWithCapacityLabels(id: number): Observable<Unicorn> {
        return forkJoin(
            this.get(id),
            this.capacitiesService.list(),
        ).pipe(
            map(([unicorn, capacities]): Unicorn => {
                return ({
                    ...unicorn,
                    capacityLabels: unicorn.capacities.map((c: number): string => {
                        return capacities.find((c2: Capacity) => c2.id === c).label;
                    })
                });
            })
        );
    }
}
