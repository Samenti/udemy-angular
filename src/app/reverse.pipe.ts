import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
})
export class ReversePipe implements PipeTransform {
  transform(value: string) {
    if (typeof value !== 'string') {
      return value;
    }
    return Array.from(value).reverse().join('');
  }
}
