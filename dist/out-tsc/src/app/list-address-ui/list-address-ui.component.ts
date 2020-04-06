import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-list-address-ui',
  templateUrl: './list-address-ui.component.html',
  styleUrls: ['./list-address-ui.component.css']
})
export class ListAddressUIComponent implements OnInit {

  constructor(public addressService:AddressService) { }

  ngOnInit(): void {
  }

}
