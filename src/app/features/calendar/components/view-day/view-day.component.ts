import { CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnChanges, OnInit } from '@angular/core';
import { AppointmentDto } from '../../../appointment/models/appointment.dto';
import { CalendarService } from '../../calendar.service';
import { IndexedDbService } from '../../../../core/services/indexed-db.service';



@Component({
  selector: 'app-view-day',
  templateUrl: './view-day.component.html',
  styleUrl: './view-day.component.scss'
})
export class ViewDayComponent implements OnChanges, OnInit {
  hours: number[] = Array.from({ length: 24 }, (_, index) => index + 1);

  events24: AppointmentDto[] = [];
  appointments: AppointmentDto[] = [];

  show = false;

  date: any;

  constructor(
    private service: CalendarService,
    private indexedDbService: IndexedDbService) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
    this.service.selectedDate2.subscribe(
      res => {
        this.date = res;
        this.events24 = [];
        this.hours.forEach(x => {
          this.events24.push({ id: 0, date: this.date, active: false, title: '', start: x, end: x + 1, time: '', durationHours: x + 1 },)
        })

        this.loadAppointments().then(appointment => {
          this.appointments.forEach(x => {

            let i = this.events24.findIndex(a => this.compareOnlyDates(a.date, x.date) === 0 && a.start === x.start);
            if (i >= 0) {
              this.events24[i] = x;
              this.events24[i].active = true;
            }

          })

          this.show = true;
        });

      });


  }

  async drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.events24, event.previousIndex, event.currentIndex);
    
    let updatedRecord = this.events24[event.currentIndex];
    if (updatedRecord.active) {
      updatedRecord.start = event.currentIndex;
      updatedRecord.end = updatedRecord.start + updatedRecord.durationHours;
      await this.indexedDbService.updateAppointment(updatedRecord);
    }
   
  }

  async loadAppointments() {
    this.appointments = await this.indexedDbService.getAppointments();
  }

  compareOnlyDates(dateA: Date, dateB: Date): number {
    const dateAOnly = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
    const dateBOnly = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
    return dateAOnly.getTime() - dateBOnly.getTime();
  }
}
