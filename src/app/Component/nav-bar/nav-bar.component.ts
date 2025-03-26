import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonService } from 'src/Services/Common/common.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isLogged = false;
  isExpanded = false;
  isAdmin = false;

  constructor(private common: CommonService, private router: Router) {

    if(common.getCookie("Token")){
      this.isLogged = true;

      if(common.getCookie("role") == "Admin"){
        this.isAdmin = true;
      }
  
    }

  }

  ngOnInit(): void {
    if(this.common.getCookie("Token")){
      this.isLogged = true;

      if(this.common.getCookie("role") == "Admin"){
        this.isAdmin = true;
      }
  
    }
  }

  Logout(){
    this.common.deleteCookie("Token");
    this.common.deleteCookie("role");
    this.common.deleteCookie("emailaddress");
    this.common.deleteCookie("name");
    this.common.deleteCookie("surname");
    this.isLogged = false;
    this.isAdmin = false;
    window.location.href = '/';
    //window.location.reload();
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
