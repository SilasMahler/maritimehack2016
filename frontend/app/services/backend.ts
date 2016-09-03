/**
 * Created by Silas on 03.09.2016.
 */
import {Logger} from "protractor/built/logger2";
import {Port} from "../entities/port";
import {TripToPort} from "../entities/trip_to_port";
import {Trip} from "../entities/trip";
import {Vessel} from "../entities/vessel";
import {Injectable} from "@angular/core";



@Injectable()
export class BackendService {
    private vessels: Vessel[] = [];
    private ports: Port[] = [];
    private trips: Trip[] = [];
    private  tripsToPorts: TripToPort[] = [];

    constructor(private backendService: BackendService) { }

    getVessels():Vessel[] {
        return null;
    }

    getTrips():Trip[] {
        return null;
    }

    getPorts():Port[]{
        return null;

    }
    getTripToPorts():TripToPort[]{
        return null;

    }

}

