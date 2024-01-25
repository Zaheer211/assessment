import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css', '../common.styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MembershipComponent {

}
