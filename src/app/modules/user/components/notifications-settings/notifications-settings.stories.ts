
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
import { NotificationsSettingsComponent } from './notifications-settings.component';

const meta: Meta<NotificationsSettingsComponent> = {
    title: 'Notifications Settings',
    component: NotificationsSettingsComponent,
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
            declarations: [NotificationsSettingsComponent],
            imports: [
                CommonModule,
                NextsapienComponentLibModule,
                ListModule,
            ],
            providers: [TranslateService, provideIonicAngular()],
        }),
    ],
    render: (args: NotificationsSettingsComponent) => ({
        props: {
            ...args,
        },
        template: `<app-notifications-settings></app-notifications-settings>`,
    }),
};

export default meta;
type Story = StoryObj<NotificationsSettingsComponent>;

export const Default: Story = {};
