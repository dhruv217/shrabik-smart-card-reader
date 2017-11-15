webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-card>h3 {\r\n    text-align: -webkit-center;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n    <span>Smart Certificate Reader</span>\n    <span fxFlex=\"1 1 auto\"></span>\n</mat-toolbar>\n<div width=\"590px\" height=\"700px\" style=\"margin-top: 10px;\">\n    <mat-card *ngIf=\"certificateVerified == false\" style=\"width: 300px; margin-left: 120px\">\n        <h3>Please scan Certificate to verify.</h3>\n    </mat-card>\n    <mat-card *ngIf=\"certificateVerified == true\" style=\"width: 300px; margin-left: 120px; margin-bottom:25px;\">\n        <h3>Certificate Verified.</h3>\n    </mat-card>\n    <pdf-viewer *ngIf=\"certificateVerified == true\" [src]=\"pdfAddress\" [render-text]=\"true\" [page]=\"4\" [show-all]=\"false\" style=\"display: block;\" [original-size]=\"false\">\n    </pdf-viewer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nfc_pcsc__ = __webpack_require__("nfc-pcsc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nfc_pcsc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nfc_pcsc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var AppComponent = (function () {
    function AppComponent(fireDb, snackBar, sanitizer) {
        this.fireDb = fireDb;
        this.snackBar = snackBar;
        this.sanitizer = sanitizer;
        this.certificateVerified = false;
        this.readers = [];
        this.serialNumber$ = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.students$ = this.serialNumber$.switchMap(function (serialNumber) {
            return fireDb.list('/students', function (ref) {
                return serialNumber ? ref.orderByChild('serialNumber').equalTo(serialNumber).limitToFirst(1) : ref;
            }).snapshotChanges();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPdfAddressFromDb('SS-10013');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var nfc = new __WEBPACK_IMPORTED_MODULE_3_nfc_pcsc__["NFC"]();
        nfc.on('reader', function (reader) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log('Reader Found :', reader.name);
                this.readers.push(reader);
                reader.aid = 'F222222222';
                reader.on('card', function (card) { return __awaiter(_this, void 0, void 0, function () {
                    var data, payload;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                // standard nfc tags like Mifare
                                if (card.type === __WEBPACK_IMPORTED_MODULE_3_nfc_pcsc__["TAG_ISO_14443_3"]) {
                                    // const uid = card.uid;
                                    console.log("card detected", { reader: reader.name, card: card });
                                    this.card = card;
                                }
                                else if (card.type === __WEBPACK_IMPORTED_MODULE_3_nfc_pcsc__["TAG_ISO_14443_4"]) {
                                    // Android HCE
                                    // process raw Buffer data
                                    // const data = card.data.toString('utf8');
                                    console.log("card detected", { reader: reader.name, card: __assign({}, card) });
                                    this.card = card;
                                }
                                else {
                                    // not possible, just to be sure
                                    console.log("card detected", { reader: reader.name, card: card });
                                }
                                return [4 /*yield*/, reader.read(4, 16)];
                            case 1:
                                data = _a.sent();
                                console.log("data read", { reader: reader.name, data: data });
                                payload = data.toString('utf-8').trim();
                                console.log("data converted", payload);
                                this.getPdfAddressFromDb(payload);
                                return [2 /*return*/];
                        }
                    });
                }); });
                reader.on('error', function (error) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        console.log('Reader Error Occured :', error);
                        return [2 /*return*/];
                    });
                }); });
                return [2 /*return*/];
            });
        }); });
    };
    AppComponent.prototype.getPdfAddressFromDb = function (serialNumber) {
        var _this = this;
        serialNumber = this.trimNullChar(serialNumber);
        this.serialNumber$.next(serialNumber);
        this.students$.subscribe(function (studentObject) {
            console.log(studentObject);
            if (studentObject.length === 1) {
                _this.certificateVerified = true;
                _this.pdfAddress = studentObject[0].payload.val().certificatePath;
                _this.pageInPdf = Number(studentObject[0].payload.val().pageInPdf);
                var snackBarRef = _this.snackBar.open('Certificate Verified', 'OK');
            }
            else {
                var snackBarRef = _this.snackBar.open('Unverified Certificate', 'OK');
            }
        });
    };
    AppComponent.prototype.trimNullChar = function (sample) {
        var sb = '';
        for (var i = 0; i < sample.length; i++) {
            if (sample.charCodeAt(i) > 0 && sample.charCodeAt(i) <= 256) {
                sb = sb + sample.charAt(i);
            }
        }
        return sb.toString();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatSnackBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__ = __webpack_require__("../../../flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Import the AngularFireModule and the AngularFireDatabaseModule




// Define the firebase database configuration keys, get it from your Firebase application console
var firebaseConfig = {
    apiKey: 'AIzaSyA5cSfPy8QoErJTptdHxhcpBQlN4PogYTw',
    authDomain: 'shrabik-smart-certificate.firebaseapp.com',
    databaseURL: 'https://shrabik-smart-certificate.firebaseio.com',
    projectId: 'shrabik-smart-certificate',
    storageBucket: 'shrabik-smart-certificate.appspot.com',
    messagingSenderId: '296622038511'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_pdf_viewer__["PdfViewerComponent"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatGridListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["g" /* MatProgressBarModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatDialogModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatProgressSpinnerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatSnackBarModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require('fs');

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require('http');

/***/ }),

/***/ "https":
/***/ (function(module, exports) {

module.exports = require('https');

/***/ }),

/***/ "nfc-pcsc":
/***/ (function(module, exports) {

module.exports = require('nfc-pcsc');

/***/ }),

/***/ "url":
/***/ (function(module, exports) {

module.exports = require('url');

/***/ }),

/***/ "zlib":
/***/ (function(module, exports) {

if(typeof require('zlib') === 'undefined') {var e = new Error("Cannot find module \"require('zlib')\""); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = require('zlib');

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map