"use strict";
/**
 * Created by Silas on 03.09.2016.
 */
var vesseltrip_1 = require("../main/vesseltrip");
var BackendService = (function () {
    function BackendService(backendService, logger) {
        this.backendService = backendService;
        this.logger = logger;
        this.ships = [];
    }
    BackendService.prototype.getVessels = function () {
        var _this = this;
        this.backendService.getAll(vesseltrip_1.Vessel).then(function (ships) {
            (_a = _this.ships).push.apply(_a, ships); // fill cache
            var _a;
        });
        return this.ships;
    };
    BackendService.prototype.getTrips = function () {
        return null;
    };
    BackendService.prototype.getPorts = function () {
        return null;
    };
    BackendService.prototype.getTripToPorts = function () {
        return null;
    };
    BackendService.prototype.getAll = function (ship) {
        return null;
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.js.map