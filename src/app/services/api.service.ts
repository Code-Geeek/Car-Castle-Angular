import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  serverURL = "http://localhost:3000"


  constructor(private http:HttpClient)  { }

  loginAPI (user:any) {
    return this.http.post(`${this.serverURL}/login`,user)
   }

   registerAPI (user:any) {
    return this.http.post(`${this.serverURL}/register`,user)
   }
   vehicleRegisterAPI (vehicle:any) {
    return this.http.post(`${this.serverURL}/register/vehicle`,vehicle)
   }
}

