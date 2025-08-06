import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { InstagramAreaOneComponent } from "../../shared/components/instagram/instagram-area-one/instagram-area-one.component";
import { ElectronicBlogAreaComponent } from "../../shared/components/blog/electronic/electronic-blog-area/electronic-blog-area.component";
import { ElectronicSmProductsComponent } from "../../shop/product/electronics/electronic-sm-products/electronic-sm-products.component";
import { ElectronicNewProductsComponent } from "../../shop/product/electronics/electronic-new-products/electronic-new-products.component";
import { ElectronicProductBannerComponent } from "../../shared/components/banner/electronic-product-banner/electronic-product-banner.component";
import { ElectronicGadgetProductsComponent } from "../../shop/product/electronics/electronic-gadget-products/electronic-gadget-products.component";
import { ElectronicOfferProductsComponent } from "../../shop/product/electronics/electronic-offer-products/electronic-offer-products.component";
import { ElectronicTrendingProductsComponent } from "../../shop/product/electronics/electronic-trending-products/electronic-trending-products.component";
import { FeatureOneComponent } from "../../shared/components/feature/feature-one/feature-one.component";
import { ElectronicCategoryComponent } from "../../shared/components/category/electronic-category/electronic-category.component";
import { HeroBannerOneComponent } from "../../shared/components/hero-banner/hero-banner-one/hero-banner-one.component";
import { HeaderOneComponent } from "../../shared/header/header-one/header-one.component";


@Component({
    selector: 'app-electronics',
    templateUrl: './electronics.component.html',
    styleUrls: ['./electronics.component.scss'],
    imports: [SharedModule, FooterOneComponent, InstagramAreaOneComponent, ElectronicBlogAreaComponent, ElectronicSmProductsComponent, ElectronicNewProductsComponent, ElectronicProductBannerComponent, ElectronicGadgetProductsComponent, ElectronicOfferProductsComponent, ElectronicTrendingProductsComponent, FeatureOneComponent, ElectronicCategoryComponent, HeroBannerOneComponent, HeaderOneComponent]
})
export class ElectronicsComponent {

}
