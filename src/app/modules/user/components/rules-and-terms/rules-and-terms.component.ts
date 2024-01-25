import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItemModel } from 'nextsapien-component-lib';
import getRulesAndTermsListItems from './rulesAndTermsListItems';

@Component({
  selector: 'app-rules-and-terms',
  templateUrl: './rules-and-terms.component.html',
  styleUrls: ['./rules-and-terms.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesAndTermsComponent {

  public pageTitle = "Rules & Terms";
  public listItems: ListItemModel[] = getRulesAndTermsListItems()

}
