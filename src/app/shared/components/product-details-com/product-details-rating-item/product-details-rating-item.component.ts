import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-product-details-rating-item',
  templateUrl: './product-details-rating-item.component.html',
  styleUrls: ['./product-details-rating-item.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ProductDetailsRatingItemComponent {
  @Input() star!: number;
  @Input() width!: string;
}
