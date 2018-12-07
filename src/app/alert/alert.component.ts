import { Component, OnInit } from "@angular/core";
import { Alert } from "./alert.model";
import { AlertService } from "./alert.service";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.scss"]
})
export class AlertComponent implements OnInit {
  alerts: Alert[] = [];
  constructor(public alertService: AlertService) {}

  ngOnInit() {
    this.getAlerts();
  }

  getAlerts() {
    this.alertService.getAlerts().subscribe((response: Alert[]) => {
      this.alerts = response;
    });
  }
}
