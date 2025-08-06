import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";
import { SocialLoginComponent } from "../../shared/components/social-login/social-login.component";
import { LoginFormComponent } from "../../shared/components/forms/login-form/login-form.component";
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    imports: [SharedModule, HeaderTwoComponent, SocialLoginComponent, LoginFormComponent, FooterOneComponent]
})
export class LoginComponent {

}
