import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ProductService } from '../../../shared/services/product.service';
import { IProduct } from '../../../shared/types/product-type';
import { RelatedProductsComponent } from "../../product/related-products/related-products.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { ProductDetailsTabNavComponent } from "../../../shared/components/product-details-com/product-details-tab-nav/product-details-tab-nav.component";
import { ProductDetailsWrapperComponent } from "../../../shared/components/product-details-com/product-details-wrapper/product-details-wrapper.component";
import { ProductDetailsThumbComponent } from "../../../shared/components/product-details-com/product-details-thumb/product-details-thumb.component";
import { ShopDetailsBreadcrumbComponent } from "../../../shared/components/breadcrumb/shop-details-breadcrumb/shop-details-breadcrumb.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  standalone: true,
  imports: [SharedModule, RelatedProductsComponent, FooterOneComponent, ProductDetailsTabNavComponent, ProductDetailsWrapperComponent, ProductDetailsThumbComponent, ShopDetailsBreadcrumbComponent, HeaderTwoComponent]
})
export class ProductDetailsComponent {
  public product!: IProduct;

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.product = products[0];
    });
  }
}
