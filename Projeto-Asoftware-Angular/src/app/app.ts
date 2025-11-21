import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginBoxComponent } from './components/login-box-component/login-box-component';
import { LogoComponent } from './components/logo-component/logo-component';
import { Login } from './pages/login/login';

@Component({
  selector: 'app-root',
  imports: [Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Asoftware');
}
