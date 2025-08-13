import { Notification } from "src/app/Interface/Notification";

export class Notifica implements Notification
{
    id: string | null;
    page: number;
    text: string;
    active: boolean;

    constructor(_id: string | null, _page: number, _text: string, _active: boolean) {
        this.id = _id;
        this.page = _page;
        this.text = _text;
        this.active = _active
    }
}