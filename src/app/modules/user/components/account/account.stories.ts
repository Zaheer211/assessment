
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { ButtonsModule, ListModule, NextsapienComponentLibModule, SectionSeparatorModule } from 'nextsapien-component-lib';
import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../user.routes';
import { AccountComponent } from './account.component';
import { BasicInfoComponent } from '../basic-info/basic-info.component';
import { GeneralSettingsComponent } from '../general-settings/general-settings.component';
import { MembershipComponent } from '../membership/membership.component';
import { NotificationsSettingsComponent } from '../notifications-settings/notifications-settings.component';
import { PayoutComponent } from '../payout/payout.component';
import { AccountService } from '../../services/account.service';

const meta: Meta<AccountComponent> = {
    title: 'Account',
    component: AccountComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(BrowserAnimationsModule),
            importProvidersFrom(TranslateModule.forRoot()),
            importProvidersFrom(IonicModule.forRoot()),
            importProvidersFrom(RouterModule.forRoot(routes)),
                TranslateService, provideIonicAngular()],
        }),
        moduleMetadata({
            declarations: [
                // AccountComponent,
                BasicInfoComponent,
                GeneralSettingsComponent,
                MembershipComponent,
                NotificationsSettingsComponent,
                PayoutComponent
            ],
            imports: [
                CommonModule,
                NextsapienComponentLibModule,
                ListModule,
                ButtonsModule,
                SectionSeparatorModule,
            ],
            providers: [TranslateService, AccountService, provideIonicAngular()],
        }),
    ],
    render: (args: AccountComponent) => ({
        props: {
            ...args,
        },
        template: `<app-account></app-account>`,
    }),
};

export default meta;
type Story = StoryObj<AccountComponent>;

export const Default: Story = {};
