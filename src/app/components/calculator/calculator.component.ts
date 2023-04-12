import { Component, OnInit } from '@angular/core'
import { Coin } from 'src/app/models/coin.model'
import { Result } from 'src/app/models/result.model'
import { CalculatorService } from 'src/app/services/calculator.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  coins!: Coin[]
  result!: Result

  constructor(private service: CalculatorService) {}

  ngOnInit(): void {
    this.coins = this.service.getDefaultCoins()
    this.result = this.service.getDefaultResult()
  }

  public calculate(): void {
    this.service.setResult(this.coins, this.result)
  }
}
