import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})

export class GenderPipe implements PipeTransform {
  transform(gender: string): string {
    if (gender === 'F') return 'Female'
    else if (gender === 'M') return 'Male'
    else return 'Other';
  };
}