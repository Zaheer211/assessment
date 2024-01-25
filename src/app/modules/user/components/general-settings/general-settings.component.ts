import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListItemModel } from 'nextsapien-component-lib';
import { getOtherListItems, getSecurityAndPrivacyListItems, getTestingListItems } from './listItems';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralSettingsComponent {

  public otherListItems!: ListItemModel[]
  public securityAndPrivacyListItems!: ListItemModel[]
  public testingListItems!: ListItemModel[]

  constructor(
    private router: Router
  ) {
    this.setListItems()
  }

  private setListItems() {
    this.otherListItems = getOtherListItems(this.editLanguage.bind(this), this.openRulesAndTerms.bind(this))
    this.securityAndPrivacyListItems = getSecurityAndPrivacyListItems()
    this.testingListItems = getTestingListItems(this.testingParticipationToggle.bind(this))
  }

  private editLanguage() {
    // TODO: Implement language change
  }

  private openRulesAndTerms() {
    this.router.navigate(['/rules-and-terms']);
  }

  private testingParticipationToggle() {
    // TODO: Implement testing participation toggle
  }

}
