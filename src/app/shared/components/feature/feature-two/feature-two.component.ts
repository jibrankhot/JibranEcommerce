import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SharedModule } from '../../../../shared.module';
import feature_data, { IFeature } from '../../../data/feature-data';

@Component({
    selector: 'app-feature-two',
    templateUrl: './feature-two.component.html',
    styleUrls: ['./feature-two.component.scss'],
    imports: [SharedModule]
})
export class FeatureTwoComponent {

  public feature_items: IFeature[] = feature_data;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
