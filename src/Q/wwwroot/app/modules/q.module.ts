import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { Q } from "../components/q.component";
import { QLogoComponent } from "../components/q.logo.component";
import { QFooterComponent } from "../components/q.footer.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [Q, QLogoComponent, QFooterComponent],
    bootstrap: [Q]
})

export class QModule { }