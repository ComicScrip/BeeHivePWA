import { Component } from '@angular/core';
import {boostrap} from 'bootstrap/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BeeHive';

  chartType:string = "bar" ;
  chartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  chartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  onSetChartBarType() {
    this.chartType = "bar";
  };



}
