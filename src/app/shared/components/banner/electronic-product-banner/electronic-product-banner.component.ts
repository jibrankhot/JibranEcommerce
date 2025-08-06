import { Component } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, EffectFade } from 'swiper/modules';
import { SharedModule } from '../../../../shared.module';
import { IProductBanner } from '../../../types/banner-d-type';
import { ProductBanner } from '../../../data/banner-data';
import { DomUtilsService } from '../../../services/dom-utils.service';

@Component({
  selector: 'app-electronic-product-banner',
  templateUrl: './electronic-product-banner.component.html',
  styleUrls: ['./electronic-product-banner.component.scss'],
  imports: [SharedModule]
})
export class ElectronicProductBannerComponent {

  // banner slider data
  public productBannerData: IProductBanner[] = ProductBanner;

  constructor(private domUtil: DomUtilsService) { }

  ngOnInit(): void {
    this.domUtil.runInBrowser(() => {
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
    });

  }
}
