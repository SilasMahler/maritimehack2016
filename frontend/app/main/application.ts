import {Component} from '@angular/core';
import {Vessel} from "../entities/vessel";

@Component({
    selector: 'application',
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
export class Application {
    title = 'App for Vesseltrips';
    vessel: Vessel = {
        id: 1,
        name: 'Flösschen',
        type: 'Floting Thing',
        length: 200,
        beam: 10,
        manager: 'Gordon',
        owner: 'Gordon',
        insurer: 'Gordon',
        eng_bulder: 'Gordon'

    }
        ;
}


