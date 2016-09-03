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
var PortList_1 = require("../components/PortList");
var TripToPortList_1 = require("../components/TripToPortList");
var TripList_1 = require("../components/TripList");
var VesselList_1 = require("../components/VesselList");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routing_1 = require("../components/routing");
var Application = (function () {
    function Application() {
        this.title = 'App for Vesseltrips';
        this.vessel = {
            id: 1,
            name: 'Flösschen',
            type: 'Floting Thing',
            length: 200,
            beam: 10,
            manager: 'Gordon',
            owner: 'Gordon',
            insurer: 'Gordon',
            eng_bulder: 'Gordon'
        };
    }
    Application = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                routing_1.routing
            ],
            declarations: [
                Application,
                PortList_1.PortList,
                TripToPortList_1.TripToPortList,
                TripList_1.TripList,
                VesselList_1.VesselList
            ],
            providers: [
                routing_1.appRoutingProviders
            ],
            bootstrap: [Application]
        }),
        core_1.Component({
            selector: 'application',
            template: ' <h1>Component Router</h1> <nav> ' +
                '<a routerLink="/" routerLinkActive="active">Home</a>' +
                '<a routerLink="/explore" routerLinkActive="active">Explore</a> ' +
                '<a routerLink="/port-list" routerLinkActive="active">PortList</a> ' +
                '<a routerLink="/contact" routerLinkActive="active">Contact</a> ' +
                '</nav> ' +
                '<router-outlet></router-outlet>'
        }), 
        __metadata('design:paramtypes', [])
    ], Application);
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map