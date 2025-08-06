import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swiper from 'swiper';
import { SharedModule } from '../../../../shared.module';
import { UtilsService } from '../../../services/utils.service';
import { IBlogType } from '../../../types/blog-type';
import { DomUtilsService } from '../../../services/dom-utils.service';

@Component({
  selector: 'app-blog-postbox-item',
  templateUrl: './blog-postbox-item.component.html',
  styleUrls: ['./blog-postbox-item.component.scss'],
  imports: [SharedModule]
})
export class BlogPostboxItemComponent {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;
  public swiperInstance: Swiper | undefined;

  @Input() blog!: IBlogType;

  constructor(
    public utilsService: UtilsService,
    public sanitizer: DomSanitizer,
    private domUtil: DomUtilsService
  ) { };

  ngAfterViewInit() {
    this.domUtil.runInBrowser(() => {
      if (this.swiperContainer) {
        this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
          slidesPerView: 1,
          spaceBetween: 0,
          autoplay: {
            delay: 3000,
          },
        });
      }
    });

  }
}
