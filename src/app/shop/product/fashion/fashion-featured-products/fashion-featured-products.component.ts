import { Component, Inject, PLATFORM_ID } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import { SharedModule } from '../../../../shared.module';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductService } from '../../../../shared/services/product.service';
import { isPlatformBrowser } from '@angular/common';
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';

@Component({
  selector: 'app-fashion-featured-products',
  templateUrl: './fashion-featured-products.component.html',
  styleUrls: ['./fashion-featured-products.component.scss'],
  imports: [SharedModule]
})
export class FashionFeaturedProductsComponent {

  public fashion_prd: IProduct[] = [];

  constructor(public productService: ProductService,
    private domUtils: DomUtilsService) {
    this.productService.products.subscribe((products) => {
      this.fashion_prd = products.filter((p) => p.productType === "fashion")
        .filter((p) => p.featured);
    });
  }

  ngOnInit(): void {
    this.domUtils.runInBrowser(() => {
      new Swiper('.tp-featured-slider-active', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: false,
        modules: [Navigation, Pagination],
        pagination: {
          el: '.tp-featured-slider-dot',
          clickable: true,
        },
        navigation: {
          nextEl: '.tp-featured-slider-button-next',
          prevEl: '.tp-featured-slider-button-prev',
        },
        breakpoints: {
          '1200': {
            slidesPerView: 3,
          },
          '992': {
            slidesPerView: 3,
          },
          '768': {
            slidesPerView: 2,
          },
          '576': {
            slidesPerView: 1,
          },
          '0': {
            slidesPerView: 1,
          },
        },
      });
    });
  }
}
