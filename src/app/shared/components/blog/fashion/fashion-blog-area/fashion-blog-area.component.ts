
import { Component } from '@angular/core';
import { SharedModule } from '../../../../../shared.module';
import { IBlogType } from '../../../../types/blog-type';
import blogData from '../../../../data/blog-data';
import { BlogItemTwoComponent } from "../blog-item-two/blog-item-two.component";

@Component({
    selector: 'app-fashion-blog-area',
    templateUrl: './fashion-blog-area.component.html',
    styleUrls: ['./fashion-blog-area.component.scss'],
    imports: [SharedModule, BlogItemTwoComponent]
})
export class FashionBlogAreaComponent {
  public fashion_blogs: IBlogType[] = blogData.filter(b => b.blog === 'fashion')
}
