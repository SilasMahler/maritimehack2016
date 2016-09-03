"use strict";
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
        return null;
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
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.js.map