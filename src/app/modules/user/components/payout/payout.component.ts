import { ChangeDetectionStrategy, Component } from '@angular/core';
import getPayoutListItems from './payoutItems';

@Component({
  selector: 'app-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PayoutComponent {

  public heading: string = "Payout";
  public payoutItems = getPayoutListItems()

}
