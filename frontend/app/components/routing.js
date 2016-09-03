"use strict";
var router_1 = require('@angular/router');
var PageNotFound_1 = require("./nav/PageNotFound");
var login_1 = require("./nav/login");
var logout_1 = require("./nav/logout");
var explore_1 = require("./nav/explore");
var mytrips_1 = require("./nav/mytrips");
var vesseltripRoutes = [
    { path: 'login', component: login_1.Login },
    { path: 'logout', component: logout_1.Logout },
    { path: 'explore', component: explore_1.Explore },
    { path: 'mytrips', component: mytrips_1.MyTrips },
    { path: '**', component: PageNotFound_1.PageNotFound }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(vesseltripRoutes);
//# sourceMappingURL=routing.js.map