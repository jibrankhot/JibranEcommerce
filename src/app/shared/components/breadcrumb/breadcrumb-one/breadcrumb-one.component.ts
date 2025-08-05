import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
  selector: 'app-breadcrumb-one',
  templateUrl: './breadcrumb-one.component.html',
  styleUrls: ['./breadcrumb-one.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BreadcrumbOneComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() full_width: boolean = false;
  @Input() shop_1600: boolean = false;
}
