import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { SetAppointmentComponent } from './set-appointment/set-appointment.component';
import { DentistCardComponent } from './dentist-card/dentist-card.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SetAppointmentComponent,
    DentistCardComponent,
    AboutComponent,
    LoginComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    routes,
    BrowserAnimationsModule,
    CalendarModule.forRoot()  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
