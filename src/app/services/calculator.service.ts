import { Injectable } from '@angular/core'
import { Coin } from '../models/coin.model'
import { Result } from '../models/result.model'
import { Conversor } from '../utils/conversor'

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  constructor(private conversor: Conversor) {}

  public getDefaultCoins(): Coin[] {
    return [
      { name: 'hundredThousand', value: '$ 100.000', amount: 0, total: '$ 0' },
      { name: 'fiftyThousand', value: '$ 50.000', amount: 0, total: '$ 0' },
      { name: 'twentyThousand', value: '$ 20.000', amount: 0, total: '$ 0' },
      { name: 'tenThousand', value: '$ 10.000', amount: 0, total: '$ 0' },
      { name: 'fiveThousand', value: '$ 5.000', amount: 0, total: '$ 0' },
      { name: 'twoThousand', value: '$ 2.000', amount: 0, total: '$ 0' },
      { name: 'oneThousand', value: '$ 1.000', amount: 0, total: '$ 0' },
      { name: 'fiveHundred', value: '$ 500', amount: 0, total: '$ 0' },
      { name: 'twoHundred', value: '$ 200', amount: 0, total: '$ 0' },
      { name: 'oneHundred', value: '$ 100', amount: 0, total: '$ 0' },
      { name: 'fifty', value: '$ 50', amount: 0, total: '$ 0' },
    ]
  }

  public getDefaultResult(): Result {
    return { amount: 0, total: '$ 0' }
  }

  public setResult(coins: Coin[], result: Result): void {
    let total = 0
    let amount = 0

    coins.forEach((coin) => {
      coin.total = this.conversor.toCash(
        coin.amount * this.conversor.toNumber(coin.value)
      )

      total += this.conversor.toNumber(coin.total)
      amount += coin.amount
    })

    result.total = this.conversor.toCash(total)
    result.amount = amount
  }
}
