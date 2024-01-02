import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { HomeComponent } from './home/home.component';
import { CarSelectorComponent } from './car-selector/car-selector.component';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'select-car',component:CarSelectorComponent},
  { path: 'admin', loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule) },
  {path:'confirmbooking',component:ConfirmBookingComponent},
  {path:'confirm-payment', component:PaymentPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
