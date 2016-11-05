import { Component } from "@angular/core";

import { QLogo } from "./q.logo.component";
import { DEFAULT_LOGO } from "../services/q.logo.service";


@Component({
    selector: "my-app",
    template: 
        `<div class="main-section">
            <h1>Q is coming...</h1>
         </div>

         <footer-section></footer-section>
         `
})

export class Q { 
    currentLogo: QLogo;

    constructor() {
        this.currentLogo = DEFAULT_LOGO; 
    }
}