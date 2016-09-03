"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var routing_1 = require("../components/routing");
var logout_1 = require("../components/nav/logout");
var login_1 = require("../components/nav/login");
var explore_1 = require("../components/nav/explore");
var mytrips_1 = require("../components/nav/mytrips");
var PageNotFound_1 = require("../components/nav/PageNotFound");
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
                login_1.Login,
                logout_1.Logout,
                explore_1.Explore,
                mytrips_1.MyTrips,
                PageNotFound_1.PageNotFound
            ],
            providers: [
                routing_1.appRoutingProviders
            ],
            bootstrap: [Application]
        }),
        core_1.Component({
            selector: 'application',
            template: ' <h1>Component Router</h1> <nav> ' +
                '<a routerLink="/login" routerLinkActive="active">Login</a> ' +
                '<a routerLink="/logout" routerLinkActive="active">Logout</a> ' +
                '<a routerLink="/explore" routerLinkActive="active">Explore</a> ' +
                '<a routerLink="/mytrips" routerLinkActive="active">My Trips</a> ' +
                '<a routerLink="**" routerLinkActive="active">Contact</a> ' +
                '</nav> ' +
                '<router-outlet></router-outlet>'
        })
    ], Application);
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map