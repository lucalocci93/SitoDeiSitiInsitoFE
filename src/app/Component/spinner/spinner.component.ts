import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/Services/Common/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: false
})
export class SpinnerComponent {
  isLoading: boolean = false;
  constructor(public loader: LoaderService) {
    this.isLoading = this.loader.getLoading();
   }
}