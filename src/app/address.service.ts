import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { toPublicName } from '@angular/compiler/src/i18n/serializers/xmb';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private router:Router) { }


  addressArray: any = [];

  form = new FormGroup({
    $key: new FormControl(null),
    Pname: new FormControl('', Validators.required),
    Street: new FormControl('', Validators.required),
    City: new FormControl('', Validators.required),
    Mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    Pincode: new FormControl('', [Validators.required, Validators.minLength(6)])
  });


  addAddress(address) {
    
    this.addressArray.push({
      Pname: address.Pname,
      Street: address.Street,
      City: address.City,
      Mobile: address.Mobile,
      Pincode: address.Pincode
    });

    console.log(this.addressArray)
  }


  populateForm(i,address) {
    this.form.setValue(
      {
      $key:i,
      Pname: address.Pname,
      Street: address.Street,
      City: address.City,
      Mobile: address.Mobile,
      Pincode: address.Pincode     
    });

    this.router.navigate(['add']);
  }

  updateAddress(address)
  {

    console.log("inside updateAddress");

    this.addressArray.splice(address.$key,1,address);

    console.log("update done !");

    console.log(this.addressArray);
  }

}
