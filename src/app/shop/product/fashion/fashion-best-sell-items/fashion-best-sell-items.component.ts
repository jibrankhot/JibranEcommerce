import { Component } from '@angular/core';
import { IProduct } from '../../../../shared/types/product-type';
import { SharedModule } from '../../../../shared.module';
import { ProductService } from '../../../../shared/services/product.service';
import { ProductItemTwoComponent } from "../product-item-two/product-item-two.component";


@Component({
    selector: 'app-fashion-best-sell-items',
    templateUrl: './fashion-best-sell-items.component.html',
    styleUrls: ['./fashion-best-sell-items.component.scss'],
    imports: [SharedModule, ProductItemTwoComponent]
})
export class FashionBestSellItemsComponent {

  public products: IProduct[] = [];

  constructor(public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.products = products.filter((p) => p.productType === "fashion")
        .slice()
        .sort((a, b) => b.sellCount - a.sellCount)
        .slice(0, 4);
    });
  }
}
