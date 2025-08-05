import { ViewportScroller } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import { IBlogType } from '../../../shared/types/blog-type';
import { ProductService } from '../../../shared/services/product.service';
import blogData from '../../../shared/data/blog-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BlogSidebarComponent } from "../../../shared/components/blog/blog-sidebar/blog-sidebar.component";
import { PaginationTwoComponent } from "../../../shared/ui/pagination-two/pagination-two.component";
import { BlogPostboxItemComponent } from "../../../shared/components/blog/blog-postbox-item/blog-postbox-item.component";
import { BreadcrumbTwoComponent } from "../../../shared/components/breadcrumb/breadcrumb-two/breadcrumb-two.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";


@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [SharedModule, FooterOneComponent, BlogSidebarComponent, PaginationTwoComponent, BlogPostboxItemComponent, BreadcrumbTwoComponent, HeaderTwoComponent]
})
export class BlogComponent {
  public blogs: IBlogType[] = [];
  public pageNo: number = 1;
  public paginate: any = {};
  public startIndex: number = 0;
  public endIndex: number = 4;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public productService: ProductService,
  ) { }

  ngOnInit() {
    this.blogs = blogData.filter((b) => b.blog === 'blog-postbox')
  }


  handlePagination(event: any): void {
    const { data, start, end } = event;
    console.log('data', data, 'start', start, 'end', end);
    this.startIndex = start;
    this.endIndex = end;
  }

  // }

  // product Pagination
  // setPage(page: number) {
  //   this.router
  //     .navigate([], {
  //       relativeTo: this.route,
  //       queryParams: { page: page },
  //       queryParamsHandling: 'merge', // preserve the existing query params in the route
  //     })
  //     .then(() => {
  //       this.viewScroller.setOffset([120, 120]);
  // Update the current page subject
  //       this.currentPageSubject.next(page);
  // Update Pagination
  //       this.updatePagination();
  //     });
  // }
}
