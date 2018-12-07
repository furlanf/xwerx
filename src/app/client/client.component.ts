import { Component, OnInit } from "@angular/core";
import { Client } from "./client.model";
import { ClientService } from "./client.service";

@Component({
  selector: "app-client",
  templateUrl: "./client.component.html",
  styleUrls: ["./client.component.scss"]
})
export class ClientComponent implements OnInit {
  client: Client = new Client();
  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.getDashboard();
  }

  getDashboard() {
    this.clientService.getClientDashboard().subscribe((response: Client) => {
      this.client = response;
    });
  }
}
