import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-shop-right-sidebar',
    templateUrl: './shop-right-sidebar.component.html',
    styleUrls: ['./shop-right-sidebar.component.scss'],
    imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterOneComponent]
})
export class ShopRightSidebarComponent {

}
