import { Component, Input } from '@angular/core';
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
  @Input() isMobile: boolean = false;

  public menu_data: IMenuItem[] = menu_data;
  public activeTab: IMenuItem | null = this.menu_data[0] ?? null;

  public openSubmenuId: string | number | null = null;

  toggleTab(item: IMenuItem) {
    this.activeTab = this.activeTab?.id === item.id ? null : item;
    this.openSubmenuId = null;
  }

  toggleSubmenu(submenuId: string | number) {
    this.openSubmenuId = this.openSubmenuId === submenuId ? null : submenuId;
  }

  isSubmenuOpen(submenuId: string | number): boolean {
    return this.openSubmenuId === submenuId;
  }
}
