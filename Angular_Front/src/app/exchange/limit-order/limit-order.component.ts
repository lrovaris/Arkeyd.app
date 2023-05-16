import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-limit-order',
  templateUrl: './limit-order.component.html',
  styleUrls: ['./limit-order.component.scss']
})
export class LimitOrderComponent {

  buySell = signal('sell')

}
