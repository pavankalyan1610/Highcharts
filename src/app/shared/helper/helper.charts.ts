import * as HighCharts from 'highcharts';
var monthlyDataChart: any;
var annualDataChart: any;

export class ChartHelper {

  /* function defaultSort
      * @purpose: default sorting for the records
      * @version: 1.0.1
      * @author: bhanuwhite
   */
  public static PlotBarChart(data: any, yearData: any) {
    /**
      * Bar chart for Average annual change temparature
      */

    return annualDataChart = HighCharts.chart({
      chart: {
        renderTo: 'bar',
        type: 'column',
        inverted: false,
        zoomType: 'xy'
      },
      title: {
        text: 'Average annual change temperature'
      },
      xAxis: {
        categories: yearData
      },
      yAxis: {
        lineWidth: 1,
        min: 0,
        title: {
          text: 'Temparature (\xB0C)'
        }
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function (d) {
          return `Annual change temp :  ${this.y}`;
        }
      },
      series: [{
        name: 'Annual data',
        data: data,
        type: undefined
      }]
    })

  }

  /** function to plot area chart
   * @purpose:Plot area chart with given data
   * @author:bhanuwhite
  */

  public static PlotAreaChart(data) {
    /**
       * Area chart for Average monthly change temparature 
       */
    return monthlyDataChart = HighCharts.chart({
      chart: {
        renderTo: 'area',
        type: 'area',
        zoomKey: 'shift',
        zoomType: 'xy'
      },
      title: {
        text: 'Monthly average change temparature'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', "Jun", 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      credits: {
        enabled: false
      },
      tooltip: {
        formatter: function (d) {
          return `Monthly change temp : ${this.y}`
        }
      },
      yAxis: {
        min: 0,
        lineWidth: 1,
        title: {
          text: 'Temparature (\xB0C)'
        }
      },
      series: [{
        name: '2020',
        data: data,
        type: undefined
      }
      ]
    })
  }

}