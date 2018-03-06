import {Component, Input} from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class Chart {
  @Input() chartType:string ;
  public chartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  ];
  public chartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public chartOptions:any = {
    responsive: true
  };

  public chartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public chartLegend:boolean = true;

  public randomize():void {
    let _chartData:Array<any> = new Array(this.chartData.length);
    for (let i = 0; i < this.chartData.length; i++) {
      _chartData[i] = {data: new Array(this.chartData[i].data.length), label: this.chartData[i].label};
      for (let j = 0; j < this.chartData[i].data.length; j++) {
        _chartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.chartData = _chartData;
  }

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
