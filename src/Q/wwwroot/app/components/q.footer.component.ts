import { Component } from "@angular/core";

import { QLogo } from "./q.logo.component";
import { QLogoService } from "../services/q.logo.service";

@Component({
    selector: "footer-section",
    template: 
        `<q-logo [logo]='currentLogoWhite'></q-logo>`,
    host: {
        "[style.backgroundColor]": "currentLogo.circleColor"
    }
    providers: [ QLogoService ]
})

export class QFooterComponent { 
    currentLogo: QLogo;
    currentLogoWhite: QLogo;
    logoService: QLogoService;

    constructor(logoService: QLogoService) {
        this.logoService = logoService;

        this.currentLogo = logoService.getLogo("phs");
        this.currentLogoWhite = logoService.getLogo("phs", "white");
    }
}