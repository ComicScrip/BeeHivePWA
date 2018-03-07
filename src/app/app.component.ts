import { Component, OnInit } from '@angular/core';
import { Hive } from './Models/Hive';
import {BeeDataService} from './services/bee-data.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public myHive: Hive;

  constructor(private beedataService: BeeDataService) {
  
  }

  ngOnInit() {
    let timer = Observable.timer(2000,5000);
    timer.subscribe(t=> {
        this.getDatas();
    });
  }

 

  public getDatas(){
    this.beedataService.getData().subscribe(da => {
      console.log(da);
      this.myHive = new Hive(da.temperature, da.hatchOpen, da.vibration, da.soundActivity, da.dateTime);
    });
  }
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
    console.log('ServiceWorker registration successful!');
  }).catch(function(err) {
    console.log('ServiceWorker registration failed: ', err);
  });
}
