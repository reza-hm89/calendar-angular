import { Component } from '@angular/core';
import { IndexedDbService } from './core/services/indexed-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calendar-app';

  constructor(private indexedDbService: IndexedDbService) {

    //for (var i = 0; i < 10; i += 2) {
    //  this.indexedDbService.addAppointment({
    //    id: i, date: new Date(), active: true, title: 'Meeting ' + (i + 1), start: (i + 9), end: (i + 10), time: (i + 9) + ':00', durationHours: 1
    //  })
    //}
  }
}
