import { Injectable } from '@angular/core';
import { Http, HttpModule} from "@angular/http";
import { environment } from "../../environments/environment";
import 'rxjs/add/operator/map';

@Injectable()
export class BeeDataService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get(`${environment.baseUrl}/data`).map(x=>x.json());
  }
}
