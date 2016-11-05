"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var QLogoComponent = (function () {
    function QLogoComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', QLogo)
    ], QLogoComponent.prototype, "logo", void 0);
    QLogoComponent = __decorate([
        core_1.Component({
            selector: "q-logo",
            template: "<svg id='qlogo' data-name='Q Logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 144 144'>\n            <defs>\n                <style>\n                .qcircle {\n                    fill: {{logo.circleColor}};\n                }\n\n                .qdot {\n                    fill: {{logo.dotColor}};\n                }\n                </style>\n            </defs>\n            <g class='qcircle'>\n                <path d='M114.73,72A48.56,48.56,0,1,1,66.17,23.44,48.56,48.56,0,0,1,114.73,72ZM66.17,41.46A30.54,30.54,0,1,0,96.71,72,30.54,30.54,0,0,0,66.17,41.46Z'/>\n                <rect x='72.45' y='65.5' width='18.02' height='40.69' transform='translate(-35.5 103.88) rotate(-55.26)'/>\n            </g>\n            <circle class='qdot' cx='116.73' cy='110.4' r='10.16'/>\n        </svg>"
        }), 
        __metadata('design:paramtypes', [])
    ], QLogoComponent);
    return QLogoComponent;
}());
exports.QLogoComponent = QLogoComponent;
var QLogo = (function () {
    function QLogo() {
    }
    return QLogo;
}());
exports.QLogo = QLogo;
//# sourceMappingURL=q.logo.js.map