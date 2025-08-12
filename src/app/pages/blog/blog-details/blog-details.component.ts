import { Component } from '@angular/core';

import { SharedModule } from '../../../shared.module';
import blogData from '../../../shared/data/blog-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BlogDetailsAreaComponent } from "../../../shared/components/blog/blog-details-area/blog-details-area.component";
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss'],
  imports: [SharedModule, FooterOneComponent, BlogDetailsAreaComponent, FashionHeaderComponent]
})
export class BlogDetailsComponent {
  public blog = blogData[0]
}
