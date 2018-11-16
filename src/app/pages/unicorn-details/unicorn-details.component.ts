import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {pluck} from 'rxjs/operators';

@Component({
    selector: 'uni-unicorn-details',
    templateUrl: './unicorn-details.component.html',
    styleUrls: ['./unicorn-details.component.scss']
})
export class UnicornDetailsComponent {

    public unicorn = this.route.data.pipe(
        pluck('unicorn')
    );

    constructor(private route: ActivatedRoute) {
    }

}
