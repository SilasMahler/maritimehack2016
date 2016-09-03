"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Application = (function () {
    function Application() {
        this.title = 'App for Vesseltrips';
        this.vessel = {
            id: 1,
            name: 'Tolkien',
            type: string,
            length: number,
            beam: number,
            manager: string,
            owner: string,
            insurer: string,
            eng_bulder: string
        };
    }
    Application = __decorate([
        core_1.Component({
            selector: 'application',
            template: "\n    <h1>{{title}}</h1>\n    <h2>{{ship.name}} details!</h2>\n    <div><label>id: </label>{{ship.id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"ship.name\" placeholder=\"name\">\n    </div>\n    "
        })
    ], Application);
    return Application;
}());
exports.Application = Application;
//# sourceMappingURL=application.js.map