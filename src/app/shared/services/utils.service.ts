import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

import product_data from '../data/product-data';
import { IProduct } from '../types/product-type';
import { ProductService } from './product.service';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSearchOpen = false;
        this.isProductModalOpen = false;
        this.openMobileMenus = false;
        this.removeBackdropAndProductModal();
      }
    });
  }

  // Flags
  public videoUrl: string = 'https://www.youtube.com/embed/EW4ZYb3mCZk';
  public isVideoOpen: Boolean = false;
  public isSearchOpen: Boolean = false;
  public isProductModalOpen: Boolean = false;
  public openMobileMenus: Boolean = false;
  public iframeElement: HTMLIFrameElement | null = null;

  // Product modal
  public modalId: string = 'product-modal-641e887d05f9ee1717e1348a';
  public product: IProduct = product_data[0];

  // Open mobile sidebar
  handleOpenMobileMenu() {
    this.openMobileMenus = !this.openMobileMenus;
  }

  // Play video in modal
  playVideo(videoId: string) {
    if (!isPlatformBrowser(this.platformId)) return;

    const videoOverlay = document.querySelector('#video-overlay');
    this.videoUrl = `https://www.youtube.com/embed/${videoId}`;

    if (!this.iframeElement) {
      this.iframeElement = document.createElement('iframe');
      this.iframeElement.setAttribute('src', this.videoUrl);
      this.iframeElement.style.width = '60%';
      this.iframeElement.style.height = '80%';
    }

    this.isVideoOpen = true;
    videoOverlay?.classList.add('open');
    videoOverlay?.appendChild(this.iframeElement);
  }

  // Close video modal
  closeVideo() {
    if (!isPlatformBrowser(this.platformId)) return;

    const videoOverlay = document.querySelector('#video-overlay.open');

    if (this.iframeElement) {
      this.iframeElement.remove();
      this.iframeElement = null;
    }

    this.isVideoOpen = false;
    videoOverlay?.classList.remove('open');
  }

  // Toggle search bar
  handleSearchOpen() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  // Open product modal
  handleOpenModal(id: string, item: IProduct) {
    this.isProductModalOpen = true;
    this.modalId = id;
    this.product = item;
    this.productService.handleImageActive(item.img);
    this.cartService.initialOrderQuantity();
  }

  // Remove modal backdrop and hide modal
  removeBackdropAndProductModal() {
    if (!isPlatformBrowser(this.platformId)) return;

    const modalBackdrop = document.querySelector('.modal-backdrop');
    const product_modal = document.querySelector('.tp-product-modal.show') as HTMLElement;

    if (modalBackdrop) {
      modalBackdrop.remove();
      document.body.classList.remove('modal-open');
      document.body.removeAttribute('style');
    }

    if (product_modal) {
      product_modal.style.display = 'none';
    }
  }
}
