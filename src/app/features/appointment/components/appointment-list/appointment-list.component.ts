import { Component, EventEmitter, Injector, OnChanges, OnInit, Output } from '@angular/core';
import { AppointmentDto } from '../../models/appointment.dto';
import { FormBuilder } from '@angular/forms';
import { IndexedDbService } from '../../../../core/services/indexed-db.service';
import { AppComponentBase } from '../../../../core/abstracts/app-component-base';
import { ColumnDto } from '../../../../core/models/column-dto';
import { RouteNames } from '../../../../core/constants/routing';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../../../core/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
})
export class AppointmentListComponent extends AppComponentBase implements OnChanges, OnInit {

  appointments: AppointmentDto[] = [];
  editingAppointment: AppointmentDto = { id: 0, title: '', date: new Date(), time: '', start: 0, end: 0, durationHours: 0, active: false };;

  columns: ColumnDto[] = [];
  displayedColumns: string[] = [];

  dataSource: any;

  @Output() newEmitter = new EventEmitter<boolean>();


  constructor(
    private inject: Injector,
    private dialog: MatDialog,
    private indexedDbService: IndexedDbService) {
    super(inject);
  }

  ngOnChanges() {
    this.loadAppointments();
  }

  ngOnInit() {
    let keys = Object.keys(this.editingAppointment);
    keys.forEach(x => {
      this.columns.push({ name: x, title: x.toUpperCase() });
      this.displayedColumns.push(x);
    })

    this.displayedColumns.push('delete');


    this.loadAppointments();
  }

  async loadAppointments() {
    this.appointments = await this.indexedDbService.getAppointments();
    this.dataSource = this.appointments;
    this.loaded = true;
  }


  //editAppointment(appointment: AppointmentDto) {
  //  this.editingAppointment = appointment;
  //}

  async deleteAppointment(id: number) {
    await this.indexedDbService.deleteAppointment(id);
    this.loadAppointments();
  }

  onClick() {
    this.newEmitter.emit(true);
  }

  openConfirmDialog(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: {
        title: 'Confirm Action',
        message: 'Are you sure you want to proceed?'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAppointment(id);
      } else {
      }
    });
  }
}
