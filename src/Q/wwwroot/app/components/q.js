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
var Rx_1 = require('rxjs/Rx');
var q_logo_1 = require("../services/q.logo");
var Q = (function () {
    function Q(logoService) {
        var _this = this;
        var timer = Rx_1.Observable.timer(0, 2000);
        var logos = logoService.getAllLogos();
        timer.subscribe(function (value) {
            _this.currentLogo = logos[value % logos.length];
        });
    }
    Q = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "<q-logo (logo)='currentLogo'></q-logo>",
            providers: [q_logo_1.QLogoService]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof q_logo_1.QLogoService !== 'undefined' && q_logo_1.QLogoService) === 'function' && _a) || Object])
    ], Q);
    return Q;
    var _a;
}());
exports.Q = Q;
//# sourceMappingURL=q.js.map