import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {RolesComponent} from './pages/roles/roles.component';

@NgModule({
    declarations: [RolesComponent],
    imports: [
        CommonModule,
        AdminRoutingModule
    ]
})
export class AdminModule {
}
