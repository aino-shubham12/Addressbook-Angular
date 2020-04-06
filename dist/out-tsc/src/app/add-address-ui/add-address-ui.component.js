import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AddAddressUIComponent = class AddAddressUIComponent {
    constructor(addressService) {
        this.addressService = addressService;
        this.formControls = this.addressService.form.controls;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.submitted = true;
        if (this.addressService.form.valid) {
            if (this.addressService.form.get('$key').value == null) {
                this.addressService.addAddress(this.addressService.form.value);
            }
            // else
            // {
            //   this.addressService.updateAddress(this.addressService.addressArray.indexOf(),this.addressService.form.value);
            // }
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
                Pincode: ''
            });
        }
    }
};
AddAddressUIComponent = __decorate([
    Component({
        selector: 'app-add-address-ui',
        templateUrl: './add-address-ui.component.html',
        styleUrls: ['./add-address-ui.component.css']
    })
], AddAddressUIComponent);
export { AddAddressUIComponent };
//# sourceMappingURL=add-address-ui.component.js.map