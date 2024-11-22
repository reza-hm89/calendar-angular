import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutContainerComponent } from './layout/components/layout-container/layout-container.component';

const routes: Routes = [
  //{ path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '', component: LayoutContainerComponent,
    children: [
      { path: '', loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule) },
      { path: 'appointment', loadChildren: () => import('./features/appointment/appointment.module').then((m) => m.AppointmentModule), }
    ]

  },

  { path: '**', redirectTo: '/' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
