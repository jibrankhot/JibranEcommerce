import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss'],
    standalone: true,
    imports: [SharedModule, ShopAreaComponent, FooterOneComponent, BreadcrumbOneComponent, HeaderTwoComponent]
})
export class ShopListComponent {

}
