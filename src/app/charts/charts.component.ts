import { Component, OnInit } from '@angular/core';
import * as HighCharts from 'highcharts';
import { ChartHelper } from '../shared/helper/helper.charts';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../shared/service/app.service';
var barChart: any;
var annualDataChart: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  chartData: any = [];
  years: any = [];
  constructor(private http: HttpClient, private appService: AppService) { }
  /**
   * Initializing life cycle of component
   */
  ngOnInit() {
    /* declairing getAnnualData()*/
    this.getAnnualData();
    /* declairing getMonthlyData()*/
    this.getMonthlydata();
  }



  /** defining getAnnualData to plot the charts 
   * @author: shivam
  */
  private getAnnualData() {
    try {
      this.appService.getYearlyData().subscribe((data: any) => {
        let annualdata = [];
        const from = data[0].fromYear;
        for (let i = 0; i < data.length; i++) {
          annualdata.push(data[i].annualData[0]);
          this.years.push((from + i) + '');
        }
        ChartHelper.PlotBarChart(annualdata, this.years);
      });
    }
    catch (Excep) {
      console.log(Excep);
    }
  }
  /* defining getMonthlydata function to plot the chart */
  private getMonthlydata() {
    try {
      /* calling monthly data */
      this.appService.getMonthsData().subscribe((data: any) => {
        this.chartData = data[0].monthVals;
        ChartHelper.PlotAreaChart(this.chartData);
      })
    }
    catch (Excep) {
      console.log(Excep);
    }
  }
}
