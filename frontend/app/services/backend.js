"use strict";
/**
 * Created by Silas on 03.09.2016.
 */
var application_1 = require("../main/application");
var BackendService = (function () {
    function BackendService(backendService, logger) {
        this.backendService = backendService;
        this.logger = logger;
        this.vessels = [];
        this.ports = [];
        this.trips = [];
        this.tripsToPorts = [];
    }
    BackendService.prototype.getVessels = function () {
        var _this = this;
        this.backendService.getAll(application_1.Vessel).then(function (vessels) {
            (_a = _this.vessels).push.apply(_a, vessels); // fill cache
            var _a;
        });
        return this.vessels;
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
    BackendService.prototype.getAll = function (vessel) {
        return null;
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.js.map