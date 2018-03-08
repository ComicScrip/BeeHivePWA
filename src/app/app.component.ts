import { Component, OnInit } from '@angular/core';
import { Hive } from './Models/Hive';
import { BeeDataService } from './services/bee-data.service';
import { Observable } from 'rxjs/Rx';
import { timer } from 'rxjs/observable/timer';

import * as moment from 'moment'


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
  public connection: boolean = undefined;

  constructor(private beedataService: BeeDataService) {

  }

  ngOnInit() {
    let timer = Observable.timer(2000, 5000);
    timer.subscribe(t => {
      this.connection = navigator.onLine;
      if (this.connection) {
        this.getDatas();
      }
    });
  }

  dataToDisplay = "temperature"

  updateChartData() {
    const displayTmp = this.dataToDisplay === "temperature"
    this.chartType = displayTmp ? "bar" : "line"
    this.chartData = {
      labels: this.dataHistory.timestamps,
      datasets: [
        {
          label: displayTmp ? 'Temperature' : 'Vibrations',
          backgroundColor: displayTmp ? '#cc0005' : '#9CCC65',
          borderColor: displayTmp ? '#b30027' : '#7CB342',
          data: displayTmp ? this.dataHistory.temperature : this.dataHistory.vibrations
        }
      ]
    }
  }

  onTempClick() {
    this.dataToDisplay = "temperature";
    this.updateChartData()
  }

  onVibrationClick() {
    this.dataToDisplay = "vibrations";
    this.updateChartData()
  }

  dataHistory = {
    temperature: [],
    vibrations: [],
    timestamps: []
  }

  public getDatas() {
    this.beedataService.getData().subscribe(da => {
      this.myHive = new Hive(da.temperature, da.hatchOpen, da.vibration, da.soundActivity, da.dateTime);
      console.log('receiving hive status : ', da);
      this.hatchOpen = da.hatchOpen;
      this.dataHistory.temperature = [...this.dataHistory.temperature, da.temperature];
      this.dataHistory.vibrations = [...this.dataHistory.vibrations, da.vibration];
      this.dataHistory.timestamps = [...this.dataHistory.timestamps, moment(da.dateTime).format('HH:mm:ss')]
      console.log('history updated : ', this.dataHistory);
      this.updateChartData();
    });
  }
}


