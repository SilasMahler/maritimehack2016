import {Component, OnInit} from '@angular/core';
import {BackendService} from "../services/backend";
import {TripToPort} from "../entities/trip_to_port";

@Component({
    selector:    'triptoport-list',
    templateUrl: 'app/triptoport-list.html',
    providers:   [ BackendService ]
})
export class TripToPortList implements OnInit {
    tripsToPorts: TripToPort[];
    selectedTripToPort: TripToPort;

    constructor(private service: BackendService) { }

    ngOnInit() {
        this.tripsToPorts = this.service.getTripToPorts();
    }

    selectShip(tripToPort: TripToPort) { this.selectedTripToPort = tripToPort; }
}
