import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { SocialLinksComponent } from "../../social-links/social-links.component";

@Component({
  selector: 'app-footer-two',
  templateUrl: './footer-two.component.html',
  styleUrls: ['./footer-two.component.scss'],
  standalone: true,
  imports: [SharedModule, SocialLinksComponent]
})
export class FooterTwoComponent {

  getYear() {
    return new Date().getFullYear();
  }
}
