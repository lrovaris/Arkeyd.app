import { Component, signal } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-limit-order',
  templateUrl: './limit-order.component.html',
  styleUrls: ['./limit-order.component.scss']
})
export class LimitOrderComponent {


  buySell = signal('sell')
  balance = signal(this.userService.user().balance)
  selectedCoin = signal('ETH')
  selectedPair = signal('ARKD')
  availableValue = signal(this.userService.user().balance.find(balance => balance.symbol == this.selectedCoin())?.value )

  constructor(private userService : UserService) {

  }

}
