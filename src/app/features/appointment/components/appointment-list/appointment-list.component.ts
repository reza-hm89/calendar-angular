import { Component } from '@angular/core';
import { AppointmentDto } from '../../models/appointment.dto';
import { FormBuilder } from '@angular/forms';
import { IndexedDbService } from '../../../../core/services/indexed-db.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss'
})
export class AppointmentListComponent {

  appointments: AppointmentDto[] = [];
  editingAppointment: AppointmentDto | null = null;

  constructor(private indexedDbService: IndexedDbService) {
  }

  ngOnInit() {
    this.loadAppointments();
  }

  async loadAppointments() {
    this.appointments = await this.indexedDbService.getAppointments();
  }


  editAppointment(appointment: AppointmentDto) {
    this.editingAppointment = appointment;
    //this.appointmentForm.patchValue(appointment); // Fill the form with the selected appointment data
  }

  async deleteAppointment(id: number) {
    await this.indexedDbService.deleteAppointment(id);
    this.loadAppointments(); // Refresh the list after deletion
  }
}
