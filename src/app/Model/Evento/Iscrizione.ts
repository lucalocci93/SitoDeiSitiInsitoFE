import { User } from "../User/User";
import { Categoria } from "./Categoria";
import { Evento } from "./Evento";

export class Iscrizione{
    eventId : string | undefined | null;
    userId : string | null;
    note: string | null;
    competitionId: string;
    isDeleted: boolean;

    constructor(_eventId : string | undefined | null, _userId: string | null, _note: string | null, _competition: string,
        _deleted: boolean
    ) {
        this.eventId = _eventId;
        this.userId = _userId;
        this.note = _note;
        this.competitionId = _competition;
        this.isDeleted = _deleted;
    }
}

export class SingolaIscrizione{
    eventId : string | undefined | null;
    userId : string | null;
    categoria : number;
    note: string

    constructor(eventId : string | undefined | null, userId: string | null, categoria : number, note: string) {
        this.eventId = eventId;
        this.userId = userId;
        this.categoria = categoria;
        this.note = note
    }
}

export class IscrizioneExt
{
    Iscrizione : SingolaIscrizione;
    Evento : Evento | undefined;

    constructor(iscrizione : SingolaIscrizione, evento : Evento | undefined) {
        this.Iscrizione = iscrizione;
        this.Evento = evento;
    }
}