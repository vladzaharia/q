import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Q } from "../components/q.component";
import { QLogoComponent } from "../components/q.logo.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [Q, QLogoComponent],
    bootstrap: [Q]
})

export class QModule { }