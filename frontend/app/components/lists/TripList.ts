import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend";
import {Trip} from "../../entities/trip";

@Component({
    selector:    'trip-list',
    templateUrl: 'app/trip-list.html',
    providers:   [ BackendService ]
})
export class TripList implements OnInit {
    trips: Trip[];
    selectedTrip: Trip;

    constructor(private service: BackendService) { }

    ngOnInit() {
        this.trips = this.service.getTrips();
    }

    selectTrip(trip: Trip) { this.selectedTrip = trip; }
}
