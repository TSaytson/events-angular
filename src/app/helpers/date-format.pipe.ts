import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from '../utils/contants';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  constructor(private datePipe: DatePipe){}
  transform(value: string) {
    return this.datePipe.transform(value, Constants.DATE_TIME_FORMAT)
  }
}
