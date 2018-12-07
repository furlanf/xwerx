import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ClientService {
  constructor(private http: HttpClient) {}

  public getClientDashboard(): Observable<any> {
    return this.http.get("/assets/client.json");
  }
}
