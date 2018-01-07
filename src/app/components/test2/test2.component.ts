import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})

export class Test2Component implements OnInit {
   categoryData = [];
   barData = [];
   dataCount = 100;
 //  errorData = [];
   
   option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    title: {
        text: 'Error bar chart'
    },
    legend: {
        data: ['bar', 'error']
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 70
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: this.categoryData
    },
    yAxis: {},
    series: [{
        type: 'bar',
        name: 'bar',
        data: this.barData,
        itemStyle: {
            normal: {
                color: '#77bef7'
            }
        }
    }
    // , {
    //     type: 'custom',
    //     name: 'error',
    //     itemStyle: {
    //         normal: {
    //             borderWidth: 1.5
    //         }
    //     },
    //     renderItem: this.renderItem,
    //     encode: {
    //         x: 0,
    //         y: [1, 2]
    //     },
    //     data: this.errorData,
    //     z: 100
    // }
]
  };
  constructor() {
  }

  ngOnInit() {
    for (let i = 0; i < this.dataCount; i++) {
      const val = Math.random() * 1000;
      this.categoryData.push('category' + i);
    //   this.errorData.push([
    //       i,
    //       Math.round(Math.max(0, val - Math.random() * 100)),
    //       Math.round(val + Math.random() * 80)
    //   ]);
      this.barData.push(Math.round(val));
  }
  }

//    renderItem(params, api) {
//     const xValue = api.value(0);
//     const highPoint = api.coord([xValue, api.value(1)]);
//     const lowPoint = api.coord([xValue, api.value(2)]);
//     const halfWidth = api.size([1, 0])[0] * 0.1;
//     const style = api.style({
//         stroke: api.visual('color'),
//         fill: null
//     });

//     return {
//         type: 'group',
//         children: [{
//             type: 'line',
//             shape: {
//                 x1: highPoint[0] - halfWidth, y1: highPoint[1],
//                 x2: highPoint[0] + halfWidth, y2: highPoint[1]
//             },
//             style: style
//         }, {
//             type: 'line',
//             shape: {
//                 x1: highPoint[0], y1: highPoint[1],
//                 x2: lowPoint[0], y2: lowPoint[1]
//             },
//             style: style
//         }, {
//             type: 'line',
//             shape: {
//                 x1: lowPoint[0] - halfWidth, y1: lowPoint[1],
//                 x2: lowPoint[0] + halfWidth, y2: lowPoint[1]
//             },
//             style: style
//         }]
//     };
// }

}


