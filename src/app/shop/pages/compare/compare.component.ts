
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared.module';
import { CompareService } from '../../../shared/services/compare.service';
import { CartService } from '../../../shared/services/cart.service';
import { FashionHeaderComponent } from "../../../shared/header/fashionHeaderComponent/fashionheadercomponent";
import { BreadcrumbOneComponent } from "../../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { FooterOneComponent } from "../../../shared/footer/footer-one/footer-one.component";

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss'],
  imports: [SharedModule, FashionHeaderComponent, BreadcrumbOneComponent, FooterOneComponent]
})
export class CompareComponent {

  constructor(public compareService: CompareService, public cartService: CartService) { }
}
