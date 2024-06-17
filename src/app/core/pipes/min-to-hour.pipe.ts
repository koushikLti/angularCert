import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToHour',
  standalone: true,
})
export class MinToHourPipe implements PipeTransform {
  transform(value: string): string {
    const minutes = Number(value) % 60;
    const hours = (Number(value) - minutes) / 60;
    const totalMinutes: string = hours + 'h ' + minutes + 'min';
    return totalMinutes;
  }
}
