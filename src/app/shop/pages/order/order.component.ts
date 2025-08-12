import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, FooterOneComponent]
})
export class OrderComponent {

}
