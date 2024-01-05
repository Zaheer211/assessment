import { Component } from '@angular/core';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrl: './payout.component.css'
})
export class PayoutComponent {

  public listItems = [
    {
      label: "Manage Payment Information",
      value: "1234567890",
    },
    {
      label: "Add Backup Payment Method",
      value: "1234567890",
    },
    {
      label: "Payout Information",
      value: "1234567890",
    },
    {
      label: "Change Payout Day",
      value: "1234567890",
    },
    {
      label: "Redeem Gift Card or Promo Code",
      value: "1234567890",
    },
    {
      label: "Where to Buy Gift Cards",
      value: "1234567890",
    }
  ]

}
