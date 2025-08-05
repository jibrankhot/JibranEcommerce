
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../../shared.module';
import { IBlogType } from '../../../../types/blog-type';

@Component({
  selector: 'app-blog-item-one',
  templateUrl: './blog-item-one.component.html',
  styleUrls: ['./blog-item-one.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BlogItemOneComponent {

  @Input() blog!: IBlogType
}
