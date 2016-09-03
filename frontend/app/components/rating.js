"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Rating = (function () {
    function Rating() {
        this.range = [1, 2, 3, 4, 5];
        this.updateRate = new core_1.EventEmitter();
    }
    Rating.prototype.update = function (value) {
        this.rate = value;
        this.updateRate.next(value);
    };
    Rating = __decorate([
        core_1.Component({
            selector: 'rating',
            inputs: ['rate'],
            outputs: ['updateRate: rateChange'],
            template: "\n    <span tabindex=\"0\">\n      <template ng-for [ng-for-of]=\"range\" #index=\"index\">\n        <span class=\"sr-only\">({{ index < rate ? '*' : ' ' }})</span>\n        <i class=\"glyphicon\" (click)=\"update(index + 1)\" [ng-class]=\"index < rate ? 'glyphicon-star' : 'glyphicon-star-empty'\"></i>\n      </template>\n    </span>\n  ",
            directives: [core_1.NgFor, core_1.NgClass]
        }), 
        __metadata('design:paramtypes', [])
    ], Rating);
    return Rating;
}());
exports.Rating = Rating;
/**
 * Created by Christoph on 03.09.2016.
 */
//# sourceMappingURL=rating.js.map