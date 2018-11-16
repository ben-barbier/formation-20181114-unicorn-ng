import {Injectable} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {State, Store} from '@ngrx/store';
import {AppState} from '../../store/app.state';
import {AddUnicornToCart, RemoveUnicornFromCart} from '../../store/actions/cart.actions';
import {pluck} from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    public cart = this.state.pipe(pluck('cart')) as BehaviorSubject<Unicorn[]>;

    constructor(private store: Store<AppState>,
                private state: State<AppState>) {
    }

    public addToCart(unicorn: Unicorn) {
        this.store.dispatch(new AddUnicornToCart(unicorn));
    }

    public removeFromCart(unicorn: Unicorn) {
        this.store.dispatch(new RemoveUnicornFromCart(unicorn));
    }

    public toggle(unicorn: Unicorn): void {
        const unicornIsInCart = !!this.cart.getValue().find((u) => {
            return u.id === unicorn.id;
        });
        if (unicornIsInCart) {
            this.removeFromCart(unicorn);
        } else {
            this.addToCart(unicorn);
        }
    }

}
