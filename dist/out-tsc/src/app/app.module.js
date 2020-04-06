import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { HeaderComponent } from './header/header.component';
import { AddAddressUIComponent } from './add-address-ui/add-address-ui.component';
import { FindAddressUIComponent } from './find-address-ui/find-address-ui.component';
import { AddressService } from './address.service';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            SidenavbarComponent,
            HeaderComponent,
            AddAddressUIComponent,
            FindAddressUIComponent
        ],
        imports: [
            BrowserModule, AlertModule.forRoot(),
            ReactiveFormsModule,
            FormsModule,
            AppRoutingModule
        ],
        providers: [AddressService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map