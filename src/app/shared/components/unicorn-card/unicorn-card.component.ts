import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Unicorn} from '../../../models/unicorn.model';
import {UnicornsService} from '../../services/unicorns.service';
import {MatSnackBar} from '@angular/material';
import {CartService} from '../../services/cart.service';

@Component({
    selector: 'uni-unicorn-card',
    templateUrl: './unicorn-card.component.html',
    styleUrls: ['./unicorn-card.component.scss']
})
export class UnicornCardComponent implements OnInit {

    @Input()
    public unicorn: Unicorn;

    @Output()
    private removed = new EventEmitter();

    public isFavorite = false;

    constructor(private unicornsService: UnicornsService,
                private snackBar: MatSnackBar,
                private cartService: CartService) {
    }

    public ngOnInit(): void {
        this.cartService.cart.subscribe((cart) => {
            this.isFavorite = !!cart.find((u) => u.id === this.unicorn.id);
        });
    }

    public remove() {
        this.unicornsService.delete(this.unicorn).subscribe({
            next: () => {
                this.snackBar.open(`La licorne ${this.unicorn.name} a bien été détruite`);
                this.removed.emit();
            },
            error: () => {
                this.snackBar.open(`ERREUR ! La licorne ${this.unicorn.name} n'a pas été détruite`);
            }
        });
    }

    public toggle() {
        this.cartService.toggle(this.unicorn);
    }

}
