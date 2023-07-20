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
  readonly hotWheels: string =
    'https://github-production-user-asset-6210df.s3.amazonaws.com/81927187/254980991-3fbfcbad-2383-44a9-94de-683235f0e37a.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230720%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230720T185113Z&X-Amz-Expires=300&X-Amz-Signature=9e3c327bb3e1a2cb06ddfe01ff9052f4fc42bb6be11ebb4198b894c53ba3d6ce&X-Amz-SignedHeaders=host&actor_id=81927187&key_id=0&repo_id=514049316'

  constructor(private service: CalculatorService) {}

  ngOnInit(): void {
    this.coins = this.service.getDefaultCoins()
    this.result = this.service.getDefaultResult()
  }

  public calculate(): void {
    this.service.setResult(this.coins, this.result)
  }

  public clean(): void {
    this.service.clean(this.coins, this.result)
  }

  public swapVert(): void {
    this.coins = this.coins.reverse()
  }
}
