import { Categoria } from "./Categoria";

export class Evento{
    id : string | undefined | null;
    nomeEvento : string;
    dataInizioEvento : Date;
    dataFineEvento : Date;
    luogoEvento : string;
    categorie : Categoria[];
    descrizione : string;
    link : string;
    copertina : Copertina;
    importoIscrizione?: number;
    chiusuraIscrizioni?: Date;

    constructor(nomeEvento : string, dataInizioEvento : Date, dataFineEvento: Date, luogoEvento : string,
        descrizione : string, link : string, copertina : string, importoIscrizione?: number, chiusuraIscrizioni?: Date) 
    {
        this.id = null;
        this.nomeEvento = nomeEvento;
        this.dataInizioEvento = dataInizioEvento;
        this.dataFineEvento = dataFineEvento;
        this.luogoEvento = luogoEvento;
        this.categorie = [];
        this.descrizione = descrizione;
        this.link = link;
        this.copertina = new Copertina(copertina);
        this.importoIscrizione = importoIscrizione;
        this.chiusuraIscrizioni = chiusuraIscrizioni;
    }

}

export class Copertina {
    ImageData: string; // Base64 string
    ContentType: string; // e.g., 'image/png'

    constructor(image : string) {
        this.ImageData = image;
        this.ContentType = 'image/jpeg'
    }
  }  
