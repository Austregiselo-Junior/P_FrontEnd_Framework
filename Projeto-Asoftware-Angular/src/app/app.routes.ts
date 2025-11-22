import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'home', component: HomeComponent}
];
