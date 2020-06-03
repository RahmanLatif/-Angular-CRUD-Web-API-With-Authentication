import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
let NavbarComponent = class NavbarComponent {
    constructor(breakpointObserver, route) {
        this.breakpointObserver = breakpointObserver;
        this.route = route;
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches), shareReplay());
        this.access_token = environment.access_token;
        this.userName = environment.userName;
    }
    ngOnInit() {
    }
    ngDoCheck() {
        this.access_token = environment.access_token;
        this.userName = environment.userName;
        console.log("From doch" + this.access_token);
    }
    logout() {
        environment.access_token = '';
        environment.userName = '';
        this.route.navigate(['/Index']);
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.css']
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map