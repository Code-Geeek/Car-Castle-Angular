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
   appendTokenToHeader() { 
    let headers = new HttpHeaders()
    const token = sessionStorage.getItem('token')
    if(token){
      headers =headers.append('Authorization',`bearer ${token}`)
    }
    return {headers}
   }

   updateAPI (update:any) {
    return this.http.put(`${this.serverURL}/update/user`,update, this.appendTokenToHeader())
   }
   getUserDetails () {
    return this.http.get(`${this.serverURL}/user/details`,this.appendTokenToHeader())
   }
   vehicleRegisterAPI (vehicle:any) {
    return this.http.post(`${this.serverURL}/register/vehicle`,vehicle)
   }
   getVehiclesAPI () {
    return this.http.get(`${this.serverURL}/view/vehicles`)
   }
   getViewVehicle (id:any) {
    return this.http.get(`${this.serverURL}/vehicle/${id}`)
   }
}

