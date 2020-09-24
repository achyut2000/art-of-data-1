import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-leaderboard-components',
  templateUrl: './leaderboard-components.component.html',
  styleUrls: ['./leaderboard-components.component.css']
})
export class LeaderboardComponentsComponent {

  lineChartData: ChartDataSets[] = [
    { data: [23, 45, 64, 46, 81,34], label: 'Solved Problems' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
    options: {
      layout: {
          padding: {
              left: 50,
              right: 0,
              top: 0,
              bottom: 100
          }
      }
  }
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

}
