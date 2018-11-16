import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RolesComponent} from './pages/roles/roles.component';

const routes: Routes = [
    {path: 'roles', component: RolesComponent},
    {path: '**', redirectTo: 'roles'}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
