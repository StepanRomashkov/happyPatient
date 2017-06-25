import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetAppointmentComponent } from './set-appointment/set-appointment.component';
//import { CalendarComponent } from './calendar/calendar.component';
import { DentistCardComponent } from './dentist-card/dentist-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SetAppointmentComponent,
    DentistCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
