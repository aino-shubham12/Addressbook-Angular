import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddressUIComponent } from './add-address-ui/add-address-ui.component';
import { FindAddressUIComponent } from './find-address-ui/find-address-ui.component';
import { ListAddressUIComponent } from './list-address-ui/list-address-ui.component';

export const routes: Routes = [
  {path:'add',component:AddAddressUIComponent},
  {path:'find',component:FindAddressUIComponent},
  {path:'list',component:ListAddressUIComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }