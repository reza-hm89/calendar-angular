import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutContainerComponent } from './components/layout-container/layout-container.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../core/modules/shared.module';


@NgModule({
  declarations: [
    LayoutContainerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [LayoutContainerComponent]
})
export class LayoutModule { }
