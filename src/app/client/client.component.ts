import { Component, OnInit } from "@angular/core";
import { Client } from "./client.model";
import { ClientService } from "./client.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  client: Client = new Client();
  chart = [];
  month = [];
  value = [];
  stacked = [];
  max_value: number = 300;
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard() {
    this.clientService.getClientDashboard().subscribe((response: Client) => {
      this.client = response;
      response.last_months.forEach(y => {
        this.month.push(y.month);
        this.value.push(y.value);
        this.stacked.push(this.max_value - y.value);
      });
      this.chart = new Chart("canvas", {
        type: "bar",
        data: {
          labels: this.month,
          datasets: [
            {
              data: this.value,
              backgroundColor: "#69a3e5",
              fillColor: "#FFF",
              fill: true
            },
            {
              data: this.stacked,
              backgroundColor: "#596169",
              fill: true
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          events: [],

          scales: {
            xAxes: [
              {
                display: false,
                stacked: true,
                barPercentage: 0.4
              }
            ],
            yAxes: [
              {
                display: false,
                stacked: true
              }
            ]
          }
        }
      });
    });
  }
}
