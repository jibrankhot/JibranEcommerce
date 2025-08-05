import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../../shared.module';
import category_data from '../../../data/category-data';

@Component({
  selector: 'app-fashion-category',
  templateUrl: './fashion-category.component.html',
  styleUrls: ['./fashion-category.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FashionCategoryComponent {
  categoryItems = category_data.filter((c) => c.productType === "fashion");

  constructor(private router: Router) { }

  handleParentCategory(value: string) {
    const newCategory = value.toLowerCase().replace("&", "").split(" ").join("-");
    this.router.navigate(['/shop'], { queryParams: { category: newCategory } });
  }
}
