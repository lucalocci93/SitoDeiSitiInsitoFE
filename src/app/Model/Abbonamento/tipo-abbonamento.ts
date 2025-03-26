export class TipoAbbonamento {
    id : number;
    descrizione : string;
    giorniDurata : number | null;
    scadMensile : boolean | null;
    scadSettimanale : boolean | null
    scadGiornaliera : boolean | null

    constructor(_id : number, _descrizione : string, _giorniDurata: number | null, _scadMesile : boolean | null,
         _scadSettimanale : boolean | null, _scadGiornaliera : boolean | null) {
        
        this.id = _id;
        this.descrizione = _descrizione;
        this.giorniDurata = _giorniDurata;
        this.scadMensile = _scadMesile;
        this.scadSettimanale = _scadSettimanale;
        this.scadGiornaliera = _scadGiornaliera;
    }
}
