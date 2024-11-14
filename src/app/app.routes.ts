import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard } from './util/guard/auth.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: DashboardComponent, canActivate: [authGuard] },
    {
        path: '',
        children: [
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: '**', redirectTo: '' },
];
