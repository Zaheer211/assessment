
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig, moduleMetadata } from '@storybook/angular';
import { BasicInfoComponent } from './basic-info.component';
import { ButtonsModule, InputFieldModule, LibModalModule, ListModule, NextsapienComponentLibModule } from 'nextsapien-component-lib';
import { EditBasicInfoComponent } from '../edit-basic-info/edit-basic-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { importProvidersFrom } from '@angular/core';

const meta: Meta<BasicInfoComponent> = {
    title: 'Basic Info',
    component: BasicInfoComponent,
    excludeStories: /.*Data$/,
    tags: ['autodocs'],
    decorators: [
        applicationConfig({
            providers: [importProvidersFrom(BrowserAnimationsModule),
            importProvidersFrom(TranslateModule.forRoot()),
            importProvidersFrom(IonicModule.forRoot()),
                TranslateService, provideIonicAngular()],
        }),
        moduleMetadata({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                NextsapienComponentLibModule,
                ListModule,
                ButtonsModule,
                LibModalModule,
                MatIconModule,
                InputFieldModule,
            ],
            declarations: [EditBasicInfoComponent],
        }),
    ],
    render: (args: BasicInfoComponent) => ({
        applicationConfig: {
            providers: [importProvidersFrom(BrowserAnimationsModule)],
        },
        template: `<app-basic-info></app-basic-info>`,
    }),
};

export default meta;
type Story = StoryObj<BasicInfoComponent>;

export const Default: Story = {};
