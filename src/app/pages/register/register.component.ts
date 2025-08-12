import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { RegisterFormComponent } from "../../shared/components/forms/register-form/register-form.component";
import { SocialLoginComponent } from "../../shared/components/social-login/social-login.component";
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    imports: [SharedModule, FooterOneComponent, RegisterFormComponent, SocialLoginComponent, FashionHeaderComponent]
})
export class RegisterComponent {

}
