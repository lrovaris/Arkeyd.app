import { Component, signal } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

  balance = signal(this.userService.user().balance)
  selectedCoin = signal('ETH')
  availableValue = signal(this.userService.user().balance.find(balance => balance.symbol == this.selectedCoin())?.value )

  constructor(private userService : UserService) {

  }

}
