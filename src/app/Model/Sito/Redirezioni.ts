export class Redirection {
    id: number | null;
    url: string;
    redirectUrl: string | null;
    active: boolean | null;

    constructor(_id: number | null, _url: string , _redirectUrl: string | null, _active: boolean | null) {
        this.id = _id;
        this.url = _url;
        this.redirectUrl = _redirectUrl;  
        this.active = _active != null ? _active : false;     
    }
}