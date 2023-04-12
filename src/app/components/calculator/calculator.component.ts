import { Component, OnInit } from '@angular/core'
import { Coin } from 'src/app/models/coin.model'
import { CalculatorService } from 'src/app/services/calculator.service'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  coins!: Coin[]

  constructor(private service: CalculatorService) {}

  ngOnInit(): void {
    this.coins = this.service.getAll()
  }
}
