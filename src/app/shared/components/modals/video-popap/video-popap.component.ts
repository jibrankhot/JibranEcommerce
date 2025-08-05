import { Component } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { SharedModule } from '../../../../shared.module';


@Component({
  selector: 'app-video-popap',
  templateUrl: './video-popap.component.html',
  styleUrls: ['./video-popap.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class VideoPopapComponent {

  constructor(public utilsService: UtilsService) { }
}
