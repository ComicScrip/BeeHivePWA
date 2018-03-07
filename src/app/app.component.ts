import { Component, OnInit } from '@angular/core';
import { BeeDataService } from './services/bee-data.service';
import {boostrap} from 'bootstrap/';
import {BaseChartDirective} from "ng2-charts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'BeeHive';

  chartType: string = "bar";
  chartData: Array<any> = [
    {data: [], label: ''},
  ];
  chartLabels: Array<any> = [];
  hatchOpen:boolean = false;

  constructor(private beedataService: BeeDataService) {

  }

  ngOnInit() {
    this.beedataService.getData().subscribe(da => console.log(da));
    //this.onTempClick()
  }

  onTempClick(){
    setTimeout(() => {
      this.chartType = "bar";
      this.chartData = [{
        data: [1, 2, 3],
        label: "Temperature"
      }];
      this.chartLabels = ['17:00', '18:00', '19:00'];
    }, 0)
  }

  onVibrationClick(){
    this.chartType = "line";
    this.chartData = [{
      data: [6, 5, 6],
      label: "Vibration level"
    }];
    this.chartLabels = ['14:00', '15:00', '16:00'];
  }
}

