import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'budgetCurrency',
  standalone: true,
})
export class BudgetCurrencyPipe implements PipeTransform {
  transform(value: string): string {
    return '$' + value + ' million';
  }
}
