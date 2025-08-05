import { Component, Input } from '@angular/core';

import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { CartService } from '../../../../shared/services/cart.service';
import { WishlistService } from '../../../../shared/services/wishlist.service';
import { UtilsService } from '../../../../shared/services/utils.service';

@Component({
  selector: 'app-product-item-three',
  templateUrl: './product-item-three.component.html',
  styleUrls: ['./product-item-three.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ProductItemThreeComponent {
  @Input() product!: IProduct;
  @Input() style_2: Boolean | undefined;
  @Input() isCenter: Boolean | undefined;
  @Input() primary_style: Boolean | undefined;

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
  productStatus(product: IProduct): boolean {
    return product.status === 'out-of-stock' || product.quantity === 0;
  }
}
