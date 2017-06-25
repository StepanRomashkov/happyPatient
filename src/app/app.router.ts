import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { DentistCardComponent } from './dentist-card/dentist-card.component';
import { SetAppointmentComponent } from './set-appointment/set-appointment.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const router: Routes = [
    { path: '', redirectTo: 'set-appointment', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'dentist-card', component: DentistCardComponent },
    { path: 'set-appointment', component: SetAppointmentComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin-page', component: AdminPageComponent }
    
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);