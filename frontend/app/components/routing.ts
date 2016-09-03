import { Routes, RouterModule } from '@angular/router';
import {PortList} from "./PortList";
import {TripList} from "./TripList";
import {TripToPortList} from "./TripToPortList";
import {VesselList} from "./VesselList";
import {ModuleWithProviders} from "@angular/core";
import {PageNotFound} from "./PageNotFound";

const vesseltripRoutes: Routes = [
    { path: 'port-list', component: PortList },
    { path: 'trip-list', component: TripList},
    { path: 'vessel/:id', component: VesselList },
    { path: 'triptoport-list', component: TripToPortList },
    { path: '**', component: PageNotFound }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(vesseltripRoutes);
