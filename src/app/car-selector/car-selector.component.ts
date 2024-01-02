import { Component } from '@angular/core';

@Component({
  selector: 'app-car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css']
})
export class CarSelectorComponent {
  pickup:any= sessionStorage.getItem('pickup')
  drop:any= sessionStorage.getItem('drop')

}
