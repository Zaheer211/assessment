import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './user.routes';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ButtonsModule, ListModule, NextsapienComponentLibModule, SectionSeparatorModule } from 'nextsapien-component-lib';
import { AccountComponent } from './components/account/account.component';
import { MembershipComponent } from './components/membership/membership.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { PayoutComponent } from './components/payout/payout.component';
import { MatIconModule } from '@angular/material/icon';
import { LibModalModule } from 'nextsapien-component-lib';
import { BottomModalComponent } from './components/bottom-modal/bottom-modal.component';

@NgModule({
  declarations: [
    AccountComponent,
    MembershipComponent,
    BasicInfoComponent,
    GeneralSettingsComponent,
    PayoutComponent,
    BottomModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    NextsapienComponentLibModule,
    ButtonsModule,
    ListModule,
    SectionSeparatorModule,
    LibModalModule,
    RouterModule.forChild(routes)
  ],
  providers: [AccountService],
})
export class UserModule { }
