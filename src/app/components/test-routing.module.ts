
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { FrameComponent } from './frame/frame.component';
import { T4Component } from './t4/t4.component';


const routes: Routes = [
  { path: 'test1', component: Test1Component },
  { path: 'test2', component: Test2Component },
  { path: 'test3', component: Test3Component},
  { path: 't4', component: T4Component},
  { path: 'frame', component: FrameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
