import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../../shared.module';

@Component({
    selector: 'app-reset-filter-route',
    templateUrl: './reset-filter-route.component.html',
    styleUrls: ['./reset-filter-route.component.scss'],
    imports: [SharedModule]
})
export class ResetFilterRouteComponent {

  @Output() handleResetFilter: EventEmitter<any> = new EventEmitter<any>();
  constructor(private router: Router) { }

  ngOnInit(): void { }

  resetFilter() {
    this.handleResetFilter.emit();
  }
}
