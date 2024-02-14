import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: Date | string, format: string = 'medium'): string {
    if (!value) return '';

    let dateValue: Date;
    if (typeof value === 'string') {
      dateValue = new Date(value);
    } else {
      dateValue = value;
    }

    switch (format) {
      case 'short':
        return dateValue.toLocaleDateString();
      case 'long':
        return dateValue.toLocaleString();
      default:
        return dateValue.toLocaleString();
    }
  }
}

