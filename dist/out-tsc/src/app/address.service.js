import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
let AddressService = class AddressService {
    constructor(router) {
        this.router = router;
        this.addressArray = [];
        this.form = new FormGroup({
            $key: new FormControl(null),
            Pname: new FormControl('', Validators.required),
            Street: new FormControl('', Validators.required),
            City: new FormControl('', Validators.required),
            Mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
            Pincode: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }
    addAddress(address) {
        this.addressArray.push({
            Pname: address.Pname,
            Street: address.Street,
            City: address.City,
            Mobile: address.Mobile,
            Pincode: address.Pincode
        });
        console.log(this.addressArray);
    }
    updateAddress(i, address) {
        console.log(i);
        this.form.setValue({
            $key: '',
            Pname: address.Pname,
            Street: address.Street,
            City: address.City,
            Mobile: address.Mobile,
            Pincode: address.Pincode
        });
        this.router.navigate(['add']);
        this.addressArray.splice(i, 1, address);
        console.log("update done !");
        console.log(this.addressArray);
    }
};
AddressService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AddressService);
export { AddressService };
//# sourceMappingURL=address.service.js.map