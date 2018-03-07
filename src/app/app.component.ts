import { Component, OnInit } from '@angular/core';
import { Hive } from './Models/Hive';
import { BeeDataService } from './services/bee-data.service';
import { Observable } from 'rxjs/Rx';
import { timer } from 'rxjs/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BeeHive';

  chartType: string = "bar";

  chartData: any = {
    labels: [],
    datasets: []
  }

  hatchOpen: boolean = false;

  public myHive: Hive;
  public connection: boolean;

  constructor(private beedataService: BeeDataService) {

  }

  ngOnInit() {
    let timer = Observable.timer(2000, 3000);
    timer.subscribe(t => {
      this.connection = navigator.onLine;
      if (this.connection) {
        this.getDatas();
      }
    });

  }

  onTempClick() {
    this.chartType = "bar"
    this.chartData = {
      labels: ['14:00', '15:00', '16:00'],
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: '#cc0005',
          borderColor: '#b30027',
          data: [90, 110, 100]
        }
      ]
    }
  }

  onVibrationClick() {
    this.chartType = "line";
    this.chartData = {
      labels: ['17:00', '18:00', '19:00'],
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [90, 80, 100]
        }
      ]
    }
  }

  public getDatas() {
    this.beedataService.getData().subscribe(da => {
      console.log(da);
      this.myHive = new Hive(da.temperature, da.hatchOpen, da.vibration, da.soundActivity, da.dateTime);
    });
  }
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function (registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function (err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}
