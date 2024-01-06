import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CarSelectorComponent } from './car-selector/car-selector.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { CarsComponent } from './cars/cars.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'select-car',component:CarSelectorComponent},
  { path:'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) },
  {path:'confirmbooking/:id',component:ConfirmBookingComponent},
  {path:'confirm-payment/:id', component:PaymentPageComponent},
  {path:"about-us", component:AboutPageComponent},
  {path:'contact-us',component:ContactpageComponent},
  {path:'all-cars',component:CarsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
