import { Component } from '@angular/core';
import {Vessel} from "../entities/vessel";

@Component({
    selector: 'vesseltripapp',
    template: `
    <h1>{{title}}</h1>
    <h2>{{ship.name}} details!</h2>
    <div><label>id: </label>{{ship.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="ship.name" placeholder="name">
    </div>
    `
})
export class VesselTripApp {
    title = 'App for Vesseltrips';
    ship: Vessel = {
        id: 1,
        name: 'Tolkien',
        length: '200m'
    };
}


