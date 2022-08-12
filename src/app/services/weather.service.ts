import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { WeatherResponse } from '../model/weather.model';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient, private geolocation: Geolocation) { }
 readonly API_KEY = '9551cfea54287071275e108aa6fae0fe'

   getCurrentPosition() {
    return from(this.geolocation.getCurrentPosition().then(res=> res.coords))
  }
    
    getWeather() {
    return this.getCurrentPosition().pipe(switchMap(res=>this.http.get<WeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?lat=${res.latitude}&lon=${res.longitude}&appid=${this.API_KEY}&lang=it&units=metric`)
    ))
   }
  

  
}
