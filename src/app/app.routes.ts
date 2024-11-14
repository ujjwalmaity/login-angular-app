import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { authGuard, authGuardChild } from './util/guard/auth.guard';
import { loginGuard } from './util/guard/login.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
    { path: '', component: DashboardComponent, canActivate: [authGuard] },
    {
        path: '',
        canActivateChild: [authGuardChild],
        children: [
            { path: 'profile', component: ProfileComponent }
        ]
    },
    { path: '**', redirectTo: '' },
];
