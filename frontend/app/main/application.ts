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
        name: 'Tolkien',
        type: string,
    length: number,
    beam: number,
    manager: string,
    owner: string,
    insurer: string,
    eng_bulder: string

}
;
}


