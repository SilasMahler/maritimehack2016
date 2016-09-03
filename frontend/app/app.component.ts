import { Component }          from '@angular/core';

@Component({
    selector: 'my-app',
    template: ' <h1>Component Router</h1> <nav> ' +
    '<a routerLink="/login" routerLinkActive="active">Login</a> ' +
    '<a routerLink="/logout" routerLinkActive="active">Logout</a> ' +
    '<a routerLink="/explore" routerLinkActive="active">Explore</a> ' +
    '<a routerLink="/mytrips" routerLinkActive="active">My Trips</a> ' +
    '<a routerLink="**" routerLinkActive="active">Contact</a> ' +
    '</nav> ' +
    '<router-outlet></router-outlet>'
})
export class AppComponent {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */