import { Routes } from "@angular/router";
import { authGuard } from "../shared/services/auth.guard";
import { ShopListComponent } from "./pages/shop-list/shop-list.component";
import { ShopFullWidthComponent } from "./pages/shop-full-width/shop-full-width.component";
import { ShopSixteenThousandPxComponent } from "./pages/shop-sixteen-thousand-px/shop-sixteen-thousand-px.component";
import { ShopRightSidebarComponent } from "./pages/shop-right-sidebar/shop-right-sidebar.component";
import { ShopNoSidebarComponent } from "./pages/shop-no-sidebar/shop-no-sidebar.component";
import { ShopFilterDropdownComponent } from "./pages/shop-filter-dropdown/shop-filter-dropdown.component";
import { ShopFilterOffcanvasComponent } from "./pages/shop-filter-offcanvas/shop-filter-offcanvas.component";
import { ShopLoadMoreComponent } from "./pages/shop-load-more/shop-load-more.component";
import { ShopCategoryComponent } from "./pages/shop-category/shop-category.component";
import { ProductDetailsComponent } from "./pages/product-details/product-details.component";
import { DynamicProductDetailsComponent } from "./pages/dynamic-product-details/dynamic-product-details.component";
import { ProductDetailsWithVideoComponent } from "./pages/product-details-with-video/product-details-with-video.component";
import { ProductDetailsWithCountdownComponent } from "./pages/product-details-with-countdown/product-details-with-countdown.component";
import { ProductDetailsListComponent } from "./pages/product-details-list/product-details-list.component";
import { ProductDetailsGalleryComponent } from "./pages/product-details-gallery/product-details-gallery.component";
import { CartComponent } from "./pages/cart/cart.component";
import { WishlistComponent } from "./pages/wishlist/wishlist.component";
import { CompareComponent } from "./pages/compare/compare.component";
import { OrderComponent } from "./pages/order/order.component";
import { ShopComponent } from "./pages/shop/shop.component";

export const shopRoutes: Routes = [
    { path: '', canActivate: [authGuard], component: ShopComponent, title: 'Shop Page' },
    { path: 'shop-list', canActivate: [authGuard], component: ShopListComponent, title: 'Shop List Page' },
    { path: 'shop-full-width', canActivate: [authGuard], component: ShopFullWidthComponent, title: 'Shop Full Width Page' },
    { path: 'shop-1600', canActivate: [authGuard], component: ShopSixteenThousandPxComponent, title: 'Shop 1600 Page' },
    { path: 'shop-right-sidebar', canActivate: [authGuard], component: ShopRightSidebarComponent, title: 'Shop Right Sidebar Page' },
    { path: 'shop-no-sidebar', canActivate: [authGuard], component: ShopNoSidebarComponent, title: 'Shop No Sidebar Page' },
    { path: 'shop-filter-dropdown', canActivate: [authGuard], component: ShopFilterDropdownComponent, title: 'Shop Filter Dropdown Page' },
    { path: 'shop-filter-offcanvas', canActivate: [authGuard], component: ShopFilterOffcanvasComponent, title: 'Shop Filter Offcanvas Page' },
    { path: 'shop-load-more', canActivate: [authGuard], component: ShopLoadMoreComponent, title: 'Shop Load More Page' },
    { path: 'shop-category', canActivate: [authGuard], component: ShopCategoryComponent, title: 'Shop Category Page' },
    { path: 'shop-details', canActivate: [authGuard], component: ProductDetailsComponent, title: 'Shop Details Page' },
    { path: 'shop-details/:id', canActivate: [authGuard], component: DynamicProductDetailsComponent, title: 'Shop Details Page' },
    { path: 'shop-details-with-video', canActivate: [authGuard], component: ProductDetailsWithVideoComponent, title: 'Shop Details With Video Page' },
    { path: 'shop-details-with-countdown', canActivate: [authGuard], component: ProductDetailsWithCountdownComponent, title: 'Shop Details With Countdown Page' },
    { path: 'shop-details-list', canActivate: [authGuard], component: ProductDetailsListComponent, title: 'Shop Details List Page' },
    { path: 'shop-details-gallery', canActivate: [authGuard], component: ProductDetailsGalleryComponent, title: 'Shop Details Gallery Page' },
    { path: 'cart', canActivate: [authGuard], component: CartComponent, title: 'Shop cart Page' },
    { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent, title: 'Shop Wishlist Page' },
    { path: 'compare', canActivate: [authGuard], component: CompareComponent, title: 'Shop Compare Page' },
    { path: 'order', canActivate: [authGuard], component: OrderComponent, title: 'Shop Order Page' },
];

