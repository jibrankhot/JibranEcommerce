import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DomUtilsService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  runInBrowser(callback: () => void): void {
    if (isPlatformBrowser(this.platformId)) {
      callback();
    }
  }

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
