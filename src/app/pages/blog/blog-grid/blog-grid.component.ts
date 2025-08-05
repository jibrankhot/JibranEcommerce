import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { IBlogType } from '../../../shared/types/blog-type';
import blogData from '../../../shared/data/blog-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BlogSidebarComponent } from "../../../shared/components/blog/blog-sidebar/blog-sidebar.component";
import { PaginationTwoComponent } from "../../../shared/ui/pagination-two/pagination-two.component";
import { BlogListItemComponent } from "../../../shared/components/blog/blog-list-item/blog-list-item.component";
import { BlogGridItemComponent } from "../../../shared/components/blog/blog-grid-item/blog-grid-item.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";


@Component({
  selector: 'app-blog-grid',
  templateUrl: './blog-grid.component.html',
  styleUrls: ['./blog-grid.component.scss'],
  standalone: true,
  imports: [SharedModule, FooterOneComponent, BlogSidebarComponent, PaginationTwoComponent, BlogListItemComponent, BlogGridItemComponent, HeaderTwoComponent]
})
export class BlogGridComponent {
  @Input() list_style: boolean = false;
  public blogs: IBlogType[] = [];
  public startIndex: number = 0;
  public endIndex: number = 6;

  ngOnInit() {
    this.blogs = blogData.filter((b) => b.blog === 'blog-grid');
  }

  handlePagination(event: any): void {
    const { data, start, end } = event;
    console.log('data', data, 'start', start, 'end', end);
    this.startIndex = start;
    this.endIndex = end;
  }
}
