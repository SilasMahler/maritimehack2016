import { Component } from '@angular/core';

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
    title = 'Tour of Heroes';
    ship: Vessel = {
        id: 1,
        name: 'Tolkien',
        length: '200m'
    };
}

export class Vessel {
    id: number;
    name: string;
    length: string;
    //...
}


