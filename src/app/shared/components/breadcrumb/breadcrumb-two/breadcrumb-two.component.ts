import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
    selector: 'app-breadcrumb-two',
    templateUrl: './breadcrumb-two.component.html',
    styleUrls: ['./breadcrumb-two.component.scss'],
    imports: [SharedModule]
})
export class BreadcrumbTwoComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
}
