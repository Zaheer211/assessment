
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { ButtonsModule, ListModule, NextsapienComponentLibModule, SectionSeparatorModule } from 'nextsapien-component-lib';
import { GeneralSettingsComponent } from './general-settings.component';
import { IonicModule } from '@ionic/angular';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from '../../user.routes';

const meta: Meta<GeneralSettingsComponent> = {
    title: 'General Settings',
    component: GeneralSettingsComponent,
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
            declarations: [GeneralSettingsComponent],
            imports: [
                CommonModule,
                NextsapienComponentLibModule,
                ListModule,
                ButtonsModule,
                SectionSeparatorModule
            ],
            providers: [TranslateService, provideIonicAngular()],
        }),
    ],
    render: (args: GeneralSettingsComponent) => ({
        props: {
            ...args,
        },
        template: `<app-general-settings></app-general-settings>`,
    }),
};

export default meta;
type Story = StoryObj<GeneralSettingsComponent>;

export const Default: Story = {};
