import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { SharedModule } from '../../../../shared.module';
import feature_data, { IFeature } from '../../../data/feature-data';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FeatureOneComponent {
  public feature_items: IFeature[] = feature_data;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
