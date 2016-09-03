import {Ship} from "../main/vesseltrip";
import {BackendService} from "./backend";
import {Logger} from "protractor/built/logger2";
export class ShipService {
    private ships: Ship[] = [];

    constructor(
        private backendService: BackendService,
        private logger: Logger) { }

    getShips() {
        this.backendService.getAll(Ship).then( (ships: Ship[]) => {
            this.ships.push(...ships); // fill cache
        });
        return this.ships;
    }
}

