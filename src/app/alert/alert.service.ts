import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class AlertService {
  constructor(private http: HttpClient) {}

  public getAlerts(): Observable<any> {
    return this.http.get("/assets/alert.json");
  }
}
