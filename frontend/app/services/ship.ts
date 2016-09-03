import {Ship} from "../vesseltrip";
export class ShipService {
    private ships: Ship[] = [];

    /*constructor(
        private backend: BackendService,
        private logger: Logger) { }*/

    getShips() {
        /*this.backend.getAll(Ship).then( (ships: Ship[]) => {
            this.logger.log(`Fetched ${ships.length} ships.`);
            this.ships.push(...ships); // fill cache
        });*/
        return this.ships;
    }
}

