import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';




import { AppComponent } from './app.component';
import { Test1Component } from './components/test1/test1.component';

// for Apollo
import { HttpClientModule } from '@angular/common/http';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
// import { ApolloModule } from 'apollo-angular';
// import { HttpLinkModule } from 'apollo-angular-link-http';


@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
