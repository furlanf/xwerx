import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ClientComponent } from "./client/client.component";
import { AlertComponent } from "./alert/alert.component";
import { ClientService } from "./client/client.service";
import { HttpClientModule } from "@angular/common/http";
import { AlertService } from "./alert/alert.service";

@NgModule({
  declarations: [AppComponent, ClientComponent, AlertComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ClientService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule {}
