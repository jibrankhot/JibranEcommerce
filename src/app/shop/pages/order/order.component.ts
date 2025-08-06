import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss'],
    imports: [SharedModule, HeaderTwoComponent, BreadcrumbOneComponent, FooterOneComponent]
})
export class OrderComponent {

}
