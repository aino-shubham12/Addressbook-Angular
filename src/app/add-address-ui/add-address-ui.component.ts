import { Component, OnInit } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-add-address-ui',
  templateUrl: './add-address-ui.component.html',
  styleUrls: ['./add-address-ui.component.css']
})
export class AddAddressUIComponent implements OnInit {

  constructor(public addressService:AddressService) { }
  
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.addressService.form.controls;

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.submitted = true;
  
    if (this.addressService.form.valid) 
    {
      if (this.addressService.form.get('$key').value == null)
      {
        this.addressService.addAddress(this.addressService.form.value);
      }
      else
      {
        console.log("inside else indexOf addressArray.Pname : "+this.addressService.addressArray.indexOf());
        this.addressService.updateAddress(this.addressService.form.value);
      }
      
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.addressService.form.reset();
      
      //this is to be done for proper reset operation
      this.addressService.form.setValue({
        $key: null,
        Pname: '',
        Street: '',
        City: '',
        Mobile: '',
        Pincode:''
      });
    }
  }

  updateAddress(i,address)
  {
    this.addressService.addressArray.splice(i,1,address);
  }
 
}
