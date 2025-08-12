import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { IMenuItem } from '../../../types/menu-d-type';
import { menu_data } from '../../../data/menu-data';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],
  imports: [SharedModule]
})
export class MenuBarComponent {
  public menu_data: IMenuItem[] = menu_data;
}
