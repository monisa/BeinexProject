import { Component, OnInit } from '@angular/core';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  annotations: ApexAnnotations;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions; 
  fill: ApexFill;
};

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: Partial<ChartOptions> | any;

  constructor() { 
    this.barChartOptions = {
      series: [{
      name: 'On track',
      data: [4,3,3,5]
    }, {
      name: 'Delayed',
      data: [3,2,5,3]
    }, {
      name: 'Significantly delayed',
      data: [5,3,2,2]
    }, {
      name: 'Completed',
      data: [2,3,1,2]
    }],
      chart: {
      type: 'bar',
      height: 350,
      stacked: true,
    },
    fill: {
      colors: ['#37ad72', '#e69d33', '#ca334c','#285763'],
    },
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    xaxis: {
      categories: ['Strategic Affairs', 'Health care workforce','Health care facilities','Support services',],
      labels: {
        show: false,
      }
    },
    yaxis: {
      title: {
        text: undefined
      },
    },
    tooltip: {
      y: {
        formatter: function (val: string) {
          return val
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40
    }
    };;
  }

  ngOnInit(): void {
  }

}
