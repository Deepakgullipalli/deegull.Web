import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimalCheck'
})
export class DecimalCheckPipe implements PipeTransform {

  transform(value: number): any {
    if (value % 1 != 0) {
      let noOfFractions = value.toString().split('.')[1];
      let finalVal = noOfFractions[noOfFractions.length - 1];
      if (noOfFractions.length < 3) {
        return '$'+value.toFixed(2);
      }
      else {
        return '$'+value.toFixed(3);
      }
    }
    return '$'+value.toString()+'.00';
  }

  CheckForTrailingZeros(decimalTobeChecked: string) {
    const re = new RegExp(decimalTobeChecked, '0');
    var endZroes = decimalTobeChecked.match("*0\b");

    if (endZroes.length > 0) {
      decimalTobeChecked = decimalTobeChecked.substring(0, decimalTobeChecked.length - 1)
    }
  }

}

