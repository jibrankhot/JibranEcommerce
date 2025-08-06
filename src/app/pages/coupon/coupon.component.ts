import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import coupon_data from '../../shared/data/coupon-data';
import { ICoupon } from '../../shared/types/coupon-type';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { CountdownTimerComponent } from "../../shared/components/countdown-timer/countdown-timer.component";
import { BreadcrumbOneComponent } from "../../shared/components/breadcrumb/breadcrumb-one/breadcrumb-one.component";
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";

@Component({
    selector: 'app-coupon',
    templateUrl: './coupon.component.html',
    styleUrls: ['./coupon.component.scss'],
    imports: [SharedModule, FooterOneComponent, CountdownTimerComponent, BreadcrumbOneComponent, HeaderTwoComponent]
})
export class CouponComponent {
  public coupons = coupon_data;

  isCouponActive(coupon: ICoupon): boolean {
    const currentTime = new Date().getTime();
    const couponEndTime = new Date(coupon.endTime).getTime();

    return currentTime > couponEndTime;
  }

  index: number | null = null;

  async copyCouponCode(couponCode: string, i: number) {

    try {
      await navigator.clipboard.writeText(couponCode);
      // Set the "Copied" message to true
      this.index = i;

      // Reset the "Copied" message after 3000 ms (3 seconds)
      setTimeout(() => {
        this.index = null;
      }, 3000);
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  }
}
