(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'contact-management';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-list/contact-list.component */ "./src/app/contact-list/contact-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/__ivy_ngcc__/fesm2015/ngx-avatar.js");







// search module




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
            ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                { path: '', component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"] },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
        ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__["Ng2SearchPipeModule"],
                    ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                        { path: '', component: _contact_list_contact_list_component__WEBPACK_IMPORTED_MODULE_4__["ContactListComponent"] },
                    ])
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class AppService {
    constructor(_http) {
        this._http = _http;
    }
    getUserDetails() {
        return this._http.get("./../assets/contacts_file.json");
    } //end getUserDetails
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/contact-list/contact-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/contact-list/contact-list.component.ts ***!
  \********************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/__ivy_ngcc__/fesm2015/ngx-avatar.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js");








function ContactListComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const user_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.selectedUserDetail(user_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-avatar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", user_r3["Display Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r3["Display Name"], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", user_r3["Home Phone"], " ");
} }
function ContactListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Click on contact to see the details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactListComponent_div_13_input_54_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 78, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_54_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r32.singleUserDetails["E-mail Address"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r18.selectedEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r18.singleUserDetails["E-mail Address"]);
} }
function ContactListComponent_div_13_input_55_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 79, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_55_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r35.singleUserDetails["E-mail 2 Address"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r19.selectedEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r19.singleUserDetails["E-mail 2 Address"]);
} }
function ContactListComponent_div_13_input_56_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 80, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_56_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r38.singleUserDetails["E-mail 3 Address"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r20.selectedEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r20.singleUserDetails["E-mail 3 Address"]);
} }
function ContactListComponent_div_13_input_64_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 81, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_64_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r41.singleUserDetails["Web Page"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r21.selectedWebPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r21.singleUserDetails["Web Page"]);
} }
function ContactListComponent_div_13_input_65_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 82, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_65_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r44.singleUserDetails["Web 2 Page"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r22.selectedWebPage);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r22.singleUserDetails["Web 2 Page"]);
} }
function ContactListComponent_div_13_input_92_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 83, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_92_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r47.singleUserDetails["Home Fax"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r29.selectedFax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r29.singleUserDetails["Home Fax"]);
} }
function ContactListComponent_div_13_input_93_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 84, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_input_93_Template_input_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r50.singleUserDetails["Business Fax"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx_r30.selectedFax);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r30.singleUserDetails["Business Fax"]);
} }
function ContactListComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_div_13_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r52.noUserSelected(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 19, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r54.singleUserDetails["Display Name"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 21, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r55.singleUserDetails["First Name"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 22, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_13_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r56.singleUserDetails["Last Name"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 24, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r57.singleUserDetails["Related Name"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 26, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_20_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r58.singleUserDetails["Home Phone"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "input", 28, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r59.singleUserDetails["Mobile Phone"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 29, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r60.singleUserDetails["Business Phone"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 31, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_29_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r61.singleUserDetails["Country Code"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 32, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r62.singleUserDetails["Birthday"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 33, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r63.singleUserDetails["Nickname"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 34, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_39_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r64.singleUserDetails["Anniversary"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "input", 35, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r65.singleUserDetails["Gender"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactListComponent_div_13_Template_select_change_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r66.selectEmailChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "E-mail Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "E-mail 2 Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "E-mail 3 Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ContactListComponent_div_13_input_54_Template, 2, 2, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ContactListComponent_div_13_input_55_Template, 2, 2, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, ContactListComponent_div_13_input_56_Template, 2, 2, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactListComponent_div_13_Template_select_change_58_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r67.selectWebPageChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Web Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Web 2 Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, ContactListComponent_div_13_input_64_Template, 2, 2, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, ContactListComponent_div_13_input_65_Template, 2, 2, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "input", 48, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_67_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r68.singleUserDetails["Pager"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "input", 49, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_70_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r69.singleUserDetails["Organization"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "input", 51, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r70.singleUserDetails["Job Title"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "input", 52, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_77_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r71.singleUserDetails["Department"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "input", 53, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_80_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r72.singleUserDetails["Categories"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 55, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_div_13_Template_input_ngModelChange_83_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r73.singleUserDetails["Notes"] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ContactListComponent_div_13_Template_select_change_86_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r74.selectFaxChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Home Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Business Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](92, ContactListComponent_div_13_input_92_Template, 2, 2, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](93, ContactListComponent_div_13_input_93_Template, 2, 2, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "input", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "input", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Display Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["First Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Last Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Related Name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Home Phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Mobile Phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Business Phone"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Country Code"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Birthday"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Nickname"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Anniversary"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Gender"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedEmail === "E-mail Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedEmail === "E-mail 2 Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedEmail === "E-mail 3 Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedWebPage === "Web Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedWebPage === "Web 2 Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Pager"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Organization"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Job Title"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Department"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Categories"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.singleUserDetails["Notes"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedFax === "Home Fax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.selectedFax === "Business Fax");
} }
class ContactListComponent {
    constructor(appService, _route, router) {
        this.appService = appService;
        this._route = _route;
        this.router = router;
        this.selectedEmail = 'E-mail Address';
        this.selectedWebPage = 'Web Page';
        this.selectedFax = 'Home Fax';
        this.mobileStatus = false;
        this.usersDetails = [];
        this.DisplayName = [];
        this.singleUser = false;
        this.countries = [];
        this.countriesCode = [];
        this.noUserSelected = () => {
            this.mobileStatus = false;
            this.singleUser = false;
        };
        this.selectedUserDetail = (id) => {
            this.mobileStatus = true;
            this.singleUser = true;
            this.singleUserDetails = this.usersDetails[id];
            console.log(this.singleUserDetails);
        };
    }
    ngOnInit() {
        this.appService.getUserDetails().subscribe((response) => {
            for (let user in response) {
                let singleUser = response[user];
                let userDetail = [
                    Object.assign({ id: user }, singleUser)
                ];
                this.usersDetails.push(userDetail[0]);
            }
        });
    }
    selectEmailChangeHandler(event) {
        this.selectedEmail = event.target.value;
    }
    selectWebPageChangeHandler(event) {
        this.selectedWebPage = event.target.value;
    }
    selectFaxChangeHandler(event) {
        this.selectedFax = event.target.value;
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["app-contact-list"]], decls: 14, vars: 9, consts: [[1, "root"], [1, "header"], [1, "logo"], [1, "row", "background"], [1, "col-sm-3", "col-12", 2, "background", "rgba(237, 243, 237, 0.5)", 3, "ngClass"], ["type", "text", "name", "search", "autocomplete", "Display Name", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "searchBar", 3, "ngModel", "ngModelChange"], [1, "contact-list"], [1, "list-group", "contact-card"], ["class", "list-group-item contact-name-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "col-sm-9", "col-12", 2, "background", "rgba(237, 243, 237, 0.3)", 3, "ngClass"], ["class", "blankContent", 4, "ngIf"], [4, "ngIf"], [1, "list-group-item", "contact-name-card", 3, "click"], [1, "my-avatar", 3, "name"], [1, "blankContent"], [1, "contact-details"], [1, "form-row"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", "backButton", 3, "click"], [1, "col-md-3", "col-sm-3", "col-4"], ["type", "text", "id", "singleContactName", "placeholder", "Display Name", "name", "singleUserName", 1, "form-control", "contact-name", 3, "ngModel", "ngModelChange"], ["title", "ngModel"], ["type", "text", "id", "singleContactFirstName", "placeholder", "First Name", "name", "singleUserFirstName", 1, "form-control", "contact-first-name", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactLastName", "placeholder", "Last Name", "name", "singleUserLastName", 1, "form-control", "contact-last-name", 3, "ngModel", "ngModelChange"], [1, "col-md-3", "col-sm-3", "col-5"], ["type", "text", "id", "singleContactRelatedName", "placeholder", "Related Name", "name", "singleUserRelatedName", 1, "form-control", "contact-related-name", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-3", "col-sm-2", "col-6"], ["type", "text", "id", "singleContactHomePhone", "placeholder", "Home Phone", "name", "singleUserHomePhone", 1, "form-control", "contact-home-phone", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-3", "col-sm-3", "col-6"], ["type", "tel", "id", "singleContactMobilePhone", "placeholder", "Mobile Phone", "name", "singleUserMobilePhone", 1, "form-control", "contact-mobile-phone", 3, "ngModel", "ngModelChange"], ["type", "tel", "id", "singleContactBusinessPhone", "placeholder", "Business Phone", "name", "singleUserBusinessPhone", 1, "form-control", "contact-business-phone", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-md-2", "col-sm-4", "col-6"], ["type", "tel", "id", "singleContactCountryCode", "placeholder", "Country Code", "name", "singleUserCountryCode", 1, "form-control", "contact-country-code", 3, "ngModel", "ngModelChange"], ["type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "singleContactBirthday", "placeholder", "Birthday", "name", "singleUserBirthday", 1, "form-control", "contact-birthday", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactNickname", "placeholder", "Nickname", "name", "singleUserNickname", 1, "form-control", "contact-nickname", 3, "ngModel", "ngModelChange"], ["type", "text", "onfocus", "(this.type='date')", "onblur", "(this.type='text')", "id", "singleContactAnniversary", "placeholder", "Anniversary", "name", "singleUserAnniversary", 1, "form-control", "contact-anniversary", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactGender", "placeholder", "Gender", "name", "singleUserGender", 1, "form-control", "contact-gender", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-2", "col-md-3", "col-5"], ["id", "singleContactEmailOptions", 1, "form-control", "contact-email", 3, "change"], ["selected", "", 1, "selectOption"], [1, "selectOption"], [1, "form-group", "col-lg-2", "col-md-3", "col-7"], ["type", "text", "class", "form-control contact-email-address", "id", "singleContactEmail", "name", "singleUserEmail", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "email", "class", "form-control contact-email-address", "id", "singleContactEmail2", "name", "singleUserEmail", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "class", "form-control contact-email-address", "id", "singleContactEmail3", "name", "singleUserEmail", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["id", "singleContactWebPageOptions", 1, "form-control", "contact-web", 3, "change"], ["type", "text", "class", "form-control contact-web-page", "id", "singleContactWebPage", "name", "singleUserWebPage", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "class", "form-control contact-web-page", "id", "singleContactWebPage2", "name", "singleUserWebPage", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [1, "form-group", "col-lg-2", "col-md-4", "col-6"], ["type", "tel", "id", "singleContactPager", "placeholder", "Pager", "name", "singleUserPager", 1, "form-control", "contact-pager", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactOrganization", "placeholder", "Organization", "name", "singleUserOrganization", 1, "form-control", "contact-organization", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-2", "col-md-3", "col-4"], ["type", "text", "id", "singleContactJobTitle", "placeholder", "Job Title", "name", "singleUserJobTitle", 1, "form-control", "contact-job-title", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactDepartment", "placeholder", "Department", "name", "singleUserDepartment", 1, "form-control", "contact-department", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactCategories", "placeholder", "Categories", "name", "singleUserCategories", 1, "form-control", "contact-categories", 3, "ngModel", "ngModelChange"], [1, "form-group", "col-lg-2", "col-md-3", "col-3"], ["type", "text", "id", "singleContactNotes", "placeholder", "Notes", "name", "singleUserNotes", 1, "form-control", "contact-notes", 3, "ngModel", "ngModelChange"], ["id", "singleContactFax", 1, "form-control", "contact-fax", 3, "change"], ["type", "text", "class", "form-control contact-fax-number", "id", "singleContactHomeFax", "name", "singleUserFax", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "class", "form-control contact-fax-number", "id", "singleContactBusinessFax", "name", "singleUserFax", 3, "placeholder", "ngModel", "ngModelChange", 4, "ngIf"], [1, "form-group", "col-md-6"], [1, "form-group", "row"], [1, "col-md-10"], ["type", "text", "id", "singleContactHomeAddress2", "placeholder", "Home Address 2", 1, "form-control", "contact-home-address-2"], ["type", "text", "id", "singleContactHomeStreet", "placeholder", "Home Street", 1, "form-control", "contact-home-street"], [1, "col-xl-4", "col-lg-6", "col-md-6", "col-6"], ["type", "text", "id", "singleContactHomeCity", "placeholder", "Home City", 1, "form-control", "contact-home-city"], ["type", "text", "id", "singleContactHomeState", "placeholder", "Home State", 1, "form-control", "contact-home-state"], [1, "col-xl-4", "col-lg-5", "col-md-7", "col-7"], ["type", "text", "id", "singleContactHomeCountry", "placeholder", "Home Country", 1, "form-control", "contact-home-country"], [1, "col-xl-5", "col-md-7", "col-7"], ["type", "text", "id", "singleContactHomePostalCode", "placeholder", "Home Postal Code", 1, "form-control", "contact-home-postal-code"], ["type", "text", "id", "singleContactBusinessAddress", "placeholder", "Business Address", 1, "form-control", "contact-business-address"], ["type", "text", "id", "singleContactBusinessAddress2", "placeholder", "Business Address 2", 1, "form-control", "contact-business-address-2"], ["type", "text", "id", "singleContactBusinessCity", "placeholder", "Business City", 1, "form-control", "contact-business-city"], ["type", "text", "id", "singleContactBusinessState", "placeholder", "Business State", 1, "form-control", "contact-business-state"], ["type", "text", "id", "singleContactBusinessCountry", "placeholder", "Business Country", 1, "form-control", "contact-business-country"], [1, "col-xl-5", "col-md-7", "col-5"], ["type", "text", "id", "singleContactBusinessPostalCode", "placeholder", "Business Postal Code", 1, "form-control", "contact-business-postal-code"], ["type", "text", "id", "singleContactEmail", "name", "singleUserEmail", 1, "form-control", "contact-email-address", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "email", "id", "singleContactEmail2", "name", "singleUserEmail", 1, "form-control", "contact-email-address", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactEmail3", "name", "singleUserEmail", 1, "form-control", "contact-email-address", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactWebPage", "name", "singleUserWebPage", 1, "form-control", "contact-web-page", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactWebPage2", "name", "singleUserWebPage", 1, "form-control", "contact-web-page", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactHomeFax", "name", "singleUserFax", 1, "form-control", "contact-fax-number", 3, "placeholder", "ngModel", "ngModelChange"], ["type", "text", "id", "singleContactBusinessFax", "name", "singleUserFax", 1, "form-control", "contact-fax-number", 3, "placeholder", "ngModel", "ngModelChange"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Contact Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactListComponent_Template_input_ngModelChange_6_listener($event) { return ctx.searchUser = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ContactListComponent_li_9_Template, 5, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ContactListComponent_div_12_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ContactListComponent_div_13_Template, 129, 25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mobileStatus ? "mobile-contact-list" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 6, ctx.usersDetails, ctx.searchUser));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mobileStatus ? "mobile-contact-details" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.singleUser);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.singleUser);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_avatar__WEBPACK_IMPORTED_MODULE_5__["AvatarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipe"]], styles: ["*[_ngcontent-%COMP%] {box-sizing: border-box;}\r\n\r\nbody[_ngcontent-%COMP%] { \r\n  margin: 0;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n\r\n.root[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n  overflow: hidden;\r\n}\r\n\r\n.background[_ngcontent-%COMP%]{\r\n  background-image: url('background.svg');\r\n}\r\n\r\n.header[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  padding: 5px 10px;\r\n  background: linear-gradient(75deg, rgb(236, 160, 226), rgb(192, 248, 80));\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 12px;\r\n  text-decoration: none;\r\n  font-size: 25px; \r\n  line-height: 25px;\r\n  border-radius: 4px;\r\n  font-family: 'Lato';\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  font-weight: bold;\r\n}\r\n\r\n.header[_ngcontent-%COMP%]   h1.logo[_ngcontent-%COMP%] {\r\n  font-size: 25px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n  .header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\r\n    float: none;\r\n    display: block;\r\n    text-align: left;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.searchBar[_ngcontent-%COMP%]{\r\n  width: 90%;\r\n  margin-top: 15px;\r\n  margin-left: 15px;\r\n  background-color: whitesmoke ;\r\n}\r\n\r\n@media (max-width:1024px) and (min-width:425px){\r\n  .searchBar[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n    margin-left: 17px;\r\n  }\r\n}\r\n\r\n.contact-list[_ngcontent-%COMP%]{\r\n  padding: 7px 8px;\r\n  border-radius: 4px;\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n  margin-bottom: 15px;\r\n  text-align: right;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.contact-card[_ngcontent-%COMP%]{\r\n  height: 490px;\r\n  overflow-x: hidden; \r\n  overflow-y: auto; \r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-details[_ngcontent-%COMP%]{\r\n    height: 490px;\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-details[_ngcontent-%COMP%]{\r\n    height: 490px;\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 375px){\r\n  .contact-details[_ngcontent-%COMP%]{\r\n    height: 470px;\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 320px){\r\n  .contact-details[_ngcontent-%COMP%]{\r\n    height: 470px;\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px) {\r\n  .contact-card[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    overflow-x: hidden; \r\n    overflow-y: auto;\r\n  }\r\n\r\n  .mobile-contact-list[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n  background: white;\r\n  border-bottom: solid 1px #ddd;\r\n  box-shadow: 0 5px 5px -3px rgba(0,0,0,0.05),\r\n  0 3px 14px 2px rgba(0,0,0,0.05);\r\n  margin-right: 10px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\nli[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n\r\nngx-avatar[_ngcontent-%COMP%]{\r\n  float: left;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 769px){\r\n  .contact-name-card[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n  }\r\n}\r\n\r\n@media (max-width: 768px) and (min-width: 424px){\r\n  .contact-name-card[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px) {\r\n  .contact-name-card[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.blankContent[_ngcontent-%COMP%]{\r\n  height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  font-size: 3rem;\r\n  color: #999999;\r\n}\r\n\r\n@media (max-width: 768px){\r\n  .blankContent[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 500;\r\n  }\r\n}\r\n\r\n.backButton[_ngcontent-%COMP%]{\r\n  font-size: 12px;\r\n  margin-top: 15px;\r\n  letter-spacing: 1px;\r\n  text-transform: uppercase;\r\n  font-weight: 500;\r\n}\r\n\r\n@media screen and (min-width: 768px ){\r\n  .backButton[_ngcontent-%COMP%]{\r\n    margin-left: 12px;\r\n  }\r\n}\r\n\r\n@media (max-width: 767px) and (min-width: 320px){\r\n  .backButton[_ngcontent-%COMP%]{\r\n    margin-left: 12px;\r\n  }\r\n}\r\n\r\n.backButton[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus{\r\n  outline : none;\r\n  border-color: #719ECE;\r\n  box-shadow: 0 0 10px #719ECE;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]:focus{\r\n  outline : none;\r\n  border-color: #719ECE;\r\n  box-shadow: 0 0 10px #719ECE;\r\n}\r\n\r\n.selectOption[_ngcontent-%COMP%]{\r\n  background-color: skyblue;\r\n  outline : none;\r\n  border-color: #719ECE;\r\n  box-shadow: 0 0 10px #719ECE;\r\n}\r\n\r\n.contact-name[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-first-name[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-last-name[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-related-name[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 20px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .contact-name[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-first-name[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n  .contact-last-name[_ngcontent-%COMP%] {\r\n    font-size: 13px;\r\n  }\r\n  .contact-related-name[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n.contact-home-phone[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-mobile-phone[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-phone[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-country-code[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-home-phone[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-mobile-phone[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-phone[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-country-code[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-home-phone[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-mobile-phone[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-phone[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-country-code[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n}\r\n\r\n.contact-birthday[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-nickname[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-anniversary[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-gender[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-birthday[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-nickname[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-anniversary[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-gender[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-birthday[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-nickname[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-anniversary[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-gender[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n.contact-email[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: lightskyblue;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-email-address[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n\r\n}\r\n\r\n.contact-web[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-web-page[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-pager[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-organization[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-email[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-email-address[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-web[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-web-page[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-pager[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-organization[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px) {\r\n  .contact-email[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-email-address[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-web[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-web-page[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-pager[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-organization[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n.contact-job-title[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-department[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-categories[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-notes[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-fax[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-fax-number[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-job-title[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-department[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-categories[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-notes[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-fax[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-fax-number[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-job-title[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-department[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-categories[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-notes[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-fax[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-fax-number[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n}\r\n\r\n.contact-home-address-2[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-home-street[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-home-city[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-home-state[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-home-country[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: lightskyblue;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-home-postal-code[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-home-address-2[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-home-street[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-home-city[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-home-state[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-home-country[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-home-postal-code[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  \r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-home-address-2[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-home-street[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-home-city[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-home-state[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-home-country[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-home-postal-code[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }  \r\n}\r\n\r\n.contact-business-address[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-address-2[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-city[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-state[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-country[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n.contact-business-postal-code[_ngcontent-%COMP%]{\r\n  margin-top: 0.4em;\r\n  font-weight: 500;\r\n  font-size: 15px;\r\n  font-style: italic ;\r\n  box-sizing: border-box;\r\n  border: transparent;\r\n  border-radius: 4px;\r\n  outline: none;\r\n  background: transparent; \r\n  box-shadow: none;\r\n}\r\n\r\n@media (max-width: 1024px) and (min-width: 426px){\r\n  .contact-business-address[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-address-2[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-city[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-state[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-country[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  }\r\n  .contact-business-postal-code[_ngcontent-%COMP%]{\r\n    font-size: 12px;\r\n  } \r\n}\r\n\r\n@media (max-width: 425px){\r\n  .contact-business-address[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-address-2[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-city[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-state[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-country[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n  }\r\n  .contact-business-postal-code[_ngcontent-%COMP%]{\r\n    font-size: 13px;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  } \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC1saXN0L2NvbnRhY3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFCO0VBQ0UsU0FBUztFQUNULHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1Q0FBc0Q7QUFDeEQ7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlFQUF5RTtBQUMzRTs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0I7aUNBQytCO0VBQy9CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUdBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsaUJBQWlCO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0LWxpc3QvY29udGFjdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtib3gtc2l6aW5nOiBib3JkZXItYm94O31cclxuXHJcbmJvZHkgeyBcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5yb290e1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmJhY2tncm91bmR7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLnN2ZycpO1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg3NWRlZywgcmdiKDIzNiwgMTYwLCAyMjYpLCByZ2IoMTkyLCAyNDgsIDgwKSk7XHJcbn1cclxuXHJcbi5oZWFkZXIgaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMjVweDsgXHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0byc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uaGVhZGVyIGgxLmxvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuaGVhZGVyIGgxIHtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4uc2VhcmNoQmFye1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlIDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgKG1pbi13aWR0aDo0MjVweCl7XHJcbiAgLnNlYXJjaEJhcntcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTdweDtcclxuICB9XHJcbn1cclxuXHJcbi5jb250YWN0LWxpc3R7XHJcbiAgcGFkZGluZzogN3B4IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufSBcclxuXHJcbi5jb250YWN0LWNhcmR7XHJcbiAgaGVpZ2h0OiA0OTBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gIG92ZXJmbG93LXk6IGF1dG87IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNDI2cHgpe1xyXG4gIC5jb250YWN0LWRldGFpbHN7XHJcbiAgICBoZWlnaHQ6IDQ5MHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpe1xyXG4gIC5jb250YWN0LWRldGFpbHN7XHJcbiAgICBoZWlnaHQ6IDQ5MHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpe1xyXG4gIC5jb250YWN0LWRldGFpbHN7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpe1xyXG4gIC5jb250YWN0LWRldGFpbHN7XHJcbiAgICBoZWlnaHQ6IDQ3MHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyBcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAuY29udGFjdC1jYXJkIHtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICB9XHJcblxyXG4gIC5tb2JpbGUtY29udGFjdC1saXN0e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbmxpe1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAjZGRkO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsMC4wNSksXHJcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwwLjA1KTtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxubGk6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5uZ3gtYXZhdGFye1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY5cHgpe1xyXG4gIC5jb250YWN0LW5hbWUtY2FyZHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkgYW5kIChtaW4td2lkdGg6IDQyNHB4KXtcclxuICAuY29udGFjdC1uYW1lLWNhcmR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAuY29udGFjdC1uYW1lLWNhcmR7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmJsYW5rQ29udGVudHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgLmJsYW5rQ29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0J1dHRvbntcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHggKXtcclxuICAuYmFja0J1dHRvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpe1xyXG4gIC5iYWNrQnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0J1dHRvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3Vze1xyXG4gIG91dGxpbmUgOiBub25lO1xyXG4gIGJvcmRlci1jb2xvcjogIzcxOUVDRTtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjNzE5RUNFO1xyXG59XHJcblxyXG5zZWxlY3Q6Zm9jdXN7XHJcbiAgb3V0bGluZSA6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNzE5RUNFO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4ICM3MTlFQ0U7XHJcbn1cclxuXHJcbi5zZWxlY3RPcHRpb257XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcclxuICBvdXRsaW5lIDogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICM3MTlFQ0U7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzcxOUVDRTtcclxufVxyXG5cclxuLmNvbnRhY3QtbmFtZXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZpcnN0LW5hbWV7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWxhc3QtbmFtZXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtcmVsYXRlZC1uYW1le1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWN0LW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWZpcnN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1sYXN0LW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1yZWxhdGVkLW5hbWV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1ob21lLXBob25le1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1tb2JpbGUtcGhvbmV7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWJ1c2luZXNzLXBob25le1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1jb3VudHJ5LWNvZGV7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWluLXdpZHRoOiA0MjZweCl7XHJcbiAgLmNvbnRhY3QtaG9tZS1waG9uZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtbW9iaWxlLXBob25le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1idXNpbmVzcy1waG9uZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtY291bnRyeS1jb2Rle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAuY29udGFjdC1ob21lLXBob25le1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1tb2JpbGUtcGhvbmV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLXBob25le1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1jb3VudHJ5LWNvZGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1iaXJ0aGRheXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3Qtbmlja25hbWV7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWFubml2ZXJzYXJ5e1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1nZW5kZXJ7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWluLXdpZHRoOiA0MjZweCl7XHJcbiAgLmNvbnRhY3QtYmlydGhkYXl7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LW5pY2tuYW1le1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1hbm5pdmVyc2FyeXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZ2VuZGVye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAuY29udGFjdC1iaXJ0aGRheXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3Qtbmlja25hbWV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWFubml2ZXJzYXJ5e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1nZW5kZXJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1lbWFpbHtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiBsaWdodHNreWJsdWU7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWVtYWlsLWFkZHJlc3N7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uY29udGFjdC13ZWJ7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LXdlYi1wYWdle1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1wYWdlcntcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3Qtb3JnYW5pemF0aW9ue1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNDI2cHgpe1xyXG4gIC5jb250YWN0LWVtYWlse1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1lbWFpbC1hZGRyZXNze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC13ZWJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LXdlYi1wYWdle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1wYWdlcntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3Qtb3JnYW5pemF0aW9ue1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgLmNvbnRhY3QtZW1haWx7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWVtYWlsLWFkZHJlc3N7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LXdlYntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3Qtd2ViLXBhZ2V7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LXBhZ2Vye1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1vcmdhbml6YXRpb257XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1qb2ItdGl0bGV7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWRlcGFydG1lbnR7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWNhdGVnb3JpZXN7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LW5vdGVze1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1mYXh7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWZheC1udW1iZXJ7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWluLXdpZHRoOiA0MjZweCl7XHJcbiAgLmNvbnRhY3Qtam9iLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1kZXBhcnRtZW50e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1jYXRlZ29yaWVze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1ub3Rlc3tcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtZmF4e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1mYXgtbnVtYmVye1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAuY29udGFjdC1qb2ItdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWRlcGFydG1lbnR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWNhdGVnb3JpZXN7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LW5vdGVze1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1mYXh7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWZheC1udW1iZXJ7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uY29udGFjdC1ob21lLWFkZHJlc3MtMntcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaG9tZS1zdHJlZXR7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWhvbWUtY2l0eXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaG9tZS1zdGF0ZXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaG9tZS1jb3VudHJ5e1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IGxpZ2h0c2t5Ymx1ZTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNvbnRhY3QtaG9tZS1wb3N0YWwtY29kZXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDQyNnB4KXtcclxuICAuY29udGFjdC1ob21lLWFkZHJlc3MtMntcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1zdHJlZXR7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWhvbWUtY2l0eXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1zdGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1jb3VudHJ5e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1ob21lLXBvc3RhbC1jb2Rle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQyNXB4KXtcclxuICAuY29udGFjdC1ob21lLWFkZHJlc3MtMntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1zdHJlZXR7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWhvbWUtY2l0eXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1zdGF0ZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtaG9tZS1jb3VudHJ5e1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuICAuY29udGFjdC1ob21lLXBvc3RhbC1jb2Rle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH0gIFxyXG59XHJcblxyXG4uY29udGFjdC1idXNpbmVzcy1hZGRyZXNze1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1idXNpbmVzcy1hZGRyZXNzLTJ7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWJ1c2luZXNzLWNpdHl7XHJcbiAgbWFyZ2luLXRvcDogMC40ZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljIDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWN0LWJ1c2luZXNzLXN0YXRle1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1idXNpbmVzcy1jb3VudHJ5e1xyXG4gIG1hcmdpbi10b3A6IDAuNGVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYyA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXI6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyBcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1idXNpbmVzcy1wb3N0YWwtY29kZXtcclxuICBtYXJnaW4tdG9wOiAwLjRlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXN0eWxlOiBpdGFsaWMgO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDQyNnB4KXtcclxuICAuY29udGFjdC1idXNpbmVzcy1hZGRyZXNze1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1idXNpbmVzcy1hZGRyZXNzLTJ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLWNpdHl7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLXN0YXRle1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1idXNpbmVzcy1jb3VudHJ5e1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICAuY29udGFjdC1idXNpbmVzcy1wb3N0YWwtY29kZXtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9IFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpe1xyXG4gIC5jb250YWN0LWJ1c2luZXNzLWFkZHJlc3N7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLWFkZHJlc3MtMntcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtYnVzaW5lc3MtY2l0eXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICB9XHJcbiAgLmNvbnRhY3QtYnVzaW5lc3Mtc3RhdGV7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLWNvdW50cnl7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5jb250YWN0LWJ1c2luZXNzLXBvc3RhbC1jb2Rle1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIH0gXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact-list',
                templateUrl: './contact-list.component.html',
                styleUrls: ['./contact-list.component.css']
            }]
    }], function () { return [{ type: _app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IRA\Desktop\Contact-Management\contact-management\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map