
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
import { MembershipComponent } from './membership.component';

const meta: Meta<MembershipComponent> = {
    title: 'Membership',
    component: MembershipComponent,
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
            declarations: [MembershipComponent],
            imports: [
                CommonModule,
                NextsapienComponentLibModule,
                ButtonsModule,
            ],
            providers: [TranslateService, provideIonicAngular()],
        }),
    ],
    render: (args: MembershipComponent) => ({
        props: {
            ...args,
        },
        template: `<app-membership></app-membership>`,
    }),
};

export default meta;
type Story = StoryObj<MembershipComponent>;

export const Default: Story = {};
