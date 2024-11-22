import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentDto } from '../../models/appointment.dto';
import { IndexedDbService } from '../../../../core/services/indexed-db.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {

  appointmentForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private indexedDbService: IndexedDbService) { }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      durationHours: [0, [Validators.required, Validators.min(0), Validators.max(12)]],
      durationMinutes: [0, [Validators.required, Validators.min(0), Validators.max(59)]],
      notes: ['']
    });
  }

  async onSubmit() {
    if (this.appointmentForm.valid) {
      const appointment: AppointmentDto = this.appointmentForm.value;
      await this.indexedDbService.addAppointment(appointment);
    }
  }
}
