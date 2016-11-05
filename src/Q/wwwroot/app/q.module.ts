import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { QComponent } from "./q.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [QComponent],
    bootstrap: [QComponent]
})

export class QModule { }