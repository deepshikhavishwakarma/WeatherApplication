import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WeatherApiAngular';
  city: string = '';
  weatherData: any;
  icon = '';
  imageurl = "";
  constructor(private http: HttpClient) {}
  getWeather() {
    if (this.city) {
      const apiKey = 'edd126b9fade18f89566e6a5fb04c0b8';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`;
  
      this.http.get(apiUrl).subscribe((data: any) => {
        this.weatherData = data;
        this.icon = this.weatherData.weather[0].icon;
        this.imageurl = `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
      });
    }
  }



  data:any={"coord":{"lon":79.9501,"lat":23.167},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":24.6,"feels_like":25.13,"temp_min":24.6,"temp_max":24.6,"pressure":1008,"humidity":77,"sea_level":1008,"grnd_level":961},"visibility":10000,"wind":{"speed":1.32,"deg":33,"gust":1.39},"clouds":{"all":8},"dt":1695746076,"sys":{"country":"IN","sunrise":1695688194,"sunset":1695731615},"timezone":19800,"id":1269633,"name":"Jabalpur","cod":200}



}
