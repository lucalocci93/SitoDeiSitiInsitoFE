import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalData } from 'src/app/Interface/modal-data';
import { Operation } from 'src/app/Model/Base/enum';
import { User } from 'src/app/Model/User/User';
import { UtentiService } from 'src/Services/Utenti/utenti.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {
  
  user : User | undefined ;

  UserForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ModaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private userService: UtentiService,
    private fb: FormBuilder
  ) {

    this.UserForm = this.fb.group({
      Nome: ['', Validators.required],
      Cognome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      CodFiscale: ['', Validators.required],
      DataNascita: ['', Validators.required],
      Via: ['', Validators.required],
      Numero: ['', Validators.required],
      Citta: ['', Validators.required],
      Regione: ['', Validators.required],
      Nazione: ['', Validators.required],
      RowGuid:[]
    });
  }
    
  async ngOnInit() {
    if(this.data.type === 'Info')
      {
        this.user = undefined;
        await(await this.userService.GetUtente(this.data.user.rowGuid)).subscribe(data => {
          if(data != null && data.Data != null){
            this.user = data.Data;
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
            }
            else{
              alert("Errore recupero Utenti");
            }
          }
        });
      }
      else if(this.data.type === 'updateInfo')
        {
          this.user = undefined;
          await(await this.userService.GetUtente(this.data.user.rowGuid)).subscribe(data => {
            if(data != null && data.Data != null){
              this.UserForm.setValue({
                Nome: data.Data.nome,
                Cognome: data.Data.cognome,
                Email: data.Data.email,
                CodFiscale: data.Data.codFiscale,
                DataNascita: data.Data.dataNascita,
                Via: data.Data.via,
                Numero: data.Data.numero,
                Citta: data.Data.citta,
                Regione: data.Data.regione,
                Nazione: data.Data.nazione,
                RowGuid: data.Data.rowGuid
              }); 
             }
            else if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
            }
            else{
              alert("Errore recupero Utenti");
            }
          });
        }
  }

  async Ok(type: string){
    if(type === 'updateInfo')
    if (this.UserForm.valid) {
      await(await this.userService.UpdateUtente(this.UserForm.value, Operation.AggiornaAll)).subscribe(data => {
        if(data != null && data.Data != null){
          alert("Utente Aggiornato");
          window.location.reload();
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          }
          else{
            alert("Errore recupero Utenti");
          }
        }
      });
    }
  
  }

  close(): void {
    this.dialogRef.close();
  }
}
