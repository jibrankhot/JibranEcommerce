import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import blogData from '../../../data/blog-data';

@Component({
  selector: 'app-blog-sidebar',
  templateUrl: './blog-sidebar.component.html',
  styleUrls: ['./blog-sidebar.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BlogSidebarComponent {
  public latest_blogs = blogData.slice(-3)
}
