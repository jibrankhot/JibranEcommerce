import { Component, Input } from '@angular/core';
import { IBlogType } from '../../../types/blog-type';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-blog-grid-item',
  templateUrl: './blog-grid-item.component.html',
  styleUrls: ['./blog-grid-item.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BlogGridItemComponent {
  @Input() blog!: IBlogType;
}
