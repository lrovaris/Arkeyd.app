import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  wallet = signal([
    {
      value:0.03,
      symbol:'ETH'
    },
    {
      value:17.6,
      symbol:'ARKD'
    },
    {
      value:217.4,
      symbol:'KOKI'
    },
    {
      value:3512.2,
      symbol:'BLOB'
    }
  ])

}
