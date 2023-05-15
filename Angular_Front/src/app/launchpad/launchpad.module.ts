import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchpadComponent } from './launchpad.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'launchpad', component: LaunchpadComponent
  }
];

@NgModule({
  declarations: [
    LaunchpadComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class LaunchpadModule { }
