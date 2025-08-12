export class Competition{
    id : string | null;
    event: string | null | undefined;
    name: string;
    competitionFee: number;
    category: number;
    subscribed: boolean;
    userId: string | null;

    constructor(_id: string | null, _event: string | null | undefined, _name: string, _competitionFee: number, _category: number,
        _subscribed: boolean, _userId: string | null = null
    ) {
        this.id = _id;
        this.event = _event;
        this.name = _name;
        this.competitionFee = _competitionFee;
        this.category = _category;  
        this.subscribed = _subscribed;
        this.userId = _userId;
    }
}