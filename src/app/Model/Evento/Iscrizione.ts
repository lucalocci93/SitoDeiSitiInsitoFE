import { User } from "../User/User";
import { Categoria } from "./Categoria";
import { Evento } from "./Evento";

export class Iscrizione{
    eventId : string | undefined | null;
    userId : string | null;
    categories : number[];
    note: string

    constructor(eventId : string | undefined | null, userId: string | null, categories : number[], note: string) {
        this.eventId = eventId;
        this.userId = userId;
        this.categories = categories;
        this.note = note
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