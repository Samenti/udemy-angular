import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false,
})
export class SortPipe implements PipeTransform {
  transform(
    value: Array<any>,
    sortByProp: string,
    order: 'ascending' | 'descending' = 'ascending'
  ): Array<any> {
    const sortedArray = value.slice();
    sortedArray.sort((a, b) => {
      if (a[sortByProp] < b[sortByProp]) {
        return order === 'ascending' ? -1 : 1;
      } else if (a[sortByProp] > b[sortByProp]) {
        return order === 'ascending' ? 1 : -1;
      } else {
        return 0;
      }
    });
    return sortedArray;
  }
}
