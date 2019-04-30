(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'implicit/callback',
        component: _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaCallbackComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-spacer {\n  flex: 1 1 auto;\n}\n\n\n\n.contain {\n-o-object-fit: contain;\n   object-fit: contain;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOzs7O0FBSUQ7QUFDQSx1QkFBb0I7R0FBcEIsb0JBQW9CO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuXG5cbi5jb250YWluIHtcbm9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\">\n\n  <img class=\"contain\" src=\"assets/img/Xavier_Musketeers_logo.png\" alt=\"Xavier\" style=\"width:75px;height:75px\">\n  <h2>Alter Room Reservation</h2>\n  <span class=\"toolbar-spacer\"></span>\n<button mat-raised-button color=\"accent\" *ngIf=\"!isAuthenticated\"\n        (click)=\"oktaAuth.loginRedirect()\">Login\n</button>\n  <button mat-raised-button color= \"accent\" *ngIf=\"isAuthenticated\"\n          (click)=\"oktaAuth.logout()\" [routerLink]=\"['/home']\">Logout\n  </button>\n  <button mat-raised-button color= \"accent\" *ngIf=\"isAuthenticated\"\n          [routerLink]=\"['/home']\">Home\n  </button>\n\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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


var AppComponent = /** @class */ (function () {
    function AppComponent(oktaAuth) {
        this.oktaAuth = oktaAuth;
        this.title = 'client';
    }
    AppComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        _a.isAuthenticated = _b.sent();
                        // Subscribe to authentication state changes
                        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_okta_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/okta/auth.interceptor */ "./src/app/shared/okta/auth.interceptor.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var config = {
    issuer: 'https://dev-402557.okta.com/oauth2/default',
    redirectUri: 'http://localhost:4200/implicit/callback',
    clientId: '0oahpz08l2Xs85ut3356'
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _okta_okta_angular__WEBPACK_IMPORTED_MODULE_8__["OktaAuthModule"].initAuth(config)
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _shared_okta_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__["AuthInterceptor"], multi: true }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " body{\n\n    color:black;\n    font: italic;\n    font-size: ;\n  }\n\n/*Website header */\n\n.header {\n    background-color: rgb(159, 162, 162);\n    text-align: left;\n\n  }\n\n/* Style the top navigation bar */\n\n.topnav {\n    overflow: hidden;\n    background-color: rgb(13,34,52);\n  }\n\n/* Style the topnav links */\n\n.topnav a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    text-decoration: none;\n  }\n\n/* Change color on hover */\n\n.topnav a:hover {\n    background-color: #ddd;\n    color: black;\n  }\n\n/* Header for the month*/\n\n.month {\n    width:auto;\n    background-color: ;\n    text-align: center;\n  }\n\n/*trying to make a table*/\n\n#calendar td, #calendar th {\n    border: 1px solid #ddd;\n    margin-right:20px;\n  }\n\n#calendar tr:nth-child(even){background-color: ;}\n\n#calendar tr:hover {background-color: #ddd;}\n\n#calendar th {\n    text-align: left;\n    background-color: rgb(159, 162, 162);\n    color: white;\n  }\n\n/*Dropdown Menues*/\n\n.dropbtn {\n    background-color: rgb(159, 162, 162);\n    color: white;\n    font-size: 16px;\n    border: none;\n  }\n\n.dropdown{\n    position: relative;\n    display: inline-block;\n  }\n\n.dropdown-content {\n    display:none;\n    background-color: white;\n    min-width: 160px;\n    boxshadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n\n.dropdown-content a {\n    color: rgb(159, 162, 162);\n    text decoration: none;\n    display:block;\n  }\n\n.dropdown-content a:hover {\n    background-color:#ddd\n  }\n\n.dropdown:hover .dropdown-content{\n  display: block;\n}\n\n.dropdown:hover .dropbtn{\n  background-color: #3e8e41\n}\n\n/**/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7O0lBRUcsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0dBQ2I7O0FBRUgsbUJBQW1COztBQUNqQjtJQUNFLHFDQUFxQztJQUNyQyxpQkFBaUI7O0dBRWxCOztBQUVELGtDQUFrQzs7QUFDbEM7SUFDRSxpQkFBaUI7SUFDakIsZ0NBQWdDO0dBQ2pDOztBQUVELDRCQUE0Qjs7QUFDNUI7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsc0JBQXNCO0dBQ3ZCOztBQUVELDJCQUEyQjs7QUFDM0I7SUFDRSx1QkFBdUI7SUFDdkIsYUFBYTtHQUNkOztBQUVELHlCQUF5Qjs7QUFFekI7SUFDRSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtHQUNwQjs7QUFHRCwwQkFBMEI7O0FBRTFCO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtHQUNuQjs7QUFFRCw2QkFBNkIsbUJBQW1CLENBQUM7O0FBRWpELG9CQUFvQix1QkFBdUIsQ0FBQzs7QUFFNUM7SUFDRSxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGFBQWE7R0FDZDs7QUFFRCxtQkFBbUI7O0FBRW5CO0lBQ0UscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtHQUNkOztBQUVEO0lBQ0UsbUJBQW1CO0lBQ25CLHNCQUFzQjtHQUN2Qjs7QUFFRDtJQUNFLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsaUJBQWlCO0lBQ2pCLDRDQUE0QztJQUM1QyxXQUFXO0dBQ1o7O0FBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLGNBQWM7R0FDZjs7QUFFRDtJQUNFLHFCQUFxQjtHQUN0Qjs7QUFFSDtFQUNFLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSx5QkFBeUI7Q0FDMUI7O0FBRUMsSUFBSSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIGJvZHl7XG5cbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250OiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiA7XG4gIH1cblxuLypXZWJzaXRlIGhlYWRlciAqL1xuICAuaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU5LCAxNjIsIDE2Mik7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICB9XG5cbiAgLyogU3R5bGUgdGhlIHRvcCBuYXZpZ2F0aW9uIGJhciAqL1xuICAudG9wbmF2IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMywzNCw1Mik7XG4gIH1cblxuICAvKiBTdHlsZSB0aGUgdG9wbmF2IGxpbmtzICovXG4gIC50b3BuYXYgYSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICNmMmYyZjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gIC8qIENoYW5nZSBjb2xvciBvbiBob3ZlciAqL1xuICAudG9wbmF2IGE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG5cbiAgLyogSGVhZGVyIGZvciB0aGUgbW9udGgqL1xuXG4gIC5tb250aCB7XG4gICAgd2lkdGg6YXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cblxuICAvKnRyeWluZyB0byBtYWtlIGEgdGFibGUqL1xuXG4gICNjYWxlbmRhciB0ZCwgI2NhbGVuZGFyIHRoIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgIG1hcmdpbi1yaWdodDoyMHB4O1xuICB9XG5cbiAgI2NhbGVuZGFyIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiA7fVxuXG4gICNjYWxlbmRhciB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2RkZDt9XG5cbiAgI2NhbGVuZGFyIHRoIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDE2MiwgMTYyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAvKkRyb3Bkb3duIE1lbnVlcyovXG5cbiAgLmRyb3BidG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTksIDE2MiwgMTYyKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuXG4gIC5kcm9wZG93bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6bm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDE2MHB4O1xuICAgIGJveHNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIC5kcm9wZG93bi1jb250ZW50IGEge1xuICAgIGNvbG9yOiByZ2IoMTU5LCAxNjIsIDE2Mik7XG4gICAgdGV4dCBkZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6YmxvY2s7XG4gIH1cblxuICAuZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNkZGRcbiAgfVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZHJvcGRvd246aG92ZXIgLmRyb3BidG57XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDFcbn1cblxuICAvKiovIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  body{\n    color:black;\n    font: italic;\n    font-size: ;\n  }\n/*Website header */\n  .header {\n    background-color: rgb(159, 162, 162);\n    text-align: left;\n    padding: 12px;\n  }\n  /* Style the top navigation bar */\n  .topnav {\n    overflow: hidden;\n    background-color: rgb(13,34,52);\n  }\n  /* Style the topnav links */\n  .topnav a {\n    float: left;\n    display: block;\n    color: #f2f2f2;\n    text-align: center;\n    padding: 4px 16px;\n    text-decoration: none;\n  }\n  /* Change color on hover */\n  .topnav a:hover {\n    background-color: #ddd;\n    color: black;\n  }\n  /* Header for the month*/\n  .month {\n    padding:25px 25px;\n    width:auto;\n    background-color: ;\n    text-align: center;\n  }\n  /*trying to make a table*/\n  #calendar td, #calendar th {\n    border: 1px solid #ddd;\n    padding: 80px;\n    margin-right:20px;\n  }\n  #calendar tr:nth-child(even){background-color: ;}\n  #calendar tr:hover {background-color: #ddd;}\n  #calendar th {\n    padding-top: 12px;\n    padding-bottom: 12px;\n    text-align: left;\n    background-color: rgb(159, 162, 162);\n    color: white;\n  }\n  /*Dropdown Menues*/\n  .dropbtn {\n    background-color: rgb(159, 162, 162);\n    color: white;\n    padding 16px;\n    font-size: 16px;\n    padding: 160px\n    border: none;\n  }\n  .dropdown{\n    position: relative;\n    display: inline-block;\n  }\n  .dropdown-content {\n    display:none;\n    position: absolute;\n    background-color: white;\n    min-width: 160px;\n    boxshadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n    z-index: 1;\n  }\n  .dropdown-content a {\n    color: rgb(159, 162, 162);\n    padding: 12px 16px;\n    text decoration: none;\n    display:block;\n  }\n  .dropdown-content a:hover {\n    background-color:#ddd\n  }\n.dropdown:hover .dropdown-content{\n  display: block;\n}\n.dropdown:hover .dropbtn{\n  background-color: #3e8e41\n}\n  /**/\n</style>\n<mat-card>\n  <mat-card-content>\n    <div color=\"accent\" *ngIf=\"isAuthenticated\">\n      <table>\n        <tr>\n          <th>  </th>\n          <th>Mon</th>\n          <th>Tues</th>\n          <th>Wed</th>\n          <th>Thurs</th>\n          <th>Fri</th>\n        </tr>\n        <tr>\n          <td>7 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n\n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 8 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 9 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 10 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 11 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 12 am</td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        <tr>\n          <td> 1 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        <tr>\n          <td> 2 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 3 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n        <tr>\n          <td> 4 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 5 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 6 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 7 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 8 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 9 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n            \n          </div>\n          </td>\n        </tr>\n\n        <tr>\n          <td> 10 pm </td>\n          <td> <div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n         </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n\n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n\n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n\n          </div>\n          </td>\n          <td><div class=\"dropdown\">\n            <button class=\"dropbtn\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>\n\n          </div>\n          </td>\n        </tr>\n\n      </table>\n    </div>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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


var HomeComponent = /** @class */ (function () {
    function HomeComponent(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    HomeComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.oktaAuth.isAuthenticated()];
                    case 1:
                        _a.isAuthenticated = _b.sent();
                        // Subscribe to authentication state changes
                        this.oktaAuth.$authenticationState.subscribe(function (isAuthenticated) { return _this.isAuthenticated = isAuthenticated; });
                        return [2 /*return*/];
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_1__["OktaAuthService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/shared/okta/auth.interceptor.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/okta/auth.interceptor.ts ***!
  \*************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @okta/okta-angular */ "./node_modules/@okta/okta-angular/dist/index.js");
/* harmony import */ var _okta_okta_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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



var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(oktaAuth) {
        this.oktaAuth = oktaAuth;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["from"])(this.handleAccess(request, next));
    };
    AuthInterceptor.prototype.handleAccess = function (request, next) {
        return __awaiter(this, void 0, void 0, function () {
            var accessToken;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(request.urlWithParams.indexOf('localhost') > -1)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.oktaAuth.getAccessToken()];
                    case 1:
                        accessToken = _a.sent();
                        request = request.clone({
                            setHeaders: {
                                Authorization: 'Bearer ' + accessToken
                            }
                        });
                        _a.label = 2;
                    case 2: return [2 /*return*/, next.handle(request).toPromise()];
                }
            });
        });
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_okta_okta_angular__WEBPACK_IMPORTED_MODULE_2__["OktaAuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tcharuhas/Desktop/group2 project/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** xhr2 (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map