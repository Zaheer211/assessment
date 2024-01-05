import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './user.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ButtonsModule, ListModule, NextsapienComponentLibModule } from 'nextsapien-component-lib';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NextsapienComponentLibModule,
    ButtonsModule,
    ListModule,
    RouterModule.forChild(routes)
  ],
  providers: [AccountService],
})
export class UserModule { }
