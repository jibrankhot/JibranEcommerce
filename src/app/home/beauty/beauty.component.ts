import { Component } from '@angular/core';
// import feature_data, { IFeature } from '@/data/feature-data';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


import { SharedModule } from '../../shared.module';
import { ProductService } from '../../shared/services/product.service';
import { IProduct } from '../../shared/types/product-type';
import feature_data, { IFeature } from '../../shared/data/feature-data';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { BeautyTestimonialComponent } from "../../shared/components/testimonial/beauty-testimonial/beauty-testimonial.component";
import { BeautySpecialProductsComponent } from "../../shop/product/beauty/beauty-special-products/beauty-special-products.component";
import { BeautyAllProductsComponent } from "../../shop/product/beauty/beauty-all-products/beauty-all-products.component";
import { CountdownTimerComponent } from "../../shared/components/countdown-timer/countdown-timer.component";
import { ProductItemThreeComponent } from "../../shop/product/beauty/product-item-three/product-item-three.component";
import { BeautyCategoryComponent } from "../../shared/components/category/beauty-category/beauty-category.component";
import { HeroBannerThreeComponent } from "../../shared/components/hero-banner/hero-banner-three/hero-banner-three.component";
import { HeaderThreeComponent } from "../../shared/header/header-three/header-three.component";

@Component({
  selector: 'app-beauty',
  imports: [SharedModule, FooterOneComponent, BeautyTestimonialComponent, BeautySpecialProductsComponent, BeautyAllProductsComponent, CountdownTimerComponent, ProductItemThreeComponent, BeautyCategoryComponent, HeroBannerThreeComponent, HeaderThreeComponent],
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.scss'],
  standalone: true
})
export class BeautyComponent {

  // featured_data
  public featured_data = [
    {
      id: 1,
      img: '/assets/img/product/featured/featured-1.png',
      title: 'Matte Liquid <br /> Lipstick & Lip Liner',
      subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
      save: 72,
    },
    {
      id: 2,
      img: '/assets/img/product/featured/featured-2.png',
      title: 'Crushed Liquid <br /> Lip  - Cherry Crush',
      subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
      save: 98,
    },
    {
      id: 3,
      img: '/assets/img/product/featured/featured-3.png',
      title: 'Mega Waterproof <br /> Concealer  - 125 Bisque',
      subtitle: 'Molestias internos et commodi tempora dolores sapiente sed iste.',
      save: 133,
    },
  ]

  // best sell products
  public products: IProduct[] = [];
  public feature_items: IFeature[] = feature_data;

  constructor(private sanitizer: DomSanitizer, public productService: ProductService) {
    this.productService.products.subscribe((products) => {
      this.products = products.filter((p) => p.productType === "beauty")
        .slice()
        .sort((a, b) => (b.sellCount ?? 0) - (a.sellCount ?? 0))
        .slice(0, 8);
    });
  }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // instagram data
  public instagram_data = [
    { id: 1, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-1.jpg' },
    { id: 2, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-2.jpg' },
    { id: 3, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-3.jpg' },
    { id: 4, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-4.jpg' },
    { id: 5, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-5.jpg' },
    { id: 6, link: "https://www.instagram.com/", img: '/assets/img/instagram/3/instagram-6.jpg' },
  ]
}
