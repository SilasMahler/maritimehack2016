/**
 * Created by Silas on 03.09.2016.
 */
import {Ship} from "../main/vesseltrip";
import {Logger} from "protractor/built/logger2";
export class BackendService {
    private ships: Ship[] = [];

    constructor(
        private backendService: BackendService,
        private logger: Logger) { }

    getVessels() {
        this.backendService.getAll(Ship).then( (ships: Ship[]) => {
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

    getAll(ship: Ship) {
        return null;
    }
}

