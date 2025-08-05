import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { SharedModule } from '../../../../shared.module';


@Component({
  selector: 'app-cart-sidebar',
  templateUrl: './cart-sidebar.component.html',
  styleUrls: ['./cart-sidebar.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CartSidebarComponent {

  constructor(public cartService: CartService) { }
}
