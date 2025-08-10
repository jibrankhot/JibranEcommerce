import { Router } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { UtilsService } from '../../services/utils.service';
import { HeaderTopBarComponent } from "../header-com/header-top-bar/header-top-bar.component";
import { MenuBarComponent } from "../header-com/menu-bar/menu-bar.component";
import { CartSidebarComponent } from "../../components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MobileSidebarComponent } from "../../components/offcanvas/mobile-sidebar/mobile-sidebar.component";

@Component({
  selector: 'app-header-two',
  templateUrl: './header-two.component.html',
  styleUrls: ['./header-two.component.scss'],
  imports: [SharedModule, MenuBarComponent, CartSidebarComponent, MobileSidebarComponent]
})
export class HeaderTwoComponent {
  @Input() style_2: boolean = false;

  public searchText: string = '';

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router
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

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText) {
      return
    }
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      this.router.navigate(['/pages/search'], { queryParams });
    }
  }
}
