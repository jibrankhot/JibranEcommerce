import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductService } from '../../../../shared/services/product.service';
import { ProductItemOneComponent } from "../product-item-one/product-item-one.component";

@Component({
    selector: 'app-electronic-gadget-products',
    templateUrl: './electronic-gadget-products.component.html',
    styleUrls: ['./electronic-gadget-products.component.scss'],
    imports: [SharedModule, ProductItemOneComponent]
})
export class ElectronicGadgetProductsComponent {
  // electronic prd
  public electronic_prd: IProduct[] = [];
  // product gadget items
  public product_gadget: IProduct[] = [];

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.electronic_prd = products.filter((p) => p.productType === 'electronics');
      this.product_gadget = products.filter((p) => p.productType === 'electronics').slice(0, 6);
    });
  }
}
