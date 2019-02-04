import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
/*Imported objects from parent component to weather componenet*/
  @Input('resultdata') public resultdata: object;
  @Input('hourlydata') public hourlydata: object;
  constructor() { }


}
