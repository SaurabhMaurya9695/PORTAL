import {Pipe, PipeTransform} from '@angular/core';
import {TimeAgoPipe} from 'time-ago-pipe';

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class DateAgoPipe extends TimeAgoPipe implements PipeTransform {

  transform(value: string): string {
    return super.transform(value);
  }
}
