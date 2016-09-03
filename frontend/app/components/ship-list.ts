import {Component, OnInit} from '@angular/core';
import {ShipService} from "../services/ship";
import {Ship} from "../main/vesseltrip";

@Component({
  selector:    'ship-list',
  templateUrl: 'app/ship-list.html',
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
