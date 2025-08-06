import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SharedModule } from '../../../shared.module';
import { IBlogType } from '../../../shared/types/blog-type';
import blogData from '../../../shared/data/blog-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BlogDetailsAreaComponent } from "../../../shared/components/blog/blog-details-area/blog-details-area.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-dynamic-blog-details',
    templateUrl: './dynamic-blog-details.component.html',
    styleUrls: ['./dynamic-blog-details.component.scss'],
    imports: [SharedModule, FooterOneComponent, BlogDetailsAreaComponent, HeaderTwoComponent]
})
export class DynamicBlogDetailsComponent {

  public blog: IBlogType | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const blogId = this.route.snapshot.paramMap.get('id');
    if (blogId) {
      this.blog = blogData.find(b => b.id === Number(blogId))
    }
    else {
      this.router.navigate(['/404']);
    }
  }
}
