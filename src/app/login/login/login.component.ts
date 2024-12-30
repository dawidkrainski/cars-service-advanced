import { Component } from '@angular/core';
import {AuthService} from "../../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'cs-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent{
  login = '';
  password = '';

  constructor(private authService: AuthService, private router : Router) { }

  onSubmit(){
    this.authService.login(this.login, this.password)
      .then(this.onSubmitSuccess.bind(this), this.onSubmitFailure);
  }

  private onSubmitSuccess() {
    this.router.navigate(['/cars']);
  }

  private onSubmitFailure() {
    alert('Invalid credentials!');
    console.log('Invalid credentials');
  }
}
