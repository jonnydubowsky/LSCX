import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-market-amounts',
  templateUrl: './market-amounts.component.html',
})
export class MarketAmountsComponent {
  @Input() token: any;
  @Input() walletAmount: number;
  @Input() deltaAmount: number;
  constructor() {
  }
  amount(amount){
    return amount/Math.pow(10,this.token.decimals)
  }
}
