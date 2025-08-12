import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User/User'
import { Response } from 'src/app/Model/Base/response'
import { LoginService } from 'src/Services/Login/login.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Cinture } from 'src/app/Interface/User/Cinture';
import { Organizzazioni } from 'src/app/Interface/User/Organizzazioni';
import { UtentiService } from 'src/Services/Utenti/utenti.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css'],
  standalone: false
})
export class NuovoUtenteComponent {

    userForm: FormGroup;
    response: Response<User> | undefined;
    Cinture: Cinture[] = [];
    Organizzazioni: Organizzazioni[] = [];
  
    constructor(private formBuilder: FormBuilder, private loginService: LoginService, private utentiService: UtentiService,
       private router: Router) { 

      this.utentiService.GetCinture().subscribe(response => {
        if (response.Data != null) {
          this.Cinture = response.Data;
        } else {
          alert(response.Error.Message);
        }
      });

      this.utentiService.GetOrganizzazioni().subscribe(response => {
        if (response.Data != null) {
          this.Organizzazioni = response.Data;
        } else {
          alert(response.Error.Message);
        }
      });

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
        cintura: ['scegli un opzione'],
        organizzazione: ['scegli un opzione'],
        consensoInvioEmail: [true]
      });
    }
    
    async onSubmit(): Promise<void> {
      if (this.userForm.valid) {
        const formValues = this.userForm.value;
        let user = new User(formValues.firstName, formValues.lastName, formValues.userEmail, formValues.fiscalCode, formValues.password, false, false, null,
          formValues.birthDate, formValues.street, formValues.number, formValues.city, formValues.region, formValues.nation,
          formValues.consensoInvioEmail, [], formValues.cintura, formValues.organizzazione);

          this.loginService.NewUser(user).subscribe(response => {
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
