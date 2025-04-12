import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User/User'
import { Response } from 'src/app/Model/Base/response'
import { LoginService } from 'src/Services/Login/login.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css'],
  standalone: false
})
export class NuovoUtenteComponent {

    userForm: FormGroup;
    response: Response<User> | undefined;
  
    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) { 

      this.userForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        fiscalCode: ['', Validators.required],
        birthDate: ['', Validators.required],
        street: ['', Validators.required],
        number: ['', Validators.required],
        city: ['', Validators.required],
        region: ['', Validators.required],
        nation: ['', Validators.required],
        userEmail: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],//, Validators.minLength(6)]],
        consensoInvioEmail: [true]
      });
    }
    
    async onSubmit(): Promise<void> {
      if (this.userForm.valid) {
        const formValues = this.userForm.value;
        let user = new User(formValues.firstName, formValues.lastName, formValues.userEmail, formValues.fiscalCode, formValues.password, false, null,
          formValues.birthDate, formValues.street, formValues.number, formValues.city, formValues.region, formValues.nation,
          formValues.consensoInvioEmail, [])

          await(await this.loginService.NewUser(user)).subscribe(response => {
            //this.response = response;
            if(response.Data != null){
              alert("Utenza creata correttamente, puoi procedere con il login!");
              this.router.navigateByUrl("/login");
            }
            else{
              alert(response.Error.Message);
              //window.location.reload();
            }
          });
        }
    }
}
