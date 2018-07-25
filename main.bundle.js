webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_dialogs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pdfviewer_pdfviewer_component__ = __webpack_require__("./src/app/_dialogs/pdfviewer/pdfviewer.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pdfviewer_pdfviewer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shipping_info_shipping_info_component__ = __webpack_require__("./src/app/_dialogs/shipping-info/shipping-info.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__shipping_info_shipping_info_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shipping_info_shipping_info_edit_shipping_info_edit_component__ = __webpack_require__("./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__shipping_info_shipping_info_edit_shipping_info_edit_component__["a"]; });





/***/ }),

/***/ "./src/app/_dialogs/pdfviewer/pdfviewer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_dialogs/pdfviewer/pdfviewer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">{{data.message}}</div>\n<div id=\"docdiv\"></div>\n<div  style=\"max-height: 80vh\" *ngIf=\"caller==2\">\n\t<div>\n\t\t<label>PDF src</label> <input type=\"text\" placeholder=\"PDF src\"\n\t\t\t[(ngModel)]=\"pdfSrc\">\n\t</div>\n\t<pdf-viewer [src]=\"pdfSrc\" [render-text]=\"true\" style=\"display: block;\"></pdf-viewer>\n</div>\n\n<p (click)=\"onNoClick()\"\n\tstyle=\"text-align: right; padding: 0px; margin: 0px;\">\n\t<a>Close</a>\n</p>\n\n\n"

/***/ }),

/***/ "./src/app/_dialogs/pdfviewer/pdfviewer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PdfviewerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var PdfviewerComponent = (function () {
    function PdfviewerComponent(dialogRef, data, window) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.window = window;
        this.pdfSrc = 'http://localhost:8081/Tekweld/jwtservices/orders/Invoice';
    }
    PdfviewerComponent.prototype.ngOnInit = function () {
        this.caller = this.data.caller;
        if (this.data != null && this.data.urlSrc !== '') {
            if (this.caller === 0 || this.caller === 1) {
                if (this.data.urlSrc.includes('.doc')) {
                    this.data.message = 'Cannot preview Word docs. File downloaded automatically.'; // TODO: add the function without the page size
                    this.load_doc();
                }
                this.load_pdf();
            }
            else {
                if (this.caller === 2) {
                    console.log('Jojoba gell will balden you');
                }
                else {
                    if (this.caller === 3) {
                        this.load_temp();
                    }
                }
            }
        }
        ;
    };
    PdfviewerComponent.prototype.load_doc = function () {
        document.getElementById("docdiv").innerHTML =
            '<object type="text/html" data="https://tekweld.promo.tekweld.com/' + this.data.urlSrc.replace('public', '') + '" ></object>';
    };
    PdfviewerComponent.prototype.load_pdf = function () {
        document.getElementById("content").innerHTML =
            '<object type="text/html" style="min-height: 80vh; min-width: 400px; width: 50vw" data="https://tekweld.promo.tekweld.com/' + this.data.urlSrc.replace('public', '') + '" ></object>';
    };
    PdfviewerComponent.prototype.load_temp = function () {
        document.getElementById("content").innerHTML =
            '<object type="text/html" style="min-height: 80vh; min-width: 400px; width: 50vw" data="' + this.data.urlSrc.replace('public', '') + '" ></object>';
    };
    PdfviewerComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    PdfviewerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pdfviewer',
            template: __webpack_require__("./src/app/_dialogs/pdfviewer/pdfviewer.component.html"),
            styles: [__webpack_require__("./src/app/_dialogs/pdfviewer/pdfviewer.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */],
                { provide: 'Window', useValue: window }
            ]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('Window')),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object, Window])
    ], PdfviewerComponent);
    return PdfviewerComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-form-field{\r\n\t\twidth: 100%;\r\n\t}\r\n\r\n.form-group{\r\n\twidth: 100%;\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" style=\"position:relative; z-index:100; max-width:78vw;\"></mat-progress-bar>\r\n<p>Ship to:</p>\r\n     <form>\r\n\t     <div class=\"form-group\">\r\n\t     \t<div class=\"col-md-6\">\r\n\t        <mat-form-field>\r\n\t    \t\t\t<input matInput placeholder=\"Name\" value=\"{{info.ship_name}}\">\r\n\t  \t\t</mat-form-field>\r\n\t  \t\t</div>\r\n\t     </div>\r\n\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Address line 1\" value=\"{{info.ship_address1}}\">  \r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n  \t\t</div>\r\n  \t\t<div class=\"col-md-6\">\r\n  \t\t<div class=\"form-group\">\r\n  \t\t<mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Address line 2\" value=\"{{info.ship_address2}}\">  \r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-4\">\r\n        <mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"City\" value=\"{{info.ship_city}}\"> \r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n  \t\t<div class=\"col-md-4\">\r\n  \t\t<mat-form-field>\r\n\t    \t\t\t\t      <mat-select\r\n\t\t\t\t\t\t\t\tplaceholder=\"State\">\r\n\t\t\t\t\t\t\t <mat-option\r\n\t\t\t\t\t\t\t\t*ngFor=\"let state of states\"\r\n\t\t\t\t\t\t\t\tvalue=\"{{state}}\">\r\n\t\t\t\t\t\t\t{{state.abbreviation}} </mat-option> \r\n\t\t\t\t\t\t\t</mat-select>\r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n  \t\t<div class=\"col-md-4\">\r\n  \t\t<mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Zip\" value=\"{{info.ship_zip}}\"> \r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n    \t\t\t<mat-select\r\n\t\t\t\t\t\t\t\t placeholder=\"Country\">\r\n\t\t\t\t\t\t\t <mat-option\r\n\t\t\t\t\t\t\t\t*ngFor=\"let country of countries\"\r\n\t\t\t\t\t\t\t\tvalue=\"{{country}}\">\r\n\t\t\t\t\t\t\t{{country}} </mat-option> \r\n\t\t\t\t\t\t\t</mat-select>\r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-12\">\r\n\t\t  <mat-form-field>\r\n\t\t    <textarea matInput placeholder=\"Attention\">{{info.attention}}</textarea> \r\n\t\t  </mat-form-field>\r\n\t\t  </div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n\t\t  <input matInput [matDatepicker]=\"picker\" (click)=\"picker.open()\" placeholder=\"Req Ship Date\" value=\"{{info.shipping_date}}\"> \r\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n\t\t  <mat-datepicker #picker></mat-datepicker>\r\n\t\t</mat-form-field>\r\n\t\t</div>\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n\t\t  <input matInput [matDatepicker]=\"picker2\" (click)=\"picker2.open()\" placeholder=\"Est Ship Date\" disabled value=\"{{info.estimated_ship_date}}\"> \r\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n\t\t  <mat-datepicker #picker2></mat-datepicker>\r\n\t\t</mat-form-field>\r\n\t\t</div>\r\n       </div>\r\n              <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n\t\t  <input matInput [matDatepicker]=\"picker3\" (click)=\"picker3.open()\" placeholder=\"Req InHand Ship Date\" value=\"{{info.inhand_date}}\"> \r\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n\t\t  <mat-datepicker #picker3></mat-datepicker>\r\n\t\t</mat-form-field>\r\n\t\t</div>\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n\t\t  <input matInput [matDatepicker]=\"picker4\" (click)=\"picker4.open()\" placeholder=\"Est InHand Ship Date\" disabled value=\"ask india\">\r\n\t\t  <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n\t\t  <mat-datepicker #picker4></mat-datepicker>\r\n\t\t</mat-form-field>\r\n\t\t</div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Shipping Code\" value=\" {{info.shipping_code}}\">\r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n  \t\t<div class=\"col-md-6\">\r\n  \t\t<mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Shipping Method\" value=\"{{info.ship_method_code}}\"> \r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n       </div>\r\n       <div class=\"form-group\">\r\n       <div class=\"col-md-6\">\r\n        <mat-form-field>\r\n    \t\t\t<input matInput placeholder=\"Shipping Amt\"> {{info.clear_ship_amt}}\r\n  \t\t</mat-form-field>\r\n  \t\t</div>\r\n       </div>\r\n     </form>\r\n</div>\r\n<div mat-dialog-actions>\r\n          <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\"  [mat-dialog-close]=\"\">\r\n            <span>Cancel</span>\r\n          </button>\r\n                    <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" (click)=\"saveToDB()\" [disabled] =\"!verification\">\r\n            <span>Confirm</span>\r\n          </button>\r\n</div>"

/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingInfoEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_index__ = __webpack_require__("./src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShippingInfoEditComponent = (function () {
    function ShippingInfoEditComponent() {
        this.loading = false;
        this.verification = false;
    }
    ShippingInfoEditComponent.prototype.ngOnInit = function () {
        this.states = new __WEBPACK_IMPORTED_MODULE_0__helpers_index__["c" /* StaticData */]().states;
        this.countries = new __WEBPACK_IMPORTED_MODULE_0__helpers_index__["c" /* StaticData */]().countries;
    };
    ShippingInfoEditComponent.prototype.saveToDB = function () {
        //save to db after verification
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_index__["a" /* ShippingInfo */])
    ], ShippingInfoEditComponent.prototype, "info", void 0);
    ShippingInfoEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-shipping-info-edit',
            template: __webpack_require__("./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.html"),
            styles: [__webpack_require__("./src/app/_dialogs/shipping-info/shipping-info-edit/shipping-info-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShippingInfoEditComponent);
    return ShippingInfoEditComponent;
}());



/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Shipping Address</h1>\n<div  *ngIf=\"!openEdit\">\n<div mat-dialog-content style=\"min-width:300px;\">\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" style=\"position:relative; z-index:100; max-width:78vw;\"></mat-progress-bar>\n<div  *ngFor=\"let address of shippingInfo; let i = index\" [attr.data-index]=\"i\" class=\"div-section\">\n<div>  <mat-radio-group [(ngModel)]=\"selectedAddress\">\n<mat-radio-button class=\"example-radio-button\" [value]=\"address\"  name=\"radio\">\n   Address #{{i+1}}\n  </mat-radio-button>\n  </mat-radio-group></div>\n    <div class=\"row div-section\" style=\"padding:0rem !important; padding-right: 0rem !important; \">\n        <div class=\"div-section col-md-5 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Ship To</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.ship_address1}}, {{address.ship_address2}}, {{address.ship_city}}, {{address.ship_state}}, {{address.ship_country}}, {{address.ship_zip}}</div>\n        </div>\n        <div class=\"div-section col-md-3 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Address Type</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.residential_indicator=='N'?'Commercial':'Residential'}}</div>\n        </div>\n        <div class=\"div-section col-md-2 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Ship Date</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.shipping_date}}</div>\n        </div>\n        <div class=\"div-section col-md-2 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Arrival Date</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.estimated_arrival_date}}</div>\n        </div>\n     \t</div><div class=\"row div-section\" style=\"padding:0rem !important; padding-right: 0rem !important;\">\n        <div class=\"div-section col-md-3 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Qty</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.clear_qty}}</div>\n        </div>\n        <div class=\"div-section col-md-3 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Ship Code</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.shipping_code}}</div>\n        </div>\n        <div class=\"div-section col-md-3 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Ship Method</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.ship_method}}</div>\n        </div>\n        <div class=\"div-section col-md-3 small_font\" style=\"margin:0rem !important;\">\n        \t<div style=\"border-radius: 10px; background:#cfcfcf; padding:0.5rem\"><b>Ship Amt</b></div>\n        \t<div style=\"padding:0.3rem\">{{address.current_ship_amt}}</div>\n        </div>\n    </div>\n</div>\n\n</div>\n<div mat-dialog-actions>\n          <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" [mat-dialog-close]=\"\">\n            <span>Close</span>\n          </button>\n                    <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" (click)=\"edit()\"  [disabled] =\"!selectedAddress || selectedAddress.shipping_flag == 'Y'\">\n            <span>Edit</span>\n          </button>\n          <p *ngIf=\"selectedAddress && selectedAddress.shipping_flag == 'Y'\">Shipping Address Cannot Be Edited After Shipping</p>\n</div>\n\n</div>\n<app-shipping-info-edit [info]=\"selectedAddress\" *ngIf=\"openEdit\"></app-shipping-info-edit>"

/***/ }),

/***/ "./src/app/_dialogs/shipping-info/shipping-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ShippingInfoComponent = (function () {
    function ShippingInfoComponent(dialogRef, ordersService, alertService, data) {
        this.dialogRef = dialogRef;
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.data = data;
        this.openEdit = false;
        this.getShippingInfo();
    }
    ShippingInfoComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ShippingInfoComponent.prototype.ngOnInit = function () {
    };
    ShippingInfoComponent.prototype.edit = function () {
        this.openEdit = true;
    };
    ShippingInfoComponent.prototype.getShippingInfo = function () {
        var _this = this;
        this.loading = true;
        this.ordersService.getShippingInfo(this.data.oid).subscribe(function (data) {
            _this.shippingInfo = data;
            _this.loading = false;
        }, function (error) {
            _this.alertService.error('Session Timed Out', true);
            _this.loading = false;
            _this.dialogRef.close();
            _this.shippingInfo = null;
        });
    };
    ShippingInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-shipping-info',
            template: __webpack_require__("./src/app/_dialogs/shipping-info/shipping-info.component.html"),
            styles: [__webpack_require__("./src/app/_dialogs/shipping-info/shipping-info.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialogRef */],
            __WEBPACK_IMPORTED_MODULE_0__services_index__["g" /* OrdersService */],
            __WEBPACK_IMPORTED_MODULE_0__services_index__["a" /* AlertService */], Object])
    ], ShippingInfoComponent);
    return ShippingInfoComponent;
}());



/***/ }),

/***/ "./src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n{{message.text}}</div>-->\r\n<div class=\"col-sm-9 col-sm-offset-3 col-lg-9 col-lg-offset-3\" style=\"width: 50vw;  position: fixed;\"><div style=\"width: 50vw !important; margin: auto; position: fixed; z-index: 99999999\"><ngb-alert *ngIf=\"message!=null\" (close)=\"message = null\">{{message.text}}</ngb-alert></div></div>\r\n"

/***/ }),

/***/ "./src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
        this.staticAlertClosed = false;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; setTimeout(function () { return _this.message = null; }, 8000); });
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'alert',
            template: __webpack_require__("./src/app/_directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("./src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });



/***/ }),

/***/ "./src/app/_directives/scroll-tracker.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollTrackerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScrollTrackerDirective = (function () {
    function ScrollTrackerDirective(el) {
        this.el = el;
        this.trigger = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ScrollTrackerDirective.prototype.onScroll = function (event) {
        console.log('called');
        // do tracking
        // console.log('scrolled', event.target.scrollTop);
        // Listen to click events in the component
        var tracker = event.target;
        var limit = (tracker.scrollHeight - tracker.clientHeight) * 0.999; //that how it goes TODO: to fix the double paging - remove the *0.999
        //  console.log(event.target.scrollTop, limit);
        if (event.target.scrollTop >= (limit)) {
            //    console.log('end reached');
            this.trigger.emit("end reached");
        }
        if (event.target.scrollTop <= 0) {
            //    console.log('start reached');
            this.trigger.emit("start reached");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ScrollTrackerDirective.prototype, "trigger", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollTrackerDirective.prototype, "onScroll", null);
    ScrollTrackerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[scrollTracker]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ScrollTrackerDirective);
    return ScrollTrackerDirective;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/_helpers/fake-backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FakeBackendInterceptor */
/* unused harmony export fakeBackendProvider */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_materialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/materialize.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_dematerialize__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/dematerialize.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var FakeBackendInterceptor = (function () {
    function FakeBackendInterceptor() {
    }
    FakeBackendInterceptor.prototype.intercept = function (request, next) {
        // array in local storage for registered users
        var users = JSON.parse(localStorage.getItem('users')) || [];
        // wrap in delayed observable to simulate server api call
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(null).mergeMap(function () {
            // authenticate
            if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                var filteredUsers = users.filter(function (user) {
                    return user.username === request.body.username && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    var user = filteredUsers[0];
                    var body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]({ status: 200, body: body }));
                }
                else {
                    // else return 400 bad request
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Username or password is incorrect');
                }
            }
            // get users
            if (request.url.endsWith('/api/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id_1 = parseInt(urlParts[urlParts.length - 1]);
                    var matchedUsers = users.filter(function (user) { return user.id === id_1; });
                    var user = matchedUsers.length ? matchedUsers[0] : null;
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body
                var newUser_1 = request.body;
                // validation
                var duplicateUser = users.filter(function (user) { return user.username === newUser_1.username; }).length;
                if (duplicateUser) {
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Username "' + newUser_1.username + '" is already taken');
                }
                // save new user
                newUser_1.id = users.length + 1;
                users.push(newUser_1);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    var urlParts = request.url.split('/');
                    var id = parseInt(urlParts[urlParts.length - 1]);
                    for (var i = 0; i < users.length; i++) {
                        var user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].of(new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["f" /* HttpResponse */]({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw('Unauthorised');
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        })
            .materialize()
            .delay(500)
            .dematerialize();
    };
    FakeBackendInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FakeBackendInterceptor);
    return FakeBackendInterceptor;
}());

var fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/_helpers/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
var Globals = (function () {
    function Globals() {
        // public baseURL = 'http://localhost:8081/tekweld/jwtservices';
        this.baseURL = 'http://tekweld.xy8imwiyvs.us-east-2.elasticbeanstalk.com/jwtservices';
    }
    return Globals;
}());



/***/ }),

/***/ "./src/app/_helpers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__ = __webpack_require__("./src/app/_helpers/jwt.interceptor.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__jwt_interceptor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fake_backend__ = __webpack_require__("./src/app/_helpers/fake-backend.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__static_data__ = __webpack_require__("./src/app/_helpers/static-data.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__static_data__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("./src/app/_helpers/globals.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__globals__["a"]; });






/***/ }),

/***/ "./src/app/_helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            console.log("jwtinterceptor activated");
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/_helpers/static-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticData; });
var StaticData = (function () {
    function StaticData() {
        this.countries = ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British lndian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecudaor", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfork Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbarn and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virigan Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"];
        this.states = ([
            {
                "name": "Alabama",
                "abbreviation": "AL"
            },
            {
                "name": "Alaska",
                "abbreviation": "AK"
            },
            {
                "name": "American Samoa",
                "abbreviation": "AS"
            },
            {
                "name": "Arizona",
                "abbreviation": "AZ"
            },
            {
                "name": "Arkansas",
                "abbreviation": "AR"
            },
            {
                "name": "California",
                "abbreviation": "CA"
            },
            {
                "name": "Colorado",
                "abbreviation": "CO"
            },
            {
                "name": "Connecticut",
                "abbreviation": "CT"
            },
            {
                "name": "Delaware",
                "abbreviation": "DE"
            },
            {
                "name": "District Of Columbia",
                "abbreviation": "DC"
            },
            {
                "name": "Federated States Of Micronesia",
                "abbreviation": "FM"
            },
            {
                "name": "Florida",
                "abbreviation": "FL"
            },
            {
                "name": "Georgia",
                "abbreviation": "GA"
            },
            {
                "name": "Guam",
                "abbreviation": "GU"
            },
            {
                "name": "Hawaii",
                "abbreviation": "HI"
            },
            {
                "name": "Idaho",
                "abbreviation": "ID"
            },
            {
                "name": "Illinois",
                "abbreviation": "IL"
            },
            {
                "name": "Indiana",
                "abbreviation": "IN"
            },
            {
                "name": "Iowa",
                "abbreviation": "IA"
            },
            {
                "name": "Kansas",
                "abbreviation": "KS"
            },
            {
                "name": "Kentucky",
                "abbreviation": "KY"
            },
            {
                "name": "Louisiana",
                "abbreviation": "LA"
            },
            {
                "name": "Maine",
                "abbreviation": "ME"
            },
            {
                "name": "Marshall Islands",
                "abbreviation": "MH"
            },
            {
                "name": "Maryland",
                "abbreviation": "MD"
            },
            {
                "name": "Massachusetts",
                "abbreviation": "MA"
            },
            {
                "name": "Michigan",
                "abbreviation": "MI"
            },
            {
                "name": "Minnesota",
                "abbreviation": "MN"
            },
            {
                "name": "Mississippi",
                "abbreviation": "MS"
            },
            {
                "name": "Missouri",
                "abbreviation": "MO"
            },
            {
                "name": "Montana",
                "abbreviation": "MT"
            },
            {
                "name": "Nebraska",
                "abbreviation": "NE"
            },
            {
                "name": "Nevada",
                "abbreviation": "NV"
            },
            {
                "name": "New Hampshire",
                "abbreviation": "NH"
            },
            {
                "name": "New Jersey",
                "abbreviation": "NJ"
            },
            {
                "name": "New Mexico",
                "abbreviation": "NM"
            },
            {
                "name": "New York",
                "abbreviation": "NY"
            },
            {
                "name": "North Carolina",
                "abbreviation": "NC"
            },
            {
                "name": "North Dakota",
                "abbreviation": "ND"
            },
            {
                "name": "Northern Mariana Islands",
                "abbreviation": "MP"
            },
            {
                "name": "Ohio",
                "abbreviation": "OH"
            },
            {
                "name": "Oklahoma",
                "abbreviation": "OK"
            },
            {
                "name": "Oregon",
                "abbreviation": "OR"
            },
            {
                "name": "Palau",
                "abbreviation": "PW"
            },
            {
                "name": "Pennsylvania",
                "abbreviation": "PA"
            },
            {
                "name": "Puerto Rico",
                "abbreviation": "PR"
            },
            {
                "name": "Rhode Island",
                "abbreviation": "RI"
            },
            {
                "name": "South Carolina",
                "abbreviation": "SC"
            },
            {
                "name": "South Dakota",
                "abbreviation": "SD"
            },
            {
                "name": "Tennessee",
                "abbreviation": "TN"
            },
            {
                "name": "Texas",
                "abbreviation": "TX"
            },
            {
                "name": "Utah",
                "abbreviation": "UT"
            },
            {
                "name": "Vermont",
                "abbreviation": "VT"
            },
            {
                "name": "Virgin Islands",
                "abbreviation": "VI"
            },
            {
                "name": "Virginia",
                "abbreviation": "VA"
            },
            {
                "name": "Washington",
                "abbreviation": "WA"
            },
            {
                "name": "West Virginia",
                "abbreviation": "WV"
            },
            {
                "name": "Wisconsin",
                "abbreviation": "WI"
            },
            {
                "name": "Wyoming",
                "abbreviation": "WY"
            }
        ]);
    }
    StaticData.prototype.getStates = function () {
        return this.states;
    };
    return StaticData;
}());



/***/ }),

/***/ "./src/app/_models/eproof.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EProof */
var EProof = (function () {
    function EProof() {
    }
    return EProof;
}());



/***/ }),

/***/ "./src/app/_models/estimate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Estimate */
var Estimate = (function () {
    function Estimate() {
    }
    return Estimate;
}());



/***/ }),

/***/ "./src/app/_models/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user__ = __webpack_require__("./src/app/_models/user.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order__ = __webpack_require__("./src/app/_models/order.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__eproof__ = __webpack_require__("./src/app/_models/eproof.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__inventory__ = __webpack_require__("./src/app/_models/inventory.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__missing_artwork__ = __webpack_require__("./src/app/_models/missing-artwork.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__order_details__ = __webpack_require__("./src/app/_models/order-details.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shipping_info__ = __webpack_require__("./src/app/_models/shipping-info.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__shipping_info__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pay_bills__ = __webpack_require__("./src/app/_models/pay-bills.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__estimate__ = __webpack_require__("./src/app/_models/estimate.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__stitch_approval__ = __webpack_require__("./src/app/_models/stitch-approval.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pre_production_approval__ = __webpack_require__("./src/app/_models/pre-production-approval.ts");
/* unused harmony namespace reexport */













/***/ }),

/***/ "./src/app/_models/inventory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Inventory */
var Inventory = (function () {
    function Inventory() {
    }
    return Inventory;
}());



/***/ }),

/***/ "./src/app/_models/missing-artwork.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MissingArtwork */
var MissingArtwork = (function () {
    function MissingArtwork() {
    }
    return MissingArtwork;
}());



/***/ }),

/***/ "./src/app/_models/order-details.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export OrderDetails */
/* unused harmony export SelectedAttributes */
/* unused harmony export Attributes */
/* unused harmony export AttributeValues */
var OrderDetails = (function () {
    function OrderDetails() {
    }
    return OrderDetails;
}());

var SelectedAttributes = (function () {
    function SelectedAttributes() {
    }
    return SelectedAttributes;
}());

var Attributes = (function () {
    function Attributes() {
    }
    return Attributes;
}());

var AttributeValues = (function () {
    function AttributeValues() {
    }
    return AttributeValues;
}());



/***/ }),

/***/ "./src/app/_models/order.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Order */
var Order = (function () {
    function Order() {
    }
    return Order;
}());



/***/ }),

/***/ "./src/app/_models/pay-bills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PayBills */
var PayBills = (function () {
    function PayBills() {
    }
    return PayBills;
}());



/***/ }),

/***/ "./src/app/_models/pre-production-approval.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PreProductionApproval */
var PreProductionApproval = (function () {
    function PreProductionApproval() {
    }
    return PreProductionApproval;
}());



/***/ }),

/***/ "./src/app/_models/shipping-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShippingInfo; });
var ShippingInfo = (function () {
    function ShippingInfo() {
    }
    return ShippingInfo;
}());



/***/ }),

/***/ "./src/app/_models/stitch-approval.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export StitchApproval */
var StitchApproval = (function () {
    function StitchApproval() {
    }
    return StitchApproval;
}());



/***/ }),

/***/ "./src/app/_models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
var User = (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["a" /* Subject */]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, redirect_now, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, redirect, keepAfterNavigationChange) {
        if (redirect === void 0) { redirect = false; }
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        if (redirect) {
            this.router.navigate(['/login']);
            console.log('Session Expired');
        }
        ;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs__["BehaviorSubject"](true); // {1}
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_3__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    Object.defineProperty(AuthenticationService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable(); // {2}
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + localStorage.getItem("currentUser.token") });
        return this.http.post(this.baseURL + '/login', { username: username, password: password }, { headers: header })
            .map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user[0].token) {
                _this.loggedIn.next(true);
                console.log('user && user.token');
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user[0]));
                console.log(JSON.stringify(user[0]));
            }
            else {
                if (user) {
                    localStorage.setItem('message', JSON.stringify(user));
                }
                else {
                }
            }
            return user;
        });
    };
    AuthenticationService.prototype.logout = function () {
        this.loggedIn.next(false);
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/_services/eproof.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EproofService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EproofService = (function () {
    function EproofService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    EproofService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    EproofService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/eProof') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    EproofService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/eProof', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    EproofService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], EproofService);
    return EproofService;
}());



/***/ }),

/***/ "./src/app/_services/estimates.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EstimatesService = (function () {
    function EstimatesService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    EstimatesService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    EstimatesService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/estimates') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    EstimatesService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/estimates', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    EstimatesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], EstimatesService);
    return EstimatesService;
}());



/***/ }),

/***/ "./src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("./src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("./src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_2__user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_service__ = __webpack_require__("./src/app/_services/orders.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__orders_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eproof_service__ = __webpack_require__("./src/app/_services/eproof.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__eproof_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__missing_artwork_service__ = __webpack_require__("./src/app/_services/missing-artwork.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__missing_artwork_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pay_bills_service__ = __webpack_require__("./src/app/_services/pay-bills.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__pay_bills_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__estimates_service__ = __webpack_require__("./src/app/_services/estimates.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__estimates_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__stitch_approval_service__ = __webpack_require__("./src/app/_services/stitch-approval.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__stitch_approval_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pre_production_approval_service__ = __webpack_require__("./src/app/_services/pre-production-approval.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__pre_production_approval_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ups_shipping_service__ = __webpack_require__("./src/app/_services/ups-shipping.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__ups_shipping_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__inventory_service__ = __webpack_require__("./src/app/_services/inventory.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__inventory_service__["a"]; });














/***/ }),

/***/ "./src/app/_services/inventory.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InventoryService = (function () {
    function InventoryService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
    }
    ;
    InventoryService.prototype.getResults = function (input) {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/inventory', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('input', input)
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    InventoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/_services/missing-artwork.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingArtworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MissingArtworkService = (function () {
    function MissingArtworkService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    MissingArtworkService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    MissingArtworkService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/missing_artwork') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    MissingArtworkService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/missing_artwork', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    MissingArtworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], MissingArtworkService);
    return MissingArtworkService;
}());



/***/ }),

/***/ "./src/app/_services/orders.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.orderData = this.getOpenOrders().subscribe;
        this.displayHeaders();
    }
    OrdersService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        console.log(header.get('Authorization'));
    };
    OrdersService.prototype.getOpenOrders = function () {
        return this.http.get(this.baseURL + '/orders/open_orders') //, {headers: header}
            .map(function (orders) {
            if (orders && orders.map) {
                return orders;
            }
            else {
                if (orders) {
                    localStorage.setItem('message', "");
                    return orders;
                }
                else {
                    console.log("ha");
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getOpenOrdersPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get(this.baseURL + '/orders/open_orders', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        })
            .map(function (orders) {
            if (orders && orders.map) {
                return orders;
            }
            else {
                if (orders) {
                    localStorage.setItem('message', "");
                    return orders;
                }
                else {
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getOrderHistoryPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        return this.http.get(this.baseURL + '/orders/order_history', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        })
            .map(function (orders) {
            if (orders && orders.map) {
                return orders;
            }
            else {
                if (orders) {
                    localStorage.setItem('message', "");
                    return orders;
                }
                else {
                    // console.log("ha");
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.searchOrder = function (catagory, param) {
        return this.http.get(this.baseURL + '/orders/search_order', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('catagory', catagory)
                .set('param', param)
        })
            .map(function (orders) {
            if (orders && orders.map) {
                console.log('searchAndFound: ', orders);
                return orders;
            }
            else {
                if (orders) {
                    localStorage.setItem('message', "");
                    return orders;
                }
                else {
                    console.log("ha");
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getOrderDetails = function (orderId) {
        return this.http.get(this.baseURL + '/orders/order_details', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('orderId', orderId.toString())
        })
            .map(function (orders) {
            if (orders && orders.map) {
                return orders;
            }
            else {
                if (orders) {
                    localStorage.setItem('message', "");
                    return orders;
                }
                else {
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getShippingInfo = function (orderId) {
        console.log('initiated');
        return this.http.get(this.baseURL + '/orders/order_details/shipping_info', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('orderId', orderId.toString())
        })
            .map(function (data) {
            console.log('and the winner is: ', data);
            if (data && data.map) {
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getCustomerPO = function (orderNo) {
        console.log('initiated');
        return this.http.get(this.baseURL + '/orders/order_details/customer_po', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('orderId', orderNo.toString())
        })
            .map(function (data) {
            if (data && data.map) {
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getOrderImage = function (orderNo) {
        console.log('initiated');
        return this.http.get(this.baseURL + '/orders/order_details/order_image', {
            params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]()
                .set('orderId', orderNo.toString())
        })
            .map(function (data) {
            console.log('and the winner is: ', orderNo.toString());
            if (data && data.map) {
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    OrdersService.prototype.getInvoicePdf = function () {
        console.log('initiated bla');
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/orders/invoice', {}) //, {headers: header}, 
            .map(function (data) {
            console.log('and the pdf id: ', data);
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                return data;
            }
            else {
                if (data) {
                    console.log('and the pdf id WHYYY: ', data);
                    localStorage.setItem('message', "");
                    return data;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    console.log('NOOOOOOoOoOoO');
                    return null;
                }
            }
        });
    };
    OrdersService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], OrdersService);
    return OrdersService;
}());



/***/ }),

/***/ "./src/app/_services/pay-bills.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayBillsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PayBillsService = (function () {
    function PayBillsService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    PayBillsService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    PayBillsService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/pay_bills') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    PayBillsService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/pay_bills', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    PayBillsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PayBillsService);
    return PayBillsService;
}());



/***/ }),

/***/ "./src/app/_services/pre-production-approval.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreProductionApprovalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PreProductionApprovalService = (function () {
    function PreProductionApprovalService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    PreProductionApprovalService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    PreProductionApprovalService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/pre_production_approval') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    PreProductionApprovalService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/pre_production_approval', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    PreProductionApprovalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], PreProductionApprovalService);
    return PreProductionApprovalService;
}());



/***/ }),

/***/ "./src/app/_services/stitch-approval.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StitchApprovalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StitchApprovalService = (function () {
    function StitchApprovalService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    StitchApprovalService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    StitchApprovalService.prototype.getResults = function () {
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/stitch_approval') //, {headers: header}
            .map(function (result) {
            // login successful if there's a jwt token in the response
            if (result && result.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                //   localStorage.setItem('currentUser', JSON.stringify(user));
                //console.log(JSON.stringify(orders));
                return result;
            }
            else {
                if (result) {
                    localStorage.setItem('message', "");
                    return result;
                    //console.log(localStorage.getItem("message"));
                }
                else {
                    return null;
                }
            }
        });
    };
    StitchApprovalService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/stitch_approval', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            // login successful if there's a jwt token in the response
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    StitchApprovalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], StitchApprovalService);
    return StitchApprovalService;
}());



/***/ }),

/***/ "./src/app/_services/ups-shipping.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpsShippingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpsShippingService = (function () {
    function UpsShippingService(http) {
        this.http = http;
        this.baseURL = new __WEBPACK_IMPORTED_MODULE_2__helpers_index__["a" /* Globals */]().baseURL;
        this.displayHeaders();
    }
    UpsShippingService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log(header.get('Authorization'));
    };
    UpsShippingService.prototype.getResults = function () {
        console.log('hoho jaja kaka ', 'INITIATED DAMN IT!');
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get('https://onlinetools.ups.com/rest/Ship') //, {headers: header} //TODO: when production, use https://onlinetools.ups.com/rest/Ship  
            .map(function (result) {
            console.log('KUBAH');
            if (result && result.map) {
                console.log('hoho jaja kaka ', result);
                return result;
            }
            else {
                if (result) {
                    console.log('hoho jaja kaka DELETEALE? ', result);
                    localStorage.setItem('message', "");
                    return result;
                }
                else {
                    console.log('hoho jaja kaka ', 'PUTA!');
                    return null;
                }
            }
        }, function (error) {
            console.log('CABRON!');
        });
    };
    UpsShippingService.prototype.getPage = function (filter, sortBy, sortOrder, pageNumber, pageSize) {
        if (filter === void 0) { filter = ''; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 3; }
        // let header=new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+ JSON.parse(localStorage.getItem('currentUser')).map.token});
        return this.http.get(this.baseURL + '/estimates', {
            params: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]()
                .set('filter', filter)
                .set('sortBy', sortBy)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }) //, {headers: header}
            .map(function (data) {
            if (data && data.map) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                // to check response object: console.log(JSON.stringify(orders));
                return data;
            }
            else {
                if (data) {
                    localStorage.setItem('message', "");
                    return data;
                }
                else {
                    return null;
                }
            }
        });
    };
    UpsShippingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UpsShippingService);
    return UpsShippingService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.displayHeaders();
    }
    UserService.prototype.displayHeaders = function () {
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        // header.append('token','22');
        console.log('Authorization', header.get('Authorization'));
    };
    UserService.prototype.getAll = function () {
        return this.http.get(''); //CHECK FOR AUTH HEADER TEMP!
    };
    UserService.prototype.getById = function (id) {
        return this.http.get('/api/users/' + id);
    };
    UserService.prototype.create = function (user) {
        return this.http.post('/api/users', user);
    };
    UserService.prototype.update = function (user) {
        return this.http.put('/api/users/' + user.id, user);
    };
    UserService.prototype.delete = function (id) {
        return this.http.delete('/api/users/' + id);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/_sources/eproof.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EproofSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var EproofSource = (function () {
    function EproofSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    EproofSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    EproofSource.prototype.loadData = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Missing Artwork Error"); });
    };
    EproofSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    EproofSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    EproofSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return EproofSource;
}());



/***/ }),

/***/ "./src/app/_sources/estimates.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatesSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var EstimatesSource = (function () {
    function EstimatesSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    EstimatesSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    EstimatesSource.prototype.loadData = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Estimates Error"); });
    };
    EstimatesSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    EstimatesSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    EstimatesSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return EstimatesSource;
}());



/***/ }),

/***/ "./src/app/_sources/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__open_orders_source__ = __webpack_require__("./src/app/_sources/open-orders.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__open_orders_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_history_source__ = __webpack_require__("./src/app/_sources/order-history.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__order_history_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_order_source__ = __webpack_require__("./src/app/_sources/search-order.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__search_order_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__missing_artwork_source__ = __webpack_require__("./src/app/_sources/missing-artwork.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__missing_artwork_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eproof_source__ = __webpack_require__("./src/app/_sources/eproof.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__eproof_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pay_bills_source__ = __webpack_require__("./src/app/_sources/pay-bills.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_5__pay_bills_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__estimates_source__ = __webpack_require__("./src/app/_sources/estimates.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__estimates_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stitch_approval_source__ = __webpack_require__("./src/app/_sources/stitch-approval.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__stitch_approval_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pre_production_approval_source__ = __webpack_require__("./src/app/_sources/pre-production-approval.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__pre_production_approval_source__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__inventory_source__ = __webpack_require__("./src/app/_sources/inventory.source.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_9__inventory_source__["a"]; });












/***/ }),

/***/ "./src/app/_sources/inventory.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventorySource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var InventorySource = (function () {
    function InventorySource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    InventorySource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    InventorySource.prototype.loadData = function (input) {
        var _this = this;
        console.log('called acac');
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getResults(input)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Error"); });
        console.log('dpne acac');
    };
    InventorySource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    InventorySource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    InventorySource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return InventorySource;
}());



/***/ }),

/***/ "./src/app/_sources/missing-artwork.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingArtworkSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var MissingArtworkSource = (function () {
    function MissingArtworkSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    MissingArtworkSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    MissingArtworkSource.prototype.loadOrders = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Missing Artwork Error"); });
    };
    MissingArtworkSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    MissingArtworkSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    MissingArtworkSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return MissingArtworkSource;
}());



/***/ }),

/***/ "./src/app/_sources/open-orders.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenOrdersSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var OpenOrdersSource = (function () {
    function OpenOrdersSource(ordersService, alertService) {
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    OpenOrdersSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    OpenOrdersSource.prototype.loadOrders = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.ordersService.getOpenOrdersPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (orders) { _this.lessonsSubject.next(orders), _this.count = orders[0].total_rs; });
    };
    OpenOrdersSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    OpenOrdersSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    OpenOrdersSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return OpenOrdersSource;
}());



/***/ }),

/***/ "./src/app/_sources/order-history.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistorySource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var OrderHistorySource = (function () {
    function OrderHistorySource(ordersService, alertService) {
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    OrderHistorySource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    OrderHistorySource.prototype.loadOrders = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        this.ordersService.getOrderHistoryPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (orders) { _this.lessonsSubject.next(orders), _this.count = orders[0].total_rs; });
    };
    OrderHistorySource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    OrderHistorySource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    OrderHistorySource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return OrderHistorySource;
}());



/***/ }),

/***/ "./src/app/_sources/pay-bills.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayBillsSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var PayBillsSource = (function () {
    function PayBillsSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    PayBillsSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    PayBillsSource.prototype.loadData = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 1000; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs), _this.data = data; }, function (error) { console.log("PayBills Error"); });
    };
    PayBillsSource.prototype.loadAllData = function () {
        var _this = this;
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getResults()
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data.length), _this.data = data, console.log('BillsData: ', data); }, function (error) { console.log("PayBills Error"); });
    };
    PayBillsSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    PayBillsSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    PayBillsSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return PayBillsSource;
}());



/***/ }),

/***/ "./src/app/_sources/pre-production-approval.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreProductionApprovalSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var PreProductionApprovalSource = (function () {
    function PreProductionApprovalSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    PreProductionApprovalSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    PreProductionApprovalSource.prototype.loadData = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Missing Artwork Error"); });
    };
    PreProductionApprovalSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    PreProductionApprovalSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    PreProductionApprovalSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return PreProductionApprovalSource;
}());



/***/ }),

/***/ "./src/app/_sources/search-order.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrderSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var SearchOrderSource = (function () {
    function SearchOrderSource(ordersService, alertService) {
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    SearchOrderSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    SearchOrderSource.prototype.loadOrders = function (catagory, param) {
        var _this = this;
        this.loadingSubject.next(true);
        this.ordersService.searchOrder(catagory, param)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (orders) { _this.lessonsSubject.next(orders); });
    };
    SearchOrderSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    SearchOrderSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    SearchOrderSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return SearchOrderSource;
}());



/***/ }),

/***/ "./src/app/_sources/stitch-approval.source.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StitchApprovalSource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");



var StitchApprovalSource = (function () {
    function StitchApprovalSource(service, alertService) {
        this.service = service;
        this.alertService = alertService;
        this.lessonsSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"]([]);
        this.loadingSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](false);
        this.loading$ = this.loadingSubject.asObservable();
    }
    StitchApprovalSource.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    StitchApprovalSource.prototype.loadData = function (filter, sortBy, sortDirection, pageIndex, pageSize) {
        var _this = this;
        if (filter === void 0) { filter = ''; }
        if (pageIndex === void 0) { pageIndex = 0; }
        if (pageSize === void 0) { pageSize = 30; }
        this.loadingSubject.next(true);
        //      this.ordersService.getOpenOrders(courseId, filter, sortDirection,
        //          pageIndex, pageSize)
        this.service.getPage(filter, sortBy, sortDirection, pageIndex, pageSize)
            .pipe(
        //      catchError(() => of([])),
        Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["d" /* finalize */])(function () { return _this.loadingSubject.next(false); }))
            .subscribe(function (data) { _this.lessonsSubject.next(data), (data[0] == null ? _this.count = 0 : _this.count = data[0].total_rs); }, function (error) { console.log("Missing Artwork Error"); });
    };
    StitchApprovalSource.prototype.timedOut = function () {
        this.alertService.error('Session Timed Out', true);
    };
    StitchApprovalSource.prototype.connect = function (collectionViewer) {
        console.log("Connecting data source");
        return this.lessonsSubject.asObservable();
    };
    StitchApprovalSource.prototype.disconnect = function (collectionViewer) {
        this.lessonsSubject.complete();
        this.loadingSubject.complete();
    };
    return StitchApprovalSource;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\" style=\"z-index:9999999999999; border-bottom: 2px solid #e8e8e8;\">\n  <div class=\"container-fluid\">\n\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#sidebar-collapse\" (click)=\"_toggleOpened()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <i class=\"fa {{toggleBarIcon?'fa-bars':'fa-remove'}} text-white custom-nav-toggle\"></i> <!--FONT AWESOME -->\n      </button>\n        <button *ngIf=\"getScreenSize()>480\" type=\"button\" class=\"colbutton\" data-toggle=\"collapse\" data-target=\"#sidebar-collapse\" (click)=\"_toggleOpened()\">\n        <i class=\"fa {{toggleBarIcon?'fa-bars':'fa-remove'}} text-white \"></i> <!--FONT AWESOME -->\n      </button>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"><span class=\"logo-font\">TEKWELD </span></a>\n      \n      <ul class=\"user-menu\">\n        <li class=\"dropdown pull-right\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n             {{!checkForUser()?'':getUserName()}}<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-cogs\"></i> Settings</a></li>\n            <li><a routerLinkActive=\"active\" [routerLink]=\"['/login']\"><i class=\"fa fa-fw fa-lock\"></i> {{!checkForUser()?'Login':'Logout'}}</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div><!-- /.container-fluid -->\n</nav>\n\n<ng-sidebar-container style=\"height: 100vh; margin-top 5px;\" >\n      <!-- A sidebar -->\n      <ng-sidebar\n      \t[(opened)]=\"_opened\"\n \t\t[mode]=\"_MODES[_modeNum]\"\n        [keyClose]=\"_keyClose\"\n        [position]=\"_POSITIONS[_positionNum]\"\n        [dock]=\"_dock\"\n        [dockedSize]=\"'50px'\"\n        [autoCollapseHeight]=\"_autoCollapseHeight\"\n        [autoCollapseWidth]=\"_autoCollapseWidth\"\n        [closeOnClickOutside]=\"_closeOnClickOutside\"\n        [closeOnClickBackdrop]=\"_closeOnClickBackdrop\"\n        [showBackdrop]=\"_showBackdrop\"\n        [animate]=\"_animate\"\n        [trapFocus]=\"_trapFocus\"\n        [autoFocus]=\"_autoFocus\"\n        [sidebarClass]=\"'demo-sidebar'\"\n        [ariaLabel]=\"'My sidebar'\"\n        (onOpenStart)=\"_onOpenStart()\"\n        (onOpened)=\"_onOpened()\"\n        (onCloseStart)=\"_onCloseStart()\"\n        (onClosed)=\"_onClosed()\"\n        (onTransitionEnd)=\"_onTransitionEnd()\">\n          <div style=\"height:100vh; padding: 10px; width: 250px; border-right: 2px solid #e8e8e8;\">\n        <ul class=\"nav menu\" style=\"margin-top: 50px;\">\n\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/home']\"><i class=\"fa fas fa-home\"></i> Home</a></li>\n        <li class=\"parent \">\n      <a data-toggle=\"collapse\" href=\"#sub-item-1\">\n      \n        <i class=\"fa far fa-list-alt\"></i> Orders\n      </a>\n      <ul class=\"children collapse\" id=\"sub-item-1\" style=\"padding: 10px;\">\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/search-order']\">\n           <i class=\"fa fas fa-search\"></i> Search Order\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/open-orders']\">\n            <i class=\"fa fa-fw fa-table\"></i> Open Orders\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/order-history']\">\n            <i class=\"fa fas fa-history\"></i> Order History\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/pay-bills']\"><i class=\"fa fa-list fa fa-money\"></i> Pay Bills</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/estimates']\"><i class=\"fa fa-list fas fa-calculator\"></i> Estimates</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/missing-artwork']\"><i class=\"fa fa-list fas fa-paint-brush\"></i> Missing Art</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/eproof']\"><i class=\"fa fa-list fas fa-eye\"></i> eProof</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/stitch-approval']\"><i class=\"fa fa-list fab fa-first-order\"></i> Stitch Approval</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/pre-production-approval']\"><i class=\"fa fa-list fas fa-bullseye\"></i> Pre-Production Approval</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/inventory']\"><i class=\"fa fa-list fas fa-clipboard\"></i> Check Inventory</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/ship-estimate']\"><i class=\"fa fa-list fas fa-truck\"></i> Ship Estimate</a></li>\n\n\n    <li role=\"presentation\" class=\"divider\"></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/login']\"><i class=\"fa fa-user fa-fw\"></i> {{!checkForUser()?'Login':'Logout'}}</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/register']\"><i class=\"fa fa-fw fa-cogs\"></i> Settings</a></li>\n    \n\n  </ul>\n  <div style=\"position: relative; padding: 10px;\">Copyrights and Maker\n\n  </div>\n        \n        <!-- <a closeSidebar>Closes the sidebar</a> -->\n        </div>\n      </ng-sidebar>\n \n      <!-- Page content -->\n      <div ng-sidebar-content>\n      <div  style=\"margin-top: 50px; padding-left:5px; padding-right:5px;\">\n        <router-outlet></router-outlet>\n        </div>\n      </div>\n \n    </ng-sidebar-container>\n<!-- main app container \n<app-navbar></app-navbar>\n           \n\n<div class=\"cross-image\">\t</div>\n<div class=\"logo-placement\"></div>\n\n     <!-- \n\n\n\n<div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-12\">\n   <app-navbar></app-navbar> \n        <div class=\"col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main\">\n        \n  <!-- Main content \n  <div class=\"row\" style=\"margin-top:50px;\">\n  </div><!--/.row\n   <alert></alert> \n<router-outlet></router-outlet>\n</div>\n\n\n<!-- \t\t</div>\n\t</div>\n</div>  -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_app_css__ = __webpack_require__("./src/assets/app.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__assets_app_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__assets_app_css__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this._opened = true;
        this._modeNum = 1;
        this._positionNum = 0;
        this._dock = false;
        this._closeOnClickOutside = false;
        this._closeOnClickBackdrop = false;
        this._showBackdrop = false;
        this._animate = true;
        this._trapFocus = true;
        this._autoFocus = false;
        this._keyClose = false;
        this._autoCollapseHeight = null;
        this._autoCollapseWidth = 480;
        this._MODES = ['over', 'push', 'slide'];
        this._POSITIONS = ['left', 'right', 'top', 'bottom'];
        this.toggleBarIcon = true;
    }
    AppComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    AppComponent.prototype._toggleOpened = function () {
        this._opened = !this._opened;
    };
    AppComponent.prototype._toggleMode = function () {
        this._modeNum++;
        if (this._modeNum === this._MODES.length) {
            this._modeNum = 0;
        }
    };
    AppComponent.prototype._toggleAutoCollapseHeight = function () {
        this._autoCollapseHeight = this._autoCollapseHeight ? null : 500;
    };
    AppComponent.prototype._toggleAutoCollapseWidth = function () {
        this._autoCollapseWidth = this._autoCollapseWidth ? null : 500;
    };
    AppComponent.prototype._togglePosition = function () {
        this._positionNum++;
        if (this._positionNum === this._POSITIONS.length) {
            this._positionNum = 0;
        }
    };
    AppComponent.prototype._toggleDock = function () {
        this._dock = !this._dock;
    };
    AppComponent.prototype._toggleCloseOnClickOutside = function () {
        this._closeOnClickOutside = !this._closeOnClickOutside;
    };
    AppComponent.prototype._toggleCloseOnClickBackdrop = function () {
        this._closeOnClickBackdrop = !this._closeOnClickBackdrop;
    };
    AppComponent.prototype._toggleShowBackdrop = function () {
        this._showBackdrop = !this._showBackdrop;
    };
    AppComponent.prototype._toggleAnimate = function () {
        this._animate = !this._animate;
    };
    AppComponent.prototype._toggleTrapFocus = function () {
        this._trapFocus = !this._trapFocus;
    };
    AppComponent.prototype._toggleAutoFocus = function () {
        this._autoFocus = !this._autoFocus;
    };
    AppComponent.prototype._toggleKeyClose = function () {
        this._keyClose = !this._keyClose;
    };
    AppComponent.prototype._onOpenStart = function () {
        console.info('Sidebar opening');
    };
    AppComponent.prototype._onOpened = function () {
        console.info('Sidebar opened');
    };
    AppComponent.prototype._onCloseStart = function () {
        console.info('Sidebar closing');
    };
    AppComponent.prototype._onClosed = function () {
        console.info('Sidebar closed');
    };
    AppComponent.prototype._onTransitionEnd = function () {
        console.info('Transition ended');
    };
    AppComponent.prototype.checkForUser = function () {
        if (localStorage.getItem('currentUser') != null) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.getUserName = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return this.currentUser.fname;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            selector: 'app',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/assets/app.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_soap__ = __webpack_require__("./node_modules/ngx-soap/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__ = __webpack_require__("./node_modules/ngx-bootstrap/tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_index__ = __webpack_require__("./src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__directives_scroll_tracker__ = __webpack_require__("./src/app/_directives/scroll-tracker.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_index__ = __webpack_require__("./src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__register_index__ = __webpack_require__("./src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__orders_index__ = __webpack_require__("./src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__eproof_eproof_component__ = __webpack_require__("./src/app/eproof/eproof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__missing_artwork_missing_artwork_component__ = __webpack_require__("./src/app/missing-artwork/missing-artwork.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__dialogs_index__ = __webpack_require__("./src/app/_dialogs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_pdf_viewer__ = __webpack_require__("./node_modules/ng2-pdf-viewer/ng2-pdf-viewer.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pay_bills_pay_bills_component__ = __webpack_require__("./src/app/pay-bills/pay-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__estimates_estimates_component__ = __webpack_require__("./src/app/estimates/estimates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__stitch_approval_stitch_approval_component__ = __webpack_require__("./src/app/stitch-approval/stitch-approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pre_production_approval_pre_production_approval_component__ = __webpack_require__("./src/app/pre-production-approval/pre-production-approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ship_estimate_ship_estimate_component__ = __webpack_require__("./src/app/ship-estimate/ship-estimate.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__inventory_inventory_component__ = __webpack_require__("./src/app/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ship_estimate_ship_estimate_widget_ship_estimate_widget_component__ = __webpack_require__("./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__inventory_inventory_widget_inventory_widget_component__ = __webpack_require__("./src/app/inventory/inventory-widget/inventory-widget.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng_sidebar__ = __webpack_require__("./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_36_ng_sidebar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';



;
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';





























var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_21__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_27_ng2_pdf_viewer__["a" /* PdfViewerModule */],
                __WEBPACK_IMPORTED_MODULE_22__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["i" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["l" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["n" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["r" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["s" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["m" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["g" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["u" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["o" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["h" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["c" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["t" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_soap__["a" /* NgxSoapModule */],
                __WEBPACK_IMPORTED_MODULE_36_ng_sidebar__["SidebarModule"].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_index__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_18__register_index__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orders_index__["a" /* OpenOrdersComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orders_index__["c" /* OrderHistoryComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orders_index__["d" /* SearchOrderComponent */],
                __WEBPACK_IMPORTED_MODULE_23__eproof_eproof_component__["a" /* EproofComponent */],
                __WEBPACK_IMPORTED_MODULE_24__missing_artwork_missing_artwork_component__["a" /* MissingArtworkComponent */],
                __WEBPACK_IMPORTED_MODULE_20__orders_index__["b" /* OrderDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__directives_scroll_tracker__["a" /* ScrollTrackerDirective */],
                __WEBPACK_IMPORTED_MODULE_25__dialogs_index__["b" /* ShippingInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dialogs_index__["c" /* ShippingInfoEditComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dialogs_index__["a" /* PdfviewerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pay_bills_pay_bills_component__["a" /* PayBillsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__estimates_estimates_component__["a" /* EstimatesComponent */],
                __WEBPACK_IMPORTED_MODULE_30__stitch_approval_stitch_approval_component__["a" /* StitchApprovalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pre_production_approval_pre_production_approval_component__["a" /* PreProductionApprovalComponent */],
                __WEBPACK_IMPORTED_MODULE_32__ship_estimate_ship_estimate_component__["a" /* ShipEstimateComponent */],
                __WEBPACK_IMPORTED_MODULE_33__inventory_inventory_component__["a" /* InventoryComponent */],
                __WEBPACK_IMPORTED_MODULE_34__ship_estimate_ship_estimate_widget_ship_estimate_widget_component__["a" /* ShipEstimateWidgetComponent */],
                __WEBPACK_IMPORTED_MODULE_35__inventory_inventory_widget_inventory_widget_component__["a" /* InventoryWidgetComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["a" /* AlertService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["b" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["l" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["g" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["c" /* EproofService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["f" /* MissingArtworkService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["h" /* PayBillsService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["d" /* EstimatesService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["j" /* StitchApprovalService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["i" /* PreProductionApprovalService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["k" /* UpsShippingService */],
                __WEBPACK_IMPORTED_MODULE_15__services_index__["e" /* InventoryService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_12__helpers_index__["b" /* JwtInterceptor */],
                    multi: true
                },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_25__dialogs_index__["b" /* ShippingInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__dialogs_index__["a" /* PdfviewerComponent */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

Object(__WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("./src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("./src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_index__ = __webpack_require__("./src/app/register/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__orders_index__ = __webpack_require__("./src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eproof_eproof_component__ = __webpack_require__("./src/app/eproof/eproof.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__missing_artwork_missing_artwork_component__ = __webpack_require__("./src/app/missing-artwork/missing-artwork.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pay_bills_pay_bills_component__ = __webpack_require__("./src/app/pay-bills/pay-bills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__estimates_estimates_component__ = __webpack_require__("./src/app/estimates/estimates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__inventory_inventory_component__ = __webpack_require__("./src/app/inventory/inventory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stitch_approval_stitch_approval_component__ = __webpack_require__("./src/app/stitch-approval/stitch-approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pre_production_approval_pre_production_approval_component__ = __webpack_require__("./src/app/pre-production-approval/pre-production-approval.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ship_estimate_ship_estimate_component__ = __webpack_require__("./src/app/ship-estimate/ship-estimate.component.ts");














var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__register_index__["a" /* RegisterComponent */] },
    { path: 'open-orders', component: __WEBPACK_IMPORTED_MODULE_4__orders_index__["a" /* OpenOrdersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'order-history', component: __WEBPACK_IMPORTED_MODULE_4__orders_index__["c" /* OrderHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'search-order', component: __WEBPACK_IMPORTED_MODULE_4__orders_index__["d" /* SearchOrderComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'eproof', component: __WEBPACK_IMPORTED_MODULE_5__eproof_eproof_component__["a" /* EproofComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'pay-bills', component: __WEBPACK_IMPORTED_MODULE_8__pay_bills_pay_bills_component__["a" /* PayBillsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'missing-artwork', component: __WEBPACK_IMPORTED_MODULE_7__missing_artwork_missing_artwork_component__["a" /* MissingArtworkComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'estimates', component: __WEBPACK_IMPORTED_MODULE_9__estimates_estimates_component__["a" /* EstimatesComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'stitch-approval', component: __WEBPACK_IMPORTED_MODULE_11__stitch_approval_stitch_approval_component__["a" /* StitchApprovalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'pre-production-approval', component: __WEBPACK_IMPORTED_MODULE_12__pre_production_approval_pre_production_approval_component__["a" /* PreProductionApprovalComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'inventory', component: __WEBPACK_IMPORTED_MODULE_10__inventory_inventory_component__["a" /* InventoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    { path: 'ship-estimate', component: __WEBPACK_IMPORTED_MODULE_13__ship_estimate_ship_estimate_component__["a" /* ShipEstimateComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/eproof/eproof.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/eproof/eproof.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> eProof </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ext_ref_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ext_ref_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Net Amt</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.net_amt}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.order_status}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.artwork_status}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.shipping_status}}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No eProofs</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n"

/***/ }),

/***/ "./src/app/eproof/eproof.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EproofComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EproofComponent = (function () {
    function EproofComponent(route, service, alertService) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["customer_code", "trans_no", "order_status", "shipping_status"]
            :
                ["customer_code", "ext_ref_no", "trans_no", "trans_date", "net_amt", "order_status", "artwork_status", "shipping_status"];
    }
    EproofComponent.prototype.ngOnInit = function () {
        this.obj = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__sources_index__["a" /* EproofSource */](this.service, this.alertService);
        this.dataSource.loadData('', 'trans_no', 'asc', 0, 30);
    };
    EproofComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadDataPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () { return _this.loadDataPage(); }))
            .subscribe();
    };
    EproofComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadDataPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadDataPage();
        }
    };
    EproofComponent.prototype.highlight = function (row) {
        this.selected[0] = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case 
        //console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
    };
    EproofComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    EproofComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    EproofComponent.prototype.loadDataPage = function () {
        this.dataSource.loadData(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */])
    ], EproofComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSort */])
    ], EproofComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EproofComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], EproofComponent.prototype, "panel", void 0);
    EproofComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-eproof',
            template: __webpack_require__("./src/app/eproof/eproof.component.html"),
            styles: [__webpack_require__("./src/app/eproof/eproof.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* EproofService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], EproofComponent);
    return EproofComponent;
}());



/***/ }),

/***/ "./src/app/estimates/estimates.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/estimates/estimates.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Estimates </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Estimate #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Estimate Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"salesperson_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Contact</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.salesperson_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"externalsalesperson_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Inside Rep #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.externalsalesperson_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"expiry_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Exipiry Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.expiry_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"getDetails()\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\">\n           </mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Estimates</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n"

/***/ }),

/***/ "./src/app/estimates/estimates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimatesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dialogs__ = __webpack_require__("./src/app/_dialogs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EstimatesComponent = (function () {
    function EstimatesComponent(route, service, alertService, dialog) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.dialog = dialog;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["trans_no", "trans_date", "salesperson_code", "externalsalesperson_code", "expiry_date"]
            :
                ["customer_code", "trans_no", "trans_date", "salesperson_code", "externalsalesperson_code", "expiry_date"];
    }
    EstimatesComponent.prototype.ngOnInit = function () {
        this.obj = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_2__sources_index__["b" /* EstimatesSource */](this.service, this.alertService);
        this.dataSource.loadData('', 'trans_no', 'asc', 0, 30);
    };
    EstimatesComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadDataPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () { return _this.loadDataPage(); }))
            .subscribe();
    };
    EstimatesComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadDataPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadDataPage();
        }
    };
    EstimatesComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    EstimatesComponent.prototype.loadDataPage = function () {
        this.dataSource.loadData(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    EstimatesComponent.prototype.getDetails = function () {
        this.openPdfDialog('http://localhost:8081/Tekweld/jwtservices/orders/Invoice?orderId', '', 3);
    };
    EstimatesComponent.prototype.openPdfDialog = function (url, msg, caller) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__dialogs__["a" /* PdfviewerComponent */], {
            //width: '600px',
            data: { urlSrc: url, message: msg, caller: caller }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // console.log('The dialog was closed');
            //LOGIC FOR DIALOG CLOSED
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */])
    ], EstimatesComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */])
    ], EstimatesComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], EstimatesComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], EstimatesComponent.prototype, "panel", void 0);
    EstimatesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-estimates',
            template: __webpack_require__("./src/app/estimates/estimates.component.html"),
            styles: [__webpack_require__("./src/app/estimates/estimates.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* EstimatesService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]])
    ], EstimatesComponent);
    return EstimatesComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".example-tab-icon {\r\n  margin-right: 8px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\t<!--\t\t<div class=\"col-md-8\">\n    \t\t\t<h1>Hi {{currentUser.fname}}!</h1>\n    \t\t\t<p>You're logged in and about to use this incredible new app!!</p>\n    \t\t\t<p><a [routerLink]=\"['/login']\">Logout</a></p>\n\t\t\t</div>  -->\n\t\t\t<!--\t\n\t\t\t<div id=\"close-container\" class=\"fadeIn jumbotron\"\n\tstyle=\"margin-top: 15px; margin-bottom: 0px;\">\n<mat-tab-group>\n  <mat-tab>\n    <ng-template mat-tab-label>\n  <i class=\"fa fas fa-search\"></i>    Search Order\n    </ng-template>\n    <p>\n<mat-input-container\n\tstyle=\"max-height: 20px !important;\"> \n\t<input matInput placeholder=\"Value\" matTooltip=\"Search\" #input>\n</mat-input-container>\n\n\t<mat-form-field> \n\t<mat-select\n\t\tplaceholder=\"Field\"> \n\t<mat-option>\n\t</mat-option>\n\t </mat-select> \n\t </mat-form-field>\n\t \n\t \n\t<button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\tclass=\"btn btn-primary small_font\">\n\t<i class=\"fa fas fa-search\"></i> <span>Search</span>\n</button>\n</p>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n  <i class=\"fa fa-list fas fa-clipboard\"></i>    Check Inventory\n    </ng-template>\n   <app-inventory-widget></app-inventory-widget>\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n<i class=\"fa fa-list fas fa-truck\"></i>    Ship Estimate\n    </ng-template>\n\n    <app-ship-estimate-widget></app-ship-estimate-widget>\n\n  </mat-tab>\n</mat-tab-group>\n\t</div>\n\t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n<mat-accordion style=\"margin: 10px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-radius: 10px; border-r000 \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 10px; padding-bottom: 10px; border-radius: 10px; border-r000\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\">Open Orders</h4>\n      </mat-panel-title>\n      <mat-panel-description style=\"text-align: right; padding-top: 10px;\">\n\t\t\t<ul><li><span style=\"font-family: Trebuchet MS;\">Showing 5 out of {{openOrderdataSource.count}} <a>Show All</a></span></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n         <mat-panel-description>   \n\n    </mat-panel-description>\n<!-- content here ->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"openOrderdataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"openOrderdataSource\" style=\"resize: vertical; overflow: auto;\"\n scrollTracker  [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"ext_ref_no\" >\n        <mat-header-cell *matHeaderCellDef>Customer PO #</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.ext_ref_no}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef>Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ext_ref_date\">\n        <mat-header-cell *matHeaderCellDef>Order Date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let order\">{{order.ext_ref_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef>Order Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.order_status}}</mat-cell>\n    </ng-container>\n    \n    <mat-header-row *matHeaderRowDef=\"openOrdersColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: openOrdersColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"openOrderdataSource.count?openOrderdataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, openOrderdataSource.count?openOrderdataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  </div>\n  \n \t\t\t<div class=\"col-md-6\">\n<mat-accordion style=\"margin: 10px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-radius: 10px; border-r000 \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 10px; padding-bottom: 10px; border-radius: 10px; border-r000\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\">Order History</h4>\n      </mat-panel-title>\n      <mat-panel-description style=\"text-align: right; padding-top: 10px;\">\n\t\t\t<ul><li><span style=\"font-family: Trebuchet MS;\">Showing 5 out of {{orderHistorySource.count}} <a>Show All</a></span></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n         <mat-panel-description>   \n\n    </mat-panel-description>\n<!-- content here ->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"orderHistorySource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"orderHistorySource\" style=\"resize: vertical; overflow: auto;\" scrollTracker [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"type_code\">\n        <mat-header-cell *matHeaderCellDef >Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let order\">{{order.type_code}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ext_ref_no\" >\n        <mat-header-cell *matHeaderCellDef >Customer PO #</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.ext_ref_no}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef  >Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ext_ref_date\">\n        <mat-header-cell *matHeaderCellDef >Order Date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let order\">{{order.ext_ref_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef >Net Amt</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.net_amt}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef >Order Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.order_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef >Artwork Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.artwork_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"payment_status\">\n        <mat-header-cell *matHeaderCellDef >Payment Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.payment_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef >Shipping Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.shipping_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"tracking_no\">\n        <mat-header-cell *matHeaderCellDef >Tracking</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.ship_qty}}</mat-cell>\n    </ng-container>\n    \n    <mat-header-row *matHeaderRowDef=\"orderHistoryColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: orderHistoryColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"orderHistorySource.count?orderHistorySource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, orderHistorySource.count?orderHistorySource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  </div>\n  \n  </div>\n  \t\t\t<div class=\"row\">\n\t\t\t<div class=\"col-md-6\">\n<app-estimates></app-estimates>\n  </div>\n  \n \t\t\t<div class=\"col-md-6\">\n \t\t<app-estimates></app-estimates>\n  </div>\n  \n  </div>-->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(userService, route, ordersService, alertService) {
        this.userService = userService;
        this.route = route;
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.openOrdersColumns = ["ext_ref_no", "trans_no", "ext_ref_date", "order_status"];
        this.orderHistoryColumns = ["ext_ref_no", "trans_no", "ext_ref_date", "tracking_no"];
        this.users = [];
        this.selected = [];
        this.toggleBarIcon = true;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.toggle = function () {
        var self = this;
        setTimeout(function () {
            console.log('something happened');
            self.toggleBarIcon = !self.toggleBarIcon;
        }, 500);
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
        //   this.order = this.route.snapshot.data["order"];
        //   this.openOrderdataSource = new OpenOrdersSource(this.ordersService, this.alertService);
        //   this.openOrderdataSource.loadOrders('', 'trans_no', 'desc', 0, 5);
        //   this.orderHistorySource = new OrderHistorySource(this.ordersService, this.alertService);
        //   this.orderHistorySource.loadOrders('','trans_no', 'desc', 0, 5);
    };
    HomeComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) { _this.users = users; });
    };
    HomeComponent.prototype.highlight = function (row) {
        console.log('highlighted: ', row);
        this.selected[0] = row;
        console.log('selected: ', this.selected);
        //this.order = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
        //  console.log('scroll height ', this.panel.nativeElement.scrollHeight, 'position? : ', this.panel.nativeElement.scrollPosition)
        if (this.previousValue === -1) {
            // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatPaginator */])
    ], HomeComponent.prototype, "paginator", void 0);
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["l" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__services_index__["g" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "./src/app/inventory/inventory-widget/inventory-widget.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n\tborder-bottom: 0px solid #eee !important;\r\n-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n        box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n}"

/***/ }),

/***/ "./src/app/inventory/inventory-widget/inventory-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" style=\"position:relative; z-index:100; max-width:78vw;\"></mat-progress-bar>\n     <form>\n\t     <div class=\"form-group\">\n\t        <mat-form-field>\n\t    \t\t\t<input matInput placeholder=\"Item #\" value=\"\"  #input></mat-form-field>\n\t\t\t\t\t<button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" [disabled] =\"\" (click)=\"query()\">\n            <span>Search</span>\n          </button>\n\t  \t\t</div>\n     </form>\n     <mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear #panel>\n    <ng-container matColumnDef=\"store_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Description</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.store_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"on_hand_qty\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>On Hand Qty</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.on_hand_qty}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"open_so_qty\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Open SO Qty</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.open_so_qty}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"available_qty\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Available Qty</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.available_qty}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\">\n           </mat-paginator>\n</div>"

/***/ }),

/***/ "./src/app/inventory/inventory-widget/inventory-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InventoryWidgetComponent = (function () {
    function InventoryWidgetComponent(route, service, alertService) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.loading = false;
        this.displayedColumns = ["store_code", "on_hand_qty", "open_so_qty", "available_qty"];
    }
    InventoryWidgetComponent.prototype.ngOnInit = function () {
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__sources_index__["c" /* InventorySource */](this.service, this.alertService);
    };
    InventoryWidgetComponent.prototype.query = function () {
        this.dataSource.loadData(this.input.nativeElement.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], InventoryWidgetComponent.prototype, "input", void 0);
    InventoryWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-inventory-widget',
            template: __webpack_require__("./src/app/inventory/inventory-widget/inventory-widget.component.html"),
            styles: [__webpack_require__("./src/app/inventory/inventory-widget/inventory-widget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_index__["e" /* InventoryService */], __WEBPACK_IMPORTED_MODULE_0__services_index__["a" /* AlertService */]])
    ], InventoryWidgetComponent);
    return InventoryWidgetComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inventory/inventory.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin: 0px 0px 0px 0px; padding: 0px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Check Inventory</h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n<app-inventory-widget></app-inventory-widget>\n</mat-expansion-panel>\n</mat-accordion>"

/***/ }),

/***/ "./src/app/inventory/inventory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InventoryComponent = (function () {
    function InventoryComponent() {
        this.loading = false;
        this.verification = false;
        this.panelOpenState = true;
    }
    InventoryComponent.prototype.ngOnInit = function () {
    };
    InventoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inventory',
            template: __webpack_require__("./src/app/inventory/inventory.component.html"),
            styles: [__webpack_require__("./src/app/inventory/inventory.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InventoryComponent);
    return InventoryComponent;
}());



/***/ }),

/***/ "./src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".vertical-center {\r\n  background-color: transparent;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  padding: 15%;\r\n // padding-bottom: 80%;\r\n  margin: 0 auto;\r\n  width: 100%;\r\n  color: black;\r\n  top: 0%;\r\n  text-align: center;\r\n}\r\n\r\n\r\n\r\n.cross-image {\r\n  background-image: url(\"https://chentek.github.io/portal/../assets/images/tekweld_paint.png\");\r\n  width: 100%;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  background-position: top;\r\n  background-repeat: repeat-x;\r\n  position:fixed;\r\n top:0px;\r\n}\r\n\t\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\n       <!--  <div class=\"col-sm-3 col-sm-offset-9 col-lg-2 col-lg-offset-10 main\"> -->\n<div class=\"sliding-div col-sm-6 col-sm-offset-2\">\n  <div class=\"col-md-6 col-md-offset-2 vertical-center\">\n    <h2>Login</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n        </div>\n        <div class=\"form-group\" style=\"align:center;\">\n          <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n    </form>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService, dialog) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.dialog = dialog;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error('Unable to login ', _this.model.username); //TODO: add reason
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["m" /* trigger */])('bgChange', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ background: 'transparent', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ background: 'black', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["l" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ background: 'black', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["k" /* style */])({ background: 'transparent', opacity: 1 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatDialog */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/missing-artwork/missing-artwork.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/missing-artwork/missing-artwork.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Missing Artwork </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_date\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let data\">{{data.trans_date | date: 'MM/dd/yyyy'}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ext_ref_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let data\">{{data.ext_ref_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"catalog_item_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Item #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let data\">{{data.catalog_item_code}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let data\">{{data.artwork_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"UploadArt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Upload Artwork</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let data\">{{data.UploadArt}}</mat-cell>\n    </ng-container>\n    \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Missing Artwork</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n"

/***/ }),

/***/ "./src/app/missing-artwork/missing-artwork.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MissingArtworkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MissingArtworkComponent = (function () {
    function MissingArtworkComponent(route, artworkService, alertService) {
        this.route = route;
        this.artworkService = artworkService;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["customer_code", "trans_no", "artwork_status", "UploadArt"]
            :
                ["customer_code", "trans_date", "trans_no", "ext_ref_no", "catalog_item_code", "artwork_status", "UploadArt"];
    }
    MissingArtworkComponent.prototype.ngOnInit = function () {
        this.artwork = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_4__sources_index__["d" /* MissingArtworkSource */](this.artworkService, this.alertService);
        this.dataSource.loadOrders('', 'trans_no', 'asc', 0, 30);
    };
    MissingArtworkComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadOrdersPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () { return _this.loadOrdersPage(); }))
            .subscribe();
    };
    MissingArtworkComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadOrdersPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadOrdersPage();
        }
    };
    MissingArtworkComponent.prototype.highlight = function (row) {
        this.selected[0] = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case 
        //console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
    };
    MissingArtworkComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    MissingArtworkComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    MissingArtworkComponent.prototype.loadOrdersPage = function () {
        this.dataSource.loadOrders(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatPaginator */])
    ], MissingArtworkComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSort */])
    ], MissingArtworkComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MissingArtworkComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], MissingArtworkComponent.prototype, "panel", void 0);
    MissingArtworkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-missing-artwork',
            template: __webpack_require__("./src/app/missing-artwork/missing-artwork.component.html"),
            styles: [__webpack_require__("./src/app/missing-artwork/missing-artwork.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_index__["f" /* MissingArtworkService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], MissingArtworkComponent);
    return MissingArtworkComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"isLoggedIn$ | async\" class=\"navbar navbar-inverse navbar-fixed-top\" role=\"navigation\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#sidebar-collapse\" (click)=\"toggle()\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <i class=\"fa {{toggleBarIcon?'fa-bars':'fa-remove'}} text-white custom-nav-toggle\"></i> <!--FONT AWESOME -->\n      </button>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/home']\"><span class=\"logo-font\" style=\"margin-left: 300px\">TEKWELD </span></a>\n      <ul class=\"user-menu\">\n        <li class=\"dropdown pull-right\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n             {{currentUser.fname}} <span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\" role=\"menu\">\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-user\"></i> Profile</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-cogs\"></i> Settings</a></li>\n            <li><a href=\"#\"><i class=\"fa fa-fw fa-lock\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </div><!-- /.container-fluid -->\n</nav>\n\n<div *ngIf=\"isLoggedIn$ | async\" id=\"sidebar-collapse\" class=\"col-sm-3 col-lg-2 sidebar\">\n\n<!--  \n  <form role=\"search\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n    </div>\n  </form>-->\n\n  <ul class=\"nav menu\">\n  \n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/home']\"><i class=\"fa fas fa-home\"></i> Home</a></li>\n        <li class=\"parent \">\n      <a data-toggle=\"collapse\" href=\"#sub-item-1\">\n      \n        <i class=\"fa far fa-list-alt\"></i> Orders\n      </a>\n      <ul class=\"children collapse\" id=\"sub-item-1\">\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/search-order']\">\n           <i class=\"fa fas fa-search\"></i> Search Order\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/open-orders']\">\n            <i class=\"fa fa-fw fa-table\"></i> Open Orders\n          </a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" [routerLink]=\"['/order-history']\">\n            <i class=\"fa fas fa-history\"></i>  Order History\n          </a>\n        </li>\n      </ul>\n    </li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/pay-bills']\"><i class=\"fa fa-list fa fa-money\"></i> Pay Bills</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/estimates']\"><i class=\"fa fa-list fas fa-calculator\"></i> Estimates</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/missing-artwork']\"><i class=\"fa fa-list fas fa-paint-brush\"></i> Missing Art</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/eproof']\"><i class=\"fa fa-list fas fa-eye\"></i> eProof</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/stitch-approval']\"><i class=\"fa fa-list fab fa-first-order\"></i> Stitch Approval</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/pre-production-approval']\"><i class=\"fa fa-list fas fa-bullseye\"></i> Pre-Production Approval</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/inventory']\"><i class=\"fa fa-list fas fa-clipboard\"></i> Check Inventory</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/ship-estimate']\"><i class=\"fa fa-list fas fa-truck\"></i> Ship Estimate</a></li>\n\n\n    <li role=\"presentation\" class=\"divider\"></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/login']\"><i class=\"fa fa-user fa-fw\"></i> Login</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/register']\"><i class=\"fa fa-users fa-fw\"></i> Register</a></li>\n    <li><a routerLinkActive=\"active\" [routerLink]=\"['/register']\"><i class=\"fa fa-fw fa-cogs\"></i> Settings</a></li>\n    \n\n  </ul>\n  <div class=\"attribution\">Copyrights and Maker\n\n  </div>\n</div>\n\n<!-- <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <a class=\"navbar-brand\">\n              <img src=\"assets/img/ngx-bootstrap.svg\" class=\"logo\">\n            </a>\n            <span class=\"navbar-brand\">Angular + Bootstrap</span>\n        </div>\n        <ul class=\"nav navbar-nav\">\n            <li class=\"active\"><a href=\"#\">\n              Link <span class=\"sr-only\">(current)</span>\n            </a></li>\n            <li><a href=\"#\">Link</a></li>\n            <li class=\"dropdown\" dropdown> <!-- {1} --\n                <a dropdownToggle role=\"button\"> <!-- {2} --\n                  Dropdown <span class=\"caret\"></span></a>\n                <ul *dropdownMenu class=\"dropdown-menu\"> <!-- {3} --\n                    <li><a href=\"#\">Action</a></li>\n                    <li><a href=\"#\">Another action</a></li>\n                    <li><a href=\"#\">Something else here</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">Separated link</a></li>\n                    <li role=\"separator\" class=\"divider\"></li>\n                    <li><a href=\"#\">One more separated link</a></li>\n                </ul>\n            </li>\n        </ul>\n    </div>\n</nav>\n\nTHATS THE ONE:\n<nav *ngIf=\"isLoggedIn$ | async\" class=\"navbar navbar-inverse navbar-fixed-top\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n                <button type=\"button\" \n                        class=\"navbar-toggle collapsed\"\n                        (click)=\"toggleState()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\">Project Manager</a>\n        </div>\n         <div ngbDropdown class=\"collapse navbar-collapse\"\n              [ngClass]=\"{ 'in': isIn }\">\n            <ul class=\"nav navbar-nav\" ngbDropdownToggle>\n                 <li class=\"dropdown\"><a class=\"dropbtn\" data-toggle=\"dropdown\" href=\"javascript:void(0)\">Orders<span class=\"caret\"></span></a>\n              \t \t<ul class=\"dropdown-menu\">\n              \t\t<li><a class=\"nav-link\" [routerLink]=\"['/search-order']\">Search Order</a></li>\n              \t\t<li><a class=\"nav-link\" [routerLink]=\"['/open-orders']\">Open Orders</a></li>\n              \t\t<li><a class=\"nav-link\" [routerLink]=\"['/order-history']\">Order History</a></li>\n\t\t            </ul>\n        \t\t </li>\n        \t\t <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Pay Bills</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Estimates</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" [routerLink]=\"['/missing-artwork']\">Missing Artwork</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" [routerLink]=\"['/eproof']\">eProof</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Stitch Approval</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Pre-Production Approval</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Check Inventory</a></li>\n                 <li class=\"dropdown-item\"><a class=\"nav-link\" routerLink=\"home\">Ship Estimate</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n-->\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = "/*@media only screen and (max-width: 480px){\r\n  .attribution {\r\n    position: relative;\r\n  }\r\n  .sidebar{\r\n    position: fixed; // Set the navbar to fixed position \r\n    top: 50px; // Position the navbar at the top of the page \r\n    width: 100%;\r\n    z-index: 1;\r\nbox-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n  }\r\n}\r\n.navbar-toggle{\r\n  padding: initial !important;\r\n}\r\n.custom-nav-toggle{\r\n  padding:5px 15px 5px 15px;\r\n  font-size:20px;\r\n}*/\n@media only screen and (max-width: 480px) {\n  .attribution {\n    position: relative; }\n  .sidebar {\n    position: fixed;\n    top: 50px;\n    width: 100%;\n    z-index: 1;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n  .sidebar ul.nav ul.children li a.active {\n    color: #ececec !important; } }\n.navbar-toggle {\n  padding: initial !important; }\n.custom-nav-toggle {\n  padding: 5px 15px 5px 15px;\n  font-size: 20px; }\n/*Navbar*/\n.navbar {\n  border: 0;\n  background-color: #fff; }\n.navbar input {\n  border: 0;\n  background: #444;\n  color: #fff; }\n.navbar input:focus {\n  color: #fff;\n  background: #555;\n  border: 1px solid #30a5ff;\n  outline: 0;\n  -webkit-box-shadow: inset 0px 0px 0px 1px #30a5ff;\n          box-shadow: inset 0px 0px 0px 1px #30a5ff; }\n.user-menu {\n  display: inline-block;\n  margin-top: 14px;\n  margin-right: 10px;\n  float: right;\n  list-style: none;\n  padding: 0; }\n.user-menu a {\n  color: #000; }\n.user-menu a:hover, .user-menu a:focus {\n  text-decoration: none; }\n/* Sidebar */\n.sidebar {\n  background-color: #fff;\n  padding: 0; }\n.sidebar form {\n  padding: 20px 15px 5px 15px;\n  border-bottom: 1px solid #eee;\n  margin-bottom: 20px; }\n@media (min-width: 768px) {\n  .sidebar {\n    display: block;\n    position: fixed;\n    top: 50px;\n    bottom: 0;\n    left: 0;\n    z-index: 1000;\n    display: block;\n    margin: 0;\n    padding: 0;\n    overflow-x: auto;\n    overflow-y: hidden;\n    background-color: #fff;\n    -webkit-box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.05);\n            box-shadow: 1px 0px 10px rgba(0, 0, 0, 0.05); }\n  .navbar-header {\n    width: 100%; } }\n.sidebar ul.nav a:hover,\n.sidebar ul.nav li.parent ul li a:hover {\n  text-decoration: none;\n  background-color: #e9ecf2; }\n.sidebar ul.nav .active a, .sidebar ul.nav li.parent a.active,\n.sidebar ul.nav .active > a:hover, .sidebar ul.nav li.parent a.active:hover,\n.sidebar ul.nav .active > a:focus, .sidebar ul.nav li.parent a.active:focus {\n  color: #fff;\n  background-color: #30a5ff; }\n.sidebar ul.nav ul,\n.sidebar ul.nav ul li {\n  list-style: none;\n  list-style-type: none; }\n.sidebar ul.nav ul.children {\n  width: auto;\n  padding: 0;\n  margin: 0;\n  background: #f9f9f9; }\n.sidebar ul.nav ul.children li a {\n  height: 40px;\n  background: #f9f9f9;\n  color: #30a5ff !important; }\n.sidebar ul.nav li.current a {\n  background-color: #30a5ff;\n  color: #fff !important; }\n.sidebar ul.nav li.parent ul li a {\n  border: none;\n  display: block;\n  padding-left: 30px;\n  line-height: 40px; }\n.sidebar span.glyphicon {\n  margin-right: 10px; }\n.sidebar ul.nav li.divider {\n  border-bottom: 1px solid #eee;\n  margin: 20px 0; }\n.sidebar .attribution {\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  padding: 15px;\n  text-align: center;\n  border-top: 1px solid #eee;\n  font-size: 12px; }\n/*Icons*/\n.sidebar .glyph, .user-menu .glyph {\n  height: 16px;\n  width: 16px;\n  margin: 0 10px 0 0;\n  stroke-width: 3px; }\n.user-menu .glyph {\n  stroke-width: 4px; }\n.breadcrumb .glyph {\n  height: 14px;\n  width: 14px;\n  margin: -2px 0 0 0;\n  stroke-width: 4px; }\n.alert .glyph, .panel-heading .glyph {\n  width: 26px;\n  height: 26px;\n  margin: 0 10px 0 0;\n  stroke-width: 2px; }\n.panel-widget .glyph {\n  stroke-width: 2px; }\n.todo-list .glyph {\n  width: 14px;\n  height: 14px;\n  stroke-width: 4px;\n  color: #999; }\n.glyph.table {\n  background: none;\n  border: none; }\n/*Icon Grid*/\n.icon-grid div {\n  border: 1px solid #ddd;\n  margin: 0 0 -1px -1px;\n  text-align: center;\n  padding: 10px 0 20px 0; }\n.icon-grid svg {\n  width: 35%;\n  display: block;\n  margin: 0 auto; }\n.icon-grid h4 {\n  display: none; }\n.icon-grid pre {\n  margin: 10px 10px -10px 10px;\n  border-radius: 0;\n  font-size: 10px;\n  border-color: #ddd;\n  height: 65px;\n  overflow: scroll; }\n@font-face {\n  font-family: tekweldfont;\n  src: url('Stop-SC-D-OT.6985bc402a3881b6a39f.ttf'); }\n.logo-font {\n  font-family: tekweldfont;\n  font-size: 5rem;\n  color: #000; }\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.toggleBarIcon = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    //    isNavbarCollapsed = false;
    //    isIn = false;   // store state
    //    toggleState() { // click handler
    //        let bool = this.isIn;
    //        this.isIn = bool === false ? true : false; 
    //        }
    NavbarComponent.prototype.toggle = function () {
        var _this = this;
        //  let self=this;
        setTimeout(function () {
            _this.toggleBarIcon = !_this.toggleBarIcon;
        }, 500);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__services_index__["b" /* AuthenticationService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/orders/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__open_orders_open_orders_component__ = __webpack_require__("./src/app/orders/open-orders/open-orders.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__open_orders_open_orders_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__order_history_order_history_component__ = __webpack_require__("./src/app/orders/order-history/order-history.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__order_history_order_history_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_order_search_order_component__ = __webpack_require__("./src/app/orders/search-order/search-order.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__search_order_search_order_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_component__ = __webpack_require__("./src/app/orders/order-details/order-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__order_details_order_details_component__["a"]; });






/***/ }),

/***/ "./src/app/orders/open-orders/open-orders.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/orders/open-orders/open-orders.component.html":
/***/ (function(module, exports) {

module.exports = "  \n  <!-- \n                              <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n</div> -->\n\n\n<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Open Orders</h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected Order:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n         <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search open orders...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"type_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let order\">{{order.type_code}} {{order.total_rs}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ext_ref_no\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO #</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.ext_ref_no}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ext_ref_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let order\">{{order.ext_ref_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Net Amt</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.net_amt}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.order_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.artwork_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"payment_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Payment Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.payment_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.shipping_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ship_qty\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Est. Ship Qty</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.ship_qty}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"estimated_ship_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header><b>Est. Ship Date</b></mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.estimated_ship_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n\n\n\n    <app-order-details [selection]=\"selected\" (close)=\"deselect()\"  *ngIf=\"selected.length\"></app-order-details>\n\n     <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Orders</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>"

/***/ }),

/***/ "./src/app/orders/open-orders/open-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenOrdersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OpenOrdersComponent = (function () {
    function OpenOrdersComponent(route, ordersService, alertService) {
        this.route = route;
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["ext_ref_no", "trans_no", "ext_ref_date", "order_status"]
            :
                ["type_code", "ext_ref_no", "trans_no", "ext_ref_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "ship_qty", "estimated_ship_date"];
    }
    OpenOrdersComponent.prototype.ngOnInit = function () {
        this.order = this.route.snapshot.data["order"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_6__sources_index__["e" /* OpenOrdersSource */](this.ordersService, this.alertService);
        this.dataSource.loadOrders('', 'trans_no', 'asc', 0, 30);
    };
    OpenOrdersComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadOrdersPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["e" /* tap */])(function () { return _this.loadOrdersPage(); }))
            .subscribe();
    };
    OpenOrdersComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadOrdersPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadOrdersPage();
        }
    };
    OpenOrdersComponent.prototype.highlight = function (row) {
        console.log('highlighted: ', row);
        this.selected[0] = row;
        console.log('selected: ', this.selected);
        //this.order = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
        console.log('scroll height ', this.panel.nativeElement.scrollHeight, 'position? : ', this.panel.nativeElement.scrollPosition);
        if (this.previousValue === -1) {
            // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
        }
    };
    OpenOrdersComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    OpenOrdersComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    OpenOrdersComponent.prototype.loadOrdersPage = function () {
        this.dataSource.loadOrders(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */])
    ], OpenOrdersComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */])
    ], OpenOrdersComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OpenOrdersComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OpenOrdersComponent.prototype, "panel", void 0);
    OpenOrdersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-open-orders',
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/orders/open-orders/open-orders.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]
            ],
            styles: [__webpack_require__("./src/app/orders/open-orders/open-orders.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], OpenOrdersComponent);
    return OpenOrdersComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\tnb-card-body {\r\n\t\t  div:not(:last-child) {\r\n\t\t    margin-bottom: 1rem;\r\n\t\t  }\r\n\t\t}\r\n\r\n\t\t.btn-with-icon {\r\n\t\t  width: 100%;\r\n\r\n\t\t  .btn {\r\n\t\t    width: 100%;\r\n\t\t  }\r\n\t\t \r\n\t\t}\r\n\r\n\t\t.btn-group:not(:last-child) {\r\n\t\t  margin-bottom: 1rem;\r\n\t\t}\r\n\r\n\t\t.icon-button {\r\n\t\t  display: -webkit-box;\r\n\t\t  display: -ms-flexbox;\r\n\t\t  display: flex;\r\n\t\t  -webkit-box-pack: start;\r\n\t\t      -ms-flex-pack: start;\r\n\t\t          justify-content: flex-start;\r\n\r\n\t\t  button {\r\n\t\t    margin-right: 2rem;\r\n\t\t    min-width: 4rem;\r\n\t\t  }\r\n\t\t}\r\n\r\n\t\t.icon-button:not(:last-child) {\r\n\t\t  margin-bottom: 1rem;\r\n\t\t}\r\n\r\n\t\t.mat-spinner{\r\n\t\t\twidth: 50px !important;\r\n\t\t\theight: 50px !important;\r\n\t\t}\r\n\r\n\t\t.mini-table-td {\r\n\tpadding: 0px 5px 0px 5px; \r\n\tmargin: 0px 5px 0px 5px; \r\n\r\n}\r\n\r\n\t\t:host /deep/ .mat-form-field-placeholder {\r\n\tfont-size: 1.5rem;\r\n\tfont-weight: bold;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"close-container\" class=\"fadeIn jumbotron\"\n\tstyle=\"margin-top: 15px;\">\n\t<div>\n\t\t<button id=\"x\" (click)=\"closeThis()\" type=\"button\"\n\t\t\tclass=\"btn btn-default\">\n\t\t\t<i></i> <span>X</span>\n\t\t</button>\n\t</div>\n\t<div *ngIf=\"showAlert\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert (close)=\"showAlert = false\">\n\t\t<p align=\"center\">\n\t\t\t<b>PLEASE REVIEW CAREFULLY:</b><br> If any changes/problems\n\t\t\toccur it is required to notify the company as soon as possible.\n\t\t</p>\n\t\t<p align=\"center\" style=\"font-size: 1.3rem;\">\n\t\t\tAny delays in art approval will affect the shipping date.<br>Production\n\t\t\ttime is 3 business days from approval. Approximate shipping date is\n\t\t\tindicated below.<br>Expedited shipping is available with an\n\t\t\textra charge. Tekweld cannot be held responsible for in hands date\n\t\t\tnot met if the above is not noted.<br>Paper proofs are to be\n\t\t\tapproved within 24 hours in order to keep the shipping date\n\t\t\tunaffected.\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n\n\t<div class=\"row div-section\">\n\t\t<div class=\"col-md-11 col-md-offset-1\">\n\n\t\t\t<div class=\"btn-with-icon\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t<i class=\"fa fa-list fas fa-eye\"></i> <span>View eProof</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t<i class=\"fa fas fa-dollar\"></i> <span>Payment Information</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t<i class=\"fa far fa-sticky-note\"></i> <span>Customer Message\n\t\t\t\t\t\ton Packing List</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t<i class=\"fa fas fa-at\"></i> <span>Update Emails</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getCustomerPO()\">\n\t\t\t\t\t<i class=\"fa far fa-address-card\"></i> <span>View Customer\n\t\t\t\t\t\tPO</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getOrderImage()\">\n\t\t\t\t\t<i class=\"fa far fa-image\"></i> <span>View Order Image</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getInvoice()\">\n\t\t\t\t\t<i class=\"fa far fa-file\"></i> <span>View Invoice</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row div-section\"\n\t\tstyle=\"padding: 0.2rem !important; min-height: 20px;\">\n\t\t<div class=\"col-md-4 small_note\">\n\t\t\t<b>Payment:</b> {{selection[0].payment_status}}\n\t\t</div>\n\t\t<div class=\"col-md-4 small_note\">\n\t\t\t<b>Acknowledgement:</b> {{selection[0].acknowledgment_status}}\n\t\t</div>\n\t\t<div class=\"col-md-4 small_note\">\n\t\t\t<b>Art/Proof:</b> {{selection[0].artwork_status}}\n\t\t</div>\n\t</div>\n\t<div class=\"row div-section\"\n\t\tstyle=\"background: transparent !important; padding: 0rem !important;\">\n\t\t<div class=\"div-section col-md-4 small_font\"\n\t\t\tstyle=\"background: transparent !important; margin: 0rem !important\">\n\t\t\t<b>TEKWELD</b><br> 45 Rabro Drive, Hauppauge NY, 11788<br>\n\t\t\tToll Free: (631) 694-5503<br> <a href=\"http://www.tekweld.com\">www.tekweld.com</a>\n\t\t</div>\n\t\t<div class=\"div-section col-md-4\"\n\t\t\tstyle=\"background: transparent !important; margin: 0rem !important; padding: 0rem !important; height: 0px !important;\">\n\t\t</div>\n\t\t<div class=\"div-section col-md-4 small_font\"\n\t\t\tstyle=\"background: transparent !important; margin: 0rem !important;\">\n\t\t\t<b>Order #:</b> {{selection[0].trans_no}} <br> <b>PO #:</b>\n\t\t\t{{selection[0].ext_ref_no}} <br> <b>Order Date:</b>\n\t\t\t{{selection[0].ext_ref_date}} <br> <b>Approx Ship Date:</b>\n\t\t\t{{selection[0].estimated_ship_date}} <br>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row div-section\"\n\t\tstyle=\"background: transparent !important; padding: 0rem !important;\">\n\t\t<div class=\"div-section col-md-4 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Billing Address:</b>\n\t\t\t</div>\n\t\t\t<div class=\"small_font\"\n\t\t\t\tstyle=\"padding-left: 0.5rem; margin-top: 0.5rem\">\n\t\t\t\t{{selection[0].bill_name}}<br> {{selection[0].bill_address1}}<br>\n\t\t\t\t{{selection[0].bill_city}}, {{selection[0].bill_state}},\n\t\t\t\t{{selection[0].bill_country}}, {{selection[0].bill_zip}}\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-4\"\n\t\t\tstyle=\"background: transparent !important; margin: 0rem !important; padding: 0rem !important; height: 0px !important;\">\n\t\t</div>\n\n\t\t<div class=\"div-section col-md-4 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Shipping Address:</b>\n\t\t\t</div>\n\t\t\t<div class=\"small_font\"\n\t\t\t\tstyle=\"padding-left: 0.5rem; margin-top: 0.5rem\">\n\t\t\t\t<b>Status:</b><br> <a (click)=\"getShippingAdress()\">View Shipping\n\t\t\t\t\tAddress</a> <br> <a href=\"\">Email Customer on Shipping</a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row div-section\"\n\t\tstyle=\"padding: 0rem !important; padding-right: 0rem !important;\">\n\t\t<div class=\"div-section col-md-3 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem;\">\n\t\t\t\t<b>Order #</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{selection[0].trans_no}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-3 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Customer #</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{selection[0].type_code}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-3 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Sales Rep</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{selection[0].salesperson_code}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-3 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Payment Term</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{selection[0].term_code!=''?selection[0].term_code:'No\n\t\t\t\tData'}}</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row div-section\"\n\t\tstyle=\"padding: 0rem !important; padding-right: 0rem !important;\">\n\t\t<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\"\n\t\t\tstyle=\"position:absolute; z-index:100; max-width:78vw;\"></mat-progress-bar>\n\n\t\t<div class=\"div-section col-md-2 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Ordered</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{orderDetails!=null?orderDetails[0].item_qty:'No\n\t\t\t\tData'}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-2 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Item</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{orderDetails!=null?orderDetails[0].catalog_item_code:'No\n\t\t\t\tData'}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-4 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Description</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">\n\t\t\t\t<div>{{orderDetails!=null?orderDetails[0].item_description:'No\n\t\t\t\t\tData'}}</div>\n\n\t\t\t\t<div style=\"margin-top: 5px; vertical-align: middle;\"\n\t\t\t\t\t*ngIf=\"orderDetails\">\n\t\t\t\t\t<div class=\"row\"\n\t\t\t\t\t\tstyle=\"padding-top: 10px; margin: 5px; border: 1px solid #dcdcdc; vertical-align: middle; border-radius: 10px;\"\n\t\t\t\t\t\t*ngFor=\"let attribute of orderDetails[0].attributes\">\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<mat-form-field> <mat-select\n\t\t\t\t\t\t\t\t[(ngModel)]=\"attribute.selected_attribute_value_code\"\n\t\t\t\t\t\t\t\tplaceholder=\"{{attribute.catalog_attribute_code}}\">\n\t\t\t\t\t\t\t<mat-option *ngIf=\"attribute.selected_attribute_value_code!=''\"\n\t\t\t\t\t\t\t\tvalue=\"{{null}}\"> </mat-option> <mat-option\n\t\t\t\t\t\t\t\t*ngFor=\"let attribute_values of attribute.attribute_values\"\n\t\t\t\t\t\t\t\tvalue=\"{{attribute_values.catalog_attribute_value_code}}\">\n\t\t\t\t\t\t\t{{attribute_values.catalog_attribute_value_code}} </mat-option> </mat-select> </mat-form-field>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t{{attribute.selected_attribute_remarks}}</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t<span>Update</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-2 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Unit Price</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{orderDetails!=null?orderDetails[0].item_price:'No\n\t\t\t\tData'}}</div>\n\t\t</div>\n\t\t<div class=\"div-section col-md-2 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<div\n\t\t\t\tstyle=\"border-radius: 10px; background: #cfcfcf; padding-left: 0.5rem\">\n\t\t\t\t<b>Ext Price</b>\n\t\t\t</div>\n\t\t\t<div style=\"padding: 0.3rem\">{{orderDetails!=null?orderDetails[0].item_price\n\t\t\t\t* orderDetails[0].item_qty:'No Data'}}</div>\n\t\t</div>\n\t</div>\n\n\t<div class=\"row div-section\"\n\t\tstyle=\"background: transparent !important; padding: 0rem !important;\">\n\t\t<div class=\"div-section col-md-10 small_font\"\n\t\t\tstyle=\"background: transparent !important; margin: 0rem !important\">\n\t\t\t<div class=\"btn-with-icon\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getCustomerPO()\">\n\t\t\t\t\t<i class=\"fa far fa-address-card\"></i> <span>View Customer\n\t\t\t\t\t\tPO</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getOrderImage()\">\n\t\t\t\t\t<i class=\"fa far fa-image\"></i> <span>View Order Image</span>\n\t\t\t\t</button>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\" (click)=\"getInvoice()\">\n\t\t\t\t\t<i class=\"fa far fa-file\"></i> <span>View Invoice</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"div-section col-md-2 small_font\"\n\t\t\tstyle=\"margin: 0rem !important;\">\n\t\t\t<b>Ship Amt:</b> {{selection[0].ship_amt}} <br> <b>Other\n\t\t\t\tAmt:</b> {{selection[0].other_amt}} <br> <b>Total:</b>\n\t\t\t{{ConvertString(selection[0].ship_amt) +\n\t\t\tConvertString(selection[0].other_amt)}} <br>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/orders/order-details/order-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_index__ = __webpack_require__("./src/app/_dialogs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var OrderDetailsComponent = (function () {
    function OrderDetailsComponent(ordersService, alertService, dialog, document) {
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.dialog = dialog;
        this.document = document;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showAlert = true;
    }
    OrderDetailsComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit", this.selection);
        this.previousSelection = this.selection[0].id;
        this.getDetails();
    };
    OrderDetailsComponent.prototype.ngDoCheck = function () {
        //t    console.log("ngDoCheck! selection: ", this.selection[0].id, "And the one from before: ", this.previousSelection);
        if (this.selection[0].id !== this.previousSelection) {
            this.getDetails();
            this.previousSelection = this.selection[0].id;
        }
    };
    OrderDetailsComponent.prototype.closeThis = function () {
        this.close.emit("close");
    };
    OrderDetailsComponent.prototype.getDetails = function () {
        var _this = this;
        this.loading = true;
        this.ordersService.getOrderDetails(this.selection[0].id).subscribe(function (details) {
            _this.orderDetails = details;
            _this.loading = false;
        }, function (error) {
            _this.alertService.error('Session Timed Out', true);
            _this.loading = false;
            _this.orderDetails = null;
        });
    };
    OrderDetailsComponent.prototype.getCustomerPO = function () {
        var _this = this;
        this.loading = true;
        this.ordersService.getCustomerPO(this.selection[0].trans_no).subscribe(function (details) {
            _this.loading = false;
            if (details[0] != null && details[0].artwork_file_path !== '') {
                //   var newWindow = window.open('www.google.com');
                //  newWindow.location.href = this.customerPOurl.replace('public','');
                _this.openPdfDialog(details[0].artwork_file_path, '', 0);
                //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
            }
            else {
                _this.openPdfDialog('', 'Customer PO file does not exist', 0);
            }
            ;
        }, function (error) {
            _this.alertService.error('Session Timed Out', true);
            _this.loading = false;
        });
    };
    OrderDetailsComponent.prototype.getOrderImage = function () {
        var _this = this;
        this.loading = true;
        this.ordersService.getOrderImage(this.selection[0].trans_no).subscribe(function (details) {
            _this.loading = false;
            if (details[0] != null && details[0].artwork_file_path !== '') {
                //   var newWindow = window.open('www.google.com');
                //  newWindow.location.href = this.customerPOurl.replace('public','');
                _this.openPdfDialog(details[0].artwork_file_path, '', 1);
                //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
            }
            else {
                _this.openPdfDialog('', 'Product picture not available at the moment.', 1);
            }
            ;
        }, function (error) {
            _this.alertService.error('Session Timed Out', true);
            _this.loading = false;
        });
    };
    OrderDetailsComponent.prototype.getInvoice = function () {
        //   this.loading = true;
        //   this.ordersService.getOrderImage(this.selection[0].trans_no).subscribe(details => {
        //   this.loading = false;
        /// if (details[0] != null && details[0].artwork_file_path !== '') {
        //   var newWindow = window.open('www.google.com');
        //  newWindow.location.href = this.customerPOurl.replace('public','');
        //   this.openPdfDialog(details[0].artwork_file_path, '',2);
        this.openPdfDialog('http://localhost:8081/Tekweld/jwtservices/orders/Invoice?orderId', '', 3);
        //  this.document.location.href = 'https://tekweld.promo.tekweld.com/' + this.customerPOurl.replace('public',''); //TODO: change to previous commented lines when deploying. adding attachment folder first.
        //    } else {
        //      this.openPdfDialog('', 'Product picture not available at the moment.',2);
        //    };
        //  }, error => {
        //    this.alertService.error('Session Timed Out', true); this.loading = false;
        //  });
    };
    OrderDetailsComponent.prototype.ConvertString = function (value) {
        return parseFloat(value);
    };
    OrderDetailsComponent.prototype.getShippingAdress = function () {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_index__["b" /* ShippingInfoComponent */], {
            //width: '600px',
            data: { oid: this.orderDetails[0].trans_no }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //LOGIC FOR DIALOG CLOSED
        });
    };
    OrderDetailsComponent.prototype.openPdfDialog = function (url, msg, caller) {
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__dialogs_index__["a" /* PdfviewerComponent */], {
            //width: '600px',
            data: { urlSrc: url, message: msg, caller: caller }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            //LOGIC FOR DIALOG CLOSED
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OrderDetailsComponent.prototype, "selection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], OrderDetailsComponent.prototype, "close", void 0);
    OrderDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-details',
            template: __webpack_require__("./src/app/orders/order-details/order-details.component.html"),
            styles: [__webpack_require__("./src/app/orders/order-details/order-details.component.css")]
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["g" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatDialog */], Object])
    ], OrderDetailsComponent);
    return OrderDetailsComponent;
}());



/***/ }),

/***/ "./src/app/orders/order-history/order-history.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\t.mat-table {\r\n\t\tmax-height: 78vh\r\n\t\t}\r\n\r\n\t.mat-paginator-page-size-label{\r\n\t\t\tbackground: red !important;\r\n\t}"

/***/ }),

/***/ "./src/app/orders/order-history/order-history.component.html":
/***/ (function(module, exports) {

module.exports = "    \n<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Order History </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected Order:</b>{{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search open orders...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"type_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let order\">{{order.type_code}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ext_ref_no\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO #</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.ext_ref_no}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"ext_ref_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let order\">{{order.ext_ref_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Net Amt</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.net_amt}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.order_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.artwork_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"payment_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Payment Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.payment_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.shipping_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"tracking_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tracking</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.ship_qty}}</mat-cell>\n    </ng-container>\n    \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n\n    <app-order-details [selection]=\"selected\" (close)=\"deselect()\"  *ngIf=\"selected.length\"></app-order-details>\n\n     <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Orders</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>"

/***/ }),

/***/ "./src/app/orders/order-history/order-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OrderHistoryComponent = (function () {
    function OrderHistoryComponent(route, ordersService, alertService) {
        this.route = route;
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["ext_ref_no", "trans_no", "ext_ref_date", "tracking_no"]
            :
                ["type_code", "ext_ref_no", "trans_no", "ext_ref_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "tracking_no"];
    }
    OrderHistoryComponent.prototype.ngOnInit = function () {
        this.order = this.route.snapshot.data["order"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__sources_index__["f" /* OrderHistorySource */](this.ordersService, this.alertService);
        this.dataSource.loadOrders('', 'trans_no', 'asc', 0, 30);
    };
    OrderHistoryComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadOrdersPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () { return _this.loadOrdersPage(); }))
            .subscribe();
    };
    OrderHistoryComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadOrdersPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadOrdersPage();
        }
    };
    OrderHistoryComponent.prototype.highlight = function (row) {
        console.log('highlighted: ', row);
        this.selected[0] = row;
        console.log('selected: ', this.selected);
        //this.order = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case // TODO: finish with this in time
        console.log('scroll height ', this.panel.nativeElement.scrollHeight, 'position? : ', this.panel.nativeElement.scrollPosition);
        if (this.previousValue === -1) {
            // this.panel.nativeElement.scrollTop += 250; / TODO: finish with this in time ***
        }
    };
    OrderHistoryComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    OrderHistoryComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    OrderHistoryComponent.prototype.loadOrdersPage = function () {
        this.dataSource.loadOrders(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */])
    ], OrderHistoryComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */])
    ], OrderHistoryComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OrderHistoryComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], OrderHistoryComponent.prototype, "panel", void 0);
    OrderHistoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-order-history',
            template: __webpack_require__("./src/app/orders/order-history/order-history.component.html"),
            styles: [__webpack_require__("./src/app/orders/order-history/order-history.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */],
                __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], OrderHistoryComponent);
    return OrderHistoryComponent;
}());



/***/ }),

/***/ "./src/app/orders/search-order/search-order.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n\r\n"

/***/ }),

/***/ "./src/app/orders/search-order/search-order.component.html":
/***/ (function(module, exports) {

module.exports = "  \n  <!-- \n                              <div class=\"spinner-container\" *ngIf=\"dataSource.loading$ | async\">\n        <mat-spinner></mat-spinner>\n</div> -->\n\n\n<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\"> <mat-expansion-panel-header\n\tstyle=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"\n\tmatTooltip=\"Expand / Collapse\"> <mat-panel-title>\n<h4 style=\"font-family: Trebuchet MS;\">Search Order</h4>\n\n</mat-panel-title> \n<mat-panel-description> \n\n<ul>\n\t<li><h4>\n\t\t\t<span style=\"font-family: Trebuchet MS;\"><b>Selected\n\t\t\t\t\tOrder:</b> {{selected.length?selected[0].trans_no:'None'}}</span>\n\t\t</h4></li>\n</ul>\n</mat-panel-description> </mat-expansion-panel-header>\n         <mat-panel-description>\n         <p>\n<mat-input-container\n\tstyle=\"max-height: 20px !important;\"> \n\t<input matInput placeholder=\"Value\" matTooltip=\"Search\" #input>\n</mat-input-container>\n\n\t<mat-form-field> \n\t<mat-select\n\t\t[(value)]=\"selectedCatagory\"\n\t\tplaceholder=\"Field\"> \n\t<mat-option\n\t\t*ngFor=\"let catagory of catagories\" value=\"{{catagory.value}}\">\n\t{{catagory.name}} \n\t</mat-option>\n\t </mat-select> \n\t </mat-form-field>\n\t \n\t \n\t<button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\tclass=\"btn btn-primary small_font\" (click)=\"getResults(selectedCatagory)\">\n\t<i class=\"fa fas fa-search\"></i> <span>Search</span>\n</button>\n</p><p>You selected: {{selectedCatagory}}</p>\n         </mat-panel-description>  \n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let order\">{{order.customer_code}}</mat-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"ext_ref_no\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO #</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.ext_ref_no}}</mat-cell>\n\n    </ng-container>\n    \n        <ng-container matColumnDef=\"logo_name\" >\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Logo</mat-header-cell>\n        <mat-cell class=\"description-cell\"\n                  *matCellDef=\"let order\">{{order.logo_name}}</mat-cell>\n\n    </ng-container>\n\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef  mat-sort-header>Order #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.trans_no}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell class=\"duration-cell\" \n                  *matCellDef=\"let order\">{{order.trans_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Net Amt</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.net_amt}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.order_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.artwork_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"payment_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Payment Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.payment_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping Status</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.shipping_status}}</mat-cell>\n    </ng-container>\n    \n        <ng-container matColumnDef=\"tracking_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tracking #</mat-header-cell>\n        <mat-cell class=\"duration-cell\"\n                  *matCellDef=\"let order\">{{order.tracking_no}}</mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n\n\n\n    <app-order-details [selection]=\"selected\" (close)=\"deselect()\"  *ngIf=\"selected.length\"></app-order-details>\n\n     <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Orders</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>"

/***/ }),

/***/ "./src/app/orders/search-order/search-order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchOrderComponent = (function () {
    function SearchOrderComponent(route, ordersService, alertService) {
        this.route = route;
        this.ordersService = ordersService;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.panelOpenState = true;
        this.selectedRowIndex = -1;
        /*
         * 0 - Customer PO #
         * 1 - Order #
         * 2 - Invoice #
         * 3 - Item #
         * 4 - Tracking #
         * 5 - Logo
         * 6 - Estimate
         */
        this.catagories = [{ name: 'Customer PO #', origName: 'ext_ref_no', value: 0 }, { name: 'Order #', origName: 'trans_no', value: 1 }, { name: 'Invoice #', value: 2 }, { name: 'Item #', value: 3 }, { name: 'Tracking #', origName: 'tracking_no', value: 4 }, { name: 'Logo', origName: 'logo', value: 5 }, { name: 'Estimate', value: 6 }];
        this.selectedCatagory = 10;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["ext_ref_no", "trans_no", "trans_date", "order_status"]
            :
                ["customer_code", "ext_ref_no", "logo_name", "trans_no", "trans_date", "net_amt", "order_status", "artwork_status", "payment_status", "shipping_status", "tracking_no"];
    }
    SearchOrderComponent.prototype.ngOnInit = function () {
        this.order = this.route.snapshot.data["order"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__sources_index__["i" /* SearchOrderSource */](this.ordersService, this.alertService);
        //   this.dataSource.loadOrders('','trans_no', 'asc', 0, 50);
    };
    SearchOrderComponent.prototype.ngAfterViewInit = function () {
    };
    SearchOrderComponent.prototype.getResults = function (catagory) {
        var _this = this;
        if (this.input.nativeElement.value.length < 2) {
            this.alertService.error('Not enough characters', false, false);
        }
        else {
            if (this.selectedCatagory == 10) {
                this.alertService.error('Select a field to search', false, false);
            }
            else {
                this.dataSource.loadOrders(catagory, this.input.nativeElement.value);
                console.log('datasource count tay ', this.dataSource.count);
                // server-side search AUTO SEARCH
                /*fromEvent(this.input.nativeElement,'keyup')
                        .pipe(
                            debounceTime(150),
                            distinctUntilChanged(),
                            tap(() => {
                                this.paginator.pageIndex = 0;
                                this.loadOrdersPage();
                            })
                        )
                        .subscribe();*/
                // reset the paginator after sorting
                this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
                // on sort or paginate events, load a new page        
                Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
                    .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () { return _this.dataSource.loadOrders(catagory, _this.input.nativeElement.value); }))
                    .subscribe();
            }
        }
        console.log('datasource count tay ', this.dataSource.count);
    };
    SearchOrderComponent.prototype.highlight = function (row) {
        console.log('highlighted: ', row);
        this.selected[0] = row;
        console.log('selected: ', this.selected);
        //this.order = row;
        this.selectedRowIndex = row.id;
    };
    SearchOrderComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    SearchOrderComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */])
    ], SearchOrderComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */])
    ], SearchOrderComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], SearchOrderComponent.prototype, "input", void 0);
    SearchOrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search-order',
            template: __webpack_require__("./src/app/orders/search-order/search-order.component.html"),
            styles: [__webpack_require__("./src/app/orders/search-order/search-order.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__services_index__["g" /* OrdersService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], SearchOrderComponent);
    return SearchOrderComponent;
}());



/***/ }),

/***/ "./src/app/pay-bills/pay-bills.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-table {\r\n\r\nz-index: 10000;\r\n\t}\r\n\r\n.mat-header-row {\r\n\r\n\t  z-index: 9998 !important;\r\n\t}\r\n\r\n.mat-column-Select {\r\n\t // flex: 0 0 5%;\r\nword-wrap: break-word !important;\r\nwhite-space: unset !important;\r\n-webkit-box-flex: 0 !important;\r\n    -ms-flex: 0 0 25px !important;\r\n        flex: 0 0 25px !important;\r\nwidth: 25px !important;\r\noverflow-wrap: break-word;\r\nword-wrap: break-word;\r\n\r\n-ms-word-break: break-all;\r\n/* This is the dangerous one in WebKit, as it breaks things wherever */\r\nword-break: break-all;\r\n/* Instead use this non-standard one: */\r\nword-break: break-word;\r\n\r\n/* Adds a hyphen where the word breaks, if supported (No Blink) */\r\n-ms-hyphens: auto;\r\n-webkit-hyphens: auto;\r\nhyphens: auto;\r\n//padding: 0px;\r\n\r\n\t}\r\n\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n.mat-cell {\r\n    overflow: visible !important;\r\n  }\r\n\r\n.mat-header-cell {\r\n    overflow: visible !important;\r\n  }\r\n\r\n.mat-row{\r\n\t//min-height: 35px !important;\r\n\tcursor: default !important;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pay-bills/pay-bills.component.html":
/***/ (function(module, exports) {

module.exports = "\t<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Pay Bills </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n      <div style=\"margin: 5px;\">\n<h4 ><span style=\"font-family: Trebuchet MS;\"><b>Amount:</b> {{selectionSum() | currency}}</span></h4></div> \n\t\t\t<div style=\"overflow: hidden; \"><button type=\"button\"\n\t\t\t\t\tstyle=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\"\n\t\t\t\t\tclass=\"btn btn-primary small_font\">\n\t\t\t\t\t <span>Make Payment</span>\n\t\t\t\t</button><br><br></div>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n\n\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear #panel>\n    <ng-container matColumnDef=\"Select\">\n        <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n      </mat-checkbox></mat-header-cell>\n        <mat-cell *matCellDef=\"let data; let i = index\">\n<mat-checkbox (click)=\"$event.stopPropagation();\"\n\n                    (change)=\"$event ? selection.toggle(data) : null\"\n                    [checked]=\"selection.isSelected(data)\">\n      </mat-checkbox>\n</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Invoice #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ref_trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ref_trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Invoice Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Invoice Amt</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.net_amt}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"paid_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Paid Amt</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.paid_amt}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"balance_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Balance Amt</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.balance_amt}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ship_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Ship Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ship_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ext_ref_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ext_ref_date | date: 'MM/dd/yyyy'}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ext_ref_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO#</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ext_ref_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"tracking_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Tracking #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.tracking_no}}</mat-cell>\n    </ng-container>\n    \n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row (click)=\"selection.toggle(row)\" *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Data</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n\t\n\t \n"

/***/ }),

/***/ "./src/app/pay-bills/pay-bills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayBillsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__ = __webpack_require__("./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PayBillsComponent = (function () {
    function PayBillsComponent(route, service, alertService) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.screenSizeToAdjustTo = 600;
        this.panelOpenState = true;
        this.checked = false;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["Select", "customer_code", "trans_no"]
            :
                ["Select", "customer_code", "trans_no", "ref_trans_no", "trans_date", "net_amt", "paid_amt", "balance_amt", "ship_date", "ext_ref_date", "ext_ref_no", "tracking_no"];
        this.selection = new __WEBPACK_IMPORTED_MODULE_2__angular_cdk_collections__["b" /* SelectionModel */](true, []);
    }
    PayBillsComponent.prototype.ngOnInit = function () {
        this.obj = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__sources_index__["g" /* PayBillsSource */](this.service, this.alertService);
        this.dataSource.loadAllData();
        //this.dataSource.loadData('','trans_no', 'asc', 0, 1000);
    };
    PayBillsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_operators__["e" /* tap */])(function () { return _this.loadAllData(); }))
            .subscribe();
    };
    PayBillsComponent.prototype.selectionSum = function () {
        var sum = [];
        sum[0] = 0;
        var i = 0;
        var add = function (a, b) { return (a * 1) + (b * 1); };
        this.selection.selected.forEach(function (row) { return (sum[i] = row.balance_amt, i++); });
        return sum.reduce(add) != null ? sum.reduce(add) : 0;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    PayBillsComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSource.count;
        return numSelected === numRows;
    };
    PayBillsComponent.prototype.toyota = function (data) {
        this.selection.selected.forEach(function (row) { return row === data ? true : false; });
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    PayBillsComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(function (row) { return _this.selection.select(row); });
    };
    PayBillsComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    PayBillsComponent.prototype.printMyShit = function (shit) {
        console.log('printMyShit: ', shit);
    };
    /* loadMore(event){
     if(event === "start reached" && this.paginator.pageIndex !== 0){
       this.paginator.pageIndex = this.paginator.pageIndex !== 0  ? this.paginator.pageIndex - 1 : 0;
       this.loadDataPage();
     }
         if(event === "end reached" && this.paginator.pageSize !== this.dataSource.count){
           this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
           this.loadDataPage();
     }
   }
       
        loadDataPage() { //MAY BE OBSULETE
             this.dataSource.loadData(
             this.input.nativeElement.value,
             this.sort.active,
             this.sort.direction,
             this.paginator.pageIndex,
             this.paginator.pageSize);
          
          console.log('selection trooper ', this.selection);
     }
   */
    PayBillsComponent.prototype.loadAllData = function () {
        this.dataSource.loadAllData();
        console.log('selection trooper ', this.selection);
        console.log('counting troopers ', this.dataSource.count);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["k" /* MatPaginator */])
    ], PayBillsComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["q" /* MatSort */])
    ], PayBillsComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["ElementRef"])
    ], PayBillsComponent.prototype, "panel", void 0);
    PayBillsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-pay-bills',
            template: __webpack_require__("./src/app/pay-bills/pay-bills.component.html"),
            styles: [__webpack_require__("./src/app/pay-bills/pay-bills.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_index__["h" /* PayBillsService */], __WEBPACK_IMPORTED_MODULE_0__services_index__["a" /* AlertService */]])
    ], PayBillsComponent);
    return PayBillsComponent;
}());



/***/ }),

/***/ "./src/app/pre-production-approval/pre-production-approval.component.css":
/***/ (function(module, exports) {

module.exports = ".mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/pre-production-approval/pre-production-approval.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Pre-Production Approval </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n    </p>\n    </mat-panel-description>\n<!-- content here -->\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ext_ref_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ext_ref_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_date}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"net_amt\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Net Amt</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.net_amt}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.order_status}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"artwork_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Artwork Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.artwork_status}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"shipping_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Shipping Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.shipping_status}}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Pre-Production Approvals</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n"

/***/ }),

/***/ "./src/app/pre-production-approval/pre-production-approval.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreProductionApprovalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreProductionApprovalComponent = (function () {
    function PreProductionApprovalComponent(route, service, alertService) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["customer_code", "trans_no", "order_status", "shipping_status"]
            :
                ["customer_code", "ext_ref_no", "trans_no", "trans_date", "net_amt", "order_status", "artwork_status", "shipping_status"];
    }
    PreProductionApprovalComponent.prototype.ngOnInit = function () {
        this.obj = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__sources_index__["h" /* PreProductionApprovalSource */](this.service, this.alertService);
        this.dataSource.loadData('', 'trans_no', 'asc', 0, 30);
    };
    PreProductionApprovalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadDataPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () { return _this.loadDataPage(); }))
            .subscribe();
    };
    PreProductionApprovalComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadDataPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadDataPage();
        }
    };
    PreProductionApprovalComponent.prototype.highlight = function (row) {
        this.selected[0] = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case 
        //console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
    };
    PreProductionApprovalComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    PreProductionApprovalComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    PreProductionApprovalComponent.prototype.loadDataPage = function () {
        this.dataSource.loadData(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */])
    ], PreProductionApprovalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */])
    ], PreProductionApprovalComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], PreProductionApprovalComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], PreProductionApprovalComponent.prototype, "panel", void 0);
    PreProductionApprovalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-pre-production-approval',
            template: __webpack_require__("./src/app/pre-production-approval/pre-production-approval.component.html"),
            styles: [__webpack_require__("./src/app/pre-production-approval/pre-production-approval.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_index__["i" /* PreProductionApprovalService */], __WEBPACK_IMPORTED_MODULE_0__services_index__["a" /* AlertService */]])
    ], PreProductionApprovalComponent);
    return PreProductionApprovalComponent;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__register_component__ = __webpack_require__("./src/app/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__register_component__["a"]; });



/***/ }),

/***/ "./src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\n    <h2>Register</h2>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"firstName\">First Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"model.firstName\" #firstName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">First Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"lastName\">Last Name</label>\n            <input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"model.lastName\" #lastName=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !lastName.valid\" class=\"help-block\">Last Name is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n            <label for=\"password\">Password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n        </div>\n        <div class=\"form-group\">\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n            <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = (function () {
    function RegisterComponent(router, userService, alertService) {
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.model = {};
        this.loading = false;
    }
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("./src/app/register/register.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["l" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n\tborder-bottom: 0px solid #eee !important;\r\n-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n        box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n}"

/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading\" style=\"position:relative; z-index:100; max-width:78vw;\"></mat-progress-bar>\n     <form>\n\t     <div class=\"form-group\">\n\t        <mat-form-field>\n\t    \t\t\t<input matInput placeholder=\"Item #\" value=\"\"></mat-form-field>\n\n        <mat-form-field>\n    \t\t\t<input matInput placeholder=\"Item Qty\" value=\"\"></mat-form-field>\n  \t\t</div>\n\n\t     <div class=\"form-group\">\n\t        <mat-form-field>\n\t    \t\t\t\t      <mat-select\n\t\t\t\t\t\t\t\tplaceholder=\"State\">\n\t\t\t\t\t\t\t <mat-option\n\t\t\t\t\t\t\t\t*ngFor=\"let state of states\"\n\t\t\t\t\t\t\t\tvalue=\"{{state}}\">\n\t\t\t\t\t\t\t{{state.abbreviation}} </mat-option> \n\t\t\t\t\t\t\t</mat-select>\n\t\t</mat-form-field>\n        <mat-form-field>\n    \t\t\t<input matInput placeholder=\"Zip\" value=\"\"></mat-form-field>\n  \t\t\n        <mat-form-field>\n    \t\t\t <mat-select\n\t\t\t\t\t\t\t\tplaceholder=\"Country\">\n\t\t\t\t\t\t\t <mat-option\n\t\t\t\t\t\t\t\t*ngFor=\"let country of countries\"\n\t\t\t\t\t\t\t\tvalue=\"{{country}}\">\n\t\t\t\t\t\t\t{{country}} </mat-option> \n\t\t\t\t\t\t\t</mat-select>\n    \t\t\t</mat-form-field>\n  \t\t</div>\n  \t\t\n\t     <div class=\"form-group\">\n\t        <mat-form-field>\n\t      <mat-select\n\t\t\t\t\t\t\t\tplaceholder=\"Package\">\n\t\t\t\t\t\t\t <mat-option\n\t\t\t\t\t\t\t\t*ngFor=\"let package of packageTypes\"\n\t\t\t\t\t\t\t\tvalue=\"{{package}}\">\n\t\t\t\t\t\t\t{{package}} </mat-option> \n\t\t\t\t\t\t\t</mat-select>\n\t        </mat-form-field>\n\t  \t\t</div>\n     </form>\n<div>\n          <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\"  (click) = \"getThat()\">\n            <span>Revert</span>\n          </button>\n                    <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" [disabled] =\"!verification\">\n            <span>Confirm</span>\n          </button>\n                              <button type=\"button\" style=\"margin-top: 0.5rem; margin-bottom: 0.5rem;\" class=\"btn btn-primary small_font\" [disabled] =\"true\">\n            <span>Send to Customer</span>\n          </button>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipEstimateWidgetComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_index__ = __webpack_require__("./src/app/_helpers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_soap__ = __webpack_require__("./node_modules/ngx-soap/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShipEstimateWidgetComponent = (function () {
    function ShipEstimateWidgetComponent(http, soap, shippingService, alertService) {
        this.http = http;
        this.soap = soap;
        this.shippingService = shippingService;
        this.alertService = alertService;
        // loading: boolean = false;
        this.verification = false;
        this.packageTypes = ["Default"];
    }
    ShipEstimateWidgetComponent.prototype.ngOnInit = function () {
        this.states = new __WEBPACK_IMPORTED_MODULE_0__helpers_index__["c" /* StaticData */]().states;
        this.countries = new __WEBPACK_IMPORTED_MODULE_0__helpers_index__["c" /* StaticData */]().countries;
    };
    ShipEstimateWidgetComponent.prototype.getThat = function () {
        //  this.loadAllData();
        var _this = this;
        this.http.get('../../../assets/wsdl/InventoryServiceTekweld.wsdl', { responseType: 'text' }).subscribe(function (response) {
            if (response) {
                //  this.client = this.soap.createClient(response);
                _this.client = _this.soap.createClient(response);
                console.log('todo es bueno!', _this.soap);
                _this.callOperation();
            }
            else {
                console.log('nada es bueno');
            }
        });
    };
    ShipEstimateWidgetComponent.prototype.callOperation = function () {
        var _this = this;
        //  this.clear();
        this.loading = true;
        // this.checkNumbers()
        this.resultLabel = 'A + B';
        var body = {
            intA: this.intA,
            intB: this.intB
        };
        this.client.operation('Add', body)
            .then(function (operation) {
            if (operation.error) {
                console.log('Operation error', operation.error);
                return;
            }
            var url = operation.url;
            _this.http.post(url, operation.xml, { headers: operation.headers, responseType: 'text' }).subscribe(function (response) {
                var xmlResponse = response;
                // 5. parse xml response into json
                var jsonResponse = _this.client.parseResponseBody(response);
                try {
                    var message = jsonResponse.Body.AddResponse.AddResult;
                }
                catch (error) {
                    console.log(error);
                }
            }, function (err) {
                console.log('Error calling ws', err);
            });
        })
            .catch(function (err) { return console.log('Error', err); });
    };
    ShipEstimateWidgetComponent.prototype.loadAllData = function () {
        var _this = this;
        this.shippingService.getResults()
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["a" /* catchError */])(function () { return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(_this.alertService.error('Session Timed Out', true)); }), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["d" /* finalize */])(function () { return console.log('not sure what this does'); }))
            .subscribe(function (data) { console.log('HAJAHSASD: ', data); }, function (error) { console.log("HAJAHSASD Error"); });
    };
    ShipEstimateWidgetComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-ship-estimate-widget',
            template: __webpack_require__("./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.html"),
            styles: [__webpack_require__("./src/app/ship-estimate/ship-estimate-widget/ship-estimate-widget.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5_ngx_soap__["b" /* SOAPService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["k" /* UpsShippingService */], __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]])
    ], ShipEstimateWidgetComponent);
    return ShipEstimateWidgetComponent;
}());



/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate.component.css":
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n\tborder-bottom: 0px solid #eee !important;\r\n-webkit-box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n        box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0), 0 0px 0px 0px rgba(0, 0, 0, 0) !important;\r\n}"

/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\r\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; margin: 0px 0px 0px 0px; padding: 0px; \" \r\n  \t\t\t\t\t   [expanded]=\"true\"\r\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\r\n                       (closed)=\"panelOpenState = false\">\r\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\r\n      <mat-panel-title>\r\n     <h4 style=\"font-family: Trebuchet MS;\"> Ship Estimate</h4>\r\n\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n      </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n<app-ship-estimate-widget></app-ship-estimate-widget>\r\n</mat-expansion-panel>\r\n</mat-accordion>"

/***/ }),

/***/ "./src/app/ship-estimate/ship-estimate.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShipEstimateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShipEstimateComponent = (function () {
    function ShipEstimateComponent() {
        this.loading = false;
        this.verification = false;
        this.panelOpenState = true;
    }
    ShipEstimateComponent.prototype.ngOnInit = function () {
    };
    ShipEstimateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-ship-estimate',
            template: __webpack_require__("./src/app/ship-estimate/ship-estimate.component.html"),
            styles: [__webpack_require__("./src/app/ship-estimate/ship-estimate.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShipEstimateComponent);
    return ShipEstimateComponent;
}());



/***/ }),

/***/ "./src/app/stitch-approval/stitch-approval.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n.mat-column-type_code {\r\n//\t  flex: 0 0 5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_no {\r\n//\t  flex: 0 0 15%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-trans_no {\r\n//\t  flex: 0 0 10%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-ext_ref_date {\r\n//\t  flex: 0 0 7.5%;\r\n\tmargin: 5px;\r\n\r\n\t}\r\n.mat-column-net_amt {\r\nmargin: 5px;\r\n\r\n//\t  flex: 0 0 7.5%;\r\n\t}\r\n.mat-column-order_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 10%;\r\n\t}\r\n.mat-column-artwork_status {\r\n\tmargin: 5px;\r\n\r\n//\t  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-payment_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 10%;\r\n\t}\r\n.mat-column-shipping_status {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 12.5%;\r\n\t}\r\n.mat-column-ship_qty {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-column-estimated_ship_date {\r\n\tmargin: 5px;\r\n\r\n\t//  flex: 0 0 5%;\r\n\t}\r\n.mat-table {\r\n\tmax-height: 78vh\r\n\t}\r\n.mat-paginator-page-size-label{\r\n\t\tbackground: red !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/stitch-approval/stitch-approval.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-accordion style=\"margin: 0px 0px 0px 0px; padding: 0px; \">\n  <mat-expansion-panel style=\"border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; \" \n  \t\t\t\t\t   [expanded]=\"true\"\n  \t\t\t\t\t   (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header style=\"max-height: 35px !important; padding-top: 20px; padding-bottom: 10px;\"  matTooltip=\"Expand / Collapse\" >\n      <mat-panel-title>\n     <h4 style=\"font-family: Trebuchet MS;\"> Stitch Approval </h4>\n\n      </mat-panel-title>\n      <mat-panel-description>\n\t\t\t<ul><li><h4 ><span style=\"font-family: Trebuchet MS;\"><b>Selected:</b> {{selected.length?selected[0].trans_no:'None'}}</span></h4></li></ul>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n            <mat-panel-description>   \n         <p>\n      <mat-input-container style=\"max-height: 20px !important;\">\n        <input matInput placeholder=\"Search...\"  matTooltip=\"Search\" #input> \n    </mat-input-container>\n<!-- content here -->\n</p></mat-panel-description>\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"dataSource.loading$ | async\" style=\"position: absolute; z-index: 99999; max-width: 79vw;\"></mat-progress-bar>\n\n<mat-table [dataSource]=\"dataSource\" style=\"resize: vertical; overflow: auto;\"\nmatSort matSortActive=\"trans_no\" matSortDirection=\"asc\" matSortDisableClear scrollTracker (trigger)=\"loadMore($event)\" [ngClass]=\"selected.length ? 'small_height' : ' full_height;'\" #panel>\n\n    <ng-container matColumnDef=\"customer_code\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.customer_code}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"stitch_count\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Stitch Count</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.stitch_count}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_type\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Type</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_type}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ext_ref_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Customer PO</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ext_ref_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_no\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_no}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"trans_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.trans_date}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"item_description\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Item #</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.item_description}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"item_qty\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Item Qty</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.item_qty}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"ship_date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Ship Date</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.ship_date}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"order_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Order Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.order_status}}</mat-cell>\n    </ng-container>\n    <ng-container matColumnDef=\"payment_status\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>Payment Status</mat-header-cell>\n        <mat-cell *matCellDef=\"let data\">{{data.payment_status}}</mat-cell>\n    </ng-container>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n         (click)=\"highlight(row)\" ></mat-row>\n\n</mat-table>\n          <mat-paginator [length]=\"dataSource.count?dataSource.count:1\" [pageSize]=\"50\"\n                   [pageSizeOptions]=\"[10, 25, 50, 100, dataSource.count?dataSource.count:0]\"></mat-paginator>\n  </mat-expansion-panel>\n  </mat-accordion>\n  <div *ngIf=\"dataSource.count==0\" style=\"margin-top: 20px;\">\n\t\t<ngb-alert>\n\t\t<p align=\"center\">\n\t\t\t<b>No Stitch Approvals</b>\n\t\t</p>\n\t\t</ngb-alert>\n\t</div>\n"

/***/ }),

/***/ "./src/app/stitch-approval/stitch-approval.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StitchApprovalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_index__ = __webpack_require__("./src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sources_index__ = __webpack_require__("./src/app/_sources/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/merge.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/fromEvent.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StitchApprovalComponent = (function () {
    function StitchApprovalComponent(route, service, alertService) {
        this.route = route;
        this.service = service;
        this.alertService = alertService;
        this.selected = [];
        this.screenSizeToAdjustTo = 600;
        this.selectedRowIndex = -1;
        this.previousValue = -1;
        this.panelOpenState = true;
        this.displayedColumns = this.getScreenSize() < this.screenSizeToAdjustTo ?
            ["stitch_count", "trans_type", "trans_no", "trans_date", "item_description", "item_qty", "ship_date", "order_status", "payment_status"] //TODO: fix for small screens
            :
                ["customer_code", "stitch_count", "trans_type", "ext_ref_no", "trans_no", "trans_date", "item_description", "item_qty", "ship_date", "order_status", "payment_status"];
    }
    StitchApprovalComponent.prototype.ngOnInit = function () {
        this.obj = this.route.snapshot.data["data"];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__sources_index__["j" /* StitchApprovalSource */](this.service, this.alertService);
        this.dataSource.loadData('', 'trans_no', 'asc', 0, 30);
    };
    StitchApprovalComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // server-side search
        Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_observable_fromEvent__["a" /* fromEvent */])(this.input.nativeElement, 'keyup')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["b" /* debounceTime */])(150), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["c" /* distinctUntilChanged */])(), Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () {
            _this.paginator.pageIndex = 0;
            _this.loadDataPage();
        }))
            .subscribe();
        // reset the paginator after sorting
        this.sort.sortChange.subscribe(function () { return _this.paginator.pageIndex = 0; });
        // on sort or paginate events, load a new page        
        Object(__WEBPACK_IMPORTED_MODULE_6_rxjs_observable_merge__["a" /* merge */])(this.sort.sortChange, this.paginator.page)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["e" /* tap */])(function () { return _this.loadDataPage(); }))
            .subscribe();
    };
    StitchApprovalComponent.prototype.loadMore = function (event) {
        if (event === "start reached" && this.paginator.pageIndex !== 0) {
            this.paginator.pageIndex = this.paginator.pageIndex !== 0 ? this.paginator.pageIndex - 1 : 0;
            this.loadDataPage();
        }
        if (event === "end reached" && this.paginator.pageSize !== this.dataSource.count) {
            this.paginator.pageSize = this.paginator.pageSize + 30 < this.dataSource.count ? this.paginator.pageSize + 30 : this.dataSource.count;
            this.loadDataPage();
        }
    };
    StitchApprovalComponent.prototype.highlight = function (row) {
        this.selected[0] = row;
        this.previousValue = this.selectedRowIndex;
        this.selectedRowIndex = row.id;
        //scroll to selected position to avoid unseen selected row in resize case 
        //console.log('scroll height ',this.panel.nativeElement.scrollHeight,'position? : ', this.panel.nativeElement.scrollPosition)
    };
    StitchApprovalComponent.prototype.deselect = function () {
        this.selectedRowIndex = -1;
        //this.selected[0] = null; //ADD RWMOVW SELECT ROW HIGHLIGHT
        this.selected = [];
        console.log("deselect called");
    };
    StitchApprovalComponent.prototype.getScreenSize = function () {
        return window.innerWidth;
    };
    StitchApprovalComponent.prototype.loadDataPage = function () {
        this.dataSource.loadData(this.input.nativeElement.value, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatPaginator */])
    ], StitchApprovalComponent.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_material__["q" /* MatSort */])
    ], StitchApprovalComponent.prototype, "sort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], StitchApprovalComponent.prototype, "input", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('panel', { read: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
    ], StitchApprovalComponent.prototype, "panel", void 0);
    StitchApprovalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-stitch-approval',
            template: __webpack_require__("./src/app/stitch-approval/stitch-approval.component.html"),
            styles: [__webpack_require__("./src/app/stitch-approval/stitch-approval.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__services_index__["j" /* StitchApprovalService */], __WEBPACK_IMPORTED_MODULE_0__services_index__["a" /* AlertService */]])
    ], StitchApprovalComponent);
    return StitchApprovalComponent;
}());



/***/ }),

/***/ "./src/assets/app.css":
/***/ (function(module, exports) {

module.exports = ".ng-sidebar-container{\n}\n.ng-sidebar{\n\t\n}\na {\n    cursor: pointer;\n}\n.help-block {\n    font-size: 12px;\n}\n.logo-placement {\nposition:fixed;\nz-index: -11;\n  width:100%;\n  height: 100%;\n  background: #ebf8fe url(\"https://chentek.github.io/portal/../assets/images/tekweld_logo_white.png\") no-repeat center center;\n  background-size: auto;\n-webkit-animation: 1s ease-out 0s 1 changeBgColor;\n        animation: 1s ease-out 0s 1 changeBgColor;\n}\n@-webkit-keyframes changeBgColor {\n    0% {\n    \tbackground-color: black; \n    }\n    100% {\n    \tbackground-color: #ebeff5; \n    }\n}\n@keyframes changeBgColor {\n    0% {\n    \tbackground-color: black; \n    }\n    100% {\n    \tbackground-color: #ebeff5; \n    }\n}\n.cross-image {\n  background-image: url(\"https://chentek.github.io/portal/../assets/images/tekweld_paint.png\");\n  height: 100%;\n  z-index: -10;\n  width: 100%;\n  margin: 0px;\n  padding: 0px;\n  background-position: top;\n  background-repeat: repeat-x;\n  position:fixed;\n  top:0px;\n}\n.jumbotron { // 10+1=11 priority scores \n  line-height: 1;\n  background-color: transparent;\n  color: inherit;\n}\n.alert{\n\tbackground: blue;\n}\n/*Navbar*/\n.navbar-header {\n\twidth: 100%;\n}\n.navbar-toggle{\n\t  padding: initial !important;\n\t}\n.custom-nav-toggle{\n\t  padding:5px 15px 5px 15px;\n\t  font-size:20px;\n\t}\n.colbutton{\n\t\t  padding: initial !important;\nborder: none;\nbackground: none;\n\t\t  font-size:30px;\n\t\t}\n.navbar {\n\tborder: 0;\n\t\tbackground-color: #fff;\n\t\n}\n.navbar input {\n\tborder: 0;\n\tbackground: #444;\n\tcolor: #fff;\n}\n.navbar input:focus {\n\tcolor: #fff;\n\tbackground: #555;\n\tborder: 1px solid #30a5ff;\n\toutline: 0;\n\t-webkit-box-shadow: inset 0px 0px 0px 1px #30a5ff;\n\t        box-shadow: inset 0px 0px 0px 1px #30a5ff;\n}\n.divider {\n\tborder-bottom: 1px solid #eee;\n\tmargin: 20px 0;\n}\n.user-menu {\n\tdisplay: inline-block;\n\tmargin-top: 14px;\n\tmargin-right: 10px;\n\tfloat: right;\n\tlist-style: none;\n\tpadding: 0;\n}\n.user-menu a {\n\tcolor: #000;\n}\n.user-menu a:hover, .user-menu a:focus {\n\ttext-decoration: none;\n}\n/*Icons*/\n.glyph, .user-menu .glyph {\n\theight: 16px;\n\twidth: 16px;\n\tmargin: 0 10px 0 0;\n\tstroke-width: 3px;\n}\n.user-menu .glyph {\n\tstroke-width: 4px;\n}\n.breadcrumb .glyph {\n\theight: 14px;\n\twidth: 14px;\n\tmargin: -2px 0 0 0;\n\tstroke-width: 4px;\n}\n.alert .glyph, .panel-heading .glyph {\n\twidth: 26px;\n\theight: 26px;\n\tmargin: 0 10px 0 0;\n\tstroke-width: 2px;\n}\n.panel-widget .glyph {\n\tstroke-width: 2px;\n}\n.todo-list .glyph {\n\twidth: 14px;\n\theight: 14px;\n\tstroke-width: 4px;\n\tcolor: #999;\n}\n.glyph.table {\n\tbackground: none;\n\tborder: none;\n}\n/*Icon Grid*/\n.icon-grid div {\n\tborder: 1px solid #ddd;\n\tmargin: 0 0 -1px -1px;\n\ttext-align: center;\n\tpadding: 10px 0 20px 0;\n}\n.icon-grid svg {\n\twidth: 35%;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n.icon-grid h4 {\n\tdisplay: none;\n}\n.icon-grid pre {\n\tmargin: 10px 10px -10px 10px;\n\tborder-radius: 0;\n\tfont-size: 10px;\n\tborder-color: #ddd;\n\theight: 65px;\n\toverflow: scroll;\n}\n@font-face {\n   font-family: tekweldfont;\n   src: url('Stop-SC-D-OT.6985bc402a3881b6a39f.ttf');\n}\n.logo-font{\n   font-family: tekweldfont;\n   font-size: 5rem;\n   color:#000;\n}\n\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map