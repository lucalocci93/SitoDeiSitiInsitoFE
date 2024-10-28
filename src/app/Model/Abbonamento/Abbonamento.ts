export class Abbonamento {
    Id: number | null;
    IdTipoAbbonamento: number;
    TipoAbbonamento: string | null;
    DataIscrizione: Date;
    DataScadenza: Date | null;
    IsActive: boolean;
    Utente: string | null

    constructor(_id: number | null, _idTipoAbbonamento: number, _tipoAbbonamento: string | null, _dataIscrizione: Date, 
        _dataScadenza: Date | null, _isActive: boolean, _utente: string | null
    ) {
      this.Id = _id;
      this.IdTipoAbbonamento = _idTipoAbbonamento;
      this.TipoAbbonamento = _tipoAbbonamento;
      this.DataIscrizione = _dataIscrizione;
      this.DataScadenza = _dataScadenza;
      this.IsActive = _isActive;
      this.Utente = _utente;
    }
}
