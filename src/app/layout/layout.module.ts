import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';

import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule
  ],
  exports: [LayoutContainerComponent]
})
export class LayoutModule { }
