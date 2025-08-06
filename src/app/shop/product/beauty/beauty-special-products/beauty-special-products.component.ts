import { Component, ElementRef, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { ProductService } from '../../../../shared/services/product.service';
import { IProduct } from '../../../../shared/types/product-type';
import { ProductItemThreeComponent } from "../product-item-three/product-item-three.component";
import { DomUtilsService } from '../../../../shared/services/dom-utils.service';


@Component({
  selector: 'app-beauty-special-products',
  templateUrl: './beauty-special-products.component.html',
  styleUrls: ['./beauty-special-products.component.scss'],
  imports: [SharedModule, ProductItemThreeComponent]
})
export class BeautySpecialProductsComponent {

  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;

  public products: IProduct[] = [];

  constructor(public productService: ProductService, private domUtil: DomUtilsService) {
    this.productService.products.subscribe((products) => {
      this.products = products.filter((p) => p.productType === "beauty").slice(-4);
    });
  }

  ngAfterViewInit() {
    this.domUtil.runInBrowser(() => {
      if (this.swiperContainer) {
        this.swiperInstance = new Swiper('.tp-special-slider-active', {
          slidesPerView: 1,
          spaceBetween: 0,
          effect: 'fade',
          modules: [Navigation, Pagination, EffectFade],
          pagination: {
            el: ".tp-special-slider-dot",
            clickable: true
          }
        });
      }
    });

  }

}
