import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../core/modules/shared.module';

import { AppointmentRoutingModule } from './appointment-routing.module';

import { AppointmentContainerComponent } from './components/appointment-container/appointment-container.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';


@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentListComponent,
    AppointmentContainerComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    SharedModule,
  ]
})
export class AppointmentModule { }
