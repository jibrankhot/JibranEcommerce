import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { ICategory } from '../../../shared/types/category-type';
import category_data from '../../../shared/data/category-data';
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { HeaderTwoComponent } from "../../../shared/header/header-two/header-two.component";

@Component({
  selector: 'app-shop-category',
  templateUrl: './shop-category.component.html',
  styleUrls: ['./shop-category.component.scss'],
  standalone: true,
  imports: [SharedModule, FooterOneComponent, BreadcrumbOneComponent, HeaderTwoComponent]
})
export class ShopCategoryComponent {
  public category_data: ICategory[] = category_data;
  constructor(private router: Router) { }
  handleCategory(parent: string) {
    const category = parent.toLowerCase().split(' ').join('-');
    this.router.navigate(['/shop'], {
      queryParams: { category: category },
    });
  }
}
