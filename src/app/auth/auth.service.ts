import { Injectable } from '@angular/core';
import {LayoutService} from "../shared-module/services/layout.service";

@Injectable()
export class AuthService {
  constructor(private layoutService: LayoutService) {
  }
  //fake credentials

  private credentials = {
    login: 'admin',
    password: 'sernik551'
  };

  private isUserLoggedIn = false;

  //fake login

  login(login, password) {
    return new Promise((resolve, reject) => {
      if (login === this.credentials.login && password === this.credentials.password) {
        this.isUserLoggedIn = true;
        this.layoutService.showSidebar();
        resolve();
      } else {
        reject();
      }
    })
  }

  logOut(){
    this.isUserLoggedIn = false;
    this.layoutService.hideSidebar();
  }

  isLoggedIn(){
    return this.isUserLoggedIn;
  }

}
