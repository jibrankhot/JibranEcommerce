
import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../../shared.module';
import { IBlogType } from '../../../../types/blog-type';

@Component({
    selector: 'app-blog-item-two',
    templateUrl: './blog-item-two.component.html',
    styleUrls: ['./blog-item-two.component.scss'],
    imports: [SharedModule]
})
export class BlogItemTwoComponent {

  @Input() blog!: IBlogType
}
