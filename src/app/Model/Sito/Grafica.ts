export class Graphics {
    id: number;
    urlImage: string;
    page: number;
    section: number;
    urlFromGoogleDrive: boolean;
    title: string;
    description: string;
    additionalText: string;
    isAdditionalTextMarkdown: boolean | null;
    order: number;

    constructor(_id: number | null, _urlImage: string, _page: number, _section: number, _urlFromGoogleDrive: boolean, _title: string | null,
        _description: string | null, _additionalText: string | null, _isAdditionalTextMarkdown: boolean | null, _order: number)
    {
        this.id = _id != null ? _id : 0;
        this.urlImage = _urlImage;
        this.page = _page;
        this.section = _section;
        this.urlFromGoogleDrive = _urlFromGoogleDrive;
        this.title = _title != null ? _title : "";
        this.description = _description != null ? _description : "";
        this.additionalText = _additionalText != null ? _additionalText : "";
        this.isAdditionalTextMarkdown = _isAdditionalTextMarkdown != null ? _isAdditionalTextMarkdown : false;
        this.order = _order != null ? _order : 0;    
    }
    
}