import {Action} from '@ngrx/store';
import {Unicorn} from '../../models/unicorn.model';

export const ADD_UNICORN = '[Unicorns] ADD_🦄';
export const REMOVE_UNICORN = '[Unicorns] ❌_🦄';

export class AddUnicorn implements Action {
    public readonly type = ADD_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export class RemoveUnicorn implements Action {
    public readonly type = REMOVE_UNICORN;
    constructor(public unicorn: Unicorn) { }
}
export type UnicornsActions =
    AddUnicorn
    | RemoveUnicorn;
