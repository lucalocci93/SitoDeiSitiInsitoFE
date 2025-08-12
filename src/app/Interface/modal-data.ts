import { Evento } from "../Model/Evento/Evento";
import { User } from "../Model/User/User";

export interface ModalData<T> {
    type: string;
    object : T | null;
    //user: User;
    //evento: Evento | null;
  }

export interface userData{
  nome: string;
  cognome: string;
  email: string;
  codFiscale: string;
  password: string;
  isAdmin: boolean;
  rowGuid: string | null;
  dataNascita: Date;
  via: string | null;
  numero: string | null;
  citta: string | null;
  regione: string | null;
  nazione: string | null;
  consensoInvioMail: boolean | null;
  //abbonamenti: Abbonamento[] | null
}

export interface eventData{
    id : string | null;
    NomeEvento : string;
    DataInizioEvento : Date;
    DataFineEvento : Date;
    LuogoEvento : string;
    //Categorie : Categoria[];
    Descrizione : string;
    Link : string;
    //Copertina : Copertina;
}

export interface subscribeData {
  idEvento: string | null | undefined;
  idUtente: string | null;
}


  