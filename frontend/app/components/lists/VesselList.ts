import {Component, OnInit} from '@angular/core';
import {BackendService} from "../../services/backend";
import {Vessel} from "../../entities/vessel";

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

  selectVessel(vessel: Vessel) { this.selectedVessel = vessel; }
}
