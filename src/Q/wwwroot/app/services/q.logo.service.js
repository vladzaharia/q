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
var core_1 = require('@angular/core');
var QLogoService = (function () {
    function QLogoService() {
    }
    QLogoService.prototype.getAllLogos = function (theme) {
        if (theme === "white") {
            return DEFAULT_LOGOS_WHITE;
        }
        return DEFAULT_LOGOS;
    };
    QLogoService.prototype.getLogo = function (color) {
        return DEFAULT_LOGOS.filter(function (logo) { return logo.colorName === color; })[0];
    };
    QLogoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], QLogoService);
    return QLogoService;
}());
exports.QLogoService = QLogoService;
exports.DEFAULT_LOGO = { colorName: "defualt", circleColor: "#FFFFFF", dotColor: "#FFFFFF" };
var DEFAULT_LOGOS = [
    { colorName: "black", circleColor: "#000000", dotColor: "#000000" },
    { colorName: "grey", circleColor: "#181818", dotColor: "#808285" },
    { colorName: "blue", circleColor: "#0a4468", dotColor: "#188bc5" },
    { colorName: "green", circleColor: "#196734", dotColor: "#4cb749" },
    { colorName: "phs", circleColor: "#00463c", dotColor: "#f4ec54" }
];
var DEFAULT_LOGOS_WHITE = [
    { colorName: "white", circleColor: "#FFFFFF", dotColor: "#FFFFFF" },
    { colorName: "grey", circleColor: "#FFFFFF", dotColor: "#808285" },
    { colorName: "blue", circleColor: "#FFFFFF", dotColor: "#188bc5" },
    { colorName: "green", circleColor: "#FFFFFF", dotColor: "#4cb749" },
    { colorName: "phs", circleColor: "#FFFFFF", dotColor: "#f4ec54" }
];
//# sourceMappingURL=q.logo.service.js.map