import {Component, OnInit} from '@angular/core';
import {BackendService} from "../services/backend";
import {Port} from "../entities/port";

@Component({
    selector:    'port-list',
    templateUrl: 'app/port-list.html',
    providers:   [ BackendService ]
})
export class PortList implements OnInit {
    ports: Port[];
    selectedPort: Port;

    constructor(private service: BackendService) { }

    ngOnInit() {
        this.ports = this.service.getPorts();
    }

    selectPort(port: Port) { this.selectedPort = port; }

}
