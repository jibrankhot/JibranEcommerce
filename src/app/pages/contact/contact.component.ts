import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { ContactFormComponent } from "../../shared/components/forms/contact-form/contact-form.component";
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    standalone: true,
    imports: [SharedModule, FooterOneComponent, ContactFormComponent, HeaderTwoComponent]
})
export class ContactComponent {

}
