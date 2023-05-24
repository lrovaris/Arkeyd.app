import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AccountComponent } from './account/account.component';
import { WalletModule } from '../wallet/wallet.module';
import { StakingComponent } from './staking/staking.component';

const routes: Routes = [
  {
    path: '', component: AccountComponent
  }
];

@NgModule({
  declarations: [
    SecurityComponent,
    ProfileComponent,
    AccountComponent,
    StakingComponent
  ],
  imports: [
    CommonModule,
    WalletModule,
    RouterModule.forChild(routes),
  ]
})
export class UserModule { }
