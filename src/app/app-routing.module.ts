import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornDetailsComponent} from './pages/unicorn-details/unicorn-details.component';
import {AgeGuard} from './pages/unicorn-details/guards/age.guard';
import {UnicornResolver} from './pages/unicorn-details/resolvers/unicorn.resolver';

const routes: Routes = [
    {path: 'unicorn-list', component: UnicornListComponent},
    {
        path: 'unicorn-details/:id',
        component: UnicornDetailsComponent,
        canActivate: [AgeGuard],
        resolve: {
            unicorn: UnicornResolver
        }
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule'
    },
    {path: '**', redirectTo: 'unicorn-list'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
