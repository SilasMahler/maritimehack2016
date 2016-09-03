import {Component, OnInit} from '@angular/core';
import {ShipService} from "../services/ship";
import {Vessel} from "../main/vesseltrip";

@Component({
  selector:    'ship-list',
  templateUrl: 'app/ship-list.html',
  providers:   [ ShipService ]
})
export class ShipListComponent implements OnInit {
  ships: Vessel[];
  selectedShip: Vessel;

  constructor(private service: ShipService) { }

  ngOnInit() {
    this.ships = this.service.getShips();
  }

  selectShip(ship: Vessel) { this.selectedShip = ship; }
}
