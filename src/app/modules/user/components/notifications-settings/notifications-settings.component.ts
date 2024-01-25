import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItemModel } from 'nextsapien-component-lib';
import getNotificationsListItems from './notificationsListItems';

@Component({
  selector: 'app-notifications-settings',
  templateUrl: './notifications-settings.component.html',
  styleUrls: ['./notifications-settings.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsSettingsComponent {


  public listItems!: ListItemModel[]

  constructor(
  ) {
    this.setNotificationsListItems()
  }

  private setNotificationsListItems() {
    this.listItems = getNotificationsListItems(
      this.inAppNotificationsToggle.bind(this),
      this.pushNotificationsToggle.bind(this),
      this.emailNotificationsToggle.bind(this)
    )
  }

  private inAppNotificationsToggle() {
    // TODO: Implement in-app notifications toggle
  }

  private pushNotificationsToggle() {
    // TODO: Implement push notifications toggle
  }

  private emailNotificationsToggle() {
    // TODO: Implement email notifications toggle
  }

}
