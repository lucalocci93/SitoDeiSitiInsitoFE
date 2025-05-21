export class Video {
    id: number | null;
    url: string;
    title: string;
    description: string;
    provider: string | null;
    active: boolean;

    constructor(_id: number | null, _url: string, _title: string, _description: string, _provider: string | null = null, _active: boolean) {
        this.id = _id;
        this.url = _url;
        this.title = _title;
        this.description = _description;
        this.provider = _provider;
        this.active = _active;
    }
}

export class ExtendedVideo extends Video {
    videoId: string | undefined; 

    constructor(_id: number | null, _url: string, _videoId: string | undefined, _title: string, _description: string, _provider: string | null = null, _active: boolean, _order: number | null = null) {
        super(_id, _url, _title, _description, _provider, _active);
        this.videoId = _videoId;
    }
}