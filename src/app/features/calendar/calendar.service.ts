import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {


  selectedDate = signal(new Date());
  selectedDate2 = new BehaviorSubject<Date | null>(null);

  constructor() { }
}
