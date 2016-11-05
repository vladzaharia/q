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
var q_logo_service_1 = require("../services/q.logo.service");
var Q = (function () {
    function Q() {
        this.currentLogo = q_logo_service_1.DEFAULT_LOGO;
    }
    Q = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<div class=\"main-section\">\n            <h1>Q is coming...</h1>\n         </div>\n\n         <footer-section></footer-section>\n         "
        }), 
        __metadata('design:paramtypes', [])
    ], Q);
    return Q;
}());
exports.Q = Q;
//# sourceMappingURL=q.component.js.map