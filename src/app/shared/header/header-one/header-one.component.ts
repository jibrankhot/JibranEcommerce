import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../types/product-type';
import { CartService } from '../../services/cart.service';
import { WishlistService } from '../../services/wishlist.service';
import { UtilsService } from '../../services/utils.service';
import { MobileSidebarComponent } from "../../components/offcanvas/mobile-sidebar/mobile-sidebar.component";
import { CartSidebarComponent } from "../../components/offcanvas/cart-sidebar/cart-sidebar.component";
import { MenuBarComponent } from "../header-com/menu-bar/menu-bar.component";
import { HeaderCategoryComponent } from "../header-com/header-category/header-category.component";
import { NiceSelectComponent } from "../../ui/nice-select/nice-select.component";
import { HeaderTopBarComponent } from "../header-com/header-top-bar/header-top-bar.component";

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.scss'],
  imports: [SharedModule, MobileSidebarComponent, CartSidebarComponent, MenuBarComponent, HeaderCategoryComponent, NiceSelectComponent, HeaderTopBarComponent]
})
export class HeaderOneComponent {

  public products: IProduct[] = [];
  public searchText: string = '';
  public productType: string = '';

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
    private router: Router
  ) { }

  // select options for header category
  public niceSelectOptions = [
    { value: 'select-category', text: 'Select Category' },
    { value: 'electronics', text: 'Electronics' },
    { value: 'fashion', text: 'Fashion' },
    { value: 'beauty', text: 'Beauty' },
    { value: 'jewelry', text: 'Jewelry' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
    this.productType = selectedOption.value;
  }

  headerSticky: boolean = false;

  // sticky nav
  @HostListener('window:scroll', ['$event']) onscroll() {
    if (window.scrollY > 80) {
      this.headerSticky = true;
    } else {
      this.headerSticky = false;
    }
  }

  handleSearchSubmit() {
    const queryParams: { [key: string]: string | null } = {};
    if (!this.searchText && !this.productType) {
      return
    }
    else {
      if (this.searchText) {
        queryParams['searchText'] = this.searchText;
      }
      if (this.productType) {
        queryParams['productType'] = this.productType;
      }
      this.router.navigate(['/pages/search'], { queryParams });
    }
  }
}
