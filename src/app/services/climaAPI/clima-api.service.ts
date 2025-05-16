import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaAPIService {

  private http = inject(HttpClient);

  //url de al api
  private urlAPI = 'https://api.openweathermap.org/data/2.5/';
  private key = '5082f6699568313f6b1fdcd3c6db5c10'
  
  constructor() { }

  //traer la informacion respecto a la ciudad escrita
  getCityBySearch(city: string): Observable<any> {
    return this.http.get<any>(`${this.urlAPI}weather?q=${city}&units=metric&lang=es&appid=${this.key}`);
  }

  //traer la ciudad y mostarlo en grafico
  getGraphicBySearch(city: string): Observable<any> {
    return this.http.get<any>(`${this.urlAPI}forecast?q=${city}&appid=${this.key}&units=metric&lang=es&cnt=40`);
  }


}
