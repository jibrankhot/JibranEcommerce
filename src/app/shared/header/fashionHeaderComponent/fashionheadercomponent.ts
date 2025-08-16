import { Router } from '@angular/router';
import { Component, HostListener, Input } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { UtilsService } from '../../services/utils.service';
import { MenuBarComponent } from "../header-com/menu-bar/menu-bar.component";
import { CartSidebarComponent } from "../../components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MobileSidebarComponent } from "../../components/offcanvas/mobile-sidebar/mobile-sidebar.component";

@Component({
  selector: 'app-fashion-header',
  templateUrl: './fashionheadercomponent.html',
  styleUrls: ['./fashionheadercomponent.scss'],
  imports: [SharedModule, MenuBarComponent, CartSidebarComponent, MobileSidebarComponent]
})
export class FashionHeaderComponent {
  @Input() style_2: boolean = false;

  public searchText: string = '';
  public sticky: boolean = false;
  public isMobile: boolean = window.innerWidth < 992;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router
  ) { }

  @HostListener('window:scroll', ['$event'])
  onscroll() {
    this.sticky = window.scrollY > 80;
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth < 992;
  }

  handleSearchSubmit() {
    if (!this.searchText) return;
    this.router.navigate(['/pages/search'], {
      queryParams: { searchText: this.searchText }
    });
  }
}
