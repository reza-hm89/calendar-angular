import { Component, Injector, OnChanges, OnInit, model } from '@angular/core';
import { AppComponentBase } from '../../../core/abstracts/app-component-base';
import { RouteNames } from '../../../core/constants/routing';
import { CalendarService } from '../../../features/calendar/calendar.service';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent extends AppComponentBase implements OnInit {

  selected: Date= new Date();

  constructor(private inject: Injector,
    private calendarService: CalendarService) {
    super(inject);
  }

  ngOnInit() {
    this.calendarService.selectedDate.next(this.selected);
  }

  onSelectedChange(event: any) {
    this.calendarService.selectedDate.next(this.selected);
    this.router.navigateByUrl(RouteNames.calendar_day);

  }

  onClick() {
    this.router.navigateByUrl(RouteNames.appointment_form)
  }
  onClick2() {
    this.router.navigateByUrl(RouteNames.calendar_day)
  }
}
