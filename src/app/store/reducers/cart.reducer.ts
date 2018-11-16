import {Unicorn} from '../../models/unicorn.model';
import {ADD_UNICORN_TO_CART, CartActions, REMOVE_UNICORN_FROM_CART} from '../actions/cart.actions';
import {REMOVE_UNICORN, UnicornsActions} from '../actions/unicorns.actions';

export function cartReducer(state: Unicorn[] = [], action: CartActions | UnicornsActions) {

    console.log(action.type, state);

    switch (action.type) {
        case ADD_UNICORN_TO_CART:
            return [...state, action.unicorn];
        case REMOVE_UNICORN_FROM_CART:
        case REMOVE_UNICORN:
            return state.filter(u => u.id !== action.unicorn.id);
        default:
            return state;
    }
}
