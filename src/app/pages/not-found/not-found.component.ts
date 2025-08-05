import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    standalone: true,
    imports: [SharedModule, FooterOneComponent, HeaderTwoComponent]
})
export class NotFoundComponent {

}
