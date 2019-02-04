
/*inorder to use url to extract data to the application, HTTPclient class from http */
import { Injectable } from '@angular/core';
import  {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class MyserviceService {
  constructor(private http: HttpClient) {}
/*method to call api and variables are by default as used ngmodel function in inputs */
  weatherforecast(state,city)
  {
    return this.http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/'+state+'/'+city+'.json')
  }

  /*Hourly forecast api call*/
  weeklyforecast(state,city)
  {
    return this.http.get('http://api.wunderground.com/api/36b799dc821d5836/hourly/q/'+state+'/'+city+'.json')
  }

  }

