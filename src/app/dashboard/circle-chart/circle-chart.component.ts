import { Component, OnInit } from '@angular/core';


export type CircleChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;  
  fill: ApexFill;
};

@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent implements OnInit {
  public circleChartOptions: Partial<CircleChartOptions> | any;

  constructor() {   
    this.circleChartOptions = {
      series: [35,65],
      chart: {
      width: 380,
      type: 'donut',
      zoom: {
        enabled: true,
        type: 'xy',  
        autoScaleYaxis: false,  
        zoomedArea: {
          fill: {
            color: '#90CAF9',
            opacity: 0.4
          },
          stroke: {
            color: '#0D47A1',
            opacity: 0.4,
            width: 2
          }
        }
    }
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      colors: ['#217789','#6a949a'],
    },
    legend: {
      formatter: function(val: string) {
        return val;
      },
      position: 'bottom',
    },
    title: {
      text: 'Gradient Donut with custom Start-angle'
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };
  }

  ngOnInit(): void {
  }

}
