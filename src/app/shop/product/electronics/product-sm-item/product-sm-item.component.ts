
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';

@Component({
    selector: 'app-product-sm-item',
    templateUrl: './product-sm-item.component.html',
    styleUrls: ['./product-sm-item.component.scss'],
    imports: [SharedModule]
})
export class ProductSmItemComponent {
  @Input() product!: IProduct;
}
