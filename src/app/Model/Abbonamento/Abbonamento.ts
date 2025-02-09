export class Abbonamento {
    id: number | null;
    idTipoAbbonamento: number;
    tipoAbbonamento: string | null;
    dataIscrizione: Date;
    dataScadenza: Date | null;
    urlPagamento: string | null;
    importo: number;
    idCheckout: string;
    isActive: boolean;
    isPayed:boolean | null;
    utente: string | null

    constructor(_id: number | null, _idTipoAbbonamento: number, _tipoAbbonamento: string | null, _dataIscrizione: Date, 
        _dataScadenza: Date | null, _urlPagamento: string | null, _importo: number, _idCheckout: string, _isActive: boolean, _isPayed: boolean, _utente: string | null
    ) {
      this.id = _id;
      this.idTipoAbbonamento = _idTipoAbbonamento;
      this.tipoAbbonamento = _tipoAbbonamento;
      this.dataIscrizione = _dataIscrizione;
      this.dataScadenza = _dataScadenza;
      this.urlPagamento = _urlPagamento;
      this.importo = _importo;
      this.idCheckout = _idCheckout;
      this.isActive = _isActive;
      this.isPayed = _isPayed;
      this.utente = _utente;
    }
}
