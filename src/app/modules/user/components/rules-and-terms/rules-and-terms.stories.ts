
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
import { RulesAndTermsComponent } from './rules-and-terms.component';

const meta: Meta<RulesAndTermsComponent> = {
    title: 'Rules and terms',
    component: RulesAndTermsComponent,
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
            declarations: [RulesAndTermsComponent],
            imports: [
                CommonModule,
                NextsapienComponentLibModule,
                ListModule,
                ButtonsModule,
            ],
            providers: [TranslateService, provideIonicAngular()],
        }),
    ],
    render: (args: RulesAndTermsComponent) => ({
        props: {
            ...args,
        },
        template: `<app-rules-and-terms></app-rules-and-terms>`,
    }),
};

export default meta;
type Story = StoryObj<RulesAndTermsComponent>;

export const Default: Story = {};
