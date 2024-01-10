import { Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { RulesAndTermsComponent } from './components/rules-and-terms/rules-and-terms.component';

export const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
    },
    {
        path: 'rules-and-terms',
        component: RulesAndTermsComponent,
    }
];
