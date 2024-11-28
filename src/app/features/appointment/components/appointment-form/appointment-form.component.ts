import { Component, EventEmitter, Injector, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentDto } from '../../models/appointment.dto';
import { IndexedDbService } from '../../../../core/services/indexed-db.service';
import { AppComponentBase } from '../../../../core/abstracts/app-component-base';
import { GlobalVariables } from '../../../../core/constants/global-variable';
import { min } from 'rxjs';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent extends AppComponentBase {

  minDate: Date;

  appointmentForm!: FormGroup;
  @Output() submitEmitter = new EventEmitter<boolean>();

  constructor(
    injector: Injector,
    private fb: FormBuilder,
    private indexedDbService: IndexedDbService) {
    super(injector);

    this.minDate = new Date();
  }

  ngOnInit() {
    this.appointmentForm = this.fb.group({
      title: [null, Validators.required],
      date: [null, Validators.required],
      time: [null, Validators.required],
      durationHours: [null, [Validators.required, Validators.min(0), Validators.max(12)]],
      notes: [null]
    });
  }

  async onSubmit() {
    if (this.appointmentForm.valid) {
      const appointment: AppointmentDto = this.appointmentForm.value;
      appointment.start = Number.parseInt(appointment.time.split(':')[0]);
      appointment.end = appointment.start + appointment.durationHours;
      
      await this.indexedDbService.addAppointment(appointment).then(x => {
        let snackBarRef = this.snackBar.open(GlobalVariables.appointment_create);
        this.appointmentForm.reset();
        this.indexedDbService.getAppointments();
        this.submitEmitter.emit(true);
      });
    }
  }
}
