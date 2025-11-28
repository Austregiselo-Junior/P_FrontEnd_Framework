import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { HomeComponent } from './components/home-component/home-component';
import { Land } from './pages/land/land';

export const routes: Routes = [
    {path: '', redirectTo: 'land', pathMatch: 'full'},
    {path: 'login', component: Login},
    {path: 'home', component: HomeComponent},
    {path: 'land', component: Land}
];
