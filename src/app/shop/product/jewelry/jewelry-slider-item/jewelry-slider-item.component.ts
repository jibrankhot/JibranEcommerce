import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { UtilsService } from '../../../../shared/services/utils.service';

@Component({
  selector: 'app-jewelry-slider-item',
  templateUrl: './jewelry-slider-item.component.html',
  styleUrls: ['./jewelry-slider-item.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class JewelrySliderItemComponent {

  @Input() product!: IProduct;

  constructor(
    public cartService: CartService,
    public wishlistService: WishlistService,
    public utilsService: UtilsService,
  ) { }
  // add to cart
  addToCart(product: IProduct) {
    this.cartService.addCartProduct(product);
  }
  // add to cart
  addToWishlist(product: IProduct) {
    this.wishlistService.add_wishlist_product(product);
  }

  // Function to check if an item is in the cart
  isItemInCart(item: IProduct): boolean {
    return this.cartService.getCartProducts().some((prd: IProduct) => prd.id === item.id);
  }
  isItemInWishlist(item: IProduct): boolean {
    return this.wishlistService.getWishlistProducts().some((prd: IProduct) => prd.id === item.id);
  }
}
