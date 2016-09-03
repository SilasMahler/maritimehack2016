"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var VesselApp = (function () {
    function VesselApp() {
    }
    VesselApp.prototype.onKeyUp = function () {
        console.log('keyup: ' +
            this.color);
    };
    VesselApp = __decorate([
        core_1.Component({
            selector: 'vesseltrip',
            template: "\n<input \n    type=\"text\"\n    (keyup)=\"onKeyUp()\"\n    (input)=\"color=$event.target.value\"\n    [style.background-color]=\"color\"\n    >"
        })
    ], VesselApp);
    return VesselApp;
}());
exports.VesselApp = VesselApp;
//# sourceMappingURL=vesselapp.js.map