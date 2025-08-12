import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { ContactFormComponent } from "../../shared/components/forms/contact-form/contact-form.component";
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    imports: [SharedModule, FooterOneComponent, ContactFormComponent, FashionHeaderComponent]
})
export class ContactComponent {

}
