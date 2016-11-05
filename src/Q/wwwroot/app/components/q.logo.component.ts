import { Component, Input } from "@angular/core";
import { Observable } from 'rxjs/Rx';

import { QLogoService } from "../services/q.logo.service";

@Component({
    selector: "q-logo",
    template: 
        `<svg id='qlogo' data-name='Q Logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144 144'>
            <g class='qcircle'>
                <path [style.fill]="logo.circleColor" d='M114.73,72A48.56,48.56,0,1,1,66.17,23.44,48.56,48.56,0,0,1,114.73,72ZM66.17,41.46A30.54,30.54,0,1,0,96.71,72,30.54,30.54,0,0,0,66.17,41.46Z'/>
                <rect [style.fill]="logo.circleColor" x='72.45' y='65.5' width='18.02' height='40.69' transform='translate(-35.5 103.88) rotate(-55.26)'/>
            </g>
            <circle [style.fill]="logo.dotColor" class='qdot' cx='116.73' cy='110.4' r='10.16'/>
        </svg>`,
    providers: [ QLogoService ]

})
export class QLogoComponent {
    @Input()
    logo: QLogo;

    @Input()
    rainbow: boolean;

    logoService: QLogoService;

    constructor(logoService: QLogoService) {
        this.logoService = logoService;
    }

    ngOnInit() {
        if (this.rainbow) {
            let timer = Observable.timer(0, 2000);
            let logos = this.logoService.getAllLogos();
            
            this.logo = logos[0];

            timer.subscribe((value) => {
                this.logo = logos[value%logos.length];
            });
        }
    }
}

export class QLogo { 
    colorName: string;
    circleColor: string;
    dotColor: string;
}