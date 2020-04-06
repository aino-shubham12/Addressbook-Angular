import { __decorate } from "tslib";
import { Component } from '@angular/core';
let SidenavbarComponent = class SidenavbarComponent {
    constructor() { }
    ngOnInit() {
    }
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
};
SidenavbarComponent = __decorate([
    Component({
        selector: 'app-sidenavbar',
        templateUrl: './sidenavbar.component.html',
        styleUrls: ['./sidenavbar.component.css']
    })
], SidenavbarComponent);
export { SidenavbarComponent };
//# sourceMappingURL=sidenavbar.component.js.map