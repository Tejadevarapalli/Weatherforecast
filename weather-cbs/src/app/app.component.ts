/*Imported the api services from myservices*/

import { Component,OnInit } from '@angular/core';
import {MyserviceService} from "./myservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public resultdata: object;
 public hourlydata: object;
 public  apptitle: string= 'Weather';
 public state: string;
 public city: string;

  constructor(private myservice : MyserviceService) { }
  ngOnInit() {
  }
/*function to call services weatheforecast function and the output is pushed into data variable and the result api data
* is saved in resultdata object variable*/
  check=()=>{
    this.myservice.weatherforecast(this.state,this.city).subscribe(data => {
      this.resultdata = data;
      console.log(data);
    })
  }
  /*method to call services weeklyforecast function and the output is pushed into data variable and the result api data
  * is saved in hourlydata object variable*/
  check1=()=>{
    this.myservice.weeklyforecast(this.state,this.city).subscribe(data1 => {
      this.hourlydata = data1;
      console.log(data1);
    })
  }

/*method to trigger both check methods once button function is enabled*/
  checkreport=()=>{
    this.check()
    this.check1()
  }
}

