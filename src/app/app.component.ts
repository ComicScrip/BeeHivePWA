import { Component, OnInit } from '@angular/core';
import { BeeDataService } from './services/bee-data.service';
import { Hive } from './Models/Hive';

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
