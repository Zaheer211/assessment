import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { EditBasicInfoComponent } from '../edit-basic-info/edit-basic-info.component';
import { ListItemModel } from 'nextsapien-component-lib';
import getBasicInfoItems from './basicInfoItems';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicInfoComponent {

  @ViewChild(EditBasicInfoComponent) editBasicInfoComponentRef!: EditBasicInfoComponent;

  public basicInfoItems!: ListItemModel[]

  constructor() {
    this.setBasicInfoItems()
  }

  private setBasicInfoItems() {
    this.basicInfoItems = getBasicInfoItems(this.editEmail.bind(this))
  }

  editEmail() {
    this.editBasicInfoComponentRef.openEmailEditModal$.next(true);
  }

  onSubmitEmail(emailFormData: { email: string, password: string }) {
    // TODO: Handle email update
  }

}
