import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from "@angular/http";

import { BeeDataService } from './services/bee-data.service';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
