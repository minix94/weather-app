import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../model/weather.model';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  weather$ : Observable<WeatherResponse>
  constructor(private weatherService:WeatherService) {

  }
  ngOnInit(){
    this.weather$ = this.weatherService.getWeather()
  }

}
