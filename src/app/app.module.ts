import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookingComponent } from './booking/booking.component';
import { CarSelectorComponent } from './car-selector/car-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CarsComponent } from './cars/cars.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactpageComponent } from './contactpage/contactpage.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    BookingComponent,
    CarSelectorComponent,
    CarsComponent,
    ConfirmBookingComponent,
    PaymentPageComponent,
    AboutPageComponent,
    ContactpageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
