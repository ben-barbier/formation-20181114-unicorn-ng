import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Capacity} from '../../models/capacity.model';

@Injectable({
    providedIn: 'root'
})
export class CapacitiesService {

    private url = 'http://localhost:3000/capacities';

    constructor(private http: HttpClient) {
    }

    public get(id: number): Observable<Capacity> {
        return this.http.get<Capacity>(`${this.url}/${id}`);
    }

    public list(): Observable<Capacity[]> {
        return this.http.get<Capacity[]>(this.url);
    }
}
