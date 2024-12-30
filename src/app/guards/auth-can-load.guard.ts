import { Injectable } from '@angular/core';
import {CanLoad, Route} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthCanLoadGuard implements CanLoad {

  constructor(private authService: AuthService,private router: Router) {
  }

  canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {

    if(this.authService.isLoggedIn()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
