export interface Jwt {
    "success": boolean,
    "data": JwtData,
    "error": any
}

export interface JwtData{
    "key": string | null,
    "token": string,
    "issuer": string | null,
    "audience": string | null,
    "expiration": string | null    
}