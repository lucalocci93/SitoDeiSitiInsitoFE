export interface Utente {
    nome: string;
    cognome: string;
    email: string;
    codFiscale: string;
    password: string | null;
    isAdmin: boolean | null;
    rowGuid: string | null;
    dataNascita: string | null;
    via: string | null;
    numero: string | null;
    citta: string | null;
    regione: string | null;
    nazione: string | null;
    consensoInvioMail: boolean | null;
    abbonamenti: any | null;
  }
  
  export interface Iscrizione {
    eventId: string;
    userId: string;
    categoria: number;
    note: string;
  }
  
  export interface Evento {
    id: string | null;
    copertina: string | null;
    nomeEvento: string;
    dataInizioEvento: string;
    dataFineEvento: string;
    luogoEvento: string | null;
    categorie: any[];
    descrizione: string;
    link: string | null;
  }
  
  export interface Competitors {
    utente: Utente;
    iscrizione: Iscrizione;
    evento: Evento;
  }
  