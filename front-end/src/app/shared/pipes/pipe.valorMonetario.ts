import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'valorMonetario' })

export class ValorMonetarioPipes implements PipeTransform {

  transform(value: string): string {
    let result = value.toString().replace(',', ' ').replace('.', ',');
    return result;
  }

}