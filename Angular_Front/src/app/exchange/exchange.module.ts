import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExchangeComponent } from './exchange.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'exchange', component: ExchangeComponent
  }
];

@NgModule({
  declarations: [
    ExchangeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ExchangeModule { }
