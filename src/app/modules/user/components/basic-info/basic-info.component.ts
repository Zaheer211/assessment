import { Component, ViewChild } from '@angular/core';
import { EditBasicInfoComponent } from '../edit-basic-info/edit-basic-info.component';
import { ListItemModel } from 'nextsapien-component-lib';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {

  @ViewChild(EditBasicInfoComponent) editBasicInfoComponentRef!: EditBasicInfoComponent;

  public basicInfoItems: ListItemModel[] = [
    {
      label: "+1234567890",
      value: "1234567890",
      labelIconName: "phone",
    },
    {
      label: "someone@mail.omc",
      value: "1234567890",
      labelIconName: "email",
      actionName: "Edit",
      command: this.editEmail.bind(this)
    },
    {
      label: "Username",
      value: "1234567890",
      labelIconName: "name",
      actionName: "Edit",
    },
    {
      label: "Name",
      value: "1234567890",
      labelIconName: "contact",
      actionName: "Edit"
    },
    {
      label: "Password",
      value: "1234567890",
      labelIconName: "lock",
      actionName: "Edit"
    }
  ]

  editEmail(item: any) {
    this.editBasicInfoComponentRef.openEmailEditModal$.next(true);
  }

  onSubmitEmail(emailFormData: { email: string, password: string }) {
    console.log(emailFormData);
  }

}
