import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textHighlight'
})
export class TextHighlightPipe implements PipeTransform {

  transform(value: string, args: any): string {
    if (!args) {
      return value
    }

    const regex = new RegExp(args, 'gi');
    const match = value.match(regex);

    if (!match) {
      return value;
    }

    return value.replace(regex, `<mark class="highlight">${match[0]}</mark>`);
  }
}
