import { Component, signal } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent {

  wallet = signal([
    {
      value:30000000000000000,
      symbol:'USDT'
    },
    {
      value:17600000000000000000,
      symbol:'ARKD'
    },
    {
      value:217400000000000000000,
      symbol:'KOKI'
    },
    {
      value:3512200000000000000000,
      symbol:'BLOB'
    }
  ])


  constructor (public user: UserService) {

  }


  formatbalance(value:number) {
    return (value / (10 ** 18)).toFixed(2)
  }

}
