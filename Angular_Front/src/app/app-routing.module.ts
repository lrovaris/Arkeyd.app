import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'wallet',
    loadChildren: () => import('./wallet/wallet.module').then(m => m.WalletModule),
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
  },
  {
    path: 'exchnge',
    loadChildren: () => import('./exchange/exchange.module').then(m => m.ExchangeModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'staking',
    loadChildren: () => import('./staking/staking.module').then(m => m.StakingModule),
  },
  {
    path: 'launchpad',
    loadChildren: () => import('./launchpad/launchpad.module').then(m => m.LaunchpadModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
