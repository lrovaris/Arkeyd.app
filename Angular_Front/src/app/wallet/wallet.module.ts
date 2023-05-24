import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { RouterModule, Routes } from '@angular/router';
import { DepoistComponent } from './depoist/depoist.component';
import { WithdrawComponent } from './withdraw/withdraw.component';

const routes: Routes = [
  {path: 'balance', component: WalletComponent},
  {path: 'deposit', component: DepoistComponent},
  {path: 'withdraw', component: WithdrawComponent},
];

@NgModule({
  declarations: [
    WalletComponent,
    DepoistComponent,
    WithdrawComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    WalletComponent
  ]
})
export class WalletModule { }
