import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Unicorn} from '../../../models/unicorn.model';
import {Observable} from 'rxjs';
import {UnicornsService} from '../../../shared/services/unicorns.service';

@Injectable({
    providedIn: 'root'
})
export class UnicornResolver implements Resolve<Unicorn> {

    constructor(private unicornsService: UnicornsService) {
    }

    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<Unicorn> {

        return this.unicornsService.getSingleWithCapacityLabels(route.params.id);
    }
}
