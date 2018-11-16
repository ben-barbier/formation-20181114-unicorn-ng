import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'magicalName',
})
export class MagicalNamePipe implements PipeTransform {

    public transform(originalName: string): string {

        console.count('magicalName');

        return Array
            .from(originalName)
            .map((char, idx) => idx % 2 === 0 ? char.toUpperCase() : char.toLowerCase())
            .join('');
    }

}
