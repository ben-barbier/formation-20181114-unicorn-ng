import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {UnicornListComponent} from './pages/unicorn-list/unicorn-list.component';
import {UnicornCardComponent} from './shared/components/unicorn-card/unicorn-card.component';
import {HttpClientModule} from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule
} from '@angular/material';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import { MagicalNamePipe } from './shared/pipes/magical-name.pipe';
import { UnicornDetailsComponent } from './pages/unicorn-details/unicorn-details.component';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from './store/reducers/cart.reducer';
import {unicornsReducer} from './store/reducers/unicorns.reducer';

@NgModule({
    declarations: [
        AppComponent,
        UnicornListComponent,
        UnicornCardComponent,
        NavComponent,
        MagicalNamePipe,
        UnicornDetailsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        DragDropModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatSnackBarModule,
        StoreModule.forRoot({
            cart: cartReducer,
            unicorns: unicornsReducer,
        }),

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
