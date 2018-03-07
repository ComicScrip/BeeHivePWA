import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule} from "@angular/http";
import { NgModule} from '@angular/core';
import { BeeDataService } from './services/bee-data.service';
import { AppComponent } from './app.component';
import {Chart} from "./chart.component";
import {ChartModule} from "primeng/chart";


@NgModule({
  declarations: [
    AppComponent,
    Chart,
  ],
  imports: [
    ChartModule,
    BrowserModule,
    HttpModule
  ],
  providers: [BeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
