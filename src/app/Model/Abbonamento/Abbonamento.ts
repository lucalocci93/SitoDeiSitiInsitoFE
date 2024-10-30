export class Abbonamento {
    id: number | null;
    idTipoAbbonamento: number;
    tipoAbbonamento: string | null;
    dataIscrizione: Date;
    dataScadenza: Date | null;
    isActive: boolean;
    utente: string | null

    constructor(_id: number | null, _idTipoAbbonamento: number, _tipoAbbonamento: string | null, _dataIscrizione: Date, 
        _dataScadenza: Date | null, _isActive: boolean, _utente: string | null
    ) {
      this.id = _id;
      this.idTipoAbbonamento = _idTipoAbbonamento;
      this.tipoAbbonamento = _tipoAbbonamento;
      this.dataIscrizione = _dataIscrizione;
      this.dataScadenza = _dataScadenza;
      this.isActive = _isActive;
      this.utente = _utente;
    }
}
