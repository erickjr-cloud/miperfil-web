import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primeraMayuscula',
  standalone: true
})
export class PrimeraMayusculaPipe implements PipeTransform {
  transform(valor: string | null | undefined): string {
    if (!valor) return '';
    valor = valor.trim();
    return valor.charAt(0).toUpperCase() + valor.slice(1).toLowerCase();
  }
}
