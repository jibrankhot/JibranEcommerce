import { Component } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { FooterOneComponent } from "../../shared/footer/footer-one/footer-one.component";
import { NiceSelectComponent } from "../../shared/ui/nice-select/nice-select.component";
import { HeaderTwoComponent } from "../../shared/header/header-two/header-two.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [SharedModule, FooterOneComponent, NiceSelectComponent, HeaderTwoComponent]
})
export class ProfileComponent {

  public genderSelectOptions = [
    { value: 'male', text: 'Male' },
    { value: 'female', text: 'Female' },
    { value: 'others', text: 'Others' },
  ];

  changeHandler(selectedOption: { value: string; text: string }) {
    console.log('Selected option:', selectedOption);
  }
}
