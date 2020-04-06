import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppRoutingModule,routes} from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { HeaderComponent } from './header/header.component';
import { AddAddressUIComponent } from './add-address-ui/add-address-ui.component';
import { FindAddressUIComponent } from './find-address-ui/find-address-ui.component';
import { AddressService } from './address.service';
import { ListAddressUIComponent } from './list-address-ui/list-address-ui.component';


@NgModule({
  declarations: [
    AppComponent,
    SidenavbarComponent,
    HeaderComponent,
    AddAddressUIComponent,
    FindAddressUIComponent,
    ListAddressUIComponent
  ],
  imports: [
    BrowserModule,AlertModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AddressService],
  bootstrap: [AppComponent]
})
export class AppModule { }
