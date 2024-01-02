import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  vehicleImage:any=""
  vehicleForm = this.fb.group({
    modelname: ['', [Validators.required]],
    regnumber: ['', [Validators.required]],
    color: ['', [Validators.required]],
    mode: ['', [Validators.required]],
    engine: ['', [Validators.required]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  constructor(private fb:FormBuilder,private api:ApiService,private router:Router) { }
  closeVehiclemodal() {
    this.vehicleImage=''
  }
  registerHatchback() { 
    if (this.vehicleForm.valid) {
      const image = this.vehicleImage
      const modelname = this.vehicleForm.value.modelname;
      const regnumber = this.vehicleForm.value.regnumber;
      const color = this.vehicleForm.value.color;
      const mode = this.vehicleForm.value.mode;
      const engine = this.vehicleForm.value.engine;
      const amount = this.vehicleForm.value.amount;
      const vehicletype = "Hatchback";

      const vehicle = { image,modelname,regnumber,color,mode,engine,amount,vehicletype };

      this.api.vehicleRegisterAPI(vehicle).subscribe({
        next: (res: any) => {
          console.log(res);
          document.getElementById('hatchClose')?.click();
          this.vehicleImage=' '
          alert(` Vehicle Registered successful !`);
          
          this.vehicleForm.reset();
        },
        error: (err: any) => {
          console.log(err.error);
        },
      });
      console.log(vehicle);
      
    } else {
      alert(' Vehicle Already Registered!');
    }
  }
  getFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (event: any) => {
      console.log(event.target.result);
      this.vehicleImage=event.target.result
    };
  }
  // register sedan

  registerSedan() { 
    if (this.vehicleForm.valid) {
      const image = this.vehicleImage
      const modelname = this.vehicleForm.value.modelname;
      const regnumber = this.vehicleForm.value.regnumber;
      const color = this.vehicleForm.value.color;
      const mode = this.vehicleForm.value.mode;
      const engine = this.vehicleForm.value.engine;
      const amount = this.vehicleForm.value.amount;
      const vehicletype = "Sedan";

      const vehicle = { image,modelname,regnumber,color,mode,engine,amount,vehicletype };

      this.api.vehicleRegisterAPI(vehicle).subscribe({
        next: (res: any) => {
          console.log(res);
          document.getElementById('sedanClose')?.click();
          this.vehicleImage=' '
          alert(` Vehicle Registered successful !`);
          
          this.vehicleForm.reset();
        },
        error: (err: any) => {
          console.log(err.error);
        },
      });
      console.log(vehicle);
      
    } else {
      alert(' Vehicle Already Registered!');
    }
  }
  getSedanFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (event: any) => {
      this.vehicleImage=event.target.result
    };
  }

  // register SUV

  registerSuv() { 
    if (this.vehicleForm.valid) {
      const image = this.vehicleImage
      const modelname = this.vehicleForm.value.modelname;
      const regnumber = this.vehicleForm.value.regnumber;
      const color = this.vehicleForm.value.color;
      const mode = this.vehicleForm.value.mode;
      const engine = this.vehicleForm.value.engine;
      const amount = this.vehicleForm.value.amount;
      const vehicletype = "SUV";

      const vehicle = { image,modelname,regnumber,color,mode,engine,amount,vehicletype };

      this.api.vehicleRegisterAPI(vehicle).subscribe({
        next: (res: any) => {
          console.log(res);
          document.getElementById('suvClose')?.click();
          this.vehicleImage=' '
          alert(` Vehicle Registered successful !`);
          
          this.vehicleForm.reset();
        },
        error: (err: any) => {
          console.log(err.error);
        },
      });
      console.log(vehicle);
      
    } else {
      alert(' Vehicle Already Registered!');
    }
  }
  getSuvFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (event: any) => {
      this.vehicleImage=event.target.result
    };
  }

  // register SUV

  registerLuxury() { 
    if (this.vehicleForm.valid) {
      const image = this.vehicleImage
      const modelname = this.vehicleForm.value.modelname;
      const regnumber = this.vehicleForm.value.regnumber;
      const color = this.vehicleForm.value.color;
      const mode = this.vehicleForm.value.mode;
      const engine = this.vehicleForm.value.engine;
      const amount = this.vehicleForm.value.amount;
      const vehicletype = "Luxury";

      const vehicle = { image,modelname,regnumber,color,mode,engine,amount,vehicletype };

      this.api.vehicleRegisterAPI(vehicle).subscribe({
        next: (res: any) => {
          console.log(res);
          document.getElementById('luxuryClose')?.click();
          this.vehicleImage=' '
          alert(` Vehicle Registered successful !`);
          
          this.vehicleForm.reset();
        },
        error: (err: any) => {
          console.log(err.error);
        },
      });
      console.log(vehicle);
      
    } else {
      alert(' Vehicle Already Registered!');
    }
  }
  getluxuryFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (event: any) => {
      this.vehicleImage=event.target.result
    };
  }
}
