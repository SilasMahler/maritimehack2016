"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var backend_1 = require("../services/backend");
var VesselList = (function () {
    function VesselList(service) {
        this.service = service;
    }
    VesselList.prototype.ngOnInit = function () {
        this.vessels = this.service.getVessels();
    };
    VesselList.prototype.selectVessel = function (vessel) { this.selectedVessel = vessel; };
    VesselList = __decorate([
        core_1.Component({
            selector: 'ship-list',
            templateUrl: 'app/vessel-list.html',
            providers: [backend_1.BackendService]
        })
    ], VesselList);
    return VesselList;
}());
exports.VesselList = VesselList;
//# sourceMappingURL=VesselList.js.map