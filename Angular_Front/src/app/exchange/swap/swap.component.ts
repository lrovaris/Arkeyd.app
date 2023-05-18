import { Component, signal } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-swap',
  templateUrl: './swap.component.html',
  styleUrls: ['./swap.component.scss']
})
export class SwapComponent {
  balance = signal(this.userService.user().balance)
  selectedCoin = signal('ETH')
  selectedPair = signal('ARKD')
  availableValue = signal(this.userService.user().balance.find(balance => balance.symbol == this.selectedCoin())?.value )
  availableValuePair = signal(this.userService.user().balance.find(balance => balance.symbol == this.selectedPair())?.value )

  constructor(private userService : UserService) {

  }
}
