import {Component, NgModule} from '@angular/core';
import {Vessel} from "../entities/vessel";
import {PortList} from "../components/PortList";
import {TripToPortList} from "../components/TripToPortList";
import {TripList} from "../components/TripList";
import {VesselList} from "../components/VesselList";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {routing, appRoutingProviders} from "../components/routing";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        Application,
        PortList,
        TripToPortList,
        TripList,
        VesselList
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ Application ]
})
@Component({
    selector: 'application',
    template: ' <h1>Component Router</h1> <nav> ' +
    '<a routerLink="/" routerLinkActive="active">Home</a>' +
    '<a routerLink="/explore" routerLinkActive="active">Explore</a> ' +
    '<a routerLink="/port-list" routerLinkActive="active">PortList</a> ' +
    '<a routerLink="/contact" routerLinkActive="active">Contact</a> ' +
    '</nav> ' +
    '<router-outlet></router-outlet>'
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
    };
}

