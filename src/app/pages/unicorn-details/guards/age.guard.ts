import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../../shared/services/unicorns.service';
import {map, pluck, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AgeGuard implements CanActivate {

    constructor(private unicornService: UnicornsService) {
    }

    public canActivate(next: ActivatedRouteSnapshot,
                       state: RouterStateSnapshot): Observable<boolean> {

        const unicornId = next.params.id;

        return this.unicornService.get(unicornId).pipe(
            // tap(unicorn => {
                // debugger;
                // state.root.data['unicorn'] = unicorn;
                // console.log(next);
                // next.data['unicorn'] = unicorn;
            // }),
            pluck('birthyear'),
            map(birthyear => birthyear < new Date().getFullYear()),
        );

    }

}
