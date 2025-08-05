
import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class ProductModalComponent {

  constructor(public utilsService: UtilsService) {

  }
}
