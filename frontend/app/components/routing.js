"use strict";
var router_1 = require('@angular/router');
var PortList_1 = require("./PortList");
var TripList_1 = require("./TripList");
var TripToPortList_1 = require("./TripToPortList");
var VesselList_1 = require("./VesselList");
var PageNotFound_1 = require("./PageNotFound");
var vesseltripRoutes = [
    { path: 'port-list', component: PortList_1.PortList },
    { path: 'trip-list', component: TripList_1.TripList },
    { path: 'vessel/:id', component: VesselList_1.VesselList },
    { path: 'triptoport-list', component: TripToPortList_1.TripToPortList },
    { path: '**', component: PageNotFound_1.PageNotFound }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(vesseltripRoutes);
//# sourceMappingURL=routing.js.map