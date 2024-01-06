import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Route } from '@angular/router';
import {
  IPayPalConfig,
  ICreateOrderRequest 
} from 'ngx-paypal';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{
  gst:any = ""
  totalamount:any= ""
  planDetails:any = sessionStorage.getItem("plan")
  vehicleDetails:any = {}
  amount:any = " "
  username:any = sessionStorage.getItem('name')
  license:any =""
  licenseUploaded:boolean=false
  phonenumber:any =""
  numberUploaded:boolean=false
  public payPalConfig ? : IPayPalConfig;
  
  constructor (private api :ApiService, private route : ActivatedRoute) { }
  ngOnInit(): void {
    this.viewVehicle()
    this.initConfig();
    this.api.getUserDetails().subscribe((res:any)=>{
        if(res.userLicence){
            this.licenseUploaded=true
        }
        console.log(this.licenseUploaded);
        
    })
  }
  viewVehicle() {
    this.route.params.subscribe((res:any)=>{
      const {id}=res 
      this.api.getViewVehicle(id).subscribe({
        next:(res:any)=>{
          this.vehicleDetails=res
          this.amount=res.amount
          this.calculate()
        },
        error:(err)=>{
          console.log(err.error);}
      })
    })
   }
   calculate() {
    this.gst = (parseInt(this.amount) * 14) / 100;
    this.totalamount = this.gst + this.gst + parseInt(this.amount);
    console.log(this.totalamount);
    
  }
  getFile(event: any) {
    let file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.readAsDataURL(file);
    fr.onload = (event: any) => {
      console.log(event.target.result);
      this.license=event.target.result
    };
  }


  licenseupload() { 
    const userLicence = this.license
    const update = {userLicence}
    this.api.updateAPI(update).subscribe({
        next:(res:any)=>{
            alert("Updated Successfully")
        },
        error(err:any){
            alert("Updation Failed.Try Again!")
            console.log(err.error);
        }
    }) 
  }
  numberupload() {

  }


  private initConfig(): void {
    this.payPalConfig = {
        currency: 'USD',
        clientId: 'sb',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: this.totalamount,
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: this.totalamount
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: "USD",
                        value: this.totalamount,
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then((details:any) => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });

        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
            alert("Payment Successfull")
            // this.showSuccess = true;
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
            // this.showCancel = true;

        },
        onError: err => {
            console.log('OnError', err);
            // this.showError = true;
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
}
}
