"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var explore_1 = require("../components/nav/explore");
var mytrips_1 = require("../components/nav/mytrips");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                RoutesDemoApp,
                AppModule,
                explore_1.Explore,
                mytrips_1.MyTrips
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot(routes) // <-- installs Router routes, components and services
            ],
            bootstrap: [RoutesDemoApp],
            providers: [
                provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
            ]
        })
    ], AppModule);
    return AppModule;
}());
// bootstrap our app
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.module.js.map