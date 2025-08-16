import { Component, Input } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { UtilsService } from '../../../services/utils.service';
import { MenuBarComponent } from '../../../header/header-com/menu-bar/menu-bar.component';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss'],
  imports: [SharedModule, MenuBarComponent]
})
export class MobileSidebarComponent {
  @Input() product_type!: string;

  constructor(public utilsService: UtilsService) { }
}
