import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit{
  pickup:any= sessionStorage.getItem('pickup')
  drop:any= sessionStorage.getItem('drop')
  vehicleDetails:any = {}
  plan:any = ""

  constructor (private api :ApiService, private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.viewVehicle()
  }

  viewVehicle() {
    this.route.params.subscribe((res:any)=>{
      const {id}=res 
      this.api.getViewVehicle(id).subscribe({
        next:(res:any)=>{
          this.vehicleDetails=res
        },
        error:(err)=>{
          console.log(err.error);}
      })
    })
   }
   basePlan() { 
    this.plan="2999"
    sessionStorage.setItem("plan","2999")
   }
   premiumPlan() { 
    this.plan="6999"
    sessionStorage.setItem("plan","6999")
   }
  
}
