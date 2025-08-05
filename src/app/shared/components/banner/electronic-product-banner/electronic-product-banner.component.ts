import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { IProductBanner } from '../../../types/banner-d-type';
import { ProductBanner } from '../../../data/banner-data';

@Component({
  selector: 'app-electronic-product-banner',
  templateUrl: './electronic-product-banner.component.html',
  styleUrls: ['./electronic-product-banner.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ElectronicProductBannerComponent {

  // banner slider data
  public productBannerData: IProductBanner[] = ProductBanner;

  ngOnInit(): void {
    new Swiper('.tp-product-banner-slider-active', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: false,
      effect: 'fade',
      modules: [Pagination, EffectFade],
      pagination: {
        el: '.tp-product-banner-slider-dot',
        clickable: true,
      },
    });
  }
}
