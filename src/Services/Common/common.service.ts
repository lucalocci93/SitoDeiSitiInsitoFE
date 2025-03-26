import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private jwtHelper: JwtHelperService;
  private ClaimKey: [string, string, string, string, string, string]

  constructor() { 
    this.jwtHelper = new JwtHelperService();
    this.ClaimKey = ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname",
       "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress", "http://schemas.microsoft.com/ws/2008/06/identity/claims/role","exp", "sub"];
  }

  //#region Storage  
  setStorage(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  getStorage(key: string): string {
    let value = localStorage.getItem(key);
    if (value != null) {
      return value;
    }
    else {
      return '';
    }
  }

  removeStorage(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    }
    catch (e) {
      console.log(e);
      return false;
    }
  }

//#endregion

  //#region Session

setSession(key: string, value: string) {
  sessionStorage.setItem(key, value);
}

getSession(key: string): string {
  let value = sessionStorage.getItem(key);
  if (value != null) {
    return value;
  }
  else {
    return '';
  }
}

removeSession(key: string): boolean {
  try {
    sessionStorage.removeItem(key);
    return true;
  }
  catch (e) {
    console.log(e);
    return false;
  }
}

//#endregion

  //#region Cookie

  setCookie(name: string, value: string, expiration: number): void {
    const date = new Date(expiration * 1000); // Convert timestamp to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  setCookieForToken(name: string, value: string): void {
    let decodedJWT = this.jwtHelper.decodeToken(value);
    const date = new Date(decodedJWT[this.ClaimKey[4]] * 1000); // Convert timestamp to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }

  getCookie(name: string): string | null {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  deleteCookie(name: string): void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  //#endregion

  //#region Manage Token
  manageRoles(token: string) : string[] {
    
    let decodedJWT = this.jwtHelper.decodeToken(token);
    this.setCookie("name", decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[4]])
    this.setCookie("surname", decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[4]])
    this.setCookie("emailaddress", decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[4]])
    this.setCookie("role", decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]])
    this.setCookie("sub", decodedJWT[this.ClaimKey[5]], decodedJWT[this.ClaimKey[4]])

    return [decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]],decodedJWT[this.ClaimKey[5]]];
  }

  DecodeToken(token: string) : string[]{
    let decodedJWT = this.jwtHelper.decodeToken(token);
    return [decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]], decodedJWT[this.ClaimKey[5]]];
  }

  //#endregion

  //#region ConvertBase64

  convertFileToBase64(file: File | undefined): Promise<string> {
    return new Promise((resolve, reject) => {
      if(file)
      { 
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            const base64String = (reader.result as string).split(',')[1]; // Remove the data URL prefix
            //const base64String = reader.result as string;
            resolve(base64String);
        };
        reader.onerror = error => reject(error);
      }
      else{
        resolve("" as string);
      }
    });
}

  convertBase64ToFile(base64: string, filename: string): File {
    const arr = base64.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    
    if (!mimeMatch) {
      throw new Error('Invalid base64 string');
    }
  
    const mime = mimeMatch[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
  
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
  
    return new File([u8arr], filename, { type: mime });
  }
  
    //#endregion
}
