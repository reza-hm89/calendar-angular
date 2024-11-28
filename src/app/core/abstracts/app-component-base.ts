import { Location } from "@angular/common";
import { Component, Injector } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";


@Component({
  template: ''
})
export abstract class AppComponentBase {

  loading: boolean = false;
  loaded: boolean = false;
  btnLoading: boolean = false;

  public subscriptions: Subscription[] = [];

  route: ActivatedRoute;
  router: Router;
  location: Location;
  snackBar: MatSnackBar;
  submit: boolean | null = null;
  title: string = '';

  constructor(injector: Injector) {
    this.route = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
    this.location = injector.get(Location);
    this.snackBar = injector.get(MatSnackBar);
  }
}
