import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityComponent } from './security/security.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'security', component: SecurityComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
];

@NgModule({
  declarations: [
    SecurityComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
