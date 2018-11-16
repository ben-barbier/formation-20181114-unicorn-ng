import {Component} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartService} from '../shared/services/cart.service';

@Component({
    selector: 'uni-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'],
})
export class NavComponent {

    public isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
        );

    public cart = this.cartService.cart;

    constructor(private breakpointObserver: BreakpointObserver,
                private cartService: CartService) {

    }

}
