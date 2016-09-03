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
var backend_1 = require("../../services/backend");
var TripToPortList = (function () {
    function TripToPortList(service) {
        this.service = service;
    }
    TripToPortList.prototype.ngOnInit = function () {
        this.tripsToPorts = this.service.getTripToPorts();
    };
    TripToPortList.prototype.selectTripToPort = function (tripToPort) { this.selectedTripToPort = tripToPort; };
    TripToPortList = __decorate([
        core_1.Component({
            selector: 'triptoport-list',
            templateUrl: 'app/triptoport-list.html',
            providers: [backend_1.BackendService]
        }), 
        __metadata('design:paramtypes', [backend_1.BackendService])
    ], TripToPortList);
    return TripToPortList;
}());
exports.TripToPortList = TripToPortList;
//# sourceMappingURL=TripToPortList.js.map