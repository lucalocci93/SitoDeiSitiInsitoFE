import { Component } from '@angular/core';
import { CommonService } from 'src/Services/Common/common.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(private common: CommonService) {
  }
}
