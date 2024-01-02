import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  ngOnInit(): void {
    this.viewVehicleDetails()
    console.log(this.allvehicles);
    
  }
  allvehicles:any=[]
  
  constructor (private router:Router, private api:ApiService) {}
 
  viewVehicleDetails() {
    this.api.getVehiclesAPI().subscribe((res:any)=>{
      this.allvehicles=res
      console.log(res);
    })
  }
}
