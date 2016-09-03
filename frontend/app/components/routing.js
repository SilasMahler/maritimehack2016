"use strict";
var router_1 = require('@angular/router');
var explore_1 = require("./nav/explore");
var mytrips_1 = require("./nav/mytrips");
var app_component_1 = require("../app.component");
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: app_component_1.AppComponent },
    { path: 'explore', component: explore_1.Explore },
    { path: 'mytrips', component: mytrips_1.MyTrips }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=routing.js.map