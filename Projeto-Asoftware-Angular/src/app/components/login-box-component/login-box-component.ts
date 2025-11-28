import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box-component.html',
  styleUrls: ['./login-box-component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginBoxComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router) {
}

  login() {
    // Credenciais válidas (exemplo)
    const validUsername = 'adm';
    const validPassword = '123';

    if (this.username === validUsername && this.password === validPassword) {
      this.router.navigate(['/home']);
      this.loginError = false; 
    } else {
      this.loginError = true;
    }
  }

  GoBack() {
    this.router.navigate(['/land']);
  }
}



