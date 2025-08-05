import { Component } from '@angular/core';
import { SharedModule } from '../../../../shared.module';

@Component({
    selector: 'app-jewelry-banner',
    templateUrl: './jewelry-banner.component.html',
    styleUrls: ['./jewelry-banner.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class JewelryBannerComponent {

}
