import { Component, OnInit } from '@angular/core';
import { BeeDataService } from './services/bee-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private beedataService: BeeDataService) {

  }
  ngOnInit() {
    this.beedataService.getData().subscribe(da => console.log(da));
  }
}
