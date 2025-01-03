import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-container',
  templateUrl: './appointment-container.component.html',
  styleUrl: './appointment-container.component.scss'
})
export class AppointmentContainerComponent {

  selectedIndex: number = 0;

  //changeTab(index: number) {
  //  this.selectedIndex = index;
  //}

  onNew(event: boolean) {
    if (event) {
      this.selectedIndex = 1;
    }
  }

  onSubmit(event: boolean) {
    if (event) {
      this.selectedIndex = 0;
    }
  }
}
