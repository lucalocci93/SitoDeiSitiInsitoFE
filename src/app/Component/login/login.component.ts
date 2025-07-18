import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../../../Services/Common/common.service';
import { LoginService } from '../../../Services/Login/login.service';
import { HttpStatusCode } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: false
})
export class LoginComponent {

  public email: string = "";
  public password: string = "";
  private Token: string = "";
  isLogged = false;
  Name = "";

  constructor(private common: CommonService, private account: LoginService, private router: Router) { }

  async Login() {

    this.Token = this.common.getStorage("Token");

    if (this.Token != null && this.Token != '') {
      alert("Utente già loggato");
    }
    else {

      this.account.login(this.email.toLowerCase(), this.password).subscribe(response => {
            //this.response = response;
            if(response != null && response.Data != null && response.Data.success){
              if(this.common.getStorage("cookieConsent") == "accepted"){
                this.common.setCookieForToken("Token", response.Data.data.token.toString());
                let decodedJWT = this.common.manageRoles(response.Data.data.token.toString());  
                this.Name = decodedJWT[0];
                this.isLogged = true;  
              }
              else if(this.common.getStorage("cookieConsent") == "declined"){
                let decodedJWT = this.common.DecodeToken(response.Data.data.token);
                this.Name = decodedJWT[0];
                this.isLogged = true;  
              }
              else{
                this.common.setCookieForToken("Token", response.Data.data.token);
                let decodedJWT = this.common.manageRoles(response.Data.data.token.toString());  
                this.Name = decodedJWT[0];
                this.isLogged = true;  
                localStorage.setItem('cookieConsent', 'accepted');
              }
            }
            else{
              if(response.Error != null)
              {
                alert(response.Error.Message);
              }
              else{
                alert("L'Utente o la Password inseriti non sono corretti");
              }
            }
          });
    }
    
    //this.router.navigateByUrl("/");
    //window.location.reload();
  }

  Inizia(){
    //window.location.reload();
    this.router.navigateByUrl("/").then(() => {
      window.location.reload();
    });
  }
}
