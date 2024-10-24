export class Response<T> {
    Data: T | null;
    Error: HTTPResponseError;

    constructor(_data : T | null, _error : HTTPResponseError) {
        this.Data = _data;
        this.Error = _error
    }
}

export class HTTPResponseError{
    Code: number;
    Message: string;

    constructor(_code : number, _message : string) {
        this.Code = _code;
        this.Message = _message;
    }
}
