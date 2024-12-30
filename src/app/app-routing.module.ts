import {NgModule} from "@angular/core";
import {RouterModule, Route} from "@angular/router";
import {AuthCanLoadGuard} from "./guards/auth-can-load.guard";

const APP_ROUTES : Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'cars', canLoad: [AuthCanLoadGuard], loadChildren: 'app/cars/cars.module#CarsModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
