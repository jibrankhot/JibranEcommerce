
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { CartService } from '../../../shared/services/cart.service';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-wishlist',
    templateUrl: './wishlist.component.html',
    styleUrls: ['./wishlist.component.scss'],
    imports: [SharedModule, FooterOneComponent, BreadcrumbOneComponent, HeaderTwoComponent]
})
export class WishlistComponent {

  constructor(public wishlistService: WishlistService, public cartService: CartService) { }
}
