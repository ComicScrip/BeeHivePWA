import { Component } from '@angular/core';
import { Hive } from './Hive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public hive: Hive;
  
  constructor() {
    this.hive = new Hive(32.5, false, 29, 17, new Date());
  }
}