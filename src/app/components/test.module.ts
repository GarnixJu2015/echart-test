import { NgModule } from '@angular/core';
import { TestRoutingModule } from './test-routing.module';

// @TODO for ng2-nvd3
import { Test1Component } from './test1/test1.component';

// @TODO for ngx-charts
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { Test2Component } from './test2/test2.component';

// for e-charts
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    TestRoutingModule,
    NgxChartsModule,
    NgxEchartsModule
  ],
  declarations: [
    Test1Component,
    Test2Component
  ],
  exports: [
    NgxChartsModule,
    Test1Component,
    Test2Component,
    NgxEchartsModule
  ]
})
export class TestModule { }
