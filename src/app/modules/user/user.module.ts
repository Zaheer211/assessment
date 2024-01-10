import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './user.routes';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './services/account.service';
import { ButtonsModule, InputFieldModule, ListModule, NextsapienComponentLibModule, PopupModalService, SectionSeparatorModule } from 'nextsapien-component-lib';
import { AccountComponent } from './components/account/account.component';
import { MembershipComponent } from './components/membership/membership.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { PayoutComponent } from './components/payout/payout.component';
import { MatIconModule } from '@angular/material/icon';
import { LibModalModule } from 'nextsapien-component-lib';
import { EditBasicInfoComponent } from './components/edit-basic-info/edit-basic-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationsSettingsComponent } from './components/notifications-settings/notifications-settings.component';
import { RulesAndTermsComponent } from './components/rules-and-terms/rules-and-terms.component';


@NgModule({
  declarations: [
    AccountComponent,
    MembershipComponent,
    BasicInfoComponent,
    GeneralSettingsComponent,
    PayoutComponent,
    EditBasicInfoComponent,
    NotificationsSettingsComponent,
    RulesAndTermsComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NextsapienComponentLibModule,
    ButtonsModule,
    ListModule,
    SectionSeparatorModule,
    LibModalModule,
    InputFieldModule,
    RouterModule.forChild(routes)
  ],
  providers: [AccountService],
})
export class UserModule { }
