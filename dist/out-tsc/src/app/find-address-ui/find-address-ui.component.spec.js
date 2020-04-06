import { async, TestBed } from '@angular/core/testing';
import { FindAddressUIComponent } from './find-address-ui.component';
describe('FindAddressUIComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FindAddressUIComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FindAddressUIComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=find-address-ui.component.spec.js.map