import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrl: './basic-info.component.css'
})
export class BasicInfoComponent {

  public listItems = [
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
      command: this.onListItemClick
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

  onListItemClick(item: any) {
    console.log(item);

  }

}
