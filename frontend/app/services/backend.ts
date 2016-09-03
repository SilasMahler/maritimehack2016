/**
 * Created by Silas on 03.09.2016.
 */
import {Vessel} from "../main/vesseltrip";
import {Logger} from "protractor/built/logger2";
export class BackendService {
    private ships: Vessel[] = [];

    constructor(
        private backendService: BackendService,
        private logger: Logger) { }

    getVessels() {
        this.backendService.getAll(Vessel).then( (ships: Vessel[]) => {
            this.ships.push(...ships); // fill cache
        });
        return this.ships;
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

