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
        this.backendService.getAll(vesseltrip_1.Ship).then(function (ships) {
            (_a = _this.ships).push.apply(_a, ships); // fill cache
            var _a;
        });
        return this.ships;
    };
    /*

    Datena aus dem Backend auslesen


    constructor(
     private backend: BackendService,
     private logger: Logger) { }

    getVessels() {
        this.backend.getAll(Vessel).then( (ships: Vessel[]) => {
            this.ships.push(...ships); // fill cache
        });
        return this.ships;
    }*/
    BackendService.prototype.getAll = function (ship) {
        return null;
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=backend.js.map