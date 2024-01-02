import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  searchForm = this.fb.group({
    pickup: ['', [Validators.required]],
    drop: ['', [Validators.required]],
    start:['', [Validators.required]],
    end:['', [Validators.required]]
  });

  constructor(privateAPI:ApiService, private fb:FormBuilder, private router: Router) {}
  tabimage:string='../assets/images/sbar.png'
  tabimage1:string='../assets/images/sbar1.png'

  searchBtn() {
    if(this.searchForm.valid){
      const pickup = this.searchForm.value.pickup
    const drop = this.searchForm.value.drop
    const start = this.searchForm.value.start
    const end = this.searchForm.value.end
    if(pickup && drop && start && end){
      sessionStorage.setItem("pickup",pickup)
      sessionStorage.setItem("drop",drop)
      sessionStorage.setItem("start",start)
      sessionStorage.setItem("end",end)
      this.router.navigateByUrl('/select-car')
    }
    }
  }
}
