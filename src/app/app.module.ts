import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Chart} from "./chart.component";
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    Chart
  ],
  imports: [
    BrowserModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
