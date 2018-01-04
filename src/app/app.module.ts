import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatSidenavModule, MatToolbarModule, MatListModule } from '@angular/material';
import { TestModule } from './components/test.module';
import { TestRoutingModule } from './components/test-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';


// for Apollo
import { HttpClientModule } from '@angular/common/http';

// import { ApolloModule } from 'apollo-angular';
// import { HttpLinkModule } from 'apollo-angular-link-http';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    TestModule,
    TestRoutingModule,
    HttpClientModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
