import { Component } from '@angular/core';
import { LoginBoxComponent } from '../../components/login-box-component/login-box-component';
import { LogoComponent } from '../../components/logo-component/logo-component';

@Component({
  selector: 'app-login',
  imports: [LoginBoxComponent, LogoComponent],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
