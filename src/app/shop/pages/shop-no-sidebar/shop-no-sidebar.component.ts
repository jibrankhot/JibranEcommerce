import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-shop-no-sidebar',
    templateUrl: './shop-no-sidebar.component.html',
    styleUrls: ['./shop-no-sidebar.component.scss'],
    imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterOneComponent]
})
export class ShopNoSidebarComponent {

}
