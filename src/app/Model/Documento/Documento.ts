export class Documento{
    idDocumento : string | null;
    idTipoDocumento : number;
    nomeDocumento: string;
    dataCaricamento: Date | null;

    constructor(_idDocumento : string | null, _idTipoDocumento : number, _nomeDocumento : string, _dataCaricamento : Date | null) {
        
        this.idDocumento = _idDocumento;
        this.idTipoDocumento = _idTipoDocumento;
        this.nomeDocumento = _nomeDocumento;
        this.dataCaricamento = _dataCaricamento;
    }
}

export class DocumentoExt extends Documento {
    rowGuid : string | null;
    datiDocumento: string;

    constructor(_idTipoDocumento : number, _rowGuid : string | null, _nomeDocumento : string, _documento : string) {
        
        super(null, _idTipoDocumento, _nomeDocumento, null);
        this.rowGuid = _rowGuid;
        this.datiDocumento = _documento;
    }
}
