import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabGroup, MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

import { DragDropModule } from '@angular/cdk/drag-drop';

const COMMON_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
]

const CDK_MODULES = [
  DragDropModule
]

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatDatepickerModule,
  MatCardModule,
  MatTabsModule,
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatTabGroup,
  MatSnackBarModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
]

@NgModule({
  declarations: [],
  imports: [
    COMMON_MODULES,
    CDK_MODULES,
    MATERIAL_MODULES
  ],
  exports: [
    COMMON_MODULES,
    CDK_MODULES,
    MATERIAL_MODULES
  ]
})
export class SharedModule { }
