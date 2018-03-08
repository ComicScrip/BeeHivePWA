import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule} from "@angular/http";
import { NgModule} from '@angular/core';
import { BeeDataService } from './services/bee-data.service';
import { AppComponent } from './app.component';
import {Chart} from "./chart.component";
import {ChartModule} from "primeng/chart";
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    Chart,
  ],
  imports: [
    ChartModule,
    BrowserModule,
    HttpModule,
    environment.production ? ServiceWorkerModule.register('ngsw-worker.js') : []
  ],
  providers: [BeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
