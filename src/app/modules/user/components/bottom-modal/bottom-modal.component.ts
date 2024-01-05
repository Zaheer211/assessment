import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bottom-modal',
  templateUrl: './bottom-modal.component.html',
  styleUrl: './bottom-modal.component.css'
})
export class BottomModalComponent {

  @Input() isOpenContent = false;

}
