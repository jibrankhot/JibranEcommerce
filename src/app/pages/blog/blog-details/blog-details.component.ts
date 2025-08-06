import { Component } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import blogData from '../../../shared/data/blog-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BlogDetailsAreaComponent } from "../../../shared/components/blog/blog-details-area/blog-details-area.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-blog-details',
    templateUrl: './blog-details.component.html',
    styleUrls: ['./blog-details.component.scss'],
    imports: [SharedModule, FooterOneComponent, BlogDetailsAreaComponent, HeaderTwoComponent]
})
export class BlogDetailsComponent {
  public blog = blogData[0]
}
