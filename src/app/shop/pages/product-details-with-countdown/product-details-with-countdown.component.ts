import { Component } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { IProduct } from '../../../shared/types/product-type';
import { ProductService } from '../../../shared/services/product.service';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { RelatedProductsComponent } from "../../product/related-products/related-products.component";
import { ProductDetailsTabNavComponent } from "../../../shared/components/product-details-com/product-details-tab-nav/product-details-tab-nav.component";
import { ProductDetailsWrapperComponent } from "../../../shared/components/product-details-com/product-details-wrapper/product-details-wrapper.component";
import { ProductDetailsThumbComponent } from "../../../shared/components/product-details-com/product-details-thumb/product-details-thumb.component";
import { ShopDetailsBreadcrumbComponent } from "../../../shared/components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
  selector: 'app-product-details-with-countdown',
  templateUrl: './product-details-with-countdown.component.html',
  styleUrls: ['./product-details-with-countdown.component.scss'],
  standalone: true,
  imports: [SharedModule, FooterOneComponent, RelatedProductsComponent, ProductDetailsTabNavComponent, ProductDetailsWrapperComponent, ProductDetailsThumbComponent, ShopDetailsBreadcrumbComponent, HeaderTwoComponent]
})
export class ProductDetailsWithCountdownComponent {

  public product!: IProduct;

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products.find(p => p.offerDate?.endDate)!;
    });
  }
}
