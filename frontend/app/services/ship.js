"use strict";
var vesseltrip_1 = require("../main/vesseltrip");
var ShipService = (function () {
    function ShipService(backendService, logger) {
        this.backendService = backendService;
        this.logger = logger;
        this.ships = [];
    }
    ShipService.prototype.getShips = function () {
        var _this = this;
        this.backendService.getAll(vesseltrip_1.Ship).then(function (ships) {
            (_a = _this.ships).push.apply(_a, ships); // fill cache
            var _a;
        });
        return this.ships;
    };
    return ShipService;
}());
exports.ShipService = ShipService;
//# sourceMappingURL=ship.js.map