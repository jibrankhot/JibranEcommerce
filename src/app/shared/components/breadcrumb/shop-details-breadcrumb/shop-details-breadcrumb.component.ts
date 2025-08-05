
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../types/product-type';

@Component({
  selector: 'app-shop-details-breadcrumb',
  templateUrl: './shop-details-breadcrumb.component.html',
  styleUrls: ['./shop-details-breadcrumb.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ShopDetailsBreadcrumbComponent {
  @Input() product!: IProduct
}
