import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCheckboxList'
})
export class FilterCheckboxListPipe implements PipeTransform {

  transform(value: any, input: any): any {
    if (input) {
       return value.filter(val => val.indexOf(input) >= 0);
     } else {
       return value;
     }
    }

}
