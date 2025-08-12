import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.scss'],
    imports: [SharedModule, ShopAreaComponent, FooterOneComponent, BreadcrumbOneComponent, FashionHeaderComponent]
})
export class ShopListComponent {

}
