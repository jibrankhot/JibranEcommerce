
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import category_data from '../../../data/category-data';

@Component({
    selector: 'app-electronic-category',
    templateUrl: './electronic-category.component.html',
    styleUrls: ['./electronic-category.component.scss'],
    imports: [SharedModule]
})
export class ElectronicCategoryComponent {

  public category_items = category_data.filter(
    (c) => c.productType === "electronics"
  );
}
