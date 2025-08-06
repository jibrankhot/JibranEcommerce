import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IBlogType } from '../../../types/blog-type';
import { BlogSidebarComponent } from "../blog-sidebar/blog-sidebar.component";
import { BlogReplyFormComponent } from "../../forms/blog-reply-form/blog-reply-form.component";

@Component({
    selector: 'app-blog-details-area',
    templateUrl: './blog-details-area.component.html',
    styleUrls: ['./blog-details-area.component.scss'],
    imports: [SharedModule, BlogSidebarComponent, BlogReplyFormComponent]
})
export class BlogDetailsAreaComponent {
  @Input() blog!: IBlogType
}
