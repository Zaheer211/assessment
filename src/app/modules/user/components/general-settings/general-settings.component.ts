import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListItemModel } from 'nextsapien-component-lib';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.css'
})
export class GeneralSettingsComponent {

  public otherListItems: ListItemModel[] = [
    {
      label: "Language",
      value: "lang",
      actionName: "Edit",
      command: this.editLanguage.bind(this),
    },
    {
      label: "Rules & Terms",
      value: "rulesAndTerms",
      command: this.openRulesAndTerms.bind(this),
    },
    {
      label: "FAQs",
      value: "faqs"
    }
  ]

  public securityAndPrivacyListItems: ListItemModel[] = [
    {
      label: "Manage Access and Devices",
      value: "manageAccessAndDevices",
      actionName: "Edit",
    },
    {
      label: "Sign Out of All Devices",
      value: "signOutAllDevices",
      actionName: "Edit",
    }
  ]

  public testingListItems: ListItemModel[] = [
    {
      label: "Testing Participation",
      value: "testingParticipation",
      actionName: "Toggle",
      command: this.testingParticipationToggle.bind(this),
    }
  ]

  constructor(
    private router: Router
  ) {

  }

  private editLanguage() {
    console.log("editLanguage");
  }

  private openRulesAndTerms() {
    this.router.navigate(['/rules-and-terms']);
  }

  private testingParticipationToggle() {
    console.log("testingParticipationToggle");
  }

}
