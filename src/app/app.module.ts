import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SetAppointmentComponent } from './set-appointment/set-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    SetAppointmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
