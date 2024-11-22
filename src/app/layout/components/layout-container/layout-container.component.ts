import { Component, Injector } from '@angular/core';
import { AppComponentBase } from '../../../core/abstracts/app-component-base';
import { RouteNames } from '../../../core/constants/routing';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrl: './layout-container.component.scss'
})
export class LayoutContainerComponent extends AppComponentBase {

  selected: any;

  constructor(private inject: Injector) {
    super(inject);
  }

  onClick() {
    this.router.navigateByUrl(RouteNames.appointment_form)
  }
}
