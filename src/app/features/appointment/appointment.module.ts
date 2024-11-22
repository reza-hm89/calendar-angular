import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

import { AppointmentRoutingModule } from './appointment-routing.module';

import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { AppointmentContainerComponent } from './components/appointment-container/appointment-container.component';


@NgModule({
  declarations: [
    AppointmentFormComponent,
    AppointmentListComponent,
    AppointmentContainerComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule

  ]
})
export class AppointmentModule { }
