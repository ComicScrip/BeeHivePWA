import {Component, Input} from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class Chart {
  @Input() type: string;
  @Input() data: any;
  options: any =  {
    legend: {display: false}
  }

  constructor() {
    this.data = {
      labels: [],
      datasets: []
    }
  }
}
