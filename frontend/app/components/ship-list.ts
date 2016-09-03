import {Component, OnInit} from '@angular/core';
import {ShipService} from "./ship.service";
import {Ship} from "./app.component";

@Component({
  selector:    'ship-list',
  templateUrl: 'app/ship-list.component.html',
  providers:   [ ShipService ]
})
export class ShipListComponent implements OnInit {
  ships: Ship[];
  selectedShip: Ship;

  constructor(private service: ShipService) { }

  ngOnInit() {
    this.ships = this.service.getShips();
  }

  selectShip(ship: Ship) { this.selectedShip = ship; }
}
