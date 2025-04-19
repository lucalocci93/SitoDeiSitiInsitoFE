(self["webpackChunkSitoDeiSitiInsitoFE"] = self["webpackChunkSitoDeiSitiInsitoFE"] || []).push([["main"],{

/***/ 881:
/*!*********************************************************!*\
  !*** ./src/Services/Abbonamenti/abbonamenti.service.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbbonamentiService: () => (/* binding */ AbbonamentiService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/common.service */ 9009);








class AbbonamentiService {
  constructor(http, common) {
    this.http = http;
    this.common = common;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint;
  }
  GetAbbonamenti(Rowguid) {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this.common.getCookie("Token")
      });
      let endpoint = _this.ApiEndpoint.concat("GetUserSubscriptions?Utente=" + Rowguid);
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetTipoAbbonamenti(Rowguid) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this2.common.getCookie("Token")
      });
      let endpoint = _this2.ApiEndpoint.concat("GetSubscriptionType");
      return _this2.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  AddAbbonamenti(Subscription) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this3.common.getCookie("Token")
      });
      let endpoint = _this3.ApiEndpoint.concat("AddUserSubscription");
      let body = JSON.stringify(Subscription);
      return _this3.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  UpdateAbbonamenti(operation, Subscription) {
    var _this4 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this4.common.getCookie("Token")
      });
      let endpoint = _this4.ApiEndpoint.concat("UpdateSubscription/" + operation);
      let body = JSON.stringify(Subscription);
      return _this4.http.put(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function AbbonamentiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AbbonamentiService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: AbbonamentiService,
      factory: AbbonamentiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9009:
/*!***********************************************!*\
  !*** ./src/Services/Common/common.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/angular-jwt */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class CommonService {
  constructor() {
    this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_0__.JwtHelperService();
    this.ClaimKey = ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/surname", "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress", "http://schemas.microsoft.com/ws/2008/06/identity/claims/role", "exp", "sub"];
  }
  //#region Storage  
  setStorage(key, value) {
    localStorage.setItem(key, value);
  }
  getStorage(key) {
    let value = localStorage.getItem(key);
    if (value != null) {
      return value;
    } else {
      return '';
    }
  }
  removeStorage(key) {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  //#endregion
  //#region Session
  setSession(key, value) {
    sessionStorage.setItem(key, value);
  }
  getSession(key) {
    let value = sessionStorage.getItem(key);
    if (value != null) {
      return value;
    } else {
      return '';
    }
  }
  removeSession(key) {
    try {
      sessionStorage.removeItem(key);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  //#endregion
  //#region Cookie
  setCookie(name, value, expiration) {
    const date = new Date(expiration * 1000); // Convert timestamp to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  setCookieForToken(name, value) {
    let decodedJWT = this.jwtHelper.decodeToken(value);
    const date = new Date(decodedJWT[this.ClaimKey[4]] * 1000); // Convert timestamp to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
  }
  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
  deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
  }
  //#endregion
  //#region Manage Token
  manageRoles(token) {
    let decodedJWT = this.jwtHelper.decodeToken(token);
    this.setCookie("name", decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[4]]);
    this.setCookie("surname", decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[4]]);
    this.setCookie("emailaddress", decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[4]]);
    this.setCookie("role", decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]]);
    this.setCookie("sub", decodedJWT[this.ClaimKey[5]], decodedJWT[this.ClaimKey[4]]);
    return [decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]], decodedJWT[this.ClaimKey[5]]];
  }
  DecodeToken(token) {
    let decodedJWT = this.jwtHelper.decodeToken(token);
    return [decodedJWT[this.ClaimKey[0]], decodedJWT[this.ClaimKey[1]], decodedJWT[this.ClaimKey[2]], decodedJWT[this.ClaimKey[3]], decodedJWT[this.ClaimKey[4]], decodedJWT[this.ClaimKey[5]]];
  }
  //#endregion
  //#region ConvertBase64
  convertFileToBase64(file) {
    return new Promise((resolve, reject) => {
      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const base64String = reader.result.split(',')[1]; // Remove the data URL prefix
          //const base64String = reader.result as string;
          resolve(base64String);
        };
        reader.onerror = error => reject(error);
      } else {
        resolve("");
      }
    });
  }
  convertBase64ToFile(base64, filename) {
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
    return new File([u8arr], filename, {
      type: mime
    });
  }
  getUrlForGoogleDrive(url) {
    return url.replace('https://drive.google.com/file', 'https://lh3.googleusercontent.com').replace('/view?usp=drive_link', '');
  }
  static {
    this.ɵfac = function CommonService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CommonService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CommonService,
      factory: CommonService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 8879:
/*!***********************************************!*\
  !*** ./src/Services/Common/loader.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LoaderService {
  constructor() {
    this.loading = false;
  }
  setLoading(loading) {
    this.loading = loading;
  }
  getLoading() {
    return this.loading;
  }
  static {
    this.ɵfac = function LoaderService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2325:
/*!*****************************************************!*\
  !*** ./src/Services/Documenti/documenti.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentiService: () => (/* binding */ DocumentiService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/common.service */ 9009);








class DocumentiService {
  constructor(http, common) {
    this.http = http;
    this.common = common;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint;
  }
  GetTipiDocumenti() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this.common.getCookie("Token")
      });
      let endpoint = _this.ApiEndpoint.concat("GetDocumentType");
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  AddDocument(Document) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this2.common.getCookie("Token")
      });
      let endpoint = _this2.ApiEndpoint.concat("AddDocument");
      let body = JSON.stringify(Document);
      return _this2.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetUserDocuments(RowGuid) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this3.common.getCookie("Token")
      });
      let endpoint = _this3.ApiEndpoint.concat("GetUserDocuments?User=" + RowGuid);
      return _this3.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetDocument(RowGuid) {
    var _this4 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this4.common.getCookie("Token")
      });
      let endpoint = _this4.ApiEndpoint.concat("GetDocument?Id=" + RowGuid);
      return _this4.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function DocumentiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentiService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: DocumentiService,
      factory: DocumentiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6365:
/*!***********************************************!*\
  !*** ./src/Services/Eventi/eventi.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventiService: () => (/* binding */ EventiService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/common.service */ 9009);








class EventiService {
  constructor(http, common) {
    this.http = http;
    this.common = common;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint;
  }
  GetEventi() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this.common.getCookie("Token")
      });
      let endpoint = _this.ApiEndpoint.concat("GetEvents");
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetCategorie() {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this2.common.getCookie("Token")
      });
      let endpoint = _this2.ApiEndpoint.concat("GetCategories");
      return _this2.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  AddEvent(event) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this3.common.getCookie("Token")
      });
      let endpoint = _this3.ApiEndpoint.concat("CreateEvent");
      let body = JSON.stringify(event);
      return _this3.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetEvento(Id) {
    var _this4 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this4.common.getCookie("Token")
      });
      let endpoint = _this4.ApiEndpoint.concat("GetEvent?Id=" + Id);
      return _this4.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  UpdateEvent(event) {
    var _this5 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this5.common.getCookie("Token")
      });
      let endpoint = _this5.ApiEndpoint.concat("UpdateEvent");
      let body = JSON.stringify(event);
      return _this5.http.put(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  Subscribe(Subscription) {
    var _this6 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this6.common.getCookie("Token")
      });
      let endpoint = _this6.ApiEndpoint.concat("SubscribeEvent");
      let body = JSON.stringify(Subscription);
      return _this6.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetSubscription(UserId) {
    var _this7 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this7.common.getCookie("Token")
      });
      let endpoint = _this7.ApiEndpoint.concat("GetEventSubscriptionByUser?UserId=" + UserId);
      return _this7.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  DeleteSubscription(EventId, UserId, Category) {
    var _this8 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this8.common.getCookie("Token")
      });
      let endpoint = _this8.ApiEndpoint.concat("DeleteSubscription?EventId=" + EventId + "&UserId=" + UserId + "&Category=" + Category);
      return _this8.http.delete(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetCompetitors(EventId) {
    var _this9 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this9.common.getCookie("Token")
      });
      let endpoint = _this9.ApiEndpoint.concat("GetCompetitors?EventId=" + EventId);
      return _this9.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetCompetitorExcel(EventId) {
    var _this10 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this10.common.getCookie("Token")
      });
      let endpoint = _this10.ApiEndpoint.concat("GetCompetitorsFile?EventId=" + EventId);
      return _this10.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function EventiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EventiService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: EventiService,
      factory: EventiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 6377:
/*!*********************************************!*\
  !*** ./src/Services/Login/login.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ 220);
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);



//import * as sha256 from 'sha.js';





class LoginService {
  constructor(http) {
    this.http = http;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint;
    this.Token = "";
  }
  login(email, password) {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //var cryptedEmail = sha256(email);
      var cryptedPassword = (0,js_sha256__WEBPACK_IMPORTED_MODULE_3__.sha256)(password);
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'accept': '*/*'
      });
      let endpoint = _this.ApiEndpoint.concat("Authenticate?Username=", email, "&", "Password=", cryptedPassword);
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
      //return await this.http.get(endpoint, { responseType: "text" });
      //return this.http.get(endpoint, { headers, responseType: 'text'}).pipe(
      //  map(response => {
      //    new Response<string>(response, new HTTPResponseError(200, "OK"))}),
      //    catchError(response => of(new Response<string>(null, new HTTPResponseError(response.status, response.error)))) 
      //  );
    })();
  }
  NewUser(userForm) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json'
      });
      let endpoint = _this2.ApiEndpoint.concat("CreateUser");
      let body = JSON.stringify(userForm);
      return _this2.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response("OK", new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function LoginService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: LoginService,
      factory: LoginService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2561:
/*!*******************************************!*\
  !*** ./src/Services/Sito/sito.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SitoService: () => (/* binding */ SitoService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/common.service */ 9009);








class SitoService {
  constructor(http, common) {
    this.http = http;
    this.common = common;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.apiEndpoint;
    this.Token = "";
  }
  GetImmagini() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this.common.getCookie("Token")
      });
      let endpoint = _this.ApiEndpoint.concat("GetImmmagini");
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetImmaginiByPagina(id) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'accept': '*/*'
      });
      let endpoint = _this2.ApiEndpoint.concat("GetImmmaginiByPagina?Pagina=" + id);
      return _this2.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  AddImmagine(image) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this3.common.getCookie("Token")
      });
      let endpoint = _this3.ApiEndpoint.concat("AddImmagine");
      let body = JSON.stringify(image);
      return _this3.http.post(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  RemoveImmagine(image) {
    var _this4 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this4.common.getCookie("Token")
      });
      let endpoint = _this4.ApiEndpoint.concat("RemoveImmagine?id=" + image.id);
      return _this4.http.delete(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetPagine() {
    var _this5 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this5.common.getCookie("Token")
      });
      let endpoint = _this5.ApiEndpoint.concat("GetPagine");
      return _this5.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_1__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function SitoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SitoService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: SitoService,
      factory: SitoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 2933:
/*!***********************************************!*\
  !*** ./src/Services/Utenti/utenti.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UtentiService: () => (/* binding */ UtentiService)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/response */ 7797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/common.service */ 9009);








class UtentiService {
  constructor(http, common) {
    this.http = http;
    this.common = common;
    this.ApiEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiEndpoint;
  }
  GetAllUtenti() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this.common.getCookie("Token")
      });
      let endpoint = _this.ApiEndpoint.concat("GetAllUsers");
      return _this.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  GetUtente(RowGuid) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this2.common.getCookie("Token")
      });
      let endpoint = _this2.ApiEndpoint.concat("GetUser?RowGuid=" + RowGuid);
      return _this2.http.get(endpoint, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(response, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  UpdateUtente(user, operation) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + _this3.common.getCookie("Token")
      });
      let endpoint = _this3.ApiEndpoint.concat("UpdateUser/" + operation);
      let body = JSON.stringify(user);
      return _this3.http.put(endpoint, body, {
        headers
      }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(response => new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response("OK", new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(200, "OK"))), (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.catchError)(response => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.Response(null, new src_app_Model_Base_response__WEBPACK_IMPORTED_MODULE_2__.HTTPResponseError(response.status, response.error)))));
    })();
  }
  static {
    this.ɵfac = function UtentiService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || UtentiService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: UtentiService,
      factory: UtentiService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 713:
/*!*****************************************************************************!*\
  !*** ./src/app/Component/Admin/gestioneEventi/gestione-eventi.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestioneEventiComponent: () => (/* binding */ GestioneEventiComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _modale_modale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modale/modale.component */ 7010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Eventi/eventi.service */ 6365);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ 2423);

















const _c0 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
const _c1 = () => [10, 50, 100];
function GestioneEventiComponent_div_4_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Nome Evento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r3.nomeEvento, " ");
  }
}
function GestioneEventiComponent_div_4_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data Inizio Evento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.dataInizioEvento, " ");
  }
}
function GestioneEventiComponent_div_4_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Data Fine Evento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r5.dataFineEvento, " ");
  }
}
function GestioneEventiComponent_div_4_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Luogo Evento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.luogoEvento, " ");
  }
}
function GestioneEventiComponent_div_4_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Categorie ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.getCategorieDescrizione(item_r7.categorie), " ");
  }
}
function GestioneEventiComponent_div_4_th_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.descrizione, " ");
  }
}
function GestioneEventiComponent_div_4_th_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Link ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r9.link, " ");
  }
}
function GestioneEventiComponent_div_4_th_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Azioni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneEventiComponent_div_4_td_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 24)(1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Azioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 0)(5, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneEventiComponent_div_4_td_34_Template_button_click_5_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openModal("updateEventInfo", item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Aggiorna Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneEventiComponent_div_4_td_34_Template_button_click_7_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openModal("DeleteEvent", item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Cancella Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneEventiComponent_div_4_td_34_Template_button_click_9_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.openModal("GetCompetitors", item_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Lista Partecipanti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneEventiComponent_div_4_td_34_Template_button_click_11_listener() {
      const item_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.DownloadExcelCompetitor(item_r11.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Esporta Lista Partecipanti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", menu_r12);
  }
}
function GestioneEventiComponent_div_4_tr_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 27);
  }
}
function GestioneEventiComponent_div_4_tr_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 28);
  }
}
function GestioneEventiComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "mat-form-field", 7)(4, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Cerca");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GestioneEventiComponent_div_4_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, GestioneEventiComponent_div_4_th_12_Template, 2, 0, "th", 11)(13, GestioneEventiComponent_div_4_td_13_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, GestioneEventiComponent_div_4_th_15_Template, 2, 0, "th", 11)(16, GestioneEventiComponent_div_4_td_16_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](17, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, GestioneEventiComponent_div_4_th_18_Template, 2, 0, "th", 11)(19, GestioneEventiComponent_div_4_td_19_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](20, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, GestioneEventiComponent_div_4_th_21_Template, 2, 0, "th", 11)(22, GestioneEventiComponent_div_4_td_22_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](23, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, GestioneEventiComponent_div_4_th_24_Template, 2, 0, "th", 11)(25, GestioneEventiComponent_div_4_td_25_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](26, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, GestioneEventiComponent_div_4_th_27_Template, 2, 0, "th", 11)(28, GestioneEventiComponent_div_4_td_28_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](29, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](30, GestioneEventiComponent_div_4_th_30_Template, 2, 0, "th", 11)(31, GestioneEventiComponent_div_4_td_31_Template, 2, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](32, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](33, GestioneEventiComponent_div_4_th_33_Template, 2, 0, "th", 11)(34, GestioneEventiComponent_div_4_td_34_Template, 13, 1, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, GestioneEventiComponent_div_4_tr_35_Template, 1, 0, "tr", 20)(36, GestioneEventiComponent_div_4_tr_36_Template, 1, 0, "tr", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](37, "mat-paginator", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.searchText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](10, 6, ctx_r1.filteredData, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, ctx_r1.itemsPerPage, ctx_r1.currentPage)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx_r1.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx_r1.filteredData.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
  }
}
function GestioneEventiComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Al Momento non sono stati inseriti Eventi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class GestioneEventiComponent {
  constructor(EventiService, common, dialog, sanitizer) {
    this.EventiService = EventiService;
    this.common = common;
    this.dialog = dialog;
    this.sanitizer = sanitizer;
    this.eventi = [];
    this.searchText = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.pageSizes = [5, 10, 15, 20];
    //displayedColumns: string[] = ['Copertina','NomeEvento', 'DataInizioEvento', 'DataFineEvento', 'LuogoEvento', 'Categorie', 'Descrizione', 'Link', 'Azioni'];
    this.displayedColumns = ['NomeEvento', 'DataInizioEvento', 'DataFineEvento', 'LuogoEvento', 'Categorie', 'Descrizione', 'Link', 'Azioni'];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.EventiService.GetEventi()).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.eventi = data.Data;
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert("Errore recupero Eventi");
        }
      });
    })();
  }
  openModal(type, evento) {
    const dialogRef = this.dialog.open(_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__.ModaleComponent, {
      data: {
        type,
        object: evento
      }
    });
  }
  getSanitizedImage(imageData, contentType) {
    if (imageData === null || imageData === undefined || imageData.trim().length === 0) return "";
    return this.sanitizer.bypassSecurityTrustUrl(`data:${contentType};base64,${imageData}`);
  }
  getCategorieDescrizione(categorie) {
    return categorie.map(c => c.Descrizione).join(', ');
  }
  CreaEvento() {
    this.openModal('AddEvent', null);
  }
  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    return this.eventi.filter(item => item.nomeEvento.toLowerCase().includes(searchValue) || item.descrizione.toString().includes(searchValue) || item.luogoEvento.toString().includes(searchValue) || item.link.toLowerCase().includes(searchValue));
  }
  DownloadExcelCompetitor(EventId) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var doc = null;
      yield (yield _this2.EventiService.GetCompetitorExcel(EventId)).subscribe(data => {
        if (data != null && data.Data != null) {
          doc = data.Data.datiDocumento.replace('data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,', '');
          const byteArray = new Uint8Array(atob(doc).split('').map(char => char.charCodeAt(0)));
          const file = new Blob([byteArray], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
          });
          const fileUrl = URL.createObjectURL(file);
          let fileName = data.Data.nomeDocumento;
          let link = document.createElement('a');
          link.download = fileName;
          link.target = '_blank';
          link.href = fileUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero dati iscritti evento");
          }
        }
      });
    })();
  }
  static {
    this.ɵfac = function GestioneEventiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GestioneEventiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_2__.EventiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GestioneEventiComponent,
      selectors: [["app-gestione-eventi"]],
      decls: 7,
      vars: 2,
      consts: [["menu", "matMenu"], ["type", "button", 3, "click"], ["class", "container", 4, "ngIf"], [4, "ngIf"], [1, "container"], [1, "row"], [1, "col-md-12"], ["appearance", "fill"], ["matInput", "", "placeholder", "Cerca", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "NomeEvento"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "DataInizioEvento"], ["matColumnDef", "DataFineEvento"], ["matColumnDef", "LuogoEvento"], ["matColumnDef", "Categorie"], ["matColumnDef", "Descrizione"], ["matColumnDef", "Link"], ["matColumnDef", "Azioni"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 3, "length", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function GestioneEventiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneEventiComponent_Template_button_click_0_listener() {
            return ctx.CreaEvento();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Crea Evento ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br")(3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, GestioneEventiComponent_div_4_Template, 38, 13, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, GestioneEventiComponent_div_6_Template, 3, 0, "div", 3);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.eventi.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.eventi.length < 1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginatePipe],
      styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header[_ngcontent-%COMP%] {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L0FkbWluL2dlc3Rpb25lRXZlbnRpL2dlc3Rpb25lLWV2ZW50aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWM7QUFDZDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3RydWN0dXJlICovXG4uZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1580:
/*!******************************************************************************!*\
  !*** ./src/app/Component/Admin/gestioneGrafica/gestionegrafica.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestioneGraficaComponent: () => (/* binding */ GestioneGraficaComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Component/modale/modale.component */ 7010);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Sito/sito.service */ 2561);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 2423);















const _c0 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
const _c1 = () => [10, 50, 100];
function GestioneGraficaComponent_th_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Url ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r1.urlImage, " ");
  }
}
function GestioneGraficaComponent_th_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Pagina ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.GetPagina(item_r2.page), " ");
  }
}
function GestioneGraficaComponent_th_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sezione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r4.section, " ");
  }
}
function GestioneGraficaComponent_th_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Titolo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r5.title, " ");
  }
}
function GestioneGraficaComponent_th_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Descrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r6.description, " ");
  }
}
function GestioneGraficaComponent_th_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Testo Aggiuntivo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r7.additionalText, " ");
  }
}
function GestioneGraficaComponent_th_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Ordinamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.order, " ");
  }
}
function GestioneGraficaComponent_th_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Azioni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function GestioneGraficaComponent_td_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 22)(1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Azioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-menu", null, 0)(5, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneGraficaComponent_td_38_Template_button_click_5_listener() {
      const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.CancellaImmagine(item_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cancella");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const menu_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matMenuTriggerFor", menu_r11);
  }
}
function GestioneGraficaComponent_tr_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 25);
  }
}
function GestioneGraficaComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 26);
  }
}
class GestioneGraficaComponent {
  constructor(sitoService, common, dialog) {
    this.sitoService = sitoService;
    this.common = common;
    this.dialog = dialog;
    this.immagini = [];
    this.pagine = [];
    this.searchText = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.pageSizes = [5, 10, 15, 20];
    this.displayedColumns = ['Url', 'Pagina', 'Sezione', 'Titolo', 'Descrizione', 'TestoAggiuntivo', 'Ordinamento', 'Azioni'];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.sitoService.GetImmagini()).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.immagini = data.Data;
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert(data.Error.Message);
        }
      });
      yield (yield _this.sitoService.GetPagine()).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.pagine = data.Data;
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert(data.Error.Message);
        }
      });
    })();
  }
  openModal(type, image) {
    const dialogRef = this.dialog.open(src_app_Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__.ModaleComponent, {
      data: {
        type,
        object: image
      }
    });
  }
  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    return this.immagini.filter(item => item.urlImage.toLowerCase().includes(searchValue) || item.title.toString().includes(searchValue) || item.description.toLowerCase().includes(searchValue));
  }
  GetPagina(id) {
    let pagina = this.pagine.find(f => f.id == id);
    return pagina != null ? pagina.page : "N/A";
  }
  AddImmagine() {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.openModal("AddImage", null);
    })();
  }
  CancellaImmagine(immagine) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this3.sitoService.RemoveImmagine(immagine)).subscribe(data => {
        if (data != null && data.Data != null) {
          window.location.reload();
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert("Errore cancellazione immagine");
        }
      });
    })();
  }
  static {
    this.ɵfac = function GestioneGraficaComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GestioneGraficaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_2__.SitoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: GestioneGraficaComponent,
      selectors: [["app-gestionegrafica"]],
      decls: 42,
      vars: 13,
      consts: [["menu", "matMenu"], ["type", "button", 3, "click"], [1, "container"], [1, "row"], [1, "col-md-12"], ["appearance", "fill"], ["matInput", "", "placeholder", "Cerca", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "Url"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Pagina"], ["matColumnDef", "Sezione"], ["matColumnDef", "Titolo"], ["matColumnDef", "Descrizione"], ["matColumnDef", "TestoAggiuntivo"], ["matColumnDef", "Ordinamento"], ["matColumnDef", "Azioni"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 3, "length", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function GestioneGraficaComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function GestioneGraficaComponent_Template_button_click_0_listener() {
            return ctx.AddImmagine();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Aggiungi Grafica ");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "br")(3, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2)(5, "div", 3)(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cerca");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayListener"]("ngModelChange", function GestioneGraficaComponent_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "table", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](15, 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, GestioneGraficaComponent_th_16_Template, 2, 0, "th", 9)(17, GestioneGraficaComponent_td_17_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](18, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, GestioneGraficaComponent_th_19_Template, 2, 0, "th", 9)(20, GestioneGraficaComponent_td_20_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](21, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, GestioneGraficaComponent_th_22_Template, 2, 0, "th", 9)(23, GestioneGraficaComponent_td_23_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](24, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, GestioneGraficaComponent_th_25_Template, 2, 0, "th", 9)(26, GestioneGraficaComponent_td_26_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](27, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, GestioneGraficaComponent_th_28_Template, 2, 0, "th", 9)(29, GestioneGraficaComponent_td_29_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](30, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, GestioneGraficaComponent_th_31_Template, 2, 0, "th", 9)(32, GestioneGraficaComponent_td_32_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](33, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, GestioneGraficaComponent_th_34_Template, 2, 0, "th", 9)(35, GestioneGraficaComponent_td_35_Template, 2, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](36, 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, GestioneGraficaComponent_th_37_Template, 2, 0, "th", 9)(38, GestioneGraficaComponent_td_38_Template, 7, 1, "td", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, GestioneGraficaComponent_tr_39_Template, 1, 0, "tr", 18)(40, GestioneGraficaComponent_tr_40_Template, 1, 0, "tr", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](41, "mat-paginator", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](14, 6, ctx.filteredData, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](9, _c0, ctx.itemsPerPage, ctx.currentPage)));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("length", ctx.filteredData.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c1));
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_11__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__.MatPaginator, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__.MatMenuTrigger, ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.PaginatePipe],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6548:
/*!****************************************************************************!*\
  !*** ./src/app/Component/Admin/gestioneutenti/gestioneutenti.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GestioneutentiComponent: () => (/* binding */ GestioneutentiComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Component/modale/modale.component */ 7010);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Base/enum */ 855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Utenti/utenti.service */ 2933);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-pagination */ 2423);

















const _c0 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
const _c1 = () => [10, 50, 100];
function GestioneutentiComponent_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Nome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r1.nome, " ");
  }
}
function GestioneutentiComponent_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cognome ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r2.cognome, " ");
  }
}
function GestioneutentiComponent_th_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r3.email, " ");
  }
}
function GestioneutentiComponent_th_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Codice Fiscale ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r4.codFiscale, " ");
  }
}
function GestioneutentiComponent_th_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Azioni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_25_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_button_9_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.ManageAdmin(item_r6, true));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Rendi Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_25_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.ManageAdmin(item_r6, false));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Revoca Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function GestioneutentiComponent_td_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 18)(1, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Azioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "mat-menu", null, 0)(5, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_Template_button_click_5_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openModal("Info", item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Info Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_Template_button_click_7_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openModal("updateInfo", item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Aggiorna Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, GestioneutentiComponent_td_25_button_9_Template, 2, 0, "button", 21)(10, GestioneutentiComponent_td_25_button_10_Template, 2, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_Template_button_click_11_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openModal("InfoSub", item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Info Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_Template_button_click_13_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openModal("AddSub", item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Aggiungi Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GestioneutentiComponent_td_25_Template_button_click_15_listener() {
      const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5).$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r6.openModal("AddDoc", item_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Aggiungi Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const menu_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matMenuTriggerFor", menu_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r6.isAdmin);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r6.isAdmin);
  }
}
function GestioneutentiComponent_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 22);
  }
}
function GestioneutentiComponent_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tr", 23);
  }
}
class GestioneutentiComponent {
  constructor(utentiService, common, dialog) {
    this.utentiService = utentiService;
    this.common = common;
    this.dialog = dialog;
    this.utenti = [];
    this.searchText = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.pageSizes = [5, 10, 15, 20];
    this.displayedColumns = ['nome', 'cognome', 'email', 'codFiscale', 'azioni'];
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.utentiService.GetAllUtenti()).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.utenti = data.Data.filter(u => u.rowGuid !== _this.common.getCookie('sub'));
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert("Errore recupero Utenti");
        }
      });
    })();
  }
  openModal(type, user) {
    const dialogRef = this.dialog.open(src_app_Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__.ModaleComponent, {
      data: {
        type,
        object: user
      }
    });
  }
  ManageAdmin(item, _isAdmin) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      item.isAdmin = _isAdmin;
      yield (yield _this2.utentiService.UpdateUtente(item, src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_2__.Operation.SetAdmin)).subscribe(data => {
        if (data != null && data.Data != null) {
          alert("Utente Aggiornato");
          window.location.reload();
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero Utenti");
          }
        }
      });
    })();
  }
  get filteredData() {
    let searchValue = this.searchText.toLowerCase();
    return this.utenti.filter(item => item.nome.toLowerCase().includes(searchValue) || item.cognome.toString().includes(searchValue) || item.email.toString().includes(searchValue) || item.codFiscale.toLowerCase().includes(searchValue));
  }
  static {
    this.ɵfac = function GestioneutentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || GestioneutentiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_3__.UtentiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: GestioneutentiComponent,
      selectors: [["app-gestioneutenti"]],
      decls: 29,
      vars: 13,
      consts: [["menu", "matMenu"], [1, "container"], [1, "row"], [1, "col-md-12"], ["appearance", "fill"], ["matInput", "", "placeholder", "Cerca", 3, "ngModelChange", "ngModel"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "nome"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "cognome"], ["matColumnDef", "email"], ["matColumnDef", "codFiscale"], ["matColumnDef", "azioni"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page", 3, "length", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-header-row", ""], ["mat-row", ""]],
      template: function GestioneutentiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "mat-form-field", 4)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Cerca");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayListener"]("ngModelChange", function GestioneutentiComponent_Template_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayBindingSet"](ctx.searchText, $event) || (ctx.searchText = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2)(8, "div", 3)(9, "table", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "paginate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](11, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, GestioneutentiComponent_th_12_Template, 2, 0, "th", 8)(13, GestioneutentiComponent_td_13_Template, 2, 1, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](14, 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, GestioneutentiComponent_th_15_Template, 2, 0, "th", 8)(16, GestioneutentiComponent_td_16_Template, 2, 1, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](17, 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, GestioneutentiComponent_th_18_Template, 2, 0, "th", 8)(19, GestioneutentiComponent_td_19_Template, 2, 1, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](20, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, GestioneutentiComponent_th_21_Template, 2, 0, "th", 8)(22, GestioneutentiComponent_td_22_Template, 2, 1, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](23, 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, GestioneutentiComponent_th_24_Template, 2, 0, "th", 8)(25, GestioneutentiComponent_td_25_Template, 17, 3, "td", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, GestioneutentiComponent_tr_26_Template, 1, 0, "tr", 14)(27, GestioneutentiComponent_tr_27_Template, 1, 0, "tr", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "mat-paginator", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtwoWayProperty"]("ngModel", ctx.searchText);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](10, 6, ctx.filteredData, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](9, _c0, ctx.itemsPerPage, ctx.currentPage)));
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("length", ctx.filteredData.length)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](12, _c1));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatLabel, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_14__.MatPaginator, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__.MatMenuTrigger, ngx_pagination__WEBPACK_IMPORTED_MODULE_16__.PaginatePipe],
      styles: ["\n\n.example-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header[_ngcontent-%COMP%] {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field[_ngcontent-%COMP%] {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table[_ngcontent-%COMP%] {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L0FkbWluL2dlc3Rpb25ldXRlbnRpL2dlc3Rpb25ldXRlbnRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBYztBQUNkO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC10YWJsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 110:
/*!*********************************************************************!*\
  !*** ./src/app/Component/User/abbonamenti/abbonamenti.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbbonamentiComponent: () => (/* binding */ AbbonamentiComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/Base/enum */ 855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Abbonamenti_abbonamenti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Abbonamenti/abbonamenti.service */ 881);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 2423);










const _c0 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
function AbbonamentiComponent_div_0_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r1.tipoAbbonamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r1.dataIscrizione, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r1.dataScadenza, "dd-MM-yyyy"));
  }
}
function AbbonamentiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Abbonamenti Attivi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "table", 7)(7, "thead", 8)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Data Scadenza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AbbonamentiComponent_div_0_tr_16_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.ActiveSubscription);
  }
}
function AbbonamentiComponent_div_1_tr_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Confermato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function AbbonamentiComponent_div_1_tr_18_ng_template_9_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AbbonamentiComponent_div_1_tr_18_ng_template_9_div_0_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3);
      const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.Pay(item_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Paga");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
function AbbonamentiComponent_div_1_tr_18_ng_template_9_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](0, " Verifica In Corso ");
  }
}
function AbbonamentiComponent_div_1_tr_18_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AbbonamentiComponent_div_1_tr_18_ng_template_9_div_0_Template, 3, 0, "div", 10)(1, AbbonamentiComponent_div_1_tr_18_ng_template_9_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
  }
  if (rf & 2) {
    const notPayed_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](2);
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.isPayed != null)("ngIfElse", notPayed_r5);
  }
}
function AbbonamentiComponent_div_1_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, AbbonamentiComponent_div_1_tr_18_div_8_Template, 2, 0, "div", 10)(9, AbbonamentiComponent_div_1_tr_18_ng_template_9_Template, 3, 2, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const inProgress_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](10);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r4.tipoAbbonamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r4.dataIscrizione, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r4.dataScadenza, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r4.isPayed === true)("ngIfElse", inProgress_r6);
  }
}
function AbbonamentiComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Abbonamenti non ancora attivi");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "table", 7)(7, "thead", 8)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Data Scadenza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Stato");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AbbonamentiComponent_div_1_tr_18_Template, 11, 5, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.ToBeActivatedSubscription);
  }
}
function AbbonamentiComponent_div_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.tipoAbbonamento);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r8.dataIscrizione, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.datePipe.transform(item_r8.dataScadenza, "dd-MM-yyyy"));
  }
}
function AbbonamentiComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Storico Abbonamenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4)(4, "div", 5)(5, "div", 6)(6, "table", 7)(7, "thead", 8)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Data Scadenza");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AbbonamentiComponent_div_2_tr_16_Template, 7, 3, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "pagination-controls", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function AbbonamentiComponent_div_2_Template_pagination_controls_pageChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.currentPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 1, ctx_r1.ExpiredSubscription, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](4, _c0, ctx_r1.itemsPerPage, ctx_r1.currentPage)));
  }
}
function AbbonamentiComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Al Momento non hai abbonamenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
}
class AbbonamentiComponent {
  constructor(SubService, common, dialog) {
    this.SubService = SubService;
    this.common = common;
    this.dialog = dialog;
    this.Abbonamenti = [];
    this.ActiveSubscription = [];
    this.ExpiredSubscription = [];
    this.ToBeActivatedSubscription = [];
    this.searchText = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.pageSizes = [5, 10, 15, 20];
    this.displayedColumns = ['TipoAbbonamento', 'DataInizio', 'DataScadenza'];
    this.today = new Date();
    this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe('en-US');
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.SubService.GetAbbonamenti(_this.common.getCookie("sub"))).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.Abbonamenti = data.Data.map(item => ({
            id: item.id,
            idTipoAbbonamento: item.idTipoAbbonamento,
            tipoAbbonamento: item.tipoAbbonamento,
            dataIscrizione: new Date(item.dataIscrizione),
            dataScadenza: item.dataScadenza ? new Date(item.dataScadenza) : null,
            urlPagamento: item.urlPagamento,
            importo: item.importo,
            idCheckout: item.idCheckout,
            isActive: item.isActive,
            isPayed: item.isPayed,
            utente: item.utente
          }));
          _this.ActiveSubscription = _this.Abbonamenti.filter(a => a.isPayed && a.dataIscrizione <= _this.today && a.dataScadenza != null && a.dataScadenza > _this.today);
          _this.ExpiredSubscription = _this.Abbonamenti.filter(a => a.isPayed && a.dataScadenza != null && a.dataScadenza < _this.today);
          _this.ToBeActivatedSubscription = _this.Abbonamenti.filter(a => !a.isPayed && a.dataIscrizione > _this.today && (a.dataScadenza == null || a.dataScadenza >= _this.today));
        } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
          alert("La tua sessione è scaduta, rieffettua il login");
          window.location.href = '/login';
        } else {
          alert("Errore recupero Abbonamenti");
        }
      });
    })();
  }
  UpdateSub(action, subscription) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (action) {
        case "SetPayedSub":
          {
            yield (yield _this2.SubService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.SetAbbonamentoPagato, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Pagamento Confermato");
                window.location.reload();
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  window.location.href = '/login';
                } else {
                  alert("Errore conferma pagamento");
                }
              }
            });
            break;
          }
        case "SetPaymentInProgress":
          {
            subscription.isPayed = null;
            subscription.dataIscrizione = new Date();
            subscription.dataScadenza = null;
            yield (yield _this2.SubService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Il pagamento è stato processato, non appena avremo ricevuto l'esito ti notificheremo l'abilitazione dell'abbonamento." + "In caso di problemi nel pagamento contattare .....");
                window.location.reload();
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  window.location.href = '/login';
                } else {
                  alert("Il tuo pagamento è stato processato, ritorna piu tardi per verificare l'abilitazione dell'abbonamento");
                }
              }
            });
            break;
          }
        case "DeleteSub":
          {
            yield (yield _this2.SubService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.CancellaAbbonamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Abbonamento Cancellato");
                window.location.reload();
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  window.location.href = '/login';
                } else {
                  alert("Errore cancellazione abbonamento");
                }
              }
            });
            break;
          }
      }
    })();
  }
  Pay(sub) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.UpdateSub("SetPaymentInProgress", sub);
      if (sub.urlPagamento != null) {
        window.open(sub.urlPagamento, '_blank');
      }
      window.location.reload();
    })();
  }
  static {
    this.ɵfac = function AbbonamentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AbbonamentiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Abbonamenti_abbonamenti_service__WEBPACK_IMPORTED_MODULE_2__.AbbonamentiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_3__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: AbbonamentiComponent,
      selectors: [["app-abbonamenti"]],
      decls: 5,
      vars: 4,
      consts: [["inProgress", ""], ["notPayed", ""], [4, "ngIf"], [1, "text-center", "mt-4"], [1, "container", "mt-3"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-responsive"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "btn", "btn-success", 3, "click"], [1, "mt-3", 3, "pageChange"]],
      template: function AbbonamentiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, AbbonamentiComponent_div_0_Template, 18, 1, "div", 2)(1, AbbonamentiComponent_div_1_Template, 20, 1, "div", 2)(2, AbbonamentiComponent_div_2_Template, 19, 7, "div", 2)(3, AbbonamentiComponent_div_3_Template, 3, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ActiveSubscription.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ToBeActivatedSubscription.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ExpiredSubscription.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.ExpiredSubscription.length + ctx.ToBeActivatedSubscription.length + ctx.ActiveSubscription.length == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe],
      styles: [".container[_ngcontent-%COMP%] {\n    background-color: #f8f9fa;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  .table[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .btn-success[_ngcontent-%COMP%] {\n    background-color: #28a745;\n    border-color: #28a745;\n  }\n  .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #cb1717;\n    color: white;\n  }\n  h1[_ngcontent-%COMP%] {\n    color: #343a40;\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L1VzZXIvYWJib25hbWVudGkvYWJib25hbWVudGkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7RUFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuICAudGFibGUge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgfVxuICAudGhlYWQtZGFyayB0aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NiMTcxNztcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgaDEge1xuICAgIGNvbG9yOiAjMzQzYTQwO1xuICB9Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1802:
/*!*****************************************************************!*\
  !*** ./src/app/Component/User/documenti/documenti.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentiComponent: () => (/* binding */ DocumentiComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var src_Services_Documenti_documenti_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Documenti/documenti.service */ 2325);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2587);








function DocumentiComponent_div_0_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td")(8, "div", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentiComponent_div_0_tr_13_Template_button_click_9_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.openDoc(item_r2.idDocumento));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Scarica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.getTypeById(item_r2.idTipoDocumento));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r2.nomeDocumento);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r2.dataCaricamento, "dd-MM-yyyy"));
  }
}
function DocumentiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "table", 2)(3, "thead", 3)(4, "tr")(5, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Tipo Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Nome Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Data Caricamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "th", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DocumentiComponent_div_0_tr_13_Template, 11, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.DocList);
  }
}
function DocumentiComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "h2", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Al momento non hai nessun documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class DocumentiComponent {
  constructor(CommonService, DocumentService, dialog) {
    this.CommonService = CommonService;
    this.DocumentService = DocumentService;
    this.dialog = dialog;
    this.DocList = [];
    this.DocType = [];
    this.UserId = "";
    this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe('en-US');
    this.UserId = CommonService.getCookie("sub");
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.DocumentService.GetTipiDocumenti()).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.DocType = data.Data;
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero Tipi documento");
          }
        }
      });
      _this.DocList = [];
      yield (yield _this.DocumentService.GetUserDocuments(_this.UserId)).subscribe(data => {
        if (data != null && data.Data != null) {
          _this.DocList = data.Data;
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero Utenti");
          }
        }
      });
    })();
  }
  getTypeById(_id) {
    const valueObj = this.DocType.find(value => value.id === _id);
    return valueObj ? valueObj.descrizione : '';
  }
  openDoc(DocId) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      var doc = null;
      yield (yield _this2.DocumentService.GetDocument(DocId)).subscribe(data => {
        if (data != null && data.Data != null) {
          doc = data.Data.datiDocumento.replace('data:application/pdf;base64,', '');
          const byteArray = new Uint8Array(atob(doc).split('').map(char => char.charCodeAt(0)));
          const file = new Blob([byteArray], {
            type: 'application/pdf'
          });
          const fileUrl = URL.createObjectURL(file);
          let fileName = data.Data.nomeDocumento;
          let link = document.createElement('a');
          link.download = fileName;
          link.target = '_blank';
          link.href = fileUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero Utenti");
          }
        }
      });
    })();
  }
  static {
    this.ɵfac = function DocumentiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_Services_Documenti_documenti_service__WEBPACK_IMPORTED_MODULE_2__.DocumentiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: DocumentiComponent,
      selectors: [["app-documenti"]],
      decls: 2,
      vars: 2,
      consts: [[4, "ngIf"], [1, "container", "mt-5"], [1, "table", "table-striped", "table-responsive"], [1, "thead-dark"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], [1, "dropdown"], ["type", "button", "id", "viewDoc", "aria-expanded", "false", 1, "btn", "btn-primary", 3, "click"], [1, "text-center", "mt-5"]],
      template: function DocumentiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, DocumentiComponent_div_0_Template, 14, 1, "div", 0)(1, DocumentiComponent_div_1_Template, 3, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DocList.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.DocList.length == 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: [".container[_ngcontent-%COMP%] {\n    background-color: #f8f9fa;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  .table[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    border-color: #007bff;\n  }\n  .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #e23e07;\n    color: white;\n  }\n  h2[_ngcontent-%COMP%] {\n    color: #343a40;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L1VzZXIvZG9jdW1lbnRpL2RvY3VtZW50aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsY0FBYztFQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC50YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICB9XG4gIC50aGVhZC1kYXJrIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZTA3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoMiB7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6070:
/*!***********************************************************!*\
  !*** ./src/app/Component/User/eventi/eventi.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EventiComponent: () => (/* binding */ EventiComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _modale_modale_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modale/modale.component */ 7010);
/* harmony import */ var src_app_Model_Evento_Iscrizione__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Evento/Iscrizione */ 973);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Eventi/eventi.service */ 6365);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ 2423);











const _c0 = (a0, a1) => ({
  itemsPerPage: a0,
  currentPage: a1
});
function EventiComponent_div_0_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td")(10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventiComponent_div_0_tr_19_Template_button_click_10_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.DeleteSubscribe(item_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Cancella Iscrizione ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r2.Evento == null ? null : item_r2.Evento.nomeEvento);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r2.Evento == null ? null : item_r2.Evento.dataInizioEvento, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r2.Evento == null ? null : item_r2.Evento.dataFineEvento, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getCategorieDescrizione(item_r2.Iscrizione.categoria));
  }
}
function EventiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Iscrizioni Attive");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nome Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Inizio Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fine Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Categoria");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, EventiComponent_div_0_tr_19_Template, 12, 4, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.ExtendedSub);
  }
}
function EventiComponent_div_1_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td")(8, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EventiComponent_div_1_tr_17_Template_button_click_8_listener() {
      const item_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.Subscribe(item_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Iscriviti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r5.nomeEvento);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r5.dataInizioEvento, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r5.dataFineEvento, "dd-MM-yyyy"));
  }
}
function EventiComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Iscrizioni Aperte");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nome Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Inizio Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fine Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, EventiComponent_div_1_tr_17_Template, 10, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.ToBeSubscribedEvent);
  }
}
function EventiComponent_div_2_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r7.nomeEvento);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r7.dataInizioEvento, "dd-MM-yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.datePipe.transform(item_r7.dataFineEvento, "dd-MM-yyyy"));
  }
}
function EventiComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Eventi Passati");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2)(4, "div", 3)(5, "div", 4)(6, "table", 5)(7, "thead", 6)(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Nome Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Inizio Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fine Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, EventiComponent_div_2_tr_16_Template, 7, 3, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](17, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "pagination-controls", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function EventiComponent_div_2_Template_pagination_controls_pageChange_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.currentPage = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](17, 1, ctx_r2.PastEvent, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](4, _c0, ctx_r2.itemsPerPage, ctx_r2.currentPage)));
  }
}
class EventiComponent {
  constructor(EventService, common, dialog) {
    this.EventService = EventService;
    this.common = common;
    this.dialog = dialog;
    this.Events = [];
    this.PastEvent = [];
    this.ToBeSubscribedEvent = [];
    this.SubscribedEvent = [];
    this.CategoriesData = [];
    this.ExtendedSub = [];
    this.searchText = '';
    this.currentPage = 1;
    this.itemsPerPage = 5;
    this.pageSizes = [5, 10, 15, 20];
    this.displayedColumns = ['TipoAbbonamento', 'DataInizio', 'DataScadenza'];
    this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe('en-US');
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const UserId = _this.common.getCookie("sub");
      (yield _this.EventService.GetEventi()).subscribe(/*#__PURE__*/function () {
        var _ref = (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
          if (data != null && data.Data != null) {
            _this.Events = data.Data.map(item => ({
              id: item.id,
              nomeEvento: item.nomeEvento,
              dataInizioEvento: new Date(item.dataInizioEvento),
              dataFineEvento: new Date(item.dataFineEvento),
              luogoEvento: item.luogoEvento,
              descrizione: item.descrizione,
              link: item.link,
              categorie: item.categorie,
              copertina: item.copertina
            }));
            _this.ToBeSubscribedEvent = _this.Events.filter(a => a.dataInizioEvento > new Date() && a.dataFineEvento > new Date());
            _this.PastEvent = _this.Events.filter(a => a.dataFineEvento != null && a.dataFineEvento < new Date());
            yield (yield _this.EventService.GetCategorie()).subscribe(cat => {
              if (cat != null && cat.Data != null) {
                _this.CategoriesData = cat.Data;
              } else {
                if (cat.Error != null && cat.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  window.location.href = '/login';
                } else {
                  alert("Errore recupero categorie");
                }
              }
            });
            (yield _this.EventService.GetSubscription(UserId)).subscribe(data => {
              if (data != null && data.Data != null) {
                const EventIds = new Set(_this.Events.map(sub => sub.id));
                const PastEvents = new Set(_this.PastEvent.map(sub => sub.id));
                _this.SubscribedEvent = data.Data.filter(event => EventIds.has(event.eventId) && !PastEvents.has(event.eventId));
                _this.SubscribedEvent.forEach(e => _this.ExtendedSub.push(new src_app_Model_Evento_Iscrizione__WEBPACK_IMPORTED_MODULE_2__.IscrizioneExt(e, _this.Events.find(ev => ev.id == e.eventId))));
              } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpStatusCode.Unauthorized) {
                alert("La tua sessione è scaduta, rieffettua il login");
                window.location.href = '/login';
              } else {
                alert("Errore recupero Iscrizioni");
              }
            });
          } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero Eventi");
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  openModal(type, evento) {
    const dialogRef = this.dialog.open(_modale_modale_component__WEBPACK_IMPORTED_MODULE_1__.ModaleComponent, {
      data: {
        type,
        object: evento
      }
    });
  }
  getCategorieDescrizione(CategoriaId) {
    return this.CategoriesData.find(c => c.Id == CategoriaId)?.Descrizione;
  }
  Subscribe(evento) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.openModal("SubscribeEvent", evento);
    })();
  }
  DeleteSubscribe(Iscrizione) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this3.EventService.DeleteSubscription(Iscrizione.Iscrizione.eventId, Iscrizione.Iscrizione.userId, Iscrizione.Iscrizione.categoria)).subscribe(cat => {
        if (cat != null && cat.Data != null) {
          alert("Iscrizione Cancellata");
          window.location.reload();
        } else {
          if (cat.Error != null && cat.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            window.location.href = '/login';
          } else {
            alert("Errore recupero categorie");
          }
        }
      });
    })();
  }
  static {
    this.ɵfac = function EventiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || EventiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_3__.EventiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: EventiComponent,
      selectors: [["app-eventi"]],
      decls: 4,
      vars: 3,
      consts: [[4, "ngIf"], [1, "text-center", "mt-4"], [1, "container", "mt-3"], [1, "row"], [1, "col-12"], [1, "table", "table-striped", "table-responsive"], [1, "thead-dark"], [4, "ngFor", "ngForOf"], ["type", "button", "id", "viewDoc", "aria-expanded", "false", 1, "btn", "btn-secondary", 3, "click"], [3, "pageChange"]],
      template: function EventiComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, EventiComponent_div_0_Template, 21, 1, "div", 0)(1, EventiComponent_div_1_Template, 19, 1, "div", 0)(2, EventiComponent_div_2_Template, 19, 7, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.SubscribedEvent.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.ToBeSubscribedEvent.length > 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.PastEvent.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginationControlsComponent, ngx_pagination__WEBPACK_IMPORTED_MODULE_9__.PaginatePipe],
      styles: [".container[_ngcontent-%COMP%] {\n    background-color: #f8f9fa;\n    padding: 20px;\n    border-radius: 10px;\n  }\n  .table[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  .btn-primary[_ngcontent-%COMP%] {\n    background-color: #007bff;\n    border-color: #007bff;\n  }\n  .thead-dark[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #e23e07;\n    color: white;\n  }\n  h2[_ngcontent-%COMP%] {\n    color: #343a40;\n  }\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L1VzZXIvZXZlbnRpL2V2ZW50aS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsY0FBYztFQUNoQiIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG4gIC50YWJsZSB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICB9XG4gIC50aGVhZC1kYXJrIHRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIzZTA3O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuICBoMiB7XG4gICAgY29sb3I6ICMzNDNhNDA7XG4gIH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 9054:
/*!**********************************************************!*\
  !*** ./src/app/Component/contatti/contatti.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContattiComponent: () => (/* binding */ ContattiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);



function ContattiComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContattiComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContattiComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Subject is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function ContattiComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Message is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
class ContattiComponent {
  constructor() {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  onSubmit() {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the data to your backend
    alert('Thank you for your message! We will get back to you soon.');
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }
  static {
    this.ɵfac = function ContattiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ContattiComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContattiComponent,
      selectors: [["app-contatti"]],
      decls: 71,
      vars: 13,
      consts: [["contactForm", "ngForm"], ["name", "ngModel"], ["email", "ngModel"], ["subject", "ngModel"], ["message", "ngModel"], [1, "contact-page"], [1, "contact-header"], [1, "contact-container"], [1, "contact-form-section"], [1, "contact-form", 3, "ngSubmit"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "name", "name", "required", "", 3, "ngModelChange", "ngModel"], ["class", "error-message", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 3, "ngModelChange", "ngModel"], ["for", "subject"], ["type", "text", "id", "subject", "name", "subject", "required", "", 3, "ngModelChange", "ngModel"], ["for", "message"], ["id", "message", "name", "message", "required", "", "rows", "5", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], [1, "contact-info-section"], [1, "info-card"], [1, "info-icon"], [1, "map-section"], [1, "map-container"], ["src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d523.2362315811703!2d10.59983801398029!3d43.02540838449388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d61f98105352cb%3A0x327fd5c956bc1486!2sASD%20JUTSUKA!5e1!3m2!1sit!2sit!4v1742989997246!5m2!1sit!2sit`, "width", "100%", "height", "450", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], [1, "error-message"]],
      template: function ContattiComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "header", 6)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Get in touch with us for any questions or inquiries");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7)(7, "section", 8)(8, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Send us a Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 9, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContattiComponent_Template_form_ngSubmit_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.onSubmit());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10)(13, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 12, 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ContattiComponent_Template_input_ngModelChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.name, $event) || (ctx.formData.name = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContattiComponent_div_17_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10)(19, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 15, 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ContattiComponent_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.email, $event) || (ctx.formData.email = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContattiComponent_div_23_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10)(25, "label", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Subject");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 17, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ContattiComponent_Template_input_ngModelChange_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.subject, $event) || (ctx.formData.subject = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ContattiComponent_div_29_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10)(31, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "textarea", 19, 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayListener"]("ngModelChange", function ContattiComponent_Template_textarea_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayBindingSet"](ctx.formData.message, $event) || (ctx.formData.message = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ContattiComponent_div_35_Template, 2, 0, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Send Message");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 21)(39, "div", 22)(40, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\uD83D\uDCCD");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Location");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Via Eugenio Montale, 20");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "57021 Campiglia Marittima LI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22)(49, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\uD83D\uDCDE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "+1 (555) 123-4567");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Mon - Fri: 6am - 10pm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22)(58, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u2709\uFE0F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "info@fitnessgym.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "support@fitnessgym.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section", 24)(67, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Find Us");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "iframe", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          const contactForm_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
          const name_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
          const email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);
          const subject_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);
          const message_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", name_r3.invalid && (name_r3.dirty || name_r3.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.email);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", email_r4.invalid && (email_r4.dirty || email_r4.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.subject);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", subject_r5.invalid && (subject_r5.dirty || subject_r5.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtwoWayProperty"]("ngModel", ctx.formData.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", message_r6.invalid && (message_r6.dirty || message_r6.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !contactForm_r2.form.valid);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeIn", undefined);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm],
      styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    font-family: 'Arial', sans-serif;\n    line-height: 1.6;\n    background-color: #f5f5f5;\n    color: #333;\n  }\n  \n  .contact-page[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 2rem;\n  }\n  \n  .contact-header[_ngcontent-%COMP%] {\n    text-align: center;\n    margin-bottom: 3rem;\n    padding: 2rem 0;\n  }\n  \n  .contact-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    color: #333;\n    margin-bottom: 1rem;\n  }\n  \n  .contact-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    color: #666;\n  }\n  \n  .contact-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n    margin-bottom: 3rem;\n  }\n  \n  .contact-form-section[_ngcontent-%COMP%] {\n    background: white;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  }\n  \n  .contact-form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n    color: #333;\n  }\n  \n  .contact-form[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-weight: bold;\n    color: #555;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 0.8rem;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    font-size: 1rem;\n    transition: border-color 0.3s;\n  }\n  \n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: #ff4444;\n  }\n  \n  .error-message[_ngcontent-%COMP%] {\n    color: #ff4444;\n    font-size: 0.9rem;\n    margin-top: 0.2rem;\n  }\n  \n  button[_ngcontent-%COMP%] {\n    background-color: #ff4444;\n    color: white;\n    padding: 1rem;\n    border: none;\n    border-radius: 5px;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: background-color 0.3s;\n  }\n  \n  button[_ngcontent-%COMP%]:hover {\n    background-color: #ff6666;\n  }\n  \n  button[_ngcontent-%COMP%]:disabled {\n    background-color: #cccccc;\n    cursor: not-allowed;\n  }\n  \n  .contact-info-section[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n  }\n  \n  .info-card[_ngcontent-%COMP%] {\n    background: white;\n    padding: 1.5rem;\n    border-radius: 10px;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    transition: transform 0.3s;\n  }\n  \n  .info-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n  }\n  \n  .info-icon[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    margin-bottom: 1rem;\n  }\n  \n  .info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    color: #333;\n    margin-bottom: 0.5rem;\n  }\n  \n  .info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n    margin-bottom: 0.3rem;\n  }\n  \n  .map-section[_ngcontent-%COMP%] {\n    margin-top: 3rem;\n  }\n  \n  .map-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n    color: #333;\n  }\n  \n  .map-container[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    overflow: hidden;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  }\n  \n  @media (max-width: 768px) {\n    .contact-container[_ngcontent-%COMP%] {\n      grid-template-columns: 1fr;\n    }\n  \n    .contact-page[_ngcontent-%COMP%] {\n      padding: 1rem;\n    }\n  \n    .contact-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2rem;\n    }\n  \n    .info-card[_ngcontent-%COMP%] {\n      padding: 1rem;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L2NvbnRhdHRpL2NvbnRhdHRpLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsV0FBVztFQUNiOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztFQUNiOztFQUVBOztJQUVFLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZiw2QkFBNkI7RUFDL0I7O0VBRUE7O0lBRUUsYUFBYTtJQUNiLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGlDQUFpQztFQUNuQzs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCOztFQUVBO0lBQ0UsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIseUNBQXlDO0VBQzNDOztFQUVBO0lBQ0U7TUFDRSwwQkFBMEI7SUFDNUI7O0lBRUE7TUFDRSxhQUFhO0lBQ2Y7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5jb250YWN0LXBhZ2Uge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gIH1cbiAgXG4gIC5jb250YWN0LWhlYWRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICB9XG4gIFxuICAuY29udGFjdC1oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5jb250YWN0LWhlYWRlciBwIHtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICBjb2xvcjogIzY2NjtcbiAgfVxuICBcbiAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBnYXA6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcbiAgfVxuICBcbiAgLmNvbnRhY3QtZm9ybS1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIH1cbiAgXG4gIC5jb250YWN0LWZvcm0tc2VjdGlvbiBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG4gIFxuICAuY29udGFjdC1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAwLjVyZW07XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzU1NTtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXAgaW5wdXQsXG4gIC5mb3JtLWdyb3VwIHRleHRhcmVhIHtcbiAgICBwYWRkaW5nOiAwLjhyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjNzO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cyxcbiAgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmY0NDQ0O1xuICB9XG4gIFxuICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgbWFyZ2luLXRvcDogMC4ycmVtO1xuICB9XG4gIFxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0NDQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcztcbiAgfVxuICBcbiAgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NjY2O1xuICB9XG4gIFxuICBidXR0b246ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgfVxuICBcbiAgLmNvbnRhY3QtaW5mby1zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5pbmZvLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcbiAgfVxuICBcbiAgLmluZm8tY2FyZDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICB9XG4gIFxuICAuaW5mby1pY29uIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLmluZm8tY2FyZCBoMyB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gIFxuICAuaW5mby1jYXJkIHAge1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcbiAgfVxuICBcbiAgLm1hcC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG4gIFxuICAubWFwLXNlY3Rpb24gaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxuICBcbiAgLm1hcC1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICAgIH1cbiAgXG4gICAgLmNvbnRhY3QtcGFnZSB7XG4gICAgICBwYWRkaW5nOiAxcmVtO1xuICAgIH1cbiAgXG4gICAgLmNvbnRhY3QtaGVhZGVyIGgxIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gIFxuICAgIC5pbmZvLWNhcmQge1xuICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 4816:
/*!**********************************************************************!*\
  !*** ./src/app/Component/cookie-consent/cookie-consent.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieConsentComponent: () => (/* binding */ CookieConsentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function CookieConsentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Utilizziamo i cookie per migliorare la tua esperienza");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CookieConsentComponent_div_0_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.handleAccept());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Accetta");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class CookieConsentComponent {
  constructor(common) {
    this.common = common;
    this.consent = null;
  }
  ngOnInit() {
    this.consent = this.common.getStorage('cookieConsent');
  }
  handleAccept() {
    this.common.setStorage('cookieConsent', 'accepted');
    this.consent = 'accepted';
  }
  handleDecline() {
    this.common.setStorage('cookieConsent', 'declined');
    this.consent = 'declined';
  }
  static {
    this.ɵfac = function CookieConsentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || CookieConsentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CookieConsentComponent,
      selectors: [["app-cookie-consent"]],
      decls: 1,
      vars: 1,
      consts: [["class", "cookie-consent-banner", 4, "ngIf"], [1, "cookie-consent-banner"], [3, "click"]],
      template: function CookieConsentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CookieConsentComponent_div_0_Template, 5, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.consent);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".cookie-consent-banner[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    background-color: #f1f1f1;\n    padding: 10px;\n    text-align: center;\n    box-shadow: 0 -2px 5px rgba(0,0,0,0.1);\n  }\n  \n  .cookie-consent-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0 10px;\n  }\n  \n  .cookie-consent-banner[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin: 0 5px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L2Nvb2tpZS1jb25zZW50L2Nvb2tpZS1jb25zZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQ0FBc0M7RUFDeEM7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGFBQWE7RUFDZiIsInNvdXJjZXNDb250ZW50IjpbIi5jb29raWUtY29uc2VudC1iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3gtc2hhZG93OiAwIC0ycHggNXB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgfVxuICBcbiAgLmNvb2tpZS1jb25zZW50LWJhbm5lciBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG4gIFxuICAuY29va2llLWNvbnNlbnQtYmFubmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDVweDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3016:
/*!**************************************************!*\
  !*** ./src/app/Component/home/home.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/Base/enum */ 855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/Services/Sito/sito.service */ 2561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);






function HomeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const slide_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + slide_r1.urlImage + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.currentSlide === i_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](slide_r1.description);
  }
}
function HomeComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_span_6_Template_span_click_0_listener() {
      const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r2.goToSlide(i_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx_r2.currentSlide === i_r5);
  }
}
function HomeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const feature_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r6.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r6.description);
  }
}
function HomeComponent_div_18_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const feature_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](feature_r7);
  }
}
function HomeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ul", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeComponent_div_18_li_6_Template, 2, 1, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const plan_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plan_r8.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](plan_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", plan_r8.additionalText.split(","));
  }
}
class HomeComponent {
  constructor(commonService, sitoService) {
    this.commonService = commonService;
    this.sitoService = sitoService;
    this.images = [];
    this.slides = [];
    this.plans = [];
    this.currentSlide = 0;
    //[
    // {
    //   image: this.commonService.getUrlForGoogleDrive('https://drive.google.com/file/d/1uRx8iJu6Wck9Xj2SnlgMmsJkqPUpAM5O/view?usp=drive_link'),
    //   title: 'Transform Your Body',
    //   description: 'Start your fitness journey today with our expert trainers',
    //   buttonText: 'Start Now'
    // }
    // ,{
    //   image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    //   title: 'Expert Trainers',
    //   description: 'Get personalized workout plans tailored to your goals',
    //   buttonText: 'Meet Our Trainers'
    // },
    // {
    //   image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
    //   title: 'Modern Equipment',
    //   description: 'Train with state-of-the-art facilities and equipment',
    //   buttonText: 'View Gym'
    // },
    // {
    //   image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c',
    //   title: 'Group Classes',
    //   description: 'Join our energetic group workouts and make new friends',
    //   buttonText: 'View Schedule'
    // }
    //];
    this.features = [{
      icon: '💪',
      title: 'Personal Training',
      description: 'One-on-one sessions with certified trainers customized to your needs'
    }, {
      icon: '🕒',
      title: '24/7 Access',
      description: 'Work out on your schedule with round-the-clock facility access'
    }, {
      icon: '👥',
      title: 'Group Classes',
      description: 'Join our energetic group workouts with expert instructors'
    }, {
      icon: '🥗',
      title: 'Nutrition Plans',
      description: 'Custom meal plans designed to help you reach your fitness goals'
    }];
    this.GetHomepageImages();
    this.startAutoPlay();
  }
  //plans = [
  //  {
  //    title: 'Basic',
  //    price: '$29/month',
  //    features: [
  //      'Access to gym facilities',
  //      'Basic equipment usage',
  //      'Locker room access',
  //      '2 group classes/month'
  //    ]
  //  },
  //  {
  //    title: 'Premium',
  //    price: '$59/month',
  //    features: [
  //      'Full gym access 24/7',
  //      'All equipment access',
  //      'Unlimited group classes',
  //      'One personal training session/month'
  //    ]
  //  },
  //  {
  //    title: 'Elite',
  //    price: '$99/month',
  //    features: [
  //      'All Premium features',
  //      'Weekly personal training',
  //      'Custom nutrition plan',
  //      'Spa access'
  //    ]
  //  }
  //];
  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 7000);
  }
  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
  goToSlide(index) {
    this.currentSlide = index;
    this.stopAutoPlay();
    this.startAutoPlay();
  }
  GetHomepageImages() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield (yield _this.sitoService.GetImmaginiByPagina(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.Pagine.Homepage.valueOf())).subscribe(data => {
        if (data != null && data.Data != null) {
          data.Data.forEach(item => {
            item.urlImage = item.urlFromGoogleDrive ? _this.commonService.getUrlForGoogleDrive(item.urlImage) : item.urlImage;
            _this.images.push(item);
            //inizializzo immagini nelle varie sezioni
            _this.slides = _this.images.filter(f => f.section == 1).sort((a, b) => (a.order || 0) - (b.order || 0));
            _this.plans = _this.images.filter(f => f.section == 3).sort((a, b) => (a.order || 0) - (b.order || 0));
          });
        } else {
          alert("Errore recupero immagini homepage");
        }
      });
    })();
  }
  static {
    this.ɵfac = function HomeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_3__.SitoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 19,
      vars: 4,
      consts: [[1, "slider"], ["class", "slide", 3, "active", "backgroundImage", 4, "ngFor", "ngForOf"], [1, "slider-controls"], [1, "nav-button", "prev", 3, "click"], [1, "dots"], ["class", "dot", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "nav-button", "next", 3, "click"], [1, "features"], [1, "section-title"], [1, "features-grid"], ["class", "feature-card", 4, "ngFor", "ngForOf"], [1, "membership-plans"], [1, "plans-grid"], ["class", "plan-card", 4, "ngFor", "ngForOf"], [1, "slide"], [1, "slide-content"], [1, "dot", 3, "click"], [1, "feature-card"], [1, "feature-icon"], [1, "plan-card"], [1, "price"], [1, "plan-features"], [4, "ngFor", "ngForOf"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 6, 6, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() {
            return ctx.prevSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "\u276E");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeComponent_span_6_Template, 1, 2, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_7_listener() {
            return ctx.nextSlide();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "\u276F");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "section", 7)(10, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Why Choose Us?");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, HomeComponent_div_13_Template, 7, 3, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "section", 11)(15, "h2", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Membership Plans");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, HomeComponent_div_18_Template, 7, 3, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slides);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.slides);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.features);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.plans);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf],
      styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  body[_ngcontent-%COMP%] {\n    font-family: 'Arial', sans-serif;\n    line-height: 1.6;\n    overflow-x: hidden;\n  }\n  \n  .slider[_ngcontent-%COMP%] {\n    position: relative;\n    height: 100vh;\n    overflow: hidden;\n  }\n  \n  .slide[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    transition: opacity 1s ease-in-out;\n    background-size: cover;\n    background-position: center;\n  }\n  \n  .slide[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.4);\n  }\n  \n  .slide.active[_ngcontent-%COMP%] {\n    opacity: 1;\n  }\n  \n  .slide-content[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: center;\n    color: white;\n    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\n    width: 80%;\n    max-width: 800px;\n  }\n  \n  .slide-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    margin-bottom: 1rem;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: _ngcontent-%COMP%_slideUp 0.8s forwards;\n  }\n  \n  .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: _ngcontent-%COMP%_slideUp 0.8s 0.2s forwards;\n  }\n  \n  @keyframes _ngcontent-%COMP%_slideUp {\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  \n  .cta-button[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    font-size: 1.2rem;\n    background-color: #ff4444;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: all 0.3s;\n    opacity: 0;\n    transform: translateY(20px);\n    animation: _ngcontent-%COMP%_slideUp 0.8s 0.4s forwards;\n  }\n  \n  .cta-button[_ngcontent-%COMP%]:hover {\n    background-color: #ff6666;\n    transform: translateY(-2px);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  }\n  \n  .slider-controls[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 40px;\n    left: 50%;\n    transform: translateX(-50%);\n    display: flex;\n    align-items: center;\n    gap: 20px;\n    z-index: 10;\n  }\n  \n  .nav-button[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.3);\n    border: none;\n    color: white;\n    padding: 10px 20px;\n    cursor: pointer;\n    font-size: 1.5rem;\n    border-radius: 50%;\n    transition: all 0.3s;\n  }\n  \n  .nav-button[_ngcontent-%COMP%]:hover {\n    background: rgba(255, 255, 255, 0.5);\n  }\n  \n  .dots[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 10px;\n  }\n  \n  .dot[_ngcontent-%COMP%] {\n    width: 12px;\n    height: 12px;\n    background: rgba(255, 255, 255, 0.3);\n    border-radius: 50%;\n    cursor: pointer;\n    transition: all 0.3s;\n  }\n  \n  .dot.active[_ngcontent-%COMP%] {\n    background: white;\n    transform: scale(1.2);\n  }\n  \n  .section-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 2.5rem;\n    margin-bottom: 3rem;\n    color: #333;\n  }\n  \n  .features[_ngcontent-%COMP%] {\n    padding: 6rem 2rem;\n    background-color: #f5f5f5;\n  }\n  \n  .features-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n    gap: 2rem;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  \n  .feature-card[_ngcontent-%COMP%] {\n    background: white;\n    padding: 2rem;\n    border-radius: 10px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    text-align: center;\n    transition: all 0.3s;\n  }\n  \n  .feature-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);\n  }\n  \n  .feature-icon[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    margin-bottom: 1rem;\n  }\n  \n  .feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin: 1rem 0;\n    color: #333;\n    font-size: 1.5rem;\n  }\n  \n  .feature-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #666;\n  }\n  \n  .membership-plans[_ngcontent-%COMP%] {\n    padding: 6rem 2rem;\n    background-color: white;\n  }\n  \n  .plans-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    gap: 2rem;\n    max-width: 1200px;\n    margin: 0 auto;\n  }\n  \n  .plan-card[_ngcontent-%COMP%] {\n    background: #f8f9fa;\n    padding: 3rem 2rem;\n    border-radius: 15px;\n    text-align: center;\n    transition: all 0.3s;\n    border: 2px solid transparent;\n  }\n  \n  .plan-card[_ngcontent-%COMP%]:hover {\n    border-color: #ff4444;\n    transform: translateY(-5px);\n  }\n  \n  .plan-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n    color: #333;\n    margin-bottom: 1rem;\n  }\n  \n  .price[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    color: #ff4444;\n    margin-bottom: 2rem;\n    font-weight: bold;\n  }\n  \n  .plan-features[_ngcontent-%COMP%] {\n    list-style: none;\n    margin-bottom: 2rem;\n  }\n  \n  .plan-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n    color: #666;\n  }\n  \n  .plan-button[_ngcontent-%COMP%] {\n    padding: 1rem 2rem;\n    background-color: #ff4444;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n    transition: all 0.3s;\n    font-size: 1.1rem;\n  }\n  \n  .plan-button[_ngcontent-%COMP%]:hover {\n    background-color: #ff6666;\n    transform: translateY(-2px);\n  }\n  \n  @media (max-width: 768px) {\n    .slide-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n      font-size: 2.5rem;\n    }\n  \n    .slide-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n      font-size: 1.2rem;\n    }\n  \n    .section-title[_ngcontent-%COMP%] {\n      font-size: 2rem;\n    }\n\n    .slide-image[_ngcontent-%COMP%] {\n      width: 100%;\n      height: auto;\n    }\n    \n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1Ysd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLFVBQVU7SUFDViwyQkFBMkI7SUFDM0IscUNBQXFDO0VBQ3ZDOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQix3Q0FBd0M7RUFDMUM7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsV0FBVztFQUNiOztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDJCQUEyQjtJQUMzQiwwQ0FBMEM7RUFDNUM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsV0FBVztFQUNiOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXO01BQ1gsWUFBWTtJQUNkOztFQUVGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuICBcbiAgYm9keSB7XG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5zbGlkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5zbGlkZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgXG4gIC5zbGlkZTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgfVxuICBcbiAgLnNsaWRlLmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICBcbiAgLnNsaWRlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgfVxuICBcbiAgLnNsaWRlLWNvbnRlbnQgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjhzIGZvcndhcmRzO1xuICB9XG4gIFxuICAuc2xpZGUtY29udGVudCBwIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwcHgpO1xuICAgIGFuaW1hdGlvbjogc2xpZGVVcCAwLjhzIDAuMnMgZm9yd2FyZHM7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVVcCB7XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5jdGEtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDQ0NDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XG4gICAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuOHMgMC40cyBmb3J3YXJkcztcbiAgfVxuICBcbiAgLmN0YS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIH1cbiAgXG4gIC5zbGlkZXItY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDQwcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIFxuICAubmF2LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIH1cbiAgXG4gIC5uYXYtYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIH1cbiAgXG4gIC5kb3RzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMTBweDtcbiAgfVxuICBcbiAgLmRvdCB7XG4gICAgd2lkdGg6IDEycHg7XG4gICAgaGVpZ2h0OiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAuZG90LmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG4gIFxuICAuc2VjdGlvbi10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgY29sb3I6ICMzMzM7XG4gIH1cbiAgXG4gIC5mZWF0dXJlcyB7XG4gICAgcGFkZGluZzogNnJlbSAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIH1cbiAgXG4gIC5mZWF0dXJlcy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjUwcHgsIDFmcikpO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLmZlYXR1cmUtY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB9XG4gIFxuICAuZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuICB9XG4gIFxuICAuZmVhdHVyZS1pY29uIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxuICBcbiAgLmZlYXR1cmUtY2FyZCBoMyB7XG4gICAgbWFyZ2luOiAxcmVtIDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbiAgXG4gIC5mZWF0dXJlLWNhcmQgcCB7XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIC5tZW1iZXJzaGlwLXBsYW5zIHtcbiAgICBwYWRkaW5nOiA2cmVtIDJyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIH1cbiAgXG4gIC5wbGFucy1ncmlkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgIGdhcDogMnJlbTtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxuICBcbiAgLnBsYW4tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgICBwYWRkaW5nOiAzcmVtIDJyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgXG4gIC5wbGFuLWNhcmQ6aG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogI2ZmNDQ0NDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gIH1cbiAgXG4gIC5wbGFuLWNhcmQgaDMge1xuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbiAgXG4gIC5wcmljZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgY29sb3I6ICNmZjQ0NDQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLnBsYW4tZmVhdHVyZXMge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICBcbiAgLnBsYW4tZmVhdHVyZXMgbGkge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6ICM2NjY7XG4gIH1cbiAgXG4gIC5wbGFuLWJ1dHRvbiB7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQ0NDQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG4gIFxuICAucGxhbi1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY2NjY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAuc2xpZGUtY29udGVudCBoMSB7XG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG4gIFxuICAgIC5zbGlkZS1jb250ZW50IHAge1xuICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICBcbiAgICAuc2VjdGlvbi10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgLnNsaWRlLWltYWdlIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgICBcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 2660:
/*!****************************************************!*\
  !*** ./src/app/Component/login/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _Services_Common_common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Services/Common/common.service */ 9009);
/* harmony import */ var _Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Services/Login/login.service */ 6377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);







const _c0 = () => ["/login/newuser"];
function LoginComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "form")(4, "div", 3)(5, "input", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_1_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.email, $event) || (ctx_r1.email = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 3)(7, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function LoginComponent_div_1_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx_r1.password, $event) || (ctx_r1.password = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.Login());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Per registrarti clicca ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "qui");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx_r1.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0));
  }
}
function LoginComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.enter", function LoginComponent_div_2_Template_button_keydown_enter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.Inizia());
    })("click", function LoginComponent_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r1.Inizia());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Clicca qui per iniziare");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Benvenuto ", ctx_r1.Name, "");
  }
}
class LoginComponent {
  constructor(common, account, router) {
    this.common = common;
    this.account = account;
    this.router = router;
    this.email = "";
    this.password = "";
    this.Token = "";
    this.isLogged = false;
    this.Name = "";
  }
  Login() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.Token = _this.common.getStorage("Token");
      if (_this.Token != null && _this.Token != '') {
        alert("Utente già loggato");
      } else {
        yield (yield _this.account.login(_this.email.toLowerCase(), _this.password)).subscribe(response => {
          //this.response = response;
          if (response != null && response.Data != null && response.Data.success) {
            if (_this.common.getStorage("cookieConsent") == "accepted") {
              _this.common.setCookieForToken("Token", response.Data.data.token.toString());
              let decodedJWT = _this.common.manageRoles(response.Data.data.token.toString());
              _this.Name = decodedJWT[0];
              _this.isLogged = true;
            } else if (_this.common.getStorage("cookieConsent") == "declined") {
              let decodedJWT = _this.common.DecodeToken(response.Data.data.token);
              _this.Name = decodedJWT[0];
              _this.isLogged = true;
            } else {
              _this.common.setCookieForToken("Token", response.Data.data.token);
              let decodedJWT = _this.common.manageRoles(response.Data.data.token.toString());
              _this.Name = decodedJWT[0];
              _this.isLogged = true;
              localStorage.setItem('cookieConsent', 'accepted');
            }
          } else {
            alert("L'Utente o la Password inseriti non sono corretti");
            //window.location.reload();
          }
        });
      }
      //this.router.navigateByUrl("/");
      //window.location.reload();
    })();
  }
  Inizia() {
    //window.location.reload();
    this.router.navigateByUrl("/").then(() => {
      window.location.reload();
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_1__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 3,
      vars: 2,
      consts: [["class", "card mx-auto mt-5 p-4 shadow", "style", "max-width: 400px;", 4, "ngIf"], [1, "card", "mx-auto", "mt-5", "p-4", "shadow", 2, "max-width", "400px"], [1, "text-center"], [1, "form-group"], ["type", "text", "placeholder", "Inserisci email per login", "required", "", "name", "email", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], ["type", "password", "placeholder", "Inserisci password per login", "required", "", "name", "password", 1, "form-control", "mb-3", 3, "ngModelChange", "ngModel"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "click"], [1, "text-center", "mt-3"], [3, "routerLink"], [1, "btn", "btn-success", "btn-block", 3, "keydown.enter", "click"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_div_1_Template, 14, 4, "div", 0)(2, LoginComponent_div_2_Template, 5, 1, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLogged);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLogged);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
      styles: ["body[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    background-color: #f0f0f0;\n}\n.card[_ngcontent-%COMP%] {\n    background: white;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    width: 300px;\n    text-align: center;\n}\n.card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    margin: 10px 0;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n    background-color: #0056b3;\n}\n\nbody[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  font-family: Arial, sans-serif;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: none;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  border-color: #007bff;\n}\n.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.text-center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsU0FBUztJQUNULHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4uY2FyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJkIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuLmNhcmQgYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmNhcmQgYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xufVxuLmNhcmQge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG59XG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG59XG4uYnRuLXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG59XG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1994:
/*!************************************************************************!*\
  !*** ./src/app/Component/login/nuovo-utente/nuovo-utente.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NuovoUtenteComponent: () => (/* binding */ NuovoUtenteComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/User/User */ 8127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/Services/Login/login.service */ 6377);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 316);








const _c0 = () => ["userEmail"];
const _c1 = () => ["password"];
function NuovoUtenteComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nome obbligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Cognome obbligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Codice Fiscale obbligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Data Nascita obbligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Numero Telefono obbligatorio. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Via obbligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Citt\u00E0 obbligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Regione obbligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Nazionalit\u00E0 obbligatoria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_63_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email obbligatoria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_63_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Formato Email non valido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NuovoUtenteComponent_div_63_div_1_Template, 2, 0, "div", 32)(2, NuovoUtenteComponent_div_63_div_2_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c0))) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c0))) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["email"]);
  }
}
function NuovoUtenteComponent_div_69_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password obbligatoria.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function NuovoUtenteComponent_div_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, NuovoUtenteComponent_div_69_div_1_Template, 2, 0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r0.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c1))) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
  }
}
class NuovoUtenteComponent {
  constructor(formBuilder, loginService, router) {
    this.formBuilder = formBuilder;
    this.loginService = loginService;
    this.router = router;
    this.userForm = this.formBuilder.group({
      firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      fiscalCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      birthDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      region: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      nation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      userEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      //, Validators.minLength(6)]],
      consensoInvioEmail: [true]
    });
  }
  onSubmit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.userForm.valid) {
        const formValues = _this.userForm.value;
        let user = new src_app_Model_User_User__WEBPACK_IMPORTED_MODULE_1__.User(formValues.firstName, formValues.lastName, formValues.userEmail, formValues.fiscalCode, formValues.password, false, null, formValues.birthDate, formValues.street, formValues.number, formValues.city, formValues.region, formValues.nation, formValues.consensoInvioEmail, []);
        yield (yield _this.loginService.NewUser(user)).subscribe(response => {
          //this.response = response;
          if (response.Data != null) {
            alert("Utenza creata correttamente, puoi procedere con il login!");
            _this.router.navigateByUrl("/login");
          } else {
            alert(response.Error.Message);
            //window.location.reload();
          }
        });
      }
    })();
  }
  static {
    this.ɵfac = function NuovoUtenteComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NuovoUtenteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_Services_Login_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NuovoUtenteComponent,
      selectors: [["app-nuovo-utente"]],
      decls: 79,
      vars: 18,
      consts: [[1, "registration-page"], [1, "registration-container", "container", "mt-5"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "firstName"], ["id", "firstName", "formControlName", "firstName", 1, "form-control"], ["class", "text-danger", 4, "ngIf"], ["for", "lastName"], ["id", "lastName", "formControlName", "lastName", 1, "form-control"], ["for", "fiscalCode"], ["id", "fiscalCode", "formControlName", "fiscalCode", 1, "form-control"], ["for", "birthDate"], ["type", "date", "id", "birthDate", "formControlName", "birthDate", 1, "form-control", "calendar"], ["for", "number"], ["type", "text", "id", "number", "formControlName", "number", 1, "form-control"], ["for", "street"], ["type", "text", "id", "street", "formControlName", "street", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "formControlName", "city", 1, "form-control"], ["for", "region"], ["type", "text", "id", "region", "formControlName", "region", 1, "form-control"], ["for", "nation"], ["type", "text", "id", "nation", "formControlName", "nation", 1, "form-control"], ["for", "userEmail"], ["id", "userEmail", "formControlName", "userEmail", 1, "form-control"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "id", "consensoInvioEmail", "name", "consensoInvioEmail", "value", "true", "checked", "", 1, "form-check-input"], ["for", "consensoInvioEmail", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "text-danger"], [4, "ngIf"]],
      template: function NuovoUtenteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "INSERISCI I TUOI DATI PER REGISTRARTI");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function NuovoUtenteComponent_Template_form_ngSubmit_4_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Nome");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, NuovoUtenteComponent_div_9_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3)(12, "label", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Cognome");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, NuovoUtenteComponent_div_15_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 3)(18, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Codice Fiscale");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, NuovoUtenteComponent_div_21_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 3)(24, "label", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Data Nascita");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, NuovoUtenteComponent_div_27_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 3)(30, "label", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Numero Telefono");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, NuovoUtenteComponent_div_33_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 3)(36, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Via");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, NuovoUtenteComponent_div_39_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](40, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 3)(42, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Citt\u00E0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](45, NuovoUtenteComponent_div_45_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 3)(48, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Regione");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, NuovoUtenteComponent_div_51_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 3)(54, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Nazionalit\u00E0");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, NuovoUtenteComponent_div_57_Template, 2, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 3)(60, "label", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](62, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, NuovoUtenteComponent_div_63_Template, 3, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 3)(66, "label", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, NuovoUtenteComponent_div_69_Template, 2, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 3)(72, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](73, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "label", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, " Rimani aggiornato con le ultime novit\u00E0! ");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](76, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](78, "Registrati");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_2_0;
          let tmp_3_0;
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_9_0;
          let tmp_10_0;
          let tmp_11_0;
          let tmp_12_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("@fadeIn", undefined);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.userForm.get("firstName")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.userForm.get("firstName")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userForm.get("lastName")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.userForm.get("lastName")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userForm.get("fiscalCode")) == null ? null : tmp_4_0.invalid) && ((tmp_4_0 = ctx.userForm.get("fiscalCode")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.userForm.get("birthDate")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.userForm.get("birthDate")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.userForm.get("number")) == null ? null : tmp_6_0.invalid) && ((tmp_6_0 = ctx.userForm.get("number")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.userForm.get("street")) == null ? null : tmp_7_0.invalid) && ((tmp_7_0 = ctx.userForm.get("street")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.userForm.get("city")) == null ? null : tmp_8_0.invalid) && ((tmp_8_0 = ctx.userForm.get("city")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.userForm.get("region")) == null ? null : tmp_9_0.invalid) && ((tmp_9_0 = ctx.userForm.get("region")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.userForm.get("nation")) == null ? null : tmp_10_0.invalid) && ((tmp_10_0 = ctx.userForm.get("nation")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](14, _c0))) == null ? null : tmp_11_0.invalid) && ((tmp_11_0 = ctx.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c0))) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c1))) == null ? null : tmp_12_0.invalid) && ((tmp_12_0 = ctx.userForm.get(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c1))) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.userForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName],
      styles: ["*[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  \n  @keyframes _ngcontent-%COMP%_gradientBg {\n    0% { background-position: 0% 50%; }\n    50% { background-position: 100% 50%; }\n    100% { background-position: 0% 50%; }\n  }\n  \n  @keyframes _ngcontent-%COMP%_float {\n    0% { transform: translateY(0px); }\n    50% { transform: translateY(-10px); }\n    100% { transform: translateY(0px); }\n  }\n  \n  @keyframes _ngcontent-%COMP%_pulse {\n    0% { transform: scale(1); }\n    50% { transform: scale(1.05); }\n    100% { transform: scale(1); }\n  }\n  \n  @keyframes _ngcontent-%COMP%_shimmer {\n    0% { background-position: -100% 0; }\n    100% { background-position: 100% 0; }\n  }\n  \n  @keyframes _ngcontent-%COMP%_rotateLogo {\n    0% { transform: rotate(0deg) scale(1); }\n    50% { transform: rotate(180deg) scale(1.1); }\n    100% { transform: rotate(360deg) scale(1); }\n  }\n  \n  body[_ngcontent-%COMP%] {\n    font-family: 'Arial', sans-serif;\n    line-height: 1.6;\n    background: linear-gradient(-45deg, #ff4444, #ff8f00, #00c6ff, #0072ff);\n    background-size: 400% 400%;\n    animation: _ngcontent-%COMP%_gradientBg 15s ease infinite;\n    color: #333;\n    min-height: 100vh;\n    position: relative;\n    overflow-x: hidden;\n  }\n  \n  body[_ngcontent-%COMP%]::before {\n    content: '\uD83D\uDCAA';\n    position: fixed;\n    font-size: 400px;\n    opacity: 0.05;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 0;\n    animation: _ngcontent-%COMP%_rotateLogo 20s linear infinite;\n    pointer-events: none;\n  }\n  \n  .registration-page[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 2rem;\n    min-height: 100vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    z-index: 1;\n  }\n  \n  .registration-container[_ngcontent-%COMP%] {\n    background: rgba(255, 255, 255, 0.95);\n    border-radius: 20px;\n    padding: 3rem;\n    width: 100%;\n    max-width: 800px;\n    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),\n                0 0 30px rgba(255, 68, 68, 0.2),\n                0 0 50px rgba(0, 198, 255, 0.2);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    position: relative;\n    overflow: hidden;\n    animation: _ngcontent-%COMP%_float 6s ease-in-out infinite;\n  }\n  \n  .registration-container[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 5px;\n    background: linear-gradient(90deg, #ff4444, #ff8f00, #00c6ff, #0072ff, #ff4444);\n    background-size: 200% 100%;\n    animation: _ngcontent-%COMP%_shimmer 3s linear infinite;\n  }\n  \n  .registration-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg, #ff4444, #ff0d00, #680606);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    font-size: clamp(1.5rem, 4vw, 2.2rem);\n    margin-bottom: 2rem;\n    text-align: center;\n    font-weight: 800;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n    padding: 0 1rem;\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n    position: relative;\n    transition: all 0.3s ease;\n  }\n  \n  .form-group[_ngcontent-%COMP%]:hover {\n    transform: translateX(5px);\n  }\n  \n  .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    display: block;\n    font-weight: bold;\n    background: linear-gradient(45deg, #ff4444, #ff8f00);\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    margin-bottom: 0.5rem;\n    font-size: clamp(0.9rem, 2vw, 1.1rem);\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  \n  .form-control[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: clamp(0.8rem, 2vw, 1rem);\n    border: 2px solid #e1e1e1;\n    border-radius: 12px;\n    font-size: clamp(0.9rem, 2vw, 1rem);\n    transition: all 0.3s ease;\n    background: rgba(255, 255, 255, 0.9);\n  }\n  \n  .form-control[_ngcontent-%COMP%]:focus {\n    outline: none;\n    border-color: #00c6ff;\n    box-shadow: 0 0 15px rgba(0, 198, 255, 0.3);\n    transform: scale(1.02);\n  }\n  \n  .calendar[_ngcontent-%COMP%] {\n    cursor: pointer;\n    background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"%2300c6ff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>') no-repeat 98% center;\n    background-size: 20px;\n  }\n  \n  .text-danger[_ngcontent-%COMP%] {\n    color: #ff4444;\n    font-size: clamp(0.75rem, 1.5vw, 0.85rem);\n    margin-top: 0.5rem;\n    font-weight: 500;\n    display: flex;\n    align-items: center;\n    animation: _ngcontent-%COMP%_shake 0.5s ease-in-out;\n  }\n  \n  @keyframes _ngcontent-%COMP%_shake {\n    0%, 100% { transform: translateX(0); }\n    25% { transform: translateX(-5px); }\n    75% { transform: translateX(5px); }\n  }\n  \n  .text-danger[_ngcontent-%COMP%]::before {\n    content: '\u26A0\uFE0F';\n    margin-right: 5px;\n    animation: _ngcontent-%COMP%_pulse 1s infinite;\n  }\n  \n  .form-check[_ngcontent-%COMP%] {\n    margin-top: 1.5rem;\n    padding: clamp(0.8rem, 2vw, 1rem);\n    background: linear-gradient(45deg, rgba(255, 68, 68, 0.1), rgba(0, 198, 255, 0.1));\n    border-radius: 8px;\n    transition: all 0.3s ease;\n  }\n  \n  .form-check[_ngcontent-%COMP%]:hover {\n    background: linear-gradient(45deg, rgba(255, 68, 68, 0.2), rgba(0, 198, 255, 0.2));\n    transform: translateY(-2px);\n  }\n  \n  .form-check-input[_ngcontent-%COMP%] {\n    width: clamp(16px, 4vw, 20px);\n    height: clamp(16px, 4vw, 20px);\n    margin-right: 0.8rem;\n    cursor: pointer;\n    border: 2px solid #00c6ff;\n    border-radius: 4px;\n    transition: all 0.3s ease;\n  }\n  \n  .form-check-input[_ngcontent-%COMP%]:checked {\n    background-color: #00c6ff;\n    animation: _ngcontent-%COMP%_pulse 0.5s ease-in-out;\n  }\n  \n  .form-check-label[_ngcontent-%COMP%] {\n    cursor: pointer;\n    color: #444;\n    font-weight: 500;\n    font-size: clamp(0.9rem, 2vw, 1.1rem);\n  }\n  \n  .btn-primary[_ngcontent-%COMP%] {\n    background: linear-gradient(45deg, #ff4444, #ff8f00, #00c6ff, #0072ff);\n    background-size: 300% 300%;\n    animation: _ngcontent-%COMP%_gradientBg 5s ease infinite;\n    color: white;\n    padding: clamp(1rem, 2.5vw, 1.2rem) clamp(1.5rem, 4vw, 2rem);\n    border: none;\n    border-radius: 12px;\n    font-size: clamp(1rem, 2.5vw, 1.2rem);\n    font-weight: bold;\n    cursor: pointer;\n    width: 100%;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    transition: all 0.3s ease;\n    position: relative;\n    overflow: hidden;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);\n    transition: 0.5s;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n    transform: translateY(-3px);\n    box-shadow: 0 10px 20px rgba(255, 68, 68, 0.3),\n                0 15px 30px rgba(0, 198, 255, 0.2);\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]:hover:not(:disabled)::before {\n    left: 100%;\n  }\n  \n  .btn-primary[_ngcontent-%COMP%]:disabled {\n    background: #cccccc;\n    cursor: not-allowed;\n    transform: none;\n    box-shadow: none;\n    animation: none;\n  }\n  \n  @keyframes _ngcontent-%COMP%_fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  \n  .form-group[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_fadeInUp 0.5s ease-out forwards;\n    opacity: 0;\n  }\n  \n  .form-group[_ngcontent-%COMP%]:nth-child(1) { animation-delay: 0.1s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(2) { animation-delay: 0.2s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(3) { animation-delay: 0.3s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(4) { animation-delay: 0.4s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(5) { animation-delay: 0.5s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(6) { animation-delay: 0.6s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(7) { animation-delay: 0.7s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(8) { animation-delay: 0.8s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(9) { animation-delay: 0.9s; }\n  .form-group[_ngcontent-%COMP%]:nth-child(10) { animation-delay: 1s; }\n  \n  @media (max-width: 768px) {\n    body[_ngcontent-%COMP%]::before {\n      font-size: 250px;\n    }\n  \n    .registration-container[_ngcontent-%COMP%] {\n      padding: clamp(1.5rem, 4vw, 2rem);\n      margin: 1rem;\n    }\n  \n    .form-row[_ngcontent-%COMP%] {\n      flex-direction: column;\n      gap: 1rem;\n    }\n  \n    .form-group[_ngcontent-%COMP%]:hover {\n      transform: none;\n    }\n  }\n  \n  @media (max-width: 480px) {\n    body[_ngcontent-%COMP%]::before {\n      font-size: 150px;\n    }\n  \n    .registration-container[_ngcontent-%COMP%] {\n      padding: 1.5rem;\n      margin: 0.5rem;\n    }\n  \n    .registration-page[_ngcontent-%COMP%] {\n      padding: 0.5rem;\n    }\n  \n    .form-check[_ngcontent-%COMP%] {\n      padding: 0.8rem;\n    }\n  \n    .form-group[_ngcontent-%COMP%] {\n      margin-bottom: 1rem;\n    }\n  }\n  \n  @media (max-height: 700px) {\n    .registration-page[_ngcontent-%COMP%] {\n      padding-top: 2rem;\n      padding-bottom: 2rem;\n      min-height: auto;\n    }\n  }\n  \n  @media (prefers-reduced-motion: reduce) {\n    *[_ngcontent-%COMP%] {\n      animation: none !important;\n      transition: none !important;\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L2xvZ2luL251b3ZvLXV0ZW50ZS9udW92by11dGVudGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsS0FBSywyQkFBMkIsRUFBRTtJQUNsQyxNQUFNLDZCQUE2QixFQUFFO0lBQ3JDLE9BQU8sMkJBQTJCLEVBQUU7RUFDdEM7O0VBRUE7SUFDRSxLQUFLLDBCQUEwQixFQUFFO0lBQ2pDLE1BQU0sNEJBQTRCLEVBQUU7SUFDcEMsT0FBTywwQkFBMEIsRUFBRTtFQUNyQzs7RUFFQTtJQUNFLEtBQUssbUJBQW1CLEVBQUU7SUFDMUIsTUFBTSxzQkFBc0IsRUFBRTtJQUM5QixPQUFPLG1CQUFtQixFQUFFO0VBQzlCOztFQUVBO0lBQ0UsS0FBSyw0QkFBNEIsRUFBRTtJQUNuQyxPQUFPLDJCQUEyQixFQUFFO0VBQ3RDOztFQUVBO0lBQ0UsS0FBSyxnQ0FBZ0MsRUFBRTtJQUN2QyxNQUFNLG9DQUFvQyxFQUFFO0lBQzVDLE9BQU8sa0NBQWtDLEVBQUU7RUFDN0M7O0VBRUE7SUFDRSxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLHVFQUF1RTtJQUN2RSwwQkFBMEI7SUFDMUIsdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIs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O0VBQ2pCOztFQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkJBQTJCO0lBQzdCO0lBQ0E7TUFDRSxVQUFVO01BQ1Ysd0JBQXdCO0lBQzFCO0VBQ0Y7O0VBRUE7SUFDRSwwQ0FBMEM7SUFDMUMsVUFBVTtFQUNaOztFQUVBLDJCQUEyQixxQkFBcUIsRUFBRTtFQUNsRCwyQkFBMkIscUJBQXFCLEVBQUU7RUFDbEQsMkJBQTJCLHFCQUFxQixFQUFFO0VBQ2xELDJCQUEyQixxQkFBcUIsRUFBRTtFQUNsRCwyQkFBMkIscUJBQXFCLEVBQUU7RUFDbEQsMkJBQTJCLHFCQUFxQixFQUFFO0VBQ2xELDJCQUEyQixxQkFBcUIsRUFBRTtFQUNsRCwyQkFBMkIscUJBQXFCLEVBQUU7RUFDbEQsMkJBQTJCLHFCQUFxQixFQUFFO0VBQ2xELDRCQUE0QixtQkFBbUIsRUFBRTs7RUFFakQ7SUFDRTtNQUNFLGdCQUFnQjtJQUNsQjs7SUFFQTtNQUNFLGlDQUFpQztNQUNqQyxZQUFZO0lBQ2Q7O0lBRUE7TUFDRSxzQkFBc0I7TUFDdEIsU0FBUztJQUNYOztJQUVBO01BQ0UsZUFBZTtJQUNqQjtFQUNGOztFQUVBO0lBQ0U7TUFDRSxnQkFBZ0I7SUFDbEI7O0lBRUE7TUFDRSxlQUFlO01BQ2YsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGVBQWU7SUFDakI7O0lBRUE7TUFDRSxlQUFlO0lBQ2pCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsZ0JBQWdCO0lBQ2xCO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLDBCQUEwQjtNQUMxQiwyQkFBMkI7SUFDN0I7RUFDRiIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZ3JhZGllbnRCZyB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTsgfVxuICAgIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSA1MCU7IH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbG9hdCB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTsgfVxuICAgIDUwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7IH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gICAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTsgfVxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2hpbW1lciB7XG4gICAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwOyB9XG4gICAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDsgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJvdGF0ZUxvZ28ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSk7IH1cbiAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDEuMSk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSBzY2FsZSgxKTsgfVxuICB9XG4gIFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcbiAgICBsaW5lLWhlaWdodDogMS42O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgtNDVkZWcsICNmZjQ0NDQsICNmZjhmMDAsICMwMGM2ZmYsICMwMDcyZmYpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSA0MDAlO1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRCZyAxNXMgZWFzZSBpbmZpbml0ZTtcbiAgICBjb2xvcjogIzMzMztcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB9XG4gIFxuICBib2R5OjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfDsMKfwpLCqic7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGZvbnQtc2l6ZTogNDAwcHg7XG4gICAgb3BhY2l0eTogMC4wNTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogMDtcbiAgICBhbmltYXRpb246IHJvdGF0ZUxvZ28gMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuICBcbiAgLnJlZ2lzdHJhdGlvbi1wYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLnJlZ2lzdHJhdGlvbi1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nOiAzcmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjQpLFxuICAgICAgICAgICAgICAgIDAgMCAzMHB4IHJnYmEoMjU1LCA2OCwgNjgsIDAuMiksXG4gICAgICAgICAgICAgICAgMCAwIDUwcHggcmdiYSgwLCAxOTgsIDI1NSwgMC4yKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYW5pbWF0aW9uOiBmbG9hdCA2cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLnJlZ2lzdHJhdGlvbi1jb250YWluZXI6OmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmNDQ0NCwgI2ZmOGYwMCwgIzAwYzZmZiwgIzAwNzJmZiwgI2ZmNDQ0NCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XG4gICAgYW5pbWF0aW9uOiBzaGltbWVyIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLnJlZ2lzdHJhdGlvbi1jb250YWluZXIgaDIge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgI2ZmNDQ0NCwgI2ZmMGQwMCwgIzY4MDYwNik7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IGNsYW1wKDEuNXJlbSwgNHZ3LCAyLjJyZW0pO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuZm9ybS1ncm91cDpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCk7XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjQ0NDQsICNmZjhmMDApO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoMC45cmVtLCAydncsIDEuMXJlbSk7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IGNsYW1wKDAuOHJlbSwgMnZ3LCAxcmVtKTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTFlMWUxO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDJ2dywgMXJlbSk7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIH1cbiAgXG4gIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWNvbG9yOiAjMDBjNmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4IHJnYmEoMCwgMTk4LCAyNTUsIDAuMyk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjAyKTtcbiAgfVxuICBcbiAgLmNhbGVuZGFyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZDogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCw8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIlMjMwMGM2ZmZcIiBzdHJva2Utd2lkdGg9XCIyXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+PHJlY3QgeD1cIjNcIiB5PVwiNFwiIHdpZHRoPVwiMThcIiBoZWlnaHQ9XCIxOFwiIHJ4PVwiMlwiIHJ5PVwiMlwiPjwvcmVjdD48bGluZSB4MT1cIjE2XCIgeTE9XCIyXCIgeDI9XCIxNlwiIHkyPVwiNlwiPjwvbGluZT48bGluZSB4MT1cIjhcIiB5MT1cIjJcIiB4Mj1cIjhcIiB5Mj1cIjZcIj48L2xpbmU+PGxpbmUgeDE9XCIzXCIgeTE9XCIxMFwiIHgyPVwiMjFcIiB5Mj1cIjEwXCI+PC9saW5lPjwvc3ZnPicpIG5vLXJlcGVhdCA5OCUgY2VudGVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweDtcbiAgfVxuICBcbiAgLnRleHQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2ZmNDQ0NDtcbiAgICBmb250LXNpemU6IGNsYW1wKDAuNzVyZW0sIDEuNXZ3LCAwLjg1cmVtKTtcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYW5pbWF0aW9uOiBzaGFrZSAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNoYWtlIHtcbiAgICAwJSwgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxuICAgIDI1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTsgfVxuICAgIDc1JSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpOyB9XG4gIH1cbiAgXG4gIC50ZXh0LWRhbmdlcjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnw6LCmsKgw6/CuMKPJztcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICBhbmltYXRpb246IHB1bHNlIDFzIGluZmluaXRlO1xuICB9XG4gIFxuICAuZm9ybS1jaGVjayB7XG4gICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIHBhZGRpbmc6IGNsYW1wKDAuOHJlbSwgMnZ3LCAxcmVtKTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCA2OCwgNjgsIDAuMSksIHJnYmEoMCwgMTk4LCAyNTUsIDAuMSkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB9XG4gIFxuICAuZm9ybS1jaGVjazpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCByZ2JhKDI1NSwgNjgsIDY4LCAwLjIpLCByZ2JhKDAsIDE5OCwgMjU1LCAwLjIpKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gIH1cbiAgXG4gIC5mb3JtLWNoZWNrLWlucHV0IHtcbiAgICB3aWR0aDogY2xhbXAoMTZweCwgNHZ3LCAyMHB4KTtcbiAgICBoZWlnaHQ6IGNsYW1wKDE2cHgsIDR2dywgMjBweCk7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjhyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMGM2ZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIH1cbiAgXG4gIC5mb3JtLWNoZWNrLWlucHV0OmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGM2ZmY7XG4gICAgYW5pbWF0aW9uOiBwdWxzZSAwLjVzIGVhc2UtaW4tb3V0O1xuICB9XG4gIFxuICAuZm9ybS1jaGVjay1sYWJlbCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiBjbGFtcCgwLjlyZW0sIDJ2dywgMS4xcmVtKTtcbiAgfVxuICBcbiAgLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmZjQ0NDQsICNmZjhmMDAsICMwMGM2ZmYsICMwMDcyZmYpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAzMDAlO1xuICAgIGFuaW1hdGlvbjogZ3JhZGllbnRCZyA1cyBlYXNlIGluZmluaXRlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiBjbGFtcCgxcmVtLCAyLjV2dywgMS4ycmVtKSBjbGFtcCgxLjVyZW0sIDR2dywgMnJlbSk7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAyLjV2dywgMS4ycmVtKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHRyYW5zcGFyZW50LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCksIHRyYW5zcGFyZW50KTtcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KTtcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDI1NSwgNjgsIDY4LCAwLjMpLFxuICAgICAgICAgICAgICAgIDAgMTVweCAzMHB4IHJnYmEoMCwgMTk4LCAyNTUsIDAuMik7XG4gIH1cbiAgXG4gIC5idG4tcHJpbWFyeTpob3Zlcjpub3QoOmRpc2FibGVkKTo6YmVmb3JlIHtcbiAgICBsZWZ0OiAxMDAlO1xuICB9XG4gIFxuICAuYnRuLXByaW1hcnk6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQ6ICNjY2NjY2M7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluVXAge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMHB4KTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mb3JtLWdyb3VwIHtcbiAgICBhbmltYXRpb246IGZhZGVJblVwIDAuNXMgZWFzZS1vdXQgZm9yd2FyZHM7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDEpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjFzOyB9XG4gIC5mb3JtLWdyb3VwOm50aC1jaGlsZCgyKSB7IGFuaW1hdGlvbi1kZWxheTogMC4yczsgfVxuICAuZm9ybS1ncm91cDpudGgtY2hpbGQoMykgeyBhbmltYXRpb24tZGVsYXk6IDAuM3M7IH1cbiAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDQpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjRzOyB9XG4gIC5mb3JtLWdyb3VwOm50aC1jaGlsZCg1KSB7IGFuaW1hdGlvbi1kZWxheTogMC41czsgfVxuICAuZm9ybS1ncm91cDpudGgtY2hpbGQoNikgeyBhbmltYXRpb24tZGVsYXk6IDAuNnM7IH1cbiAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDcpIHsgYW5pbWF0aW9uLWRlbGF5OiAwLjdzOyB9XG4gIC5mb3JtLWdyb3VwOm50aC1jaGlsZCg4KSB7IGFuaW1hdGlvbi1kZWxheTogMC44czsgfVxuICAuZm9ybS1ncm91cDpudGgtY2hpbGQoOSkgeyBhbmltYXRpb24tZGVsYXk6IDAuOXM7IH1cbiAgLmZvcm0tZ3JvdXA6bnRoLWNoaWxkKDEwKSB7IGFuaW1hdGlvbi1kZWxheTogMXM7IH1cbiAgXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIGJvZHk6OmJlZm9yZSB7XG4gICAgICBmb250LXNpemU6IDI1MHB4O1xuICAgIH1cbiAgXG4gICAgLnJlZ2lzdHJhdGlvbi1jb250YWluZXIge1xuICAgICAgcGFkZGluZzogY2xhbXAoMS41cmVtLCA0dncsIDJyZW0pO1xuICAgICAgbWFyZ2luOiAxcmVtO1xuICAgIH1cbiAgXG4gICAgLmZvcm0tcm93IHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBnYXA6IDFyZW07XG4gICAgfVxuICBcbiAgICAuZm9ybS1ncm91cDpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBib2R5OjpiZWZvcmUge1xuICAgICAgZm9udC1zaXplOiAxNTBweDtcbiAgICB9XG4gIFxuICAgIC5yZWdpc3RyYXRpb24tY29udGFpbmVyIHtcbiAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgIG1hcmdpbjogMC41cmVtO1xuICAgIH1cbiAgXG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlIHtcbiAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICB9XG4gIFxuICAgIC5mb3JtLWNoZWNrIHtcbiAgICAgIHBhZGRpbmc6IDAuOHJlbTtcbiAgICB9XG4gIFxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgKG1heC1oZWlnaHQ6IDcwMHB4KSB7XG4gICAgLnJlZ2lzdHJhdGlvbi1wYWdlIHtcbiAgICAgIHBhZGRpbmctdG9wOiAycmVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgICBtaW4taGVpZ2h0OiBhdXRvO1xuICAgIH1cbiAgfVxuICBcbiAgQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcbiAgICAqIHtcbiAgICAgIGFuaW1hdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgdHJhbnNpdGlvbjogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7010:
/*!******************************************************!*\
  !*** ./src/app/Component/modale/modale.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModaleComponent: () => (/* binding */ ModaleComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Model/Base/enum */ 855);
/* harmony import */ var src_app_Model_Abbonamento_Abbonamento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Model/Abbonamento/Abbonamento */ 9391);
/* harmony import */ var src_app_Model_Documento_Documento__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Model/Documento/Documento */ 443);
/* harmony import */ var src_app_Model_Evento_Evento__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Model/Evento/Evento */ 1611);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var src_app_Model_Evento_Iscrizione__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Model/Evento/Iscrizione */ 973);
/* harmony import */ var src_app_Model_Sito_Immagine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Model/Sito/Immagine */ 5587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/Services/Utenti/utenti.service */ 2933);
/* harmony import */ var src_Services_Abbonamenti_abbonamenti_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/Services/Abbonamenti/abbonamenti.service */ 881);
/* harmony import */ var src_Services_Documenti_documenti_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/Services/Documenti/documenti.service */ 2325);
/* harmony import */ var src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/Services/Eventi/eventi.service */ 6365);
/* harmony import */ var src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/Services/Sito/sito.service */ 2561);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ 4646);


































const _c0 = () => [5, 10, 20];
function ModaleComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Informazioni Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 22)(5, "mat-form-field")(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](9, "mat-form-field")(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](11, "Cognome");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](12, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "mat-form-field")(14, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](16, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Codice Fiscale");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Data di Nascita");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](25, "mat-form-field")(26, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Numero Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](29, "mat-form-field")(30, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](31, "Via");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](32, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "mat-form-field")(34, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Citta");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](37, "mat-form-field")(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](39, "Regione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](40, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "mat-form-field")(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Nazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.UserForm);
  }
}
function ModaleComponent_div_1_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Nome Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Cognome Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Email Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Email non Valido ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Cognome Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Data Nascita Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Numero Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Via Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Citta Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Regione Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_mat_error_55_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Nazione Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Informazioni Utente");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 22)(5, "mat-form-field")(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ModaleComponent_div_1_mat_error_9_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Cognome");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ModaleComponent_div_1_mat_error_14_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "mat-form-field")(16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ModaleComponent_div_1_mat_error_19_Template, 2, 0, "mat-error", 18)(20, ModaleComponent_div_1_mat_error_20_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](21, "mat-form-field")(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](23, "Codice Fiscale");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](24, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](25, ModaleComponent_div_1_mat_error_25_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "mat-form-field")(27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Data di Nascita");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](30, ModaleComponent_div_1_mat_error_30_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "mat-form-field")(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Numero Telefono");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](35, ModaleComponent_div_1_mat_error_35_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](36, "mat-form-field")(37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](38, "Via");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](39, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](40, ModaleComponent_div_1_mat_error_40_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "mat-form-field")(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](43, "Citta");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](44, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](45, ModaleComponent_div_1_mat_error_45_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](46, "mat-form-field")(47, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Regione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](50, ModaleComponent_div_1_mat_error_50_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](51, "mat-form-field")(52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](53, "Nazione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](54, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](55, ModaleComponent_div_1_mat_error_55_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.UserForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.UserForm.get("Nome")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.UserForm.get("Cognome")) == null ? null : tmp_3_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r0.UserForm.get("Email")) == null ? null : tmp_4_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r0.UserForm.get("Email")) == null ? null : tmp_5_0.hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx_r0.UserForm.get("CodFiscale")) == null ? null : tmp_6_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r0.UserForm.get("DataNascita")) == null ? null : tmp_7_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r0.UserForm.get("Numero")) == null ? null : tmp_8_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r0.UserForm.get("Via")) == null ? null : tmp_9_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r0.UserForm.get("Citta")) == null ? null : tmp_10_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r0.UserForm.get("Regione")) == null ? null : tmp_11_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r0.UserForm.get("Nazione")) == null ? null : tmp_12_0.hasError("required"));
  }
}
function ModaleComponent_div_2_th_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_2_td_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](element_r2.tipoAbbonamento);
  }
}
function ModaleComponent_div_2_th_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_2_td_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.formatDate(element_r3.dataIscrizione));
  }
}
function ModaleComponent_div_2_th_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Scadenza");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_2_td_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](ctx_r0.formatDate(element_r4.dataScadenza));
  }
}
function ModaleComponent_div_2_th_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Pagato");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_2_td_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](element_r5.isPayed ? "Si" : "No");
  }
}
function ModaleComponent_div_2_th_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Azioni ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_2_td_18_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Azioni");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    const menu_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matMenuTriggerFor", menu_r7);
  }
}
function ModaleComponent_div_2_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, ModaleComponent_div_2_td_18_button_1_Template, 2, 1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "mat-menu", null, 0)(4, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_div_2_td_18_Template_button_click_4_listener() {
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.UpdateSub("SetPayedSub", element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](5, "Conferma Pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](6, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_div_2_td_18_Template_button_click_6_listener() {
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.UpdateSub("RefuseSubPayment", element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Rifiuta Pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_div_2_td_18_Template_button_click_8_listener() {
      const element_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r6).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.UpdateSub("DeleteSub", element_r8));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Cancella Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const element_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", element_r8.isPayed == false || element_r8.isPayed == null);
  }
}
function ModaleComponent_div_2_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 60);
  }
}
function ModaleComponent_div_2_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "tr", 61);
  }
}
function ModaleComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Informazioni Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "table", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](4, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](5, ModaleComponent_div_2_th_5_Template, 2, 0, "th", 44)(6, ModaleComponent_div_2_td_6_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](7, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](8, ModaleComponent_div_2_th_8_Template, 2, 0, "th", 44)(9, ModaleComponent_div_2_td_9_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](10, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ModaleComponent_div_2_th_11_Template, 2, 0, "th", 44)(12, ModaleComponent_div_2_td_12_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](13, 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, ModaleComponent_div_2_th_14_Template, 2, 0, "th", 44)(15, ModaleComponent_div_2_td_15_Template, 2, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](16, 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ModaleComponent_div_2_th_17_Template, 2, 0, "th", 50)(18, ModaleComponent_div_2_td_18_Template, 10, 1, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](19, ModaleComponent_div_2_tr_19_Template, 1, 0, "tr", 51)(20, ModaleComponent_div_2_tr_20_Template, 1, 0, "tr", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "mat-paginator", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("dataSource", ctx_r0.subList);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matHeaderRowDef", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("matRowDefColumns", ctx_r0.displayedColumns);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction0"](4, _c0));
  }
}
function ModaleComponent_div_3_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", option_r9.descrizione, " ");
  }
}
function ModaleComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Aggiungi Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 22)(5, "mat-form-field")(6, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](7, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](9, ModaleComponent_div_3_mat_option_9_Template, 2, 2, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-form-field")(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](12, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](13, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](14, "mat-form-field")(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Data Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](17, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](18, "mat-form-field")(19, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Url Pagamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-form-field")(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Importo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.SubForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.subType);
  }
}
function ModaleComponent_div_4_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const option_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", option_r14.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](option_r14.descrizione);
  }
}
function ModaleComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Aggiungi Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ModaleComponent_div_4_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r10);
      const selectInput_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
      const fileNameInput_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](17);
      const fileInput_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](24);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.AddDoc(selectInput_r11, fileNameInput_r12, fileInput_r13));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "label", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Tipo Abbonamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "select", 71, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](10, ModaleComponent_div_4_option_10_Template, 2, 2, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "br")(12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](13, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Nome Documento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "br")(16, "input", 73, 2)(18, "br")(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Carica un file");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "br")(23, "input", 75, 3)(25, "br")(26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Aggiungi");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.docType);
  }
}
function ModaleComponent_div_5_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 89)(1, "label")(2, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function ModaleComponent_div_5_div_58_Template_input_change_2_listener($event) {
      const category_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r23).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onCheckboxChange($event, category_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", category_r24.Descrizione, " ");
  }
}
function ModaleComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Inserisci Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ModaleComponent_div_5_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r15);
      const eventNameInput_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
      const fileInput_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
      const dataInizioInput_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](23);
      const dataFineInput_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](30);
      const luogoEventoInput_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](37);
      const descrizioneEventoInput_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](44);
      const linkEventoInput_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](51);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.AddEvent(eventNameInput_r16, fileInput_r17, dataInizioInput_r18, dataFineInput_r19, luogoEventoInput_r20, descrizioneEventoInput_r21, linkEventoInput_r22, ctx_r0.CategoriesData));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Nome Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br")(8, "input", 73, 4)(10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Locandina Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br")(15, "input", 75, 3)(17, "br")(18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](19, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](20, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](21, "br")(22, "input", 78, 5)(24, "br")(25, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](26, "label", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](27, "Data Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](28, "br")(29, "input", 80, 6)(31, "br")(32, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](33, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](34, "Luogo Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](35, "br")(36, "input", 82, 7)(38, "br")(39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](40, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](41, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](42, "br")(43, "input", 84, 8)(45, "br")(46, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](47, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](48, "Link (nel caso di piu link separare con ;)");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](49, "br")(50, "input", 86, 9)(52, "br")(53, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](54, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](55, "Categorie");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](56, "br")(57, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](58, ModaleComponent_div_5_div_58_Template, 4, 1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](59, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](60, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](61, "Crea Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.CategoriesData);
  }
}
function ModaleComponent_div_6_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "option", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const Page_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("value", Page_r34.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate"](Page_r34.page);
  }
}
function ModaleComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Inserisci Grafica");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ngSubmit", function ModaleComponent_div_6_Template_form_ngSubmit_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r25);
      const UrlInput_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](9);
      const paginaInput_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](16);
      const sezioneInput_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](24);
      const urldaGoogleDriveInput_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](31);
      const titoloInput_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](38);
      const descrizioneInput_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](45);
      const testoAggiuntivoInput_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](52);
      const ordineInput_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](59);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.AddImage(UrlInput_r26, paginaInput_r27, sezioneInput_r28, urldaGoogleDriveInput_r29, titoloInput_r30, descrizioneInput_r31, testoAggiuntivoInput_r32, ordineInput_r33));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "label", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Url");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br")(8, "input", 92, 10)(10, "br")(11, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](13, "Pagina");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "select", 71, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, ModaleComponent_div_6_option_17_Template, 2, 2, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](18, "br")(19, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](20, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](21, "Sezione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](22, "br")(23, "input", 95, 12)(25, "br")(26, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](28, "Da Google Drive");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](29, "br")(30, "input", 97, 13)(32, "br")(33, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](34, "label", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](35, "Titolo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](36, "br")(37, "input", 99, 14)(39, "br")(40, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](41, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](42, "Descrizione");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](43, "br")(44, "input", 84, 15)(46, "br")(47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](48, "label", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](49, "Testo Aggiuntivo");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](50, "br")(51, "input", 101, 16)(53, "br")(54, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](55, "label", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](56, "Ordine");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](57, "br")(58, "input", 103, 17)(60, "br")(61, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](62, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](63, "Aggiungi Grafica");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](64, "br")(65, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.Pages);
  }
}
function ModaleComponent_div_7_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Nome Evento Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_7_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Data Inizio Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_7_mat_error_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Data Fine Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_7_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, " Campo Luogo Evento Obbligatorio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Informazioni Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "mat-dialog-content")(4, "form", 22)(5, "mat-form-field", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "mat-form-field")(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](9, "Nome Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](10, "input", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ModaleComponent_div_7_mat_error_11_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](12, "mat-form-field")(13, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](14, "Data Inizio");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](15, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](16, ModaleComponent_div_7_mat_error_16_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](17, "mat-form-field")(18, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](19, "Data Fine");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](20, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](21, ModaleComponent_div_7_mat_error_21_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](22, "mat-form-field")(23, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](24, "Luogo Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](25, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](26, ModaleComponent_div_7_mat_error_26_Template, 2, 0, "mat-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](27, "mat-form-field")(28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](29, "Descrizione Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](30, "input", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](31, "mat-form-field")(32, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](33, "Link");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](34, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("formGroup", ctx_r0.EventForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r0.EventForm.get("NomeEvento")) == null ? null : tmp_2_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r0.EventForm.get("DataInizio")) == null ? null : tmp_3_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r0.EventForm.get("DataFine")) == null ? null : tmp_4_0.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r0.EventForm.get("LuogoEvento")) == null ? null : tmp_5_0.hasError("required"));
  }
}
function ModaleComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 113)(1, "label")(2, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("change", function ModaleComponent_div_8_div_3_Template_input_change_2_listener($event) {
      const category_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r35).$implicit;
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.onCheckboxChange($event, category_r36));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const category_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", category_r36.Descrizione, " ");
  }
}
function ModaleComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Seleziona le Categorie per cui vuoi gareggiare");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, ModaleComponent_div_8_div_3_Template, 4, 1, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](6, "Note:");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](7, "br")(8, "textarea", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.DataEvent == null ? null : ctx_r0.DataEvent.categorie);
  }
}
function ModaleComponent_div_9_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div", 117)(1, "ul")(2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const competitor_r37 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate3"]("", competitor_r37.utente.nome, " ", competitor_r37.utente.cognome, " - ", ctx_r0.getCategorieDescrizione(competitor_r37.iscrizione.categoria), "");
  }
}
function ModaleComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "div")(1, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2, "Lista Partecipanti Evento");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](4, ModaleComponent_div_9_div_4_Template, 4, 3, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", ctx_r0.Competitors);
  }
}
function ModaleComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_button_11_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r38);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.Ok("updateInfo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_button_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r39);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.Ok("updateEventInfo"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r40);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.Ok("AddSub"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
function ModaleComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r41);
      const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵresetView"](ctx_r0.Ok("SubscribeEvent"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](1, "Conferma");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }
}
class ModaleComponent {
  constructor(dialogRef, data, commonService, userService, subService, docService, eventService, sitoService, fb, datePipe, router) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.commonService = commonService;
    this.userService = userService;
    this.subService = subService;
    this.docService = docService;
    this.eventService = eventService;
    this.sitoService = sitoService;
    this.fb = fb;
    this.datePipe = datePipe;
    this.router = router;
    this.subList = [];
    this.subType = [];
    this.docType = [];
    this.CategoriesData = [];
    this.Competitors = [];
    this.Pages = [];
    this.selected = [];
    this.displayedColumns = ['Tipo', 'Inizio', 'Scadenza', "Pagato", "Azioni"];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTableDataSource(this.subList);
    this.fileName = "";
    this.UserForm = this.fb.group({
      Nome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Cognome: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.email]],
      CodFiscale: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DataNascita: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Via: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Numero: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Citta: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Regione: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Nazione: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      RowGuid: []
    });
    this.SubForm = this.fb.group({
      IdTipoAbbonamento: [3, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DataInizio: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DataFine: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      UrlPagamento: [""],
      Importo: [0],
      Utente: []
    });
    this.DocForm = this.fb.group({
      IdTipoDocumento: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Documento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
    });
    this.EventForm = this.fb.group({
      IdEvento: [""],
      NomeEvento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DataInizio: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DataFine: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      LuogoEvento: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      DescrEvento: [''],
      LinkEvento: ['']
      //CatEvento: this.fb.array(this.CategoriesData.map(() => false))
    });
    this.ImageForm = this.fb.group({
      UrlImage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Pagina: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Sezione: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      UrldaGoogleDrive: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Titolo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      Descrizione: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required],
      TestoAzione: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.dataSource.sort = _this.sort;
      _this.dataSource.paginator = _this.paginator;
      if (_this.data.type === 'Info') {
        _this.user = undefined;
        let userData = _this.data.object;
        yield (yield _this.userService.GetUtente(userData.rowGuid)).subscribe(data => {
          if (data != null && data.Data != null) {
            _this.UserForm.setValue({
              Nome: data.Data.nome,
              Cognome: data.Data.cognome,
              Email: data.Data.email,
              CodFiscale: data.Data.codFiscale,
              DataNascita: data.Data.dataNascita,
              Via: data.Data.via,
              Numero: data.Data.numero,
              Citta: data.Data.citta,
              Regione: data.Data.regione,
              Nazione: data.Data.nazione,
              RowGuid: data.Data.rowGuid
            });
          } else {
            if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero Utenti");
              _this.dialogRef.close();
            }
          }
        });
      }
      if (_this.data.type === 'updateInfo') {
        _this.user = undefined;
        let userData = _this.data.object;
        yield (yield _this.userService.GetUtente(userData.rowGuid)).subscribe(data => {
          if (data != null && data.Data != null) {
            _this.UserForm.setValue({
              Nome: data.Data.nome,
              Cognome: data.Data.cognome,
              Email: data.Data.email,
              CodFiscale: data.Data.codFiscale,
              DataNascita: data.Data.dataNascita,
              Via: data.Data.via,
              Numero: data.Data.numero,
              Citta: data.Data.citta,
              Regione: data.Data.regione,
              Nazione: data.Data.nazione,
              RowGuid: data.Data.rowGuid
            });
          } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this.router.navigate(['/login']);
          } else {
            alert("Errore recupero Utente");
            _this.dialogRef.close();
          }
        });
      }
      if (_this.data.type === 'InfoSub') {
        _this.subList = [];
        let userData = _this.data.object;
        yield (yield _this.subService.GetAbbonamenti(userData.rowGuid)).subscribe(data => {
          if (data != null && data.Data != null) {
            _this.subList = data.Data.sort((a, b) => a.isActive === b.isActive ? 0 : a.isActive ? -1 : 1);
          } else {
            if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero Abbonamenti dell'utente");
              _this.dialogRef.close();
            }
          }
        });
      }
      if (_this.data.type == 'AddSub') {
        _this.subType = [];
        let userData = _this.data.object;
        yield (yield _this.subService.GetTipoAbbonamenti(userData.rowGuid)).subscribe(data => {
          if (data != null && data.Data != null) {
            _this.subType = data.Data;
          } else {
            if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero Abbonamenti dell'utente");
              _this.dialogRef.close();
            }
          }
        });
      }
      if (_this.data.type == 'AddDoc') {
        _this.docType = [];
        yield (yield _this.docService.GetTipiDocumenti()).subscribe(data => {
          if (data != null && data.Data != null) {
            _this.docType = data.Data;
          } else {
            if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero Tipi documento");
              _this.dialogRef.close();
            }
          }
        });
      }
      if (_this.data.type == 'AddEvent') {
        _this.CategoriesData = [];
        _this.selected = [];
        yield (yield _this.eventService.GetCategorie()).subscribe(cat => {
          if (cat != null && cat.Data != null) {
            _this.CategoriesData = cat.Data;
          } else {
            if (cat.Error != null && cat.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero categorie");
              _this.dialogRef.close();
            }
          }
        });
      }
      if (_this.data.type == 'updateEventInfo') {
        _this.CategoriesData = [];
        _this.selected = [];
        let eventData = _this.data.object;
        yield (yield _this.eventService.GetCategorie()).subscribe(cat => {
          if (cat != null && cat.Data != null) {
            _this.CategoriesData = cat.Data;
          } else {
            if (cat.Error != null && cat.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero categorie");
              _this.dialogRef.close();
            }
          }
        });
        yield (yield _this.eventService.GetEvento(eventData.id)).subscribe(event => {
          if (event != null && event.Data != null) {
            _this.EventForm.setValue({
              IdEvento: event.Data.id,
              NomeEvento: event.Data.nomeEvento,
              DataInizio: (0,_angular_common__WEBPACK_IMPORTED_MODULE_17__.formatDate)(event.Data.dataInizioEvento, 'yyyy-MM-dd', 'en-US'),
              DataFine: (0,_angular_common__WEBPACK_IMPORTED_MODULE_17__.formatDate)(event.Data.dataFineEvento, 'yyyy-MM-dd', 'en-US'),
              LuogoEvento: event.Data.luogoEvento,
              DescrEvento: event.Data.descrizione,
              LinkEvento: event.Data.link
            });
          } else if (event.Error != null && event.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this.router.navigate(['/login']);
          } else {
            alert("Errore recupero Evento");
            _this.dialogRef.close();
          }
        });
      }
      if (_this.data.type == 'SubscribeEvent') {
        _this.CategoriesData = [];
        _this.selected = [];
        let eventData = _this.data.object;
        yield (yield _this.eventService.GetEvento(eventData.id)).subscribe(event => {
          if (event != null && event.Data != null) {
            _this.DataEvent = event.Data;
          } else if (event.Error != null && event.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this.router.navigate(['/login']);
          } else {
            alert("Errore recupero Evento");
            _this.dialogRef.close();
          }
        });
      }
      if (_this.data.type == 'GetCompetitors') {
        _this.CategoriesData = [];
        _this.selected = [];
        _this.Competitors = [];
        let eventData = _this.data.object;
        yield (yield _this.eventService.GetCategorie()).subscribe(cat => {
          if (cat != null && cat.Data != null) {
            _this.CategoriesData = cat.Data;
          } else {
            if (cat.Error != null && cat.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this.router.navigate(['/login']);
            } else {
              alert("Errore recupero categorie");
              _this.dialogRef.close();
            }
          }
        });
        yield (yield _this.eventService.GetCompetitors(eventData.id)).subscribe(comp => {
          if (comp != null && comp.Data != null) {
            _this.Competitors = comp.Data;
          } else if (comp.Error != null && comp.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this.router.navigate(['/login']);
          } else {
            alert("Errore recupero Evento");
            _this.dialogRef.close();
          }
        });
      }
      if (_this.data.type == 'AddImage') {
        _this.selected = [];
        _this.Pages = [];
        yield (yield _this.sitoService.GetPagine()).subscribe(pages => {
          if (pages != null && pages.Data != null) {
            _this.Pages = pages.Data;
          } else if (pages.Error != null && pages.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this.router.navigate(['/login']);
          } else {
            alert("Errore recupero Pagine");
            _this.dialogRef.close();
          }
        });
      }
    })();
  }
  Ok(type) {
    var _this2 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (type === 'updateInfo') {
        if (_this2.UserForm.valid) {
          yield (yield _this2.userService.UpdateUtente(_this2.UserForm.value, src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.Operation.AggiornaAll)).subscribe(data => {
            if (data != null && data.Data != null) {
              alert("Utente Aggiornato");
              _this2.dialogRef.close();
              let currentUrl = _this2.router.url;
              _this2.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(() => {
                _this2.router.navigate([currentUrl]);
              });
            } else {
              if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                alert("La tua sessione è scaduta, rieffettua il login");
                _this2.router.navigate(['/login']);
              } else {
                alert("Errore aggiornamento Utente");
                _this2.dialogRef.close();
              }
            }
          });
        }
      }
      if (type === 'AddSub') {
        if (_this2.SubForm.valid) {
          let userData = _this2.data.object;
          let abb = new src_app_Model_Abbonamento_Abbonamento__WEBPACK_IMPORTED_MODULE_2__.Abbonamento(null, _this2.SubForm.value.IdTipoAbbonamento, null, _this2.SubForm.value.DataInizio, _this2.SubForm.value.DataFine, _this2.SubForm.value.UrlPagamento, _this2.SubForm.value.Importo, "", false, false, userData.rowGuid);
          yield (yield _this2.subService.AddAbbonamenti(abb)).subscribe(data => {
            if (data != null && data.Data != null) {
              alert("Abbonamento Inserito");
              let currentUrl = _this2.router.url;
              _this2.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(() => {
                _this2.router.navigate([currentUrl]);
              });
            } else {
              if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                alert("La tua sessione è scaduta, rieffettua il login");
                _this2.router.navigate(['/login']);
              } else {
                alert("Errore Inserimento Abbonamento");
                _this2.dialogRef.close();
              }
            }
          });
        }
      }
      if (type == "updateEventInfo") {
        if (_this2.EventForm.valid) {
          let e = new src_app_Model_Evento_Evento__WEBPACK_IMPORTED_MODULE_4__.Evento(_this2.EventForm.value.NomeEvento, _this2.EventForm.value.DataInizio, _this2.EventForm.value.DataFine, _this2.EventForm.value.LuogoEvento, _this2.EventForm.value.DescrEvento, _this2.EventForm.value.LinkEvento, "");
          e.id = _this2.EventForm.value.IdEvento;
          yield (yield _this2.eventService.UpdateEvent(e)).subscribe(data => {
            if (data != null && data.Data != null) {
              alert("Evento Aggiornato");
              let currentUrl = _this2.router.url;
              _this2.router.navigateByUrl('/', {
                skipLocationChange: true
              }).then(() => {
                _this2.router.navigate([currentUrl]);
              });
            } else {
              if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                alert("La tua sessione è scaduta, rieffettua il login");
                _this2.router.navigate(['/login']);
              } else {
                alert("Errore Aggiornamento Evento");
                _this2.dialogRef.close();
              }
            }
          });
        }
      }
      if (type == "SubscribeEvent") {
        const SubscriptionNote = document.getElementById('SubscriptionNote').value;
        const EventId = _this2.DataEvent?.id;
        const UserId = _this2.commonService.getCookie("sub");
        let EventSubscription = new src_app_Model_Evento_Iscrizione__WEBPACK_IMPORTED_MODULE_5__.Iscrizione(EventId, UserId, _this2.selected, SubscriptionNote);
        yield (yield _this2.eventService.Subscribe(EventSubscription)).subscribe(data => {
          if (data != null && data.Data != null) {
            alert("Iscrizione effettuata");
            let currentUrl = _this2.router.url;
            _this2.router.navigateByUrl('/', {
              skipLocationChange: true
            }).then(() => {
              _this2.router.navigate([currentUrl]);
            });
          } else {
            if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
              alert("La tua sessione è scaduta, rieffettua il login");
              _this2.router.navigate(['/login']);
            } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Conflict) {
              alert("E' gia stata effettuata un iscrizione per queste categorie");
              _this2.dialogRef.close();
            } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.NotFound) {
              alert("Per iscriversi è necessario selezionare almeno una categoria");
              _this2.dialogRef.close();
            } else {
              alert("Errore durante Iscrizione Evento");
              _this2.dialogRef.close();
            }
          }
        });
      }
    })();
  }
  AddDoc(selectInput, filenameInput, fileInput) {
    var _this3 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const selectedOption = Number(selectInput.value);
      const selectedname = filenameInput.value;
      const file = fileInput.files?.[0];
      let fileBase64 = "";
      yield _this3.commonService.convertFileToBase64(file).then(base64 => {
        //console.log('Base64 string:', base64);
        // You can now use the base64 string as needed
        fileBase64 = base64;
      }).catch(error => {
        alert("Errore Conversione File");
        console.error('Error converting file:', error);
      });
      let userData = _this3.data.object;
      let document = new src_app_Model_Documento_Documento__WEBPACK_IMPORTED_MODULE_3__.DocumentoExt(selectedOption, userData.rowGuid, selectedname, fileBase64);
      yield (yield _this3.docService.AddDocument(document)).subscribe(data => {
        if (data != null && data.Data != null) {
          alert("Documento Inserito");
          let currentUrl = _this3.router.url;
          _this3.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            _this3.router.navigate([currentUrl]);
          });
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this3.router.navigate(['/login']);
          } else if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.PayloadTooLarge) {
            alert("Il documento che stai provando a inserire è troppo grande");
            _this3.dialogRef.close();
          } else {
            alert("Errore Inserimento Documento");
            _this3.dialogRef.close();
          }
        }
      });
    })();
  }
  AddEvent(eventNameInput, fileInput, dataInizioInput, dataFineInput, luogoEventoInput, descrizioneEventoInput, linkEventoInput, categories) {
    var _this4 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const eventName = eventNameInput.value;
      const eventStartDate = dataInizioInput.value;
      const eventEndDate = dataFineInput.value;
      const eventLocation = luogoEventoInput.value;
      const eventDescr = descrizioneEventoInput.value;
      const eventLink = linkEventoInput.value;
      const eventCategories = _this4.selected;
      const locandina = fileInput.files?.[0];
      let fileBase64 = "";
      let categorie = [];
      yield _this4.commonService.convertFileToBase64(locandina).then(base64 => {
        //console.log('Base64 string:', base64);
        // You can now use the base64 string as needed
        fileBase64 = base64;
      }).catch(error => {
        alert("Errore Conversione File");
        console.error('Error converting file:', error);
      });
      let event = new src_app_Model_Evento_Evento__WEBPACK_IMPORTED_MODULE_4__.Evento(eventName, new Date(eventStartDate), new Date(eventEndDate), eventLocation, eventDescr, eventLink, fileBase64);
      event.categorie = categories.filter(c => eventCategories.includes(c.Id));
      yield (yield _this4.eventService.AddEvent(event)).subscribe(data => {
        if (data != null && data.Data != null) {
          alert("Evento Creato");
          let currentUrl = _this4.router.url;
          _this4.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            _this4.router.navigate([currentUrl]);
          });
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this4.router.navigate(['/login']);
          } else {
            alert("Errore creazione Evento");
            _this4.dialogRef.close();
          }
        }
      });
    })();
  }
  UpdateSub(action, subscription) {
    var _this5 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      switch (action) {
        case "SetPayedSub":
          {
            subscription.isPayed = true;
            yield (yield _this5.subService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Pagamento Confermato");
                let currentUrl = _this5.router.url;
                _this5.router.navigateByUrl('/', {
                  skipLocationChange: true
                }).then(() => {
                  _this5.router.navigate([currentUrl]);
                });
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  _this5.router.navigate(['/login']);
                } else {
                  alert("Errore conferma pagamento");
                  _this5.dialogRef.close();
                }
              }
            });
            break;
          }
        case "RefuseSubPayment":
          {
            subscription.isPayed = false;
            yield (yield _this5.subService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Pagamento Rifuitato");
                let currentUrl = _this5.router.url;
                _this5.router.navigateByUrl('/', {
                  skipLocationChange: true
                }).then(() => {
                  _this5.router.navigate([currentUrl]);
                });
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  _this5.router.navigate(['/login']);
                } else {
                  alert("Errore rifiuto pagamento");
                  _this5.dialogRef.close();
                }
              }
            });
            break;
          }
        case "SetPaymentInProgress":
          {
            subscription.isPayed = null;
            yield (yield _this5.subService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.AggiornaInfoPagamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Il pagamento è stato processato, non appena avremo ricevuto l'esito ti notificheremo l'abilitazione dell'abbonamento." + "In caso di problemi nel pagamento contattare .....");
                let currentUrl = _this5.router.url;
                _this5.router.navigateByUrl('/', {
                  skipLocationChange: true
                }).then(() => {
                  _this5.router.navigate([currentUrl]);
                });
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  _this5.router.navigate(['/login']);
                } else {
                  alert("Errore aggiornamento url");
                  _this5.dialogRef.close();
                }
              }
            });
            break;
          }
        case "DeleteSub":
          {
            yield (yield _this5.subService.UpdateAbbonamenti(src_app_Model_Base_enum__WEBPACK_IMPORTED_MODULE_1__.SubscriptionOperation.CancellaAbbonamento, subscription)).subscribe(data => {
              if (data != null && data.Data != null) {
                alert("Abbonamento Cancellato");
                let currentUrl = _this5.router.url;
                _this5.router.navigateByUrl('/', {
                  skipLocationChange: true
                }).then(() => {
                  _this5.router.navigate([currentUrl]);
                });
              } else {
                if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
                  alert("La tua sessione è scaduta, rieffettua il login");
                  _this5.router.navigate(['/login']);
                } else {
                  alert("Errore cancellazione abbonamento");
                  _this5.dialogRef.close();
                }
              }
            });
            break;
          }
      }
    })();
  }
  AddImage(urlInput, paginaInput, sezioneInput, urlDaGoogleDriveInput, titoloInput, descrizioneInput, testoAggiuntivoInput, ordineInputi) {
    var _this6 = this;
    return (0,_home_runner_work_SitoDeiSitiInsitoFE_SitoDeiSitiInsitoFE_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let image = new src_app_Model_Sito_Immagine__WEBPACK_IMPORTED_MODULE_6__.Images(null, urlInput.value, parseInt(paginaInput.value, 10), parseInt(sezioneInput.value, 10), urlDaGoogleDriveInput.checked, titoloInput.value, descrizioneInput.value, testoAggiuntivoInput.value, parseInt(ordineInputi.value, 10));
      yield (yield _this6.sitoService.AddImmagine(image)).subscribe(data => {
        if (data != null && data.Data != null) {
          alert("Immagine inserita");
          let currentUrl = _this6.router.url;
          _this6.router.navigateByUrl('/', {
            skipLocationChange: true
          }).then(() => {
            _this6.router.navigate([currentUrl]);
          });
          _this6.dialogRef.close();
        } else {
          if (data.Error != null && data.Error.Code == _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpStatusCode.Unauthorized) {
            alert("La tua sessione è scaduta, rieffettua il login");
            _this6.router.navigate(['/login']);
          } else {
            alert("Errore inserimento immagine");
            _this6.dialogRef.close();
          }
        }
      });
    })();
  }
  getCategorieDescrizione(CategoriaId) {
    return this.CategoriesData.find(c => c.Id == CategoriaId)?.Descrizione;
  }
  onCheckboxChange(event, checkboxList) {
    if (event.target.checked) {
      this.selected.push(checkboxList.Id);
    } else {
      const index = this.selected.indexOf(checkboxList.Id);
      if (index > -1) {
        this.selected.splice(index, 1);
      }
    }
  }
  formatDate(date) {
    let _formatdate = this.datePipe.transform(date);
    if (_formatdate == null) {
      return "";
    } else {
      return _formatdate;
    }
  }
  close() {
    this.dialogRef.close();
  }
  static {
    this.ɵfac = function ModaleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ModaleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_7__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_8__.UtentiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Abbonamenti_abbonamenti_service__WEBPACK_IMPORTED_MODULE_9__.AbbonamentiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Documenti_documenti_service__WEBPACK_IMPORTED_MODULE_10__.DocumentiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_11__.EventiService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](src_Services_Sito_sito_service__WEBPACK_IMPORTED_MODULE_12__.SitoService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_17__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
      type: ModaleComponent,
      selectors: [["app-modale"]],
      viewQuery: function ModaleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        }
      },
      decls: 17,
      vars: 14,
      consts: [["menu", "matMenu"], ["selectInput", ""], ["fileNameInput", ""], ["fileInput", ""], ["eventNameInput", ""], ["dataInizioInput", ""], ["dataFineInput", ""], ["luogoEventoInput", ""], ["descrizioneEventoInput", ""], ["linkEventoInput", ""], ["UrlInput", ""], ["paginaInput", ""], ["sezioneInput", ""], ["urldaGoogleDriveInput", ""], ["titoloInput", ""], ["descrizioneInput", ""], ["testoAggiuntivoInput", ""], ["ordineInput", ""], [4, "ngIf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-dialog-title", ""], [3, "formGroup"], ["type", "text", "title", "Nome", "formControlName", "Nome", "matInput", "", "readonly", ""], ["type", "text", "title", "Cognome", "formControlName", "Cognome", "matInput", "", "readonly", ""], ["type", "text", "title", "Email", "formControlName", "Email", "matInput", "", "readonly", ""], ["type", "text", "title", "CodFiscale", "formControlName", "CodFiscale", "matInput", "", "readonly", ""], ["type", "text", "title", "DataNascita", "formControlName", "DataNascita", "matInput", "", "readonly", ""], ["type", "text", "title", "NumeroTelefono", "formControlName", "Numero", "matInput", "", "readonly", ""], ["type", "text", "title", "Via", "formControlName", "Via", "matInput", "", "readonly", ""], ["type", "text", "title", "Citta", "formControlName", "Citta", "matInput", "", "readonly", ""], ["type", "text", "title", "Regione", "formControlName", "Regione", "matInput", "", "readonly", ""], ["type", "text", "title", "Nazione", "formControlName", "Nazione", "matInput", "", "readonly", ""], ["type", "text", "title", "Nome", "formControlName", "Nome", "matInput", ""], ["type", "text", "title", "Cognome", "formControlName", "Cognome", "matInput", ""], ["type", "text", "title", "CodFiscale", "formControlName", "CodFiscale", "matInput", ""], ["type", "text", "title", "DataNascita", "formControlName", "DataNascita", "matInput", ""], ["type", "text", "title", "NumeroTelefono", "formControlName", "Numero", "matInput", ""], ["type", "text", "title", "Via", "formControlName", "Via", "matInput", ""], ["type", "text", "title", "Citta", "formControlName", "Citta", "matInput", ""], ["type", "text", "title", "Regione", "formControlName", "Regione", "matInput", ""], ["type", "text", "title", "Nazione", "formControlName", "Nazione", "matInput", ""], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "Tipo"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Inizio"], ["matColumnDef", "Scadenza"], ["matColumnDef", "Pagato"], ["matColumnDef", "Azioni"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-button", "", 3, "matMenuTriggerFor", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["mat-button", "", 3, "matMenuTriggerFor"], ["mat-header-row", ""], ["mat-row", ""], ["formControlName", "IdTipoAbbonamento"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "date", "title", "DataInizio", "formControlName", "DataInizio", "matInput", ""], ["type", "date", "title", "DataFine", "formControlName", "DataFine", "matInput", ""], ["type", "text", "title", "Se non inserito verr\u00E0 calcolato automaticamente", "formControlName", "UrlPagamento", "matInput", ""], ["type", "text", "title", "Importo", "formControlName", "Importo", "matInput", ""], [3, "value"], ["enctype", "multipart/form-data", 3, "ngSubmit"], ["for", "options"], ["id", "options", "name", "options"], ["for", "name"], ["type", "text", "id", "name", "name", "Nome file"], ["for", "file"], ["type", "file", "id", "file", "name", "file"], ["type", "submit"], ["for", "dataInizio"], ["type", "date", "id", "dataInizio", "name", "dataInizio"], ["for", "dataFine"], ["type", "date", "id", "dataFine", "name", "dataFine"], ["for", "luogoEvento"], ["type", "text", "id", "luogoEvento", "name", "luogoEvento"], ["for", "descrizione"], ["type", "text", "id", "descrizione", "name", "descrizione"], ["for", "link"], ["type", "text", "id", "link", "name", "link"], ["for", "Categorie"], ["class", "checkbox-column", 4, "ngFor", "ngForOf"], [1, "checkbox-column"], ["type", "checkbox", "value", "category.Id", 3, "change"], ["for", "url"], ["type", "text", "id", "url", "name", "Url"], ["for", "Pagina"], ["for", "sezione"], ["type", "number", "id", "sezione", "name", "sezione"], ["for", "urldaGoogleDrive"], ["type", "checkbox", "id", "urldaGoogleDrive", "name", "urldaGoogleDrive"], ["for", "titolo"], ["type", "text", "id", "titolo", "name", "titolo"], ["for", "testoAggiuntivo"], ["type", "text", "id", "testoAggiuntivo", "name", "testoAggiuntivo"], ["for", "ordine"], ["type", "ordine", "id", "ordine", "name", "ordine"], ["hidden", ""], ["type", "text", "title", "Id", "formControlName", "IdEvento", "matInput", "", "hidden", ""], ["type", "text", "title", "NomeEvento", "formControlName", "NomeEvento", "matInput", ""], ["type", "text", "title", "LuogoEvento", "formControlName", "LuogoEvento", "matInput", ""], ["type", "text", "title", "DescrEvento", "formControlName", "DescrEvento", "matInput", ""], ["type", "text", "title", "LinkEvento", "formControlName", "LinkEvento", "matInput", ""], ["class", "modal-checkbox", 4, "ngFor", "ngForOf"], ["for", "note", 1, "modal-text"], ["id", "SubscriptionNote", "name", "note", "rows", "5", "cols", "50", "title", "Note", 1, "modal-text"], [1, "modal-checkbox"], ["type", "checkbox", "title", "category.Descrizione", "value", "category.Id", 3, "change"], [1, "competitors-container"], ["class", "modal-competitors", 4, "ngFor", "ngForOf"], [1, "modal-competitors"]],
      template: function ModaleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, ModaleComponent_div_0_Template, 45, 1, "div", 18)(1, ModaleComponent_div_1_Template, 56, 12, "div", 18)(2, ModaleComponent_div_2_Template, 22, 5, "div", 18)(3, ModaleComponent_div_3_Template, 26, 2, "div", 18)(4, ModaleComponent_div_4_Template, 29, 1, "div", 18)(5, ModaleComponent_div_5_Template, 62, 1, "div", 18)(6, ModaleComponent_div_6_Template, 66, 1, "div", 18)(7, ModaleComponent_div_7_Template, 35, 5, "div", 18)(8, ModaleComponent_div_8_Template, 9, 1, "div", 18)(9, ModaleComponent_div_9_Template, 5, 1, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "mat-dialog-actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](11, ModaleComponent_button_11_Template, 2, 0, "button", 19)(12, ModaleComponent_button_12_Template, 2, 0, "button", 19)(13, ModaleComponent_button_13_Template, 2, 0, "button", 19)(14, ModaleComponent_button_14_Template, 2, 0, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](15, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function ModaleComponent_Template_button_click_15_listener() {
            return ctx.close();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](16, "Chiudi");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "Info");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "updateInfo");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "InfoSub");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "AddSub");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "AddDoc");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "AddEvent");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "AddImage");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "updateEventInfo");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "SubscribeEvent");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "GetCompetitors");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "updateInfo");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "updateEventInfo");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "AddSub");
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.data.type == "SubscribeEvent");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogActions, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__.MatError, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_14__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSortHeader, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_21__.MatPaginator, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__.MatMenuTrigger, _angular_material_select__WEBPACK_IMPORTED_MODULE_26__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_27__.MatOption],
      styles: [".checkbox-column[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n  \n.modal-checkbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-left: 20px; \n\n  }\n\n.modal-text[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-left: 20px; \n\n  }\n\n.modal-competitors[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: column;\n  margin-left: 20px; \n\n}\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L21vZGFsZS9tb2RhbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0VBQ3JCOztBQUVGO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBRSwrQkFBK0I7RUFDcEQ7O0FBRUY7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFFLCtCQUErQjtFQUNwRDs7QUFFRjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUUsK0JBQStCO0FBQ3BEIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrYm94LWNvbHVtbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgXG4ubW9kYWwtY2hlY2tib3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogMjBweDsgLyogQWRqdXN0IHRoZSB2YWx1ZSBhcyBuZWVkZWQgKi9cbiAgfVxuXG4ubW9kYWwtdGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xuICB9XG5cbi5tb2RhbC1jb21wZXRpdG9ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAyMHB4OyAvKiBBZGp1c3QgdGhlIHZhbHVlIGFzIG5lZWRlZCAqL1xufVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3976:
/*!********************************************************!*\
  !*** ./src/app/Component/nav-bar/nav-bar.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavBarComponent: () => (/* binding */ NavBarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Services/Common/common.service */ 9009);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);




const _c0 = () => ["/"];
const _c1 = a0 => ({
  show: a0
});
const _c2 = () => ["link-active"];
const _c3 = () => ({
  exact: true
});
const _c4 = () => ["/contatti"];
const _c5 = () => ["/news"];
const _c6 = () => ["/documenti"];
const _c7 = () => ["/abbonamenti"];
const _c8 = () => ["/eventi"];
const _c9 = () => ["/gestioneeventi"];
const _c10 = () => ["/gestioneutenti"];
const _c11 = () => ["/gestionegrafica"];
function NavBarComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/login");
  }
}
function NavBarComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_div_3_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.Logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavBarComponent_li_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Documenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c6));
  }
}
function NavBarComponent_li_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Abbonamenti");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c7));
  }
}
function NavBarComponent_li_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Eventi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c8));
  }
}
function NavBarComponent_li_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Gestione Eventi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c9));
  }
}
function NavBarComponent_li_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Gestione Utenti ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c10));
  }
}
function NavBarComponent_li_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Gestione Grafica ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c11));
  }
}
class NavBarComponent {
  constructor(common, router) {
    this.common = common;
    this.router = router;
    this.isLogged = false;
    this.isExpanded = false;
    this.isAdmin = false;
    if (common.getCookie("Token")) {
      this.isLogged = true;
      if (common.getCookie("role") == "Admin") {
        this.isAdmin = true;
      }
    }
  }
  ngOnInit() {
    if (this.common.getCookie("Token")) {
      this.isLogged = true;
      if (this.common.getCookie("role") == "Admin") {
        this.isAdmin = true;
      }
    }
  }
  Logout() {
    this.common.deleteCookie("Token");
    this.common.deleteCookie("role");
    this.common.deleteCookie("emailaddress");
    this.common.deleteCookie("name");
    this.common.deleteCookie("surname");
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['/']);
  }
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  static {
    this.ɵfac = function NavBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NavBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 26,
      vars: 24,
      consts: [[1, "navbar", "navbar-expand-sm", "navbar-toggleable-sm", "navbar-light", "bg-white", "border-bottom", "box-shadow", "mb-3"], [1, "container"], [4, "ngIf"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", ".navbar-collapse", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], [1, "navbar-toggler-icon"], [1, "navbar-collapse", "collapse", "d-sm-inline-flex", "justify-content-end", 3, "ngClass"], [1, "navbar-nav", "flex-grow"], [1, "nav-item", 3, "routerLinkActive", "routerLinkActiveOptions"], [1, "nav-link", "text-dark", 3, "routerLink"], [1, "btn", "btn-light", 3, "routerLink"], [1, "btn", "btn-light", 3, "click"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NavBarComponent_div_2_Template, 3, 1, "div", 2)(3, NavBarComponent_div_3_Template, 3, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "SitoDeiSitiInsito");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavBarComponent_Template_button_click_6_listener() {
            return ctx.toggle();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "ul", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li")(15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Contatti");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li")(18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "News");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, NavBarComponent_li_20_Template, 3, 2, "li", 2)(21, NavBarComponent_li_21_Template, 3, 2, "li", 2)(22, NavBarComponent_li_22_Template, 3, 2, "li", 2)(23, NavBarComponent_li_23_Template, 3, 2, "li", 2)(24, NavBarComponent_li_24_Template, 3, 2, "li", 2)(25, NavBarComponent_li_25_Template, 3, 2, "li", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLogged);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", ctx.isExpanded);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](17, _c1, ctx.isExpanded));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c4));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c5));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged && !ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged && ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged && ctx.isAdmin);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLogged && ctx.isAdmin);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive],
      styles: ["a.navbar-brand[_ngcontent-%COMP%] {\n  white-space: normal;\n  text-align: center;\n  word-break: break-all;\n}\n\nhtml[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n@media (min-width: 768px) {\n  html[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n.box-shadow[_ngcontent-%COMP%] {\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJhLm5hdmJhci1icmFuZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgaHRtbCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAuMjVyZW0gLjc1cmVtIHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7504:
/*!**************************************************!*\
  !*** ./src/app/Component/news/news.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NewsComponent: () => (/* binding */ NewsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class NewsComponent {
  static {
    this.ɵfac = function NewsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || NewsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 2,
      vars: 0,
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "news works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 7664:
/*!********************************************************!*\
  !*** ./src/app/Component/spinner/spinner.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Services/Common/loader.service */ 8879);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class SpinnerComponent {
  constructor(loader) {
    this.loader = loader;
  }
  static {
    this.ɵfac = function SpinnerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_Services_Common_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SpinnerComponent,
      selectors: [["app-spinner"]],
      decls: 1,
      vars: 1,
      consts: [["class", "cssload-container", 4, "ngIf"], [1, "cssload-container"], [1, "cssload-speeding-wheel"]],
      template: function SpinnerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 2, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loader.getLoading());
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
      styles: [".cssload-container {\n    position: fixed;\n    width: 100%;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(255, 255, 255, 0.7);\n    z-index: 9999;\n  }\n  \n  .cssload-speeding-wheel {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 48%;\n    top: 40%;\n    width: 63px;\n    height: 63px;\n    margin: 0 auto;\n    border: 4px solid rgb(0, 0, 0);\n    border-radius: 50%;\n    border-left-color: transparent;\n    border-right-color: transparent;\n    animation: cssload-spin 500ms infinite linear;  }\n  \n  @keyframes cssload-spin {\n    100% {\n      transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvQ29tcG9uZW50L3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxPQUFPO0lBQ1AsUUFBUTtJQUNSLE1BQU07SUFDTixTQUFTO0lBQ1QsMENBQTBDO0lBQzFDLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBSy9CLDZDQUE2QyxHQUFHOztFQUVsRDtJQUNFO01BQ0UseUJBQXlCO01BQ3pCLHlCQUF5QjtJQUMzQjtFQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNzc2xvYWQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuICB9XG4gIFxuICAuY3NzbG9hZC1zcGVlZGluZy13aGVlbCB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDglO1xuICAgIHRvcDogNDAlO1xuICAgIHdpZHRoOiA2M3B4O1xuICAgIGhlaWdodDogNjNweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2IoMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC1tb3otYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIC1tcy1hbmltYXRpb246IGNzc2xvYWQtc3BpbiA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgLW8tYW5pbWF0aW9uOiBjc3Nsb2FkLXNwaW4gNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgIGFuaW1hdGlvbjogY3NzbG9hZC1zcGluIDUwMG1zIGluZmluaXRlIGxpbmVhcjsgIH1cbiAgXG4gIEBrZXlmcmFtZXMgY3NzbG9hZC1zcGluIHtcbiAgICAxMDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1vLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBALW1zLWtleWZyYW1lcyBjc3Nsb2FkLXNwaW4ge1xuICAgIDEwMCUge1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC1tb3ota2V5ZnJhbWVzIGNzc2xvYWQtc3BpbiB7XG4gICAgMTAwJSB7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"],
      encapsulation: 3
    });
  }
}

/***/ }),

/***/ 1913:
/*!*********************************************************!*\
  !*** ./src/app/Interceptor/fake-backend.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FakeBackendInterceptor: () => (/* binding */ FakeBackendInterceptor),
/* harmony export */   fakeBackendProvider: () => (/* binding */ fakeBackendProvider)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9176);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5074);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6449);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);




class FakeBackendInterceptor {
  intercept(request, next) {
    const {
      url,
      method,
      headers,
      body
    } = request;
    // Wrap in delayed observable to simulate server API call
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(handleRoute)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.materialize)()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.dematerialize)());
    function handleRoute() {
      const token = request.headers.get('authorization');
      //if (token) {
      //    const decodedToken: any = jwtDecode(token);
      //    const currentTime = Math.floor(Date.now() / 1000);
      //    if (decodedToken.exp < currentTime) {
      //        return unathorized();
      //    }
      //}
      //else{
      //    if(!url.toLowerCase().includes('authenticate'))
      //        return unathorized();
      //}
      switch (true) {
        //case method === 'PUT' || method === 'POST':
        //    return ok();
        case url.toLowerCase().includes('authenticate') && method === 'GET':
          return authenticate();
        case url.toLowerCase().includes('getallusers') && method === 'GET':
          return getUsers();
        case url.toLowerCase().includes('getuser?') && method === 'GET':
          return getUser();
        case url.toLowerCase().includes('getusersubscriptions') && method === 'GET':
          return GetUserSubscriptions();
        case url.toLowerCase().includes('getdocumenttype') && method === 'GET':
          return GetDocumentType();
        case url.toLowerCase().includes('getuserdocuments') && method === 'GET':
          return GetUserDocuments();
        case url.toLowerCase().includes('getdocument') && method === 'GET':
          return GetDocument();
        case url.toLowerCase().includes('getevents') && method === 'GET':
          return GetEvents();
        case url.toLowerCase().includes('getcategories') && method === 'GET':
          return GetCategories();
        case url.toLowerCase().includes('getpagine') && method === 'GET':
          return GetPages();
        case url.toLowerCase().includes('getimmmagini') && method === 'GET':
          return GetImages();
        //case url.toLowerCase().includes('bypagina') && method === 'GET':
        //    return GetImagesByPage();
        default:
          // Pass through any requests not handled above
          return next.handle(request);
      }
    }
    // Route functions
    function authenticate() {
      let loginoutputAdmin = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoidGVzdCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3N1cm5hbWUiOiJ0ZXN0IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZW1haWxhZGRyZXNzIjoidGVzdEB0ZXN0LnRlc3QiLCJDb2RGaXNjYWxlIjoidHN0dHN0OTNjMDZjNDE1bSIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiZGJmZGJkOTAtOTY2Yy00NGM5LWIzMWMtMDk5ZTU2OTJiMzVhIiwiZXhwIjoyNzM1NTM4ODE2LCJpc3MiOiJpbyIsImF1ZCI6InZvaSJ9.c0YoVEzSAPAlX4RXfe7oYf98F6cvZwKYLdxHmTveMiQ";
      let loginoutputUser = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoibHUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zdXJuYW1lIjoibG9jY2kiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJub2FkbWluQHRlc3QudGVzdCIsIkNvZEZpc2NhbGUiOiJsY2NsY3U5M2MwNmM0MTVtIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInN1YiI6IjRiYjdkNWVmLTM0YWEtNGFkOS1hZDRiLTRmMTU4OTdjMzRjNCIsImV4cCI6MjczNTUzODg3OCwiaXNzIjoiaW8iLCJhdWQiOiJ2b2kifQ.ZqXcJTPV_Vd1u1hZQDW0mrVDRBQlcL9yXdAmiRz_t8g";
      if (url.toLowerCase().includes("username=test@test.test") && url.toLowerCase().includes("password=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08")) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
          status: 200,
          body: {
            success: true,
            data: {
              token: loginoutputAdmin
            }
          }
        }));
      }
      if (url.toLowerCase().includes("username=noadmin@test.test") && url.toLowerCase().includes("password=fbe03dc7f00d059debe445169f331bba6d217008c91a6e98678556eef11ed85a")) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
          status: 200,
          body: {
            success: true,
            data: {
              token: loginoutputUser
            }
          }
        }));
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: {
          message: 'This is a fake response'
        }
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function unathorized() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 401,
        body: {
          message: 'Token Expired'
        }
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function getUsers() {
      let response = [{
        nome: "lu",
        cognome: "locci",
        email: "noadmin@test.test",
        codFiscale: "lcclcu93c06c415m",
        password: "",
        isAdmin: false,
        rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
        dataNascita: new Date(),
        via: null,
        numero: null,
        citta: null,
        regione: null,
        nazione: null,
        consensoInvioMail: null,
        abbonamenti: null
      }, {
        nome: "test",
        cognome: "test",
        email: "test@test.test",
        codFiscale: "tsttst93c06c415m",
        password: "",
        isAdmin: true,
        rowGuid: "dbfdbd90-966c-44c9-b31c-099e5692b35a",
        dataNascita: new Date(),
        via: null,
        numero: null,
        citta: null,
        regione: null,
        nazione: null,
        consensoInvioMail: null,
        abbonamenti: null
      }, {
        nome: "test1",
        cognome: "test1",
        email: "test1@test.test",
        codFiscale: "test1",
        password: "",
        isAdmin: false,
        rowGuid: "00000000-0000-0000-0000-000000000000",
        dataNascita: new Date(),
        via: null,
        numero: null,
        citta: null,
        regione: null,
        nazione: null,
        consensoInvioMail: null,
        abbonamenti: null
      }, {
        nome: "test",
        cognome: "test",
        email: "testcrea@test.test",
        codFiscale: "test",
        password: "",
        isAdmin: false,
        rowGuid: "7f466ad6-3252-4ab7-b1e9-254a1cbceead",
        dataNascita: new Date(),
        via: null,
        numero: null,
        citta: null,
        regione: null,
        nazione: null,
        consensoInvioMail: null,
        abbonamenti: null
      }, {
        nome: "test",
        cognome: "test",
        email: "testcrea2@test.test",
        codFiscale: "test",
        password: "",
        isAdmin: false,
        rowGuid: "dd0b3bc4-94e6-4353-9a31-d29ac454f9f2",
        dataNascita: new Date(),
        via: null,
        numero: null,
        citta: null,
        regione: null,
        nazione: null,
        consensoInvioMail: null,
        abbonamenti: null
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function getUser() {
      let response = {
        nome: "lu",
        cognome: "locci",
        email: "noadmin@test.test",
        codFiscale: "lcclcu93c06c415m",
        password: "",
        isAdmin: false,
        rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
        dataNascita: new Date("1993-03-06"),
        via: "friuli",
        numero: "18",
        citta: "lainate",
        regione: "lombardia",
        nazione: "italiana",
        consensoInvioMail: null,
        abbonamenti: [{
          id: 2,
          idTipoAbbonamento: 0,
          tipoAbbonamento: "Giornaliero",
          dataIscrizione: new Date("2024-10-28"),
          dataScadenza: new Date("2024-10-29"),
          urlPagamento: "test_test.test",
          importo: 10,
          idCheckout: "",
          isActive: false,
          isPayed: false,
          utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
        }, {
          id: 4,
          idTipoAbbonamento: 0,
          tipoAbbonamento: "Mensile",
          dataIscrizione: new Date("2024-11-01"),
          dataScadenza: new Date("2024-11-30"),
          urlPagamento: "test1_test.test",
          importo: 10,
          idCheckout: "",
          isActive: false,
          isPayed: false,
          utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
        }]
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetUserSubscriptions() {
      let response = [{
        id: 4,
        idTipoAbbonamento: 0,
        tipoAbbonamento: "Mensile",
        dataIscrizione: new Date("2024-11-01"),
        dataScadenza: new Date("2024-11-30"),
        urlPagamento: "test_test.test",
        importo: 10,
        idCheckout: "",
        isActive: false,
        isPayed: false,
        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
      }, {
        id: 2,
        idTipoAbbonamento: 0,
        tipoAbbonamento: "Giornaliero",
        dataIscrizione: new Date("2024-10-28"),
        dataScadenza: new Date("2024-10-29"),
        urlPagamento: "test1_test.test",
        importo: 10,
        idCheckout: "",
        isActive: false,
        isPayed: false,
        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
      }, {
        id: 5,
        idTipoAbbonamento: 0,
        dataIscrizione: new Date("2024-10-30"),
        dataScadenza: new Date("2024-10-31"),
        urlPagamento: "test2_test.test",
        importo: 10,
        idCheckout: "",
        isActive: true,
        isPayed: true,
        tipoAbbonamento: "Giornaliero",
        utente: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4"
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetDocumentType() {
      let response = [{
        "id": 1,
        "descrizione": "Ricevuta"
      }, {
        "id": 2,
        "descrizione": "Attestato Partecipazione"
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetUserDocuments() {
      let response = [{
        idDocumento: "30f51dca-6654-4f00-8b74-f81750583097",
        idTipoDocumento: 1,
        nomeDocumento: "test1",
        dataCaricamento: new Date("2024-12-29")
      }, {
        idDocumento: "4edfff28-1263-4614-8f92-03f132e1ce8e",
        idTipoDocumento: 1,
        nomeDocumento: "prova2",
        dataCaricamento: new Date("2024-11-24")
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetDocument() {
      let response = {
        rowGuid: "4bb7d5ef-34aa-4ad9-ad4b-4f15897c34c4",
        datiDocumento: "JVBERi0xLjQNCiX5+prnDQoxMCAwIG9iag0KPDwKL0UgMTUyMTkKL0ggWzEzMTIgMTY4XQovTCAyNzc4OAovTGluZWFyaXplZCAxCi9OIDMKL08gMTMKL1QgMjc1MzkKPj4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgDQplbmRvYmoNCg0KeHJlZg0KMTAgMTMNCjAwMDAwMDAwMTcgMDAwMDAgbg0KMDAwMDAwMTE5NiAwMDAwMCBuDQowMDAwMDAxMzEyIDAwMDAwIG4NCjAwMDAwMDE0ODAgMDAwMDAgbg0KMDAwMDAwMTcyNiAwMDAwMCBuDQowMDAwMDAxNzgyIDAwMDAwIG4NCjAwMDAwMDE5NTkgMDAwMDAgbg0KMDAwMDAwMzA5NCAwMDAwMCBuDQowMDAwMDAzMTUwIDAwMDAwIG4NCjAwMDAwMDMyNTcgMDAwMDAgbg0KMDAwMDAwNTYwMSAwMDAwMCBuDQowMDAwMDA3Njc4IDAwMDAwIG4NCjAwMDAwMDk4NTcgMDAwMDAgbg0KdHJhaWxlcg0KPDwKL0FCQ3BkZiA5MTI1Ci9JRCBbPDI5RTI5NDRDOTZCRTYyMzA5MjFEMTEwNUFDMDJCMzVFPgo8Q0I4OENDM0FBNzhDQjYzMTFBMTUyRDI0NUQ3OTQ1Mjk+XQovSW5mbyA5IDAgUgovUHJldiAyNzUyOAovUm9vdCAxMSAwIFIKL1NpemUgMjMKL1NvdXJjZSAoV2VKWEZ4Tk80ZkpkdXlVTWV0VGNQOStvYU9OZklOTjQrZDdoL3Ird0FHb3l6MDNESmkzMWNkRVpBMzV5MDBGcEI5a2hnbThWdENGbXlkOGdJcndPalFSQUlqUHNXaE00dmdNQ1ZcDQo4S3ZWRi9LOGxmNzBjZ1JiYkhlUlZHcWRHd2tRNzlhZU5oVHdEWTNHRWc9KQo+PiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIA0Kc3RhcnR4cmVmDQowDQolJUVPRg0KDQoxMSAwIG9iag0KPDwKL09wZW5BY3Rpb24gWzEzIDAgUgovRml0XQovT3V0bGluZXMgNyAwIFIKL1BhZ2VNb2RlIC9Vc2VOb25lCi9QYWdlcyA4IDAgUgovVHlwZSAvQ2F0YWxvZwo+Pg0KZW5kb2JqDQoNCjEyIDAgb2JqDQo8PAovRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDgyCi9TIDg0Cj4+DQpzdHJlYW0NCnicY2BgYGZgYFVgUGBgEFcDkXCgAIUpQDY7QliulYGBkYsBA6CLs8oDCS4oZmCwAJu9DypZycDAYg5lGzMwcHwAWvEUSHszMIjsgpkAANwlCCcNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjEzIDAgb2JqDQo8PAovQ29udGVudHMgWzE4IDAgUl0KL0dyb3VwIDw8Ci9DUyAvRGV2aWNlUkdCCi9TIC9UcmFuc3BhcmVuY3kKL1R5cGUgL0dyb3VwCj4+Ci9NZWRpYUJveCBbMCAwIDYxMiA3OTJdCi9QYXJlbnQgOCAwIFIKL1Jlc291cmNlcyA8PAovUHJvY1NldCBbL1BERgovVGV4dAovSW1hZ2VCCi9JbWFnZUMKL0ltYWdlSV0KL1hPYmplY3QgPDwKL0lhYmM0IDIyIDAgUgo+Pgo+PgovVHlwZSAvUGFnZQo+Pg0KZW5kb2JqDQoNCjE0IDAgb2JqDQo8PAovQ0EgMQovVHlwZSAvRXh0R1N0YXRlCi9jYSAxCj4+DQplbmRvYmoNCg0KMTUgMCBvYmoNCjw8Ci9Bc2NlbnQgMTA3OQovQ2FwSGVpZ2h0IDcwMAovRGVzY2VudCAtMjUxCi9GbGFncyAzMgovRm9udEJCb3ggWy01NzIgLTQxMSAxOTk5IDEyOThdCi9Gb250TmFtZSAvU2Vnb2VVSQovSXRhbGljQW5nbGUgMAovU3RlbVYgODAKL1R5cGUgL0ZvbnREZXNjcmlwdG9yCj4+DQplbmRvYmoNCg0KMTYgMCBvYmoNCjw8Ci9CYXNlRm9udCAvU2Vnb2VVSQovRW5jb2RpbmcgL1dpbkFuc2lFbmNvZGluZwovRmlyc3RDaGFyIDAKL0ZvbnREZXNjcmlwdG9yIDE1IDAgUgovTGFzdENoYXIgMjU1Ci9TdWJ0eXBlIC9UcnVlVHlwZQovVHlwZSAvRm9udAovV2lkdGhzIFswIDAgMCAwIDAgMCAwIDAgMCAyNzMKMjczIDI3MyAyNzMgOTcgMCAwIDAgMCAwIDAKMCAwIDAgMCAwIDAgMCAwIDAgMAowIDAgMjczIDI4NCAzOTIgNTkwIDUzOSA4MTggODAwIDIyOQozMDEgMzAxIDQxNiA2ODQgMjE2IDM5OSAyMTYgMzg5IDUzOSA1MzkKNTM5IDUzOSA1MzkgNTM5IDUzOSA1MzkgNTM5IDUzOSAyMTYgMjE2CjY4NCA2ODQgNjg0IDQ0OCA5NTUgNjQ1IDU3MyA2MTkgNzAxIDUwNQo0ODggNjg2IDcwOSAyNjYgMzU2IDU4MCA0NzAgODk3IDc0OCA3NTMKNTYwIDc1MyA1OTggNTMxIDUyMyA2ODcgNjIxIDkzNCA1ODkgNTUyCjU3MCAzMDEgMzc4IDMwMSA2ODQgNDE1IDI2OCA1MDggNTg3IDQ2MQo1ODggNTIyIDMxMiA1ODggNTY1IDI0MiAyNDIgNDk3IDI0MiA4NjEKNTY1IDU4NSA1ODcgNTg4IDM0NyA0MjQgMzM4IDU2NSA0NzkgNzIyCjQ1OCA0ODMgNDUyIDMwMSAyMzkgMzAxIDY4NCA0MDYgNTM5IDQwNgoyMjkgNTM5IDM3NiA3MzIgMzc1IDM3NSAzNzEgMTIwOSA1MzEgMzE1CjkzMCA0MDYgNTcwIDQwNiA0MDYgMjI5IDIyOSAzNzYgMzc2IDQwNgo1MDAgMTAwMCAzMzYgNzcyIDQyNCAzMTUgOTI3IDQwNiA0NTIgNTUyCjI3MyAy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",
        idDocumento: "30f51dca-6654-4f00-8b74-f81750583097",
        idTipoDocumento: 0,
        nomeDocumento: "test1",
        dataCaricamento: new Date(2024 - 12 - 29)
      };
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetEvents() {
      let response = [{
        id: "3c52b178-80ec-46a9-a203-08dd34e22069",
        copertina: {
          ImageData: "",
          ContentType: "image/jpeg"
        },
        nomeEvento: "test1upd",
        dataInizioEvento: new Date("2025-1-31"),
        dataFineEvento: new Date("2025-2-2"),
        luogoEvento: "qui",
        categorie: [{
          Id: 1,
          Descrizione: "U16"
        }, {
          Id: 4,
          Descrizione: "JUNIOR"
        }, {
          Id: 5,
          Descrizione: "SENIOR"
        }, {
          Id: 7,
          Descrizione: "OVER65"
        }],
        descrizione: "testdescr",
        link: "pippo;pippa"
      }, {
        id: "be907da0-d4b7-4595-42d7-08dd35463392",
        copertina: {
          ImageData: "",
          ContentType: "image/jpeg"
        },
        nomeEvento: "test2",
        dataInizioEvento: new Date("2025-1-31"),
        dataFineEvento: new Date("2025-2-2"),
        luogoEvento: "qui",
        categorie: [{
          Id: 1,
          Descrizione: "U16"
        }, {
          Id: 2,
          Descrizione: "U18"
        }, {
          Id: 3,
          Descrizione: "U21"
        }, {
          Id: 4,
          Descrizione: "JUNIOR"
        }],
        descrizione: "descr",
        link: "pippo;pippa::::"
      }, {
        id: "110d9ade-219a-47a5-0104-08dd38d35768",
        copertina: {
          ImageData: "",
          ContentType: "image/jpeg"
        },
        nomeEvento: "past",
        dataInizioEvento: new Date("2024-12-30"),
        dataFineEvento: new Date("2025-1-5"),
        luogoEvento: "semprequi",
        categorie: [{
          Id: 4,
          Descrizione: "JUNIOR"
        }],
        descrizione: "b",
        link: "aaaaa"
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetCategories() {
      let response = [{
        Id: 1,
        Descrizione: "U16"
      }, {
        Id: 2,
        Descrizione: "U18"
      }, {
        Id: 3,
        Descrizione: "U21"
      }, {
        Id: 4,
        Descrizione: "JUNIOR"
      }, {
        Id: 5,
        Descrizione: "SENIOR"
      }, {
        Id: 6,
        Descrizione: "OVER50"
      }, {
        Id: 7,
        Descrizione: "OVER65"
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetPages() {
      let response = [{
        id: 1,
        page: "Homepage"
      }, {
        id: 2,
        page: "Contatti"
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetImagesByPage() {
      let response = [{
        id: 3,
        urlImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        page: 1,
        section: 1,
        urlFromGoogleDrive: false,
        title: "Expert Trainers",
        description: "Get personalized workout plans tailored to your goals",
        additionalText: "Meet Our Trainers",
        order: 2
      }, {
        id: 4,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Basic",
        description: "$29/month",
        additionalText: " Full gym access 24/7, All equipment access,  Unlimited group classes, One personal training session/month",
        order: 1
      }, {
        id: 5,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Elite",
        description: "$99/month",
        additionalText: "All Premium features, Weekly personal training, Custom nutrition plan, Spa access",
        order: 3
      }, {
        id: 6,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Premium",
        description: "$59/month",
        additionalText: "Full gym access 24/7, All equipment access, Unlimited group classes, One personal training session/month",
        order: 2
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function GetImages() {
      let response = [{
        id: 3,
        urlImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        page: 1,
        section: 1,
        urlFromGoogleDrive: false,
        title: "Expert Trainers",
        description: "Get personalized workout plans tailored to your goals",
        additionalText: "Meet Our Trainers",
        order: 2
      }, {
        id: 4,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Basic",
        description: "$29/month",
        additionalText: " Full gym access 24/7, All equipment access,  Unlimited group classes, One personal training session/month",
        order: 1
      }, {
        id: 5,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Elite",
        description: "$99/month",
        additionalText: "All Premium features, Weekly personal training, Custom nutrition plan, Spa access",
        order: 3
      }, {
        id: 6,
        urlImage: "",
        page: 1,
        section: 3,
        urlFromGoogleDrive: false,
        title: "Premium",
        description: "$59/month",
        additionalText: "Full gym access 24/7, All equipment access, Unlimited group classes, One personal training session/month",
        order: 2
      }];
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: response
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
    function ok() {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpResponse({
        status: 200,
        body: true
      })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.delay)(500));
    }
  }
  static {
    this.ɵfac = function FakeBackendInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || FakeBackendInterceptor)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      token: FakeBackendInterceptor,
      factory: FakeBackendInterceptor.ɵfac
    });
  }
}
const fakeBackendProvider = {
  // Use fake backend in place of Http service for backend-less development
  provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};

/***/ }),

/***/ 1975:
/*!****************************************************!*\
  !*** ./src/app/Interceptor/loading.interceptor.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoadingInterceptor: () => (/* binding */ LoadingInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9475);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var src_Services_Common_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/Services/Common/loader.service */ 8879);



class LoadingInterceptor {
  constructor(loadingService) {
    this.loadingService = loadingService;
    this.totalRequests = 0;
  }
  intercept(request, next) {
    //console.log('caught')
    this.totalRequests++;
    this.loadingService.setLoading(true);
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => {
      this.totalRequests--;
      if (this.totalRequests == 0) {
        this.loadingService.setLoading(false);
      }
    }));
  }
  static {
    this.ɵfac = function LoadingInterceptor_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || LoadingInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_Services_Common_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: LoadingInterceptor,
      factory: LoadingInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 9391:
/*!**************************************************!*\
  !*** ./src/app/Model/Abbonamento/Abbonamento.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Abbonamento: () => (/* binding */ Abbonamento)
/* harmony export */ });
class Abbonamento {
  constructor(_id, _idTipoAbbonamento, _tipoAbbonamento, _dataIscrizione, _dataScadenza, _urlPagamento, _importo, _idCheckout, _isActive, _isPayed, _utente) {
    this.id = _id;
    this.idTipoAbbonamento = _idTipoAbbonamento;
    this.tipoAbbonamento = _tipoAbbonamento;
    this.dataIscrizione = _dataIscrizione;
    this.dataScadenza = _dataScadenza;
    this.urlPagamento = _urlPagamento;
    this.importo = _importo;
    this.idCheckout = _idCheckout;
    this.isActive = _isActive;
    this.isPayed = _isPayed;
    this.utente = _utente;
  }
}

/***/ }),

/***/ 855:
/*!************************************!*\
  !*** ./src/app/Model/Base/enum.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Operation: () => (/* binding */ Operation),
/* harmony export */   Pagine: () => (/* binding */ Pagine),
/* harmony export */   SubscriptionOperation: () => (/* binding */ SubscriptionOperation)
/* harmony export */ });
var Operation;
(function (Operation) {
  Operation[Operation["AggiornaInfo"] = 0] = "AggiornaInfo";
  Operation[Operation["SetAdmin"] = 1] = "SetAdmin";
  Operation[Operation["AggiornaIndirizzo"] = 2] = "AggiornaIndirizzo";
  Operation[Operation["AggiornaConsensi"] = 3] = "AggiornaConsensi";
  Operation[Operation["AggiornaUser"] = 4] = "AggiornaUser";
  Operation[Operation["AggiornaPassword"] = 5] = "AggiornaPassword";
  Operation[Operation["AggiornaAll"] = 6] = "AggiornaAll";
})(Operation || (Operation = {}));
var SubscriptionOperation;
(function (SubscriptionOperation) {
  SubscriptionOperation[SubscriptionOperation["SospendiAbbonamento"] = 0] = "SospendiAbbonamento";
  SubscriptionOperation[SubscriptionOperation["EstendiAbbonamento"] = 1] = "EstendiAbbonamento";
  SubscriptionOperation[SubscriptionOperation["CambiaTipoAbbonamento"] = 2] = "CambiaTipoAbbonamento";
  SubscriptionOperation[SubscriptionOperation["CancellaAbbonamento"] = 3] = "CancellaAbbonamento";
  SubscriptionOperation[SubscriptionOperation["AggiornaInfoPagamento"] = 4] = "AggiornaInfoPagamento";
  SubscriptionOperation[SubscriptionOperation["SetAbbonamentoPagato"] = 5] = "SetAbbonamentoPagato";
})(SubscriptionOperation || (SubscriptionOperation = {}));
var Pagine;
(function (Pagine) {
  Pagine[Pagine["Homepage"] = 1] = "Homepage";
  Pagine[Pagine["Contatti"] = 2] = "Contatti";
})(Pagine || (Pagine = {}));

/***/ }),

/***/ 7797:
/*!****************************************!*\
  !*** ./src/app/Model/Base/response.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTTPResponseError: () => (/* binding */ HTTPResponseError),
/* harmony export */   Response: () => (/* binding */ Response)
/* harmony export */ });
class Response {
  constructor(_data, _error) {
    this.Data = _data;
    this.Error = _error;
  }
}
class HTTPResponseError {
  constructor(_code, _message) {
    this.Code = _code;
    this.Message = _message;
  }
}

/***/ }),

/***/ 443:
/*!**********************************************!*\
  !*** ./src/app/Model/Documento/Documento.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Documento: () => (/* binding */ Documento),
/* harmony export */   DocumentoExt: () => (/* binding */ DocumentoExt)
/* harmony export */ });
class Documento {
  constructor(_idDocumento, _idTipoDocumento, _nomeDocumento, _dataCaricamento) {
    this.idDocumento = _idDocumento;
    this.idTipoDocumento = _idTipoDocumento;
    this.nomeDocumento = _nomeDocumento;
    this.dataCaricamento = _dataCaricamento;
  }
}
class DocumentoExt extends Documento {
  constructor(_idTipoDocumento, _rowGuid, _nomeDocumento, _documento) {
    super(null, _idTipoDocumento, _nomeDocumento, null);
    this.rowGuid = _rowGuid;
    this.datiDocumento = _documento;
  }
}

/***/ }),

/***/ 1611:
/*!****************************************!*\
  !*** ./src/app/Model/Evento/Evento.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Copertina: () => (/* binding */ Copertina),
/* harmony export */   Evento: () => (/* binding */ Evento)
/* harmony export */ });
class Evento {
  constructor(nomeEvento, dataInizioEvento, dataFineEvento, luogoEvento, descrizione, link, copertina) {
    this.id = null;
    this.nomeEvento = nomeEvento;
    this.dataInizioEvento = dataInizioEvento;
    this.dataFineEvento = dataFineEvento;
    this.luogoEvento = luogoEvento;
    this.categorie = [];
    this.descrizione = descrizione;
    this.link = link;
    this.copertina = new Copertina(copertina);
  }
}
class Copertina {
  constructor(image) {
    this.ImageData = image;
    this.ContentType = 'image/jpeg';
  }
}

/***/ }),

/***/ 973:
/*!********************************************!*\
  !*** ./src/app/Model/Evento/Iscrizione.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Iscrizione: () => (/* binding */ Iscrizione),
/* harmony export */   IscrizioneExt: () => (/* binding */ IscrizioneExt),
/* harmony export */   SingolaIscrizione: () => (/* binding */ SingolaIscrizione)
/* harmony export */ });
class Iscrizione {
  constructor(eventId, userId, categories, note) {
    this.eventId = eventId;
    this.userId = userId;
    this.categories = categories;
    this.note = note;
  }
}
class SingolaIscrizione {
  constructor(eventId, userId, categoria, note) {
    this.eventId = eventId;
    this.userId = userId;
    this.categoria = categoria;
    this.note = note;
  }
}
class IscrizioneExt {
  constructor(iscrizione, evento) {
    this.Iscrizione = iscrizione;
    this.Evento = evento;
  }
}

/***/ }),

/***/ 5587:
/*!****************************************!*\
  !*** ./src/app/Model/Sito/Immagine.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Images: () => (/* binding */ Images)
/* harmony export */ });
class Images {
  constructor(_id, _urlImage, _page, _section, _urlFromGoogleDrive, _title, _description, _additionalText, _order) {
    this.id = _id != null ? _id : 0;
    this.urlImage = _urlImage;
    this.page = _page;
    this.section = _section;
    this.urlFromGoogleDrive = _urlFromGoogleDrive;
    this.title = _title != null ? _title : "";
    this.description = _description != null ? _description : "";
    this.additionalText = _additionalText != null ? _additionalText : "";
    this.order = _order != null ? _order : 0;
  }
}

/***/ }),

/***/ 8127:
/*!************************************!*\
  !*** ./src/app/Model/User/User.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   User: () => (/* binding */ User)
/* harmony export */ });
class User {
  constructor(_nome, _cognome, _email, _codFiscale, _password, _isAdmin, _rowGuid, _dataNascita, _via, _numero, _citta, _regione, _nazione, _consensoInvioMail, _abbonamenti) {
    this.nome = _nome;
    this.cognome = _cognome;
    this.email = _email;
    this.codFiscale = _codFiscale;
    this.password = _password;
    this.isAdmin = _isAdmin;
    this.rowGuid = _rowGuid;
    this.dataNascita = _dataNascita;
    this.via = _via;
    this.numero = _numero;
    this.citta = _citta;
    this.regione = _regione;
    this.nazione = _nazione;
    this.consensoInvioMail = _consensoInvioMail;
    this.abbonamenti = _abbonamenti;
  }
}

/***/ }),

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _Component_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/home/home.component */ 3016);
/* harmony import */ var _Component_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/login/login.component */ 2660);
/* harmony import */ var _Component_login_nuovo_utente_nuovo_utente_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/login/nuovo-utente/nuovo-utente.component */ 1994);
/* harmony import */ var _Component_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/contatti/contatti.component */ 9054);
/* harmony import */ var _Component_User_documenti_documenti_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/User/documenti/documenti.component */ 1802);
/* harmony import */ var _Component_Admin_gestioneutenti_gestioneutenti_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/Admin/gestioneutenti/gestioneutenti.component */ 6548);
/* harmony import */ var _Component_User_abbonamenti_abbonamenti_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/User/abbonamenti/abbonamenti.component */ 110);
/* harmony import */ var _Component_Admin_gestioneEventi_gestione_eventi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/Admin/gestioneEventi/gestione-eventi.component */ 713);
/* harmony import */ var _Component_User_eventi_eventi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/User/eventi/eventi.component */ 6070);
/* harmony import */ var _Component_Admin_gestioneGrafica_gestionegrafica_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/Admin/gestioneGrafica/gestionegrafica.component */ 1580);
/* harmony import */ var _Component_news_news_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/news/news.component */ 7504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);














const routes = [{
  path: '',
  component: _Component_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
  pathMatch: 'full'
}, {
  path: 'login',
  component: _Component_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
  pathMatch: 'full'
}, {
  path: 'login/newuser',
  component: _Component_login_nuovo_utente_nuovo_utente_component__WEBPACK_IMPORTED_MODULE_2__.NuovoUtenteComponent,
  pathMatch: 'full'
}, {
  path: 'contatti',
  component: _Component_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_3__.ContattiComponent,
  pathMatch: 'full'
}, {
  path: 'news',
  component: _Component_news_news_component__WEBPACK_IMPORTED_MODULE_10__.NewsComponent,
  pathMatch: 'full'
}, {
  path: 'documenti',
  component: _Component_User_documenti_documenti_component__WEBPACK_IMPORTED_MODULE_4__.DocumentiComponent,
  pathMatch: 'full'
}, {
  path: 'abbonamenti',
  component: _Component_User_abbonamenti_abbonamenti_component__WEBPACK_IMPORTED_MODULE_6__.AbbonamentiComponent,
  pathMatch: 'full'
}, {
  path: 'eventi',
  component: _Component_User_eventi_eventi_component__WEBPACK_IMPORTED_MODULE_8__.EventiComponent,
  pathMatch: 'full'
}, {
  path: 'gestioneutenti',
  component: _Component_Admin_gestioneutenti_gestioneutenti_component__WEBPACK_IMPORTED_MODULE_5__.GestioneutentiComponent,
  pathMatch: 'full'
}, {
  path: 'gestioneeventi',
  component: _Component_Admin_gestioneEventi_gestione_eventi_component__WEBPACK_IMPORTED_MODULE_7__.GestioneEventiComponent,
  pathMatch: 'full'
}, {
  path: 'gestionegrafica',
  component: _Component_Admin_gestioneGrafica_gestionegrafica_component__WEBPACK_IMPORTED_MODULE_9__.GestioneGraficaComponent,
  pathMatch: 'full'
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes, {
        canceledNavigationResolution: 'replace',
        paramsInheritanceStrategy: 'always',
        urlUpdateStrategy: 'eager'
      }), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _Component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component/nav-bar/nav-bar.component */ 3976);
/* harmony import */ var _Component_cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Component/cookie-consent/cookie-consent.component */ 4816);
/* harmony import */ var _Component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/spinner/spinner.component */ 7664);





class AppComponent {
  constructor() {
    this.title = 'SitoDeiSitiInsitoFE';
  }
  static {
    this.ɵfac = function AppComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [[1, "container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "head")(1, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "SitoDeiSitiInsito");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "body");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "app-spinner")(5, "app-nav-bar");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "app-cookie-consent");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _Component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_0__.NavBarComponent, _Component_cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_1__.CookieConsentComponent, _Component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__.SpinnerComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-pagination */ 2423);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/menu */ 1034);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _Component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Component/nav-bar/nav-bar.component */ 3976);
/* harmony import */ var _Component_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Component/home/home.component */ 3016);
/* harmony import */ var _Component_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Component/login/login.component */ 2660);
/* harmony import */ var _Component_login_nuovo_utente_nuovo_utente_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Component/login/nuovo-utente/nuovo-utente.component */ 1994);
/* harmony import */ var _Component_cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Component/cookie-consent/cookie-consent.component */ 4816);
/* harmony import */ var _Component_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Component/contatti/contatti.component */ 9054);
/* harmony import */ var _Component_User_documenti_documenti_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Component/User/documenti/documenti.component */ 1802);
/* harmony import */ var _Component_Admin_gestioneutenti_gestioneutenti_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Component/Admin/gestioneutenti/gestioneutenti.component */ 6548);
/* harmony import */ var _Component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Component/spinner/spinner.component */ 7664);
/* harmony import */ var _Services_Common_common_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Services/Common/common.service */ 9009);
/* harmony import */ var _Services_Login_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Services/Login/login.service */ 6377);
/* harmony import */ var src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/Services/Utenti/utenti.service */ 2933);
/* harmony import */ var _Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Component/modale/modale.component */ 7010);
/* harmony import */ var _angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/platform-browser/animations/async */ 6970);
/* harmony import */ var _Interceptor_loading_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Interceptor/loading.interceptor */ 1975);
/* harmony import */ var _Component_User_abbonamenti_abbonamenti_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Component/User/abbonamenti/abbonamenti.component */ 110);
/* harmony import */ var _Interceptor_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Interceptor/fake-backend.interceptor */ 1913);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ 5312);
/* harmony import */ var src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/Services/Eventi/eventi.service */ 6365);
/* harmony import */ var _Component_Admin_gestioneEventi_gestione_eventi_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Component/Admin/gestioneEventi/gestione-eventi.component */ 713);
/* harmony import */ var _Component_User_eventi_eventi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Component/User/eventi/eventi.component */ 6070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _Component_Admin_gestioneGrafica_gestionegrafica_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Component/Admin/gestioneGrafica/gestionegrafica.component */ 1580);
/* harmony import */ var _Component_news_news_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Component/news/news.component */ 7504);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 7580);









































class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineInjector"]({
      providers: [_Services_Common_common_service__WEBPACK_IMPORTED_MODULE_11__.CommonService, _Services_Login_login_service__WEBPACK_IMPORTED_MODULE_12__.LoginService, src_Services_Utenti_utenti_service__WEBPACK_IMPORTED_MODULE_13__.UtentiService, src_Services_Eventi_eventi_service__WEBPACK_IMPORTED_MODULE_19__.EventiService, (0,_angular_common_http__WEBPACK_IMPORTED_MODULE_25__.provideHttpClient)((0,_angular_common_http__WEBPACK_IMPORTED_MODULE_25__.withInterceptorsFromDi)()), (0,_angular_platform_browser_animations_async__WEBPACK_IMPORTED_MODULE_26__.provideAnimationsAsync)(), {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HTTP_INTERCEPTORS,
        useClass: _Interceptor_loading_interceptor__WEBPACK_IMPORTED_MODULE_15__.LoadingInterceptor,
        multi: true
      }, src_environments_environment__WEBPACK_IMPORTED_MODULE_18__.environment.demo ? [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HTTP_INTERCEPTORS,
        useClass: _Interceptor_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_17__.FakeBackendInterceptor,
        multi: true
      }] : [], _angular_common__WEBPACK_IMPORTED_MODULE_27__.DatePipe],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_30__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__.MatPaginatorModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__.MatOptionModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__.NoopAnimationsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _Component_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_2__.NavBarComponent, _Component_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent, _Component_login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent, _Component_login_nuovo_utente_nuovo_utente_component__WEBPACK_IMPORTED_MODULE_5__.NuovoUtenteComponent, _Component_cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_6__.CookieConsentComponent, _Component_contatti_contatti_component__WEBPACK_IMPORTED_MODULE_7__.ContattiComponent, _Component_User_documenti_documenti_component__WEBPACK_IMPORTED_MODULE_8__.DocumentiComponent, _Component_User_eventi_eventi_component__WEBPACK_IMPORTED_MODULE_21__.EventiComponent, _Component_User_abbonamenti_abbonamenti_component__WEBPACK_IMPORTED_MODULE_16__.AbbonamentiComponent, _Component_Admin_gestioneutenti_gestioneutenti_component__WEBPACK_IMPORTED_MODULE_9__.GestioneutentiComponent, _Component_Admin_gestioneEventi_gestione_eventi_component__WEBPACK_IMPORTED_MODULE_20__.GestioneEventiComponent, _Component_Admin_gestioneGrafica_gestionegrafica_component__WEBPACK_IMPORTED_MODULE_22__.GestioneGraficaComponent, _Component_modale_modale_component__WEBPACK_IMPORTED_MODULE_14__.ModaleComponent, _Component_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_10__.SpinnerComponent, _Component_news_news_component__WEBPACK_IMPORTED_MODULE_23__.NewsComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_29__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_30__.NgxPaginationModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_31__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_32__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_33__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_34__.MatTableModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_35__.MatSortModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_36__.MatPaginatorModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_37__.MatMenuModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_38__.MatSelectModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__.MatOptionModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__.BrowserAnimationsModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_40__.NoopAnimationsModule]
  });
})();

/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  production: false,
  demo: true,
  apiEndpoint: ""
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 4284:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 4394:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map