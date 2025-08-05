import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { ShopAreaComponent } from "../../shop-area/shop-area.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
    selector: 'app-shop-no-sidebar',
    templateUrl: './shop-no-sidebar.component.html',
    styleUrls: ['./shop-no-sidebar.component.scss'],
    standalone: true,
    imports: [SharedModule, HeaderTwoComponent, BreadcrumbOneComponent, ShopAreaComponent, FooterOneComponent]
})
export class ShopNoSidebarComponent {

}
