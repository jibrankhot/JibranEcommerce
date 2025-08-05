import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared.module';
import categoryData from '../../../data/category-data';
const categoryItems = categoryData.filter(c => c.productType === "beauty");


@Component({
  selector: 'app-beauty-category',
  templateUrl: './beauty-category.component.html',
  styleUrls: ['./beauty-category.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class BeautyCategoryComponent {

  categoryItems = categoryItems;

  constructor(private router: Router) { }

  handleParentCategory(value: string): void {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
  }
}
