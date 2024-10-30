import { HttpStatusCode } from '@angular/common/http';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ModalData } from 'src/app/Interface/modal-data';
import { Operation } from 'src/app/Model/Base/enum';
import { Abbonamento } from 'src/app/Model/Abbonamento/Abbonamento';
import { User } from 'src/app/Model/User/User';
import { AbbonamentiService } from 'src/Services/Abbonamenti/abbonamenti.service';
import { UtentiService } from 'src/Services/Utenti/utenti.service';
import { TipoAbbonamento } from 'src/app/Model/Abbonamento/tipo-abbonamento';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.css']
})
export class ModaleComponent implements OnInit {
  
  user : User | undefined ;

  subscription : Abbonamento | undefined
  subList : Abbonamento[] = [];
  subType : TipoAbbonamento[] = [];

  UserForm: FormGroup;
  SubForm: FormGroup;

  displayedColumns: string[] = ['Tipo', 'Inizio', 'Scadenza'];
  dataSource = new MatTableDataSource(this.subList);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor(
    public dialogRef: MatDialogRef<ModaleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ModalData,
    private userService: UtentiService,
    private subService: AbbonamentiService,
    private fb: FormBuilder
  ) {

    this.UserForm = this.fb.group({
      Nome: ['', Validators.required],
      Cognome: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      CodFiscale: ['', Validators.required],
      DataNascita: [new Date(), Validators.required],
      Via: ['', Validators.required],
      Numero: ['', Validators.required],
      Citta: ['', Validators.required],
      Regione: ['', Validators.required],
      Nazione: ['', Validators.required],
      RowGuid:[]
    });

    this.SubForm = this.fb.group({
      IdTipoAbbonamento: [3, Validators.required],
      DataInizio: [new Date(), Validators.required],
      Utente: []
    });
  }
    
  async ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

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
      
    if(this.data.type === 'updateInfo')
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
        
    if(this.data.type === 'InfoSub')
      {     
        this.subList = [];   
        await(await this.subService.GetAbbonamenti(this.data.user.rowGuid)).subscribe(data => {
          if(data != null && data.Data != null){
            this.subList = data.Data.sort((a, b) => (a.isActive === b.isActive) ? 0 : a.isActive ? -1 : 1);
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
            }
            else{
              alert("Errore recupero Abbonamenti dell'utente");
            }
          }
        });
     }

     if(this.data.type == 'AddSub'){
      this.subType = [];
      await(await this.subService.GetTipoAbbonamenti(this.data.user.rowGuid)).subscribe(data => {
        if(data != null && data.Data != null){
          this.subType = data.Data;
        }
        else{
          if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          }
          else{
            alert("Errore recupero Abbonamenti dell'utente");
          }
        }
      });
     }
    
  }

  async Ok(type: string){

    if(type === 'updateInfo'){
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

    if(type === 'AddSub'){
      if (this.SubForm.valid) {

        let abb = new Abbonamento(null, this.SubForm.value.IdTipoAbbonamento, null, this.SubForm.value.DataInizio, null, false, this.data.user.rowGuid);
        
        await(await this.subService.AddAbbonamenti(abb)).subscribe(data => {
          if(data != null && data.Data != null){
            alert("Abbonamento Inserito");
            window.location.reload();
          }
          else{
            if(data.Error != null && data.Error.Code == HttpStatusCode.Unauthorized){
              alert("La tua sessione è scaduta, rieffettua il login");
              window.location.href = '/login';
            }
            else{
              alert("Errore Inserimento Abbonamento");
            }
          }
        });
      }  
    }  
  }

  close(): void {
    this.dialogRef.close();
  }
}
