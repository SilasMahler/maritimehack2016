import {Component, OnInit} from '@angular/core';
import {Vessel} from "../main/vesseltrip";
import {BackendService} from "../services/backend";

@Component({
  selector:    'ship-list',
  templateUrl: 'app/vessel-list.html',
  providers:   [ BackendService ]
})
export class VesselList implements OnInit {
  vessels: Vessel[];
  selectedVessel: Vessel;

  constructor(private service: BackendService) { }

  ngOnInit() {
    this.vessels = this.service.getVessels();
  }

  selectShip(vessel: Vessel) { this.selectedVessel = vessel; }
}
