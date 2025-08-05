import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { IProduct } from '../types/product-type';

@Injectable({
  providedIn: 'root'
})
export class CompareService {
  private compare_items: IProduct[] = [];
  private isBrowser: boolean;

  constructor(
    private toastrService: ToastrService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.compare_items = JSON.parse(localStorage.getItem('compare_products') || '[]');
    }
  }

  public getCompareProducts() {
    return this.compare_items;
  }

  add_compare_product(payload: IProduct) {
    const isAdded = this.compare_items.findIndex((p: IProduct) => p.id === payload.id);
    if (isAdded !== -1) {
      this.compare_items = this.compare_items.filter((p: IProduct) => p.id !== payload.id);
      this.toastrService.error(`${payload.title} removed from compare`);
    } else {
      this.compare_items.push(payload);
      this.toastrService.success(`${payload.title} added to compare`);
    }
    this.saveCompare();
  }

  removeCompare(payload: IProduct) {
    this.compare_items = this.compare_items.filter((p: IProduct) => p.id !== payload.id);
    this.toastrService.error(`${payload.title} removed from compare`);
    this.saveCompare();
  }

  private saveCompare() {
    if (this.isBrowser) {
      localStorage.setItem('compare_products', JSON.stringify(this.compare_items));
    }
  }
}
