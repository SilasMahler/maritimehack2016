
import {Explore} from "../components/nav/explore";
import {MyTrips} from "../components/nav/mytrips";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
@NgModule({
    declarations: [
        RoutesDemoApp,
        AppModule,
        Explore,
        MyTrips
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes) // <-- installs Router routes, components and services
    ],
    bootstrap: [ RoutesDemoApp ],
    providers: [
        provide(LocationStrategy, {useClass: HashLocationStrategy})
    ]
})
class AppModule {}

// bootstrap our app
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch((err: any) => console.error(err));