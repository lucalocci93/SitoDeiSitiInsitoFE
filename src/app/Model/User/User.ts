import { Abbonamento } from "../Abbonamento/Abbonamento";

export class User{
  nome: string;
  cognome: string;
  email: string;
  codFiscale: string;
  password: string;
  isAdmin: boolean;
  isMaestro: boolean;
  rowGuid: string | null;
  dataNascita: Date;
  via: string | null;
  numero: string | null;
  citta: string | null;
  regione: string | null;
  nazione: string | null;
  consensoInvioMail: boolean | null;
  abbonamenti: Abbonamento[] | null;
  // Info Atleta
  cintura: number | null;
  organizzazione: string | null;


  constructor(_nome: string, _cognome: string, _email: string, _codFiscale: string, _password: string, _isAdmin: boolean, _isMaestro: boolean,
    _rowGuid: string | null, _dataNascita: Date, _via: string, _numero: string, _citta: string, _regione: string, _nazione: string,
    _consensoInvioMail: boolean, _abbonamenti: Abbonamento[] | null, _cintura: number | null = null, _organizzazione: string | null = null
  ) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.email = _email;
    this.codFiscale = _codFiscale;
    this.password = _password;
    this.isAdmin = _isAdmin;
    this.isMaestro = _isMaestro;
    this.rowGuid = _rowGuid;
    this.dataNascita = _dataNascita;
    this.via = _via;
    this.numero = _numero;
    this.citta = _citta;
    this.regione = _regione;
    this.nazione = _nazione;
    this.consensoInvioMail = _consensoInvioMail;
    this.abbonamenti = _abbonamenti;
    this.cintura = _cintura;
    this.organizzazione = _organizzazione;
  }
}