import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAddressUIComponent } from './add-address-ui/add-address-ui.component';
import { FindAddressUIComponent } from './find-address-ui/find-address-ui.component';
export const routes = [
    { path: 'add', component: AddAddressUIComponent },
    { path: 'find', component: FindAddressUIComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map