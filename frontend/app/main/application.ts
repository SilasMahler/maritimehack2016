import {Component, NgModule} from '@angular/core';
import {Vessel} from "../entities/vessel";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {routing, appRoutingProviders} from "../components/routing";
import {Logout} from "../components/nav/logout";
import {Login} from "../components/nav/login";
import {Explore} from "../components/nav/explore";
import {MyTrips} from "../components/nav/mytrips";
import {PageNotFound} from "../components/nav/PageNotFound";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        Application,
        Login,
        Logout,
        Explore,
        MyTrips,
        PageNotFound
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [ Application ]
})
@Component({
    selector: 'application',
    template: ' <h1>Component Router</h1> <nav> ' +
    '<a routerLink="/login" routerLinkActive="active">Login</a> ' +
    '<a routerLink="/logout" routerLinkActive="active">Logout</a> ' +
    '<a routerLink="/explore" routerLinkActive="active">Explore</a> ' +
    '<a routerLink="/mytrips" routerLinkActive="active">My Trips</a> ' +
    '<a routerLink="**" routerLinkActive="active">Contact</a> ' +
    '</nav> ' +
    '<router-outlet></router-outlet>'
})
export class Application {
    title = 'App for Vesseltrips';
    vessel: Vessel = {
        id: 1,
        name: 'Flösschen',
        type: 'Floting Thing',
        length: 200,
        beam: 10,
        manager: 'Gordon',
        owner: 'Gordon',
        insurer: 'Gordon',
        eng_bulder: 'Gordon'
    };
}

