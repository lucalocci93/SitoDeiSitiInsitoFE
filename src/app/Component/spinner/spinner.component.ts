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
  constructor(public loader: LoaderService) { }
}