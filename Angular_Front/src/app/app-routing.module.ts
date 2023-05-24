import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
    path: 'exchange',
    loadChildren: () => import('./exchange/exchange.module').then(m => m.ExchangeModule),
  },
  {
    path: '', component: HomeComponent
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
