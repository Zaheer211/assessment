import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItemModel } from 'nextsapien-component-lib';

@Component({
  selector: 'app-notifications-settings',
  templateUrl: './notifications-settings.component.html',
  styleUrl: './notifications-settings.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsSettingsComponent {


  public listItems: ListItemModel[] = [
    {
      label: "In-app notifications",
      value: "inApp",
      actionName: "Toggle",
      command: this.inAppNotificationsToggle.bind(this),
    },
    {
      label: "Push notifications",
      value: "push",
      actionName: "Toggle",
      command: this.pushNotificationsToggle.bind(this),
    },
    {
      label: "Email notifications",
      value: "email",
      actionName: "Toggle",
      command: this.emailNotificationsToggle.bind(this),
    }
  ]

  private inAppNotificationsToggle() {
    console.log("inAppNotificationsToggle");
  }

  private pushNotificationsToggle() {
    console.log("pushNotificationsToggle");
  }

  private emailNotificationsToggle() {
    console.log("emailNotificationsToggle");
  }

}
