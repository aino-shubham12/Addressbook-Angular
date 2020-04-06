import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-find-address-ui',
  templateUrl: './find-address-ui.component.html',
  styleUrls: ['./find-address-ui.component.css']
})
export class FindAddressUIComponent implements OnInit {

  constructor(public addressService: AddressService) { }

  ngOnInit(): void {

  }


  showDeletedMessage: boolean;
  searchText: string = "";

  onDelete(i: number) {
    console.log(i);
    if (confirm('Are you sure to delete this Address ?')) {
      this.addressService.addressArray.splice(i, 1);
      console.log("delete done !");
      console.log(this.addressService.addressArray);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(address) {
    return address.Pname.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
