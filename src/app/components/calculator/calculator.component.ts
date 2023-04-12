import { Component, OnInit } from '@angular/core'
import { Coin } from 'src/app/models/coin.model'
import { Result } from 'src/app/models/result.model'
import { CalculatorService } from 'src/app/services/calculator.service'
import { Conversor } from 'src/app/utils/conversor'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  coins!: Coin[]
  result!: Result

  constructor(
    private service: CalculatorService,
    private conversor: Conversor
  ) {}

  ngOnInit(): void {
    this.coins = this.service.getDefaultCoins()
    this.result = this.service.getDefaultResult()
  }

  public calculate(): void {
    let total = 0
    let amount = 0

    this.coins.forEach((coin) => {
      coin.total = this.conversor.toCash(
        coin.amount * this.conversor.toNumber(coin.value)
      )

      total += this.conversor.toNumber(coin.total)

      amount += coin.amount
    })

    this.result.total = this.conversor.toCash(total)
    this.result.amount = amount
  }
}
