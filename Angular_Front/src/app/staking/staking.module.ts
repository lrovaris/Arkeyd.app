import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StakingComponent } from './staking.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'staking', component: StakingComponent
  }
];


@NgModule({
  declarations: [
    StakingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StakingModule { }
