import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';

// @TODO for ng2-nvd3


// @TODO for ngx-charts
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';

// for e-charts
import { NgxEchartsModule } from 'ngx-echarts';
import { Echarts } from 'echarts';
import { FrameComponent } from './frame/frame.component';
import { T4Component } from './t4/t4.component';

@NgModule({
  imports: [
    TestRoutingModule,
    NgxChartsModule,
    NgxEchartsModule
  ],
  declarations: [
    Test1Component,
    Test2Component,
    Test3Component,
    FrameComponent,
    T4Component
  ],
  exports: [
    NgxChartsModule,
    Test1Component,
    Test2Component,
    Test3Component,
    NgxEchartsModule
  ]
})
export class TestModule { }
