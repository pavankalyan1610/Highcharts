import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Constants } from '../../shared/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }
  /* defining getMonthsData
     return type: observables
  */
  getMonthsData() {
    return this.http.get(Constants.MonthlyDataApi).pipe((response: any) => response);
  }
  /* defining getYearlyData
     return type: observables
  */
  getYearlyData() {
    return this.http.get(Constants.AnnualDataApi).pipe((response: any) => response);
  }
}
