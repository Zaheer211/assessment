import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItemModel } from 'nextsapien-component-lib';

@Component({
  selector: 'app-rules-and-terms',
  templateUrl: './rules-and-terms.component.html',
  styleUrl: './rules-and-terms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RulesAndTermsComponent {

  public pageTitle = "Rules & Terms";

  public listItems: ListItemModel[] = [
    {
      label: "Terms & Conditions",
    },
    {
      label: "Privacy Policy",
    },
    {
      label: "App Version",
    }
  ]

}
