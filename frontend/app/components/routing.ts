import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";
import {PageNotFound} from "./nav/PageNotFound";
import {Login} from "./nav/login";
import {Logout} from "./nav/logout";
import {Explore} from "./nav/explore";
import {MyTrips} from "./nav/mytrips";
import {AppModule} from "../main/app.module";
import {AppComponent} from "../app.component";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: AppComponent },
    { path: 'explore', component: Explore },
    { path: 'mytrips', component: MyTrips }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
