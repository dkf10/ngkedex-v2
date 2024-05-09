import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  public transform(value: string, ...args: unknown[]): string {
    return `${value.charAt(0).toUpperCase()}${value.slice(1).replace(/-/g, ' ')}`;
  }
}
