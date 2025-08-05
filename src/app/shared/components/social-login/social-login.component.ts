import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';

@Component({
    selector: 'app-social-login',
    templateUrl: './social-login.component.html',
    styleUrls: ['./social-login.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class SocialLoginComponent {

}
