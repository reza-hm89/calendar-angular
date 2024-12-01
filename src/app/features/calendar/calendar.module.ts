import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { ViewDayComponent } from './components/view-day/view-day.component';
import { SharedModule } from '../../core/modules/shared.module';
import { ViewDetailsComponent } from './components/view-details/view-details.component';


@NgModule({
  declarations: [
    ViewDayComponent,
    ViewDetailsComponent,
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    SharedModule
  ]
})
export class CalendarModule { }
