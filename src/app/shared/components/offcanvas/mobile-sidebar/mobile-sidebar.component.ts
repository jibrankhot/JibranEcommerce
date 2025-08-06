import { Component, Input } from '@angular/core';
import { mobile_menu } from '../../../data/menu-data';
import { SharedModule } from '../../../../shared.module';
import { IMobileType } from '../../../types/menu-d-type';
import category_data from '../../../data/category-data';
import { UtilsService } from '../../../services/utils.service';

@Component({
    selector: 'app-mobile-sidebar',
    templateUrl: './mobile-sidebar.component.html',
    styleUrls: ['./mobile-sidebar.component.scss'],
    imports: [SharedModule]
})
export class MobileSidebarComponent {

  @Input() product_type!: string;

  public mobile_menu: IMobileType[] = mobile_menu;
  public isCategoryActive: boolean = false;
  public openCategory: string = '';
  public isActiveMenu: string = '';
  public isToggleActive: string = '';

  filterCategories() {
    return category_data.filter(
      (c) => c.productType.toLowerCase() === this.product_type.toLowerCase()
    );
  }

  constructor(public utilsService: UtilsService) { }

  toggleCategoryActive() {
    this.isCategoryActive = !this.isCategoryActive;
  }


  handleOpenSubMenu(title: string) {
    this.isActiveMenu = (this.isActiveMenu === title) ? '' : title;
  }

  handleOpenSubCategory(title: string) {
    if (title === this.openCategory) {
      this.openCategory = "";
    } else {
      this.openCategory = title;
    }
  };

  handleToggleActive = (type: string) => {
    if (type === this.isToggleActive) {
      this.isToggleActive = "";
    } else {
      this.isToggleActive = type;
    }
  };
}
