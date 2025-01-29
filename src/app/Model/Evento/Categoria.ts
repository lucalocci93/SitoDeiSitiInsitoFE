export class Categoria
{
    Id : number;
    Descrizione : string;

    constructor( _id : number, _descrizione : string) {
        this.Id = _id;
        this.Descrizione = _descrizione;
    }
}