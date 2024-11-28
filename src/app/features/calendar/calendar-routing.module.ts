import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDayComponent } from './components/view-day/view-day.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'day' },
  { path: 'day', component: ViewDayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
