import {Unicorn} from '../models/unicorn.model';

export interface AppState {
    unicorns: Unicorn[];
    cart: Unicorn[];
}
