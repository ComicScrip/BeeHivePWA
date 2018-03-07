import { Component, OnInit } from '@angular/core';
import { Hive } from './Models/Hive';
import {BeeDataService} from './services/bee-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public myHive: Hive;

  constructor(private beedataService: BeeDataService) {
    this.beedataService.getData().subscribe(da => {
      console.log(da);
      this.myHive = new Hive(da.temperature, da.hatchOpen, da.vibration, da.soundActivity, da.dateTime);
    });
  }

  ngOnInit() {
    
  }
}
