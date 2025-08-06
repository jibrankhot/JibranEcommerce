import { Component, HostListener } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { UtilsService } from '../../services/utils.service';
import { MobileSidebarComponent } from "../../components/offcanvas/mobile-sidebar/mobile-sidebar.component";
import { HeaderSearchComponent } from "../header-com/header-search/header-search.component";
import { CartSidebarComponent } from "../../components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MenuBarComponent } from "../header-com/menu-bar/menu-bar.component";

@Component({
    selector: 'app-header-four',
    templateUrl: './header-four.component.html',
    styleUrls: ['./header-four.component.scss'],
    imports: [SharedModule, MobileSidebarComponent, HeaderSearchComponent, CartSidebarComponent, MenuBarComponent]
})
export class HeaderFourComponent {

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
  ) { }

  sticky: boolean = false;
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.sticky = true
    }
    else {
      this.sticky = false
    }
  }
}
