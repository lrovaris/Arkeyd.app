import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange.component';
import { RouterModule, Routes } from '@angular/router';
import { SwapComponent } from './swap/swap.component';
import { LimitOrderComponent } from './limit-order/limit-order.component';

const routes: Routes = [
  {
    path: '', component: ExchangeComponent
  },
  {
    path: 'swap', component: ExchangeComponent
  },
  {
    path: 'limit-order', component: ExchangeComponent
  },
  { path: 'exchange',   redirectTo: '/exchange/swap', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    ExchangeComponent,
    SwapComponent,
    LimitOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExchangeModule { }
