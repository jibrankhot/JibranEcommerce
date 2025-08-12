import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { FashionHeaderComponent } from "../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss'],
    imports: [SharedModule, FooterOneComponent, FashionHeaderComponent]
})
export class NotFoundComponent {

}
