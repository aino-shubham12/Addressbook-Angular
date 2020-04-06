import { __decorate } from "tslib";
import { Component } from '@angular/core';
let FindAddressUIComponent = class FindAddressUIComponent {
    constructor(addressService) {
        this.addressService = addressService;
        this.searchText = "";
    }
    ngOnInit() {
    }
    onDelete(i) {
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
};
FindAddressUIComponent = __decorate([
    Component({
        selector: 'app-find-address-ui',
        templateUrl: './find-address-ui.component.html',
        styleUrls: ['./find-address-ui.component.css']
    })
], FindAddressUIComponent);
export { FindAddressUIComponent };
//# sourceMappingURL=find-address-ui.component.js.map