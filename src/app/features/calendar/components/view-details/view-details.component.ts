import { Component, Input } from '@angular/core';
import { AppointmentDto } from '../../../appointment/models/appointment.dto';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrl: './view-details.component.scss'
})
export class ViewDetailsComponent {
  @Input() model!: AppointmentDto | null;
}
