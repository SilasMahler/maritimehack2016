import {Component, OnInit} from '@angular/core';
import {BackendService} from "../services/backend";
import {Trip} from "../entities/trip";
import {Port} from "../entities/port";

@Component({
    selector:    'port-list',
    templateUrl: 'app/port-list.html',
    providers:   [ BackendService ]
})
export class TripList implements OnInit {
    ports: Port[];
    selectedPort: Port;

    constructor(private service: BackendService) { }

    ngOnInit() {
        this.trips = this.service.getTrips();
    }

    selectShip(port: Port) { this.selectedPort = port; }
}
