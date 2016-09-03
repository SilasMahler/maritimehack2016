import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {PageNotFound} from "./nav/PageNotFound";
import {Login} from "./nav/login";
import {Logout} from "./nav/logout";
import {Explore} from "./nav/explore";
import {MyTrips} from "./nav/mytrips";

const vesseltripRoutes: Routes = [
    {path: 'login', component: Login},
    {path: 'logout', component: Logout},
    {path: 'explore', component: Explore},
    {path: 'mytrips', component: MyTrips},
    {path: '**', component: PageNotFound}

];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(vesseltripRoutes);
