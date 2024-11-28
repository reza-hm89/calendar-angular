import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { ViewDayComponent } from './components/view-day/view-day.component';
import { ViewWeekComponent } from './components/view-week/view-week.component';
import { ViewMonthComponent } from './components/view-month/view-month.component';
import { SharedModule } from '../../core/modules/shared.module';


@NgModule({
  declarations: [
    ViewDayComponent,
    ViewWeekComponent,
    ViewMonthComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ]
})
export class CalendarModule { }
