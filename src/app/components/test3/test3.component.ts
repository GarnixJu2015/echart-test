import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})

export class Test3Component implements OnInit {
 
  // single: any[];
  // multi: any[];

  // view: any[] = [700, 400];

  // // options
  // showXAxis = true;
  // showYAxis = true;
  // gradient = false;
  // showLegend = true;
  // showXAxisLabel = true;
  // xAxisLabel = 'Country';
  // showYAxisLabel = true;
  // yAxisLabel = 'Population';

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  // };

  // // line, area
  // autoScale = true;

  isLoading = false;

  options = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'X-1',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'X-2',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'X-3',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'X-4',
        type: 'line',
        stack: 'counts',
        areaStyle: { normal: {} },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'X-5',
        type: 'line',
        stack: 'counts',
        label: {
          normal: {
            show: true,
            position: 'top'
          }
        },
        areaStyle: { normal: {} },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };

  constructor() {
    // Object.assign(this, {single, multi})
  }

  ngOnInit() {
  }
  // onSelect(event) {
  //   console.log(event);
  // }
}
