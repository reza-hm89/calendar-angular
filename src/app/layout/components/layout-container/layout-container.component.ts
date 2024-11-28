import { Component, Injector, OnChanges, model } from '@angular/core';
import { AppComponentBase } from '../../../core/abstracts/app-component-base';
import { RouteNames } from '../../../core/constants/routing';
import { CalendarService } from '../../../features/calendar/calendar.service';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent extends AppComponentBase {

  selected!: Date;

  constructor(private inject: Injector,
    private calendarService: CalendarService) {
    super(inject);
  }

  onSelectedChange(event: any) {
    this.calendarService.selectedDate.set(this.selected);
    this.calendarService.selectedDate2.next(this.selected);
  }

  onClick() {
    this.router.navigateByUrl(RouteNames.appointment_form)
  }
  onClick2() {
    this.router.navigateByUrl(RouteNames.calendar_day)
  }
}
