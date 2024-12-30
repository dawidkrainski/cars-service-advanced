import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {CarsModule, CarsListComponent, CarsRoutingModule, CarsService} from "./cars";


import { AppComponent } from './app.component';


import {CoreModule} from "./core-module/core.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {LoginRoutingModule} from "./login/login/login-routing.module";
import {LoginModule} from "./login/login.module";
import {AuthService} from "./auth/auth.service";
import {AuthGuard} from "./guards/auth.guard";
import {LayoutService} from "./shared-module/services/layout.service";
import {AuthCanLoadGuard} from "./guards/auth-can-load.guard";
import {FormCanDeactivateGuard} from "./guards/form-can-deactivate.guard";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModule,
    CoreModule,
    AppRoutingModule,

  ],
  providers: [CarsService, AuthService, AuthGuard, LayoutService, AuthCanLoadGuard, FormCanDeactivateGuard],
  bootstrap: [AppComponent]
})

export class AppModule {}

