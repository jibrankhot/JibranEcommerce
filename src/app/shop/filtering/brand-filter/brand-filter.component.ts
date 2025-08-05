import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

import { SharedModule } from '../../../shared.module';
import { IBrand } from '../../../shared/types/brand-type';
import brands_data from '../../../shared/data/brand-data';
import { ProductService } from '../../../shared/services/product.service';

@Component({
  selector: 'app-brand-filter',
  templateUrl: './brand-filter.component.html',
  styleUrls: ['./brand-filter.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BrandFilterComponent {
  public brandsData: IBrand[] = brands_data;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private viewScroller: ViewportScroller,
    public productService: ProductService
  ) { }

  handleBrandRoute(value: string) {
    const newBrand = value.toLowerCase().replace('&', '').split(' ').join('-');
    // Define the query parameters as an object
    const queryParams: Params = {
      brand: newBrand,
    };
    this.router
      .navigate([], {
        relativeTo: this.route,
        queryParams, // Pass the queryParams object here
        queryParamsHandling: 'merge',
        skipLocationChange: false,
      })
      .finally(() => {
        this.viewScroller.setOffset([120, 120]);
        this.viewScroller.scrollToAnchor('products'); // Anchore Link
      });
  }
}
