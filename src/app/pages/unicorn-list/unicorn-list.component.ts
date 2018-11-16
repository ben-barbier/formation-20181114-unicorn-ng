import {Component} from '@angular/core';
import {Unicorn} from '../../models/unicorn.model';
import {UnicornsService} from '../../shared/services/unicorns.service';

@Component({
    selector: 'uni-unicorn-list',
    templateUrl: './unicorn-list.component.html',
    styleUrls: ['./unicorn-list.component.scss']
})
export class UnicornListComponent {

    public unicorns: Unicorn[] = [];
    public averageAge = this.unicornsService.getAverageAge();

    constructor(private unicornsService: UnicornsService) {
        unicornsService.listWithCapacityLabels2().subscribe(unicorns => this.unicorns = unicorns);
    }

    public removeUnicornFromList(unicornToDelete: Unicorn) {
        this.unicorns = this.unicorns.filter(
            (u: Unicorn) => u.id !== unicornToDelete.id);
    }

}
