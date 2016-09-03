/**
 * Created by Silas on 03.09.2016.
 */
import {Vessel} from "../main/application";
import {Logger} from "protractor/built/logger2";
import {Port} from "../entities/port";
import {TripToPort} from "../entities/trip_to_port";
import {Trip} from "../entities/trip";
export class BackendService {
    private vessels: Vessel[] = [];
    private ports: Port[] = [];
    private trips: Trip[] = [];
    private  tripsToPorts: TripToPort[] = [];

    constructor(
        private backendService: BackendService,
        private logger: Logger) { }

    getVessels() {
        this.backendService.getAll(Vessel).then( (vessels: Vessel[]) => {
            this.vessels.push(...vessels); // fill cache
        });
        return this.vessels;
    }

    getTrips() {
        return null;
    }

    getPorts(){
        return null;

    }
    getTripToPorts(){
        return null;

    }

    getAll(vessel: Vessel) {
        return null;
    }
}

