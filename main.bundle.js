webpackJsonp([1],{

/***/ "../../../../../app async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../app async recursive";

/***/ }),

/***/ "../../../../../app/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../app/includes/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<select class=\"form-control\" #dropValue [(ngModel)]=\"value\" (change)=\"select(dropValue.value)\">\r\n\t<option *ngFor=\"let value of values\" [value]=\"value.value\">{{value.label}}</option>\r\n</select>\r\n"

/***/ }),

/***/ "../../../../../app/includes/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export DropdownValue */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownValue = (function () {
    function DropdownValue(value, label) {
        this.value = value;
        this.label = label;
    }
    return DropdownValue;
}());

var DropdownComponent = (function () {
    function DropdownComponent(elementRef) {
        this.elementRef = elementRef;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DropdownComponent.prototype.select = function (value) {
        this.valueChange.emit(value);
    };
    return DropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DropdownComponent.prototype, "values", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DropdownComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], DropdownComponent.prototype, "valueChange", void 0);
DropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-dropdown',
        template: __webpack_require__("../../../../../app/includes/dropdown.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object])
], DropdownComponent);

var _a, _b;
//# sourceMappingURL=dropdown.component.js.map

/***/ }),

/***/ "../../../../../app/includes/full-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-content-wrapper\">\r\n\t<div id=\"page-content\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<ng-content></ng-content>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<loading-indicator></loading-indicator>"

/***/ }),

/***/ "../../../../../app/includes/full-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function routerTransition() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_raven_index__["P" /* slideToLeft */])();
}
var FullLayoutComponent = (function () {
    function FullLayoutComponent() {
    }
    FullLayoutComponent.prototype.ngOnInit = function () {
    };
    FullLayoutComponent.prototype.ngAfterViewInit = function () {
    };
    return FullLayoutComponent;
}());
FullLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'full-layout',
        template: __webpack_require__("../../../../../app/includes/full-layout.component.html"),
        animations: [routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], FullLayoutComponent);

//# sourceMappingURL=full-layout.component.js.map

/***/ }),

/***/ "../../../../../app/includes/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-header\" class=\"bg-gradient-9\">\r\n\t<div id=\"mobile-navigation\">\r\n\t\t<button id=\"nav-toggle\" class=\"collapsed\" data-toggle=\"collapse\" data-target=\"#page-sidebar\"><span></span></button>\r\n\t\t<a href=\"index.html\" class=\"logo-content-small\" title=\"Historical Event\"></a>\r\n\t</div>\r\n\t<div id=\"header-logo\" class=\"logo-bg\">\r\n\t\t<a [routerLink]=\"['/']\" class=\"logo-content-big\" title=\"Historical Event\"></a>\r\n\t\t<a [routerLink]=\"['/']\" class=\"logo-content-small\" title=\"Historical Event\"></a>\r\n\t\t<a id=\"close-sidebar\" title=\"Close sidebar\">\r\n\t\t\t<i class=\"glyph-icon icon-angle-left\"></i>\r\n\t\t</a>\r\n\t</div>\r\n\t<div id=\"header-nav-left\">\r\n\t</div>\r\n\t<div id=\"header-nav-right\">\r\n\t\t<div class=\"user-account-btn dropdown\">\r\n\t\t\t<a href=\"#\" title=\"My Account\" class=\"user-profile clearfix\" data-toggle=\"dropdown\">\r\n\t\t\t\t<img width=\"28\" src=\"assets/images/avatar.png\" alt=\"Profile image\">\r\n\t\t\t\t<span>{{authService.getUser().name}}</span>\r\n\t\t\t\t<i class=\"glyph-icon icon-angle-down\"></i>\r\n\t\t\t</a>\r\n\t\t\t<div class=\"dropdown-menu float-right\">\r\n\t\t\t\t<div class=\"box-sm\">\r\n\t\t\t\t\t<div class=\"login-box clearfix\">\r\n\t\t\t\t\t\t<div class=\"user-img\">\r\n\t\t\t\t\t\t\t<img src=\"assets/images/avatar.png\" alt=\"\">\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"user-info\">\r\n\t\t\t\t\t\t\t<span>\r\n\t\t\t\t\t\t\t\t{{authService.getUser().name}}\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"divider\"></div>\r\n\t\t\t\t\t<ul class=\"reset-ul mrg5B\">\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/change-password']\">\r\n\t\t\t\t\t\t\t\t<i class=\"glyph-icon float-right icon-caret-right\"></i> Change password\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a [routerLink]=\"['/update-profile']\">\r\n\t\t\t\t\t\t\t\t<i class=\"glyph-icon float-right icon-caret-right\"></i> Update profile\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t\t<div class=\"pad5A button-pane button-pane-alt text-center\">\r\n\t\t\t\t\t\t<a (click)=\"logout()\" class=\"btn display-block font-normal btn-danger\">\r\n\t\t\t\t\t\t\t<i class=\"glyph-icon icon-power-off\"></i> Logout\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../app/includes/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.userInfo = authService.getUser();
    }
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'header',
        template: __webpack_require__("../../../../../app/includes/header.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../app/includes/loading-indicator.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/* Loading indicator */\r\n\r\n\r\n/* Absolute Center Spinner */\r\n\r\n.loading {\r\n\tposition: fixed;\r\n\tz-index: 999;\r\n\theight: 2em;\r\n\twidth: 2em;\r\n\toverflow: show;\r\n\tmargin: auto;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n}\r\n\r\n\r\n/* Transparent Overlay */\r\n\r\n.loading:before {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n\r\n/* :not(:required) hides these rules from IE9 and below */\r\n\r\n.loading:not(:required) {\r\n\t/* hide \"loading...\" text */\r\n\tfont: 0/0 a;\r\n\tcolor: transparent;\r\n\ttext-shadow: none;\r\n\tbackground-color: transparent;\r\n\tborder: 0;\r\n}\r\n\r\n.loading:not(:required):after {\r\n\tcontent: '';\r\n\tdisplay: block;\r\n\tfont-size: 10px;\r\n\twidth: 1em;\r\n\theight: 1em;\r\n\tmargin-top: -0.5em;\r\n\t-webkit-animation: spinner 1500ms infinite linear;\r\n\tanimation: spinner 1500ms infinite linear;\r\n\tborder-radius: 0.5em;\r\n\tbox-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n}\r\n\r\n\r\n/* Animation */\r\n\r\n@-webkit-keyframes spinner {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n@keyframes spinner {\r\n\t0% {\r\n\t\t-webkit-transform: rotate(0deg);\r\n\t\ttransform: rotate(0deg);\r\n\t}\r\n\t100% {\r\n\t\t-webkit-transform: rotate(360deg);\r\n\t\ttransform: rotate(360deg);\r\n\t}\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../app/includes/loading-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" [@loadingState]=\"loadingState\">Loading&#8230;</div>"

/***/ }),

/***/ "../../../../../app/includes/loading-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent(_loadingSvc) {
        this._loadingSvc = _loadingSvc;
        this.loadingState = 'inactive';
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._loadingSvc.getValue().subscribe(function (status) {
            _this.loadingState = status ? 'active' : 'inactive';
        });
    };
    return LoadingIndicatorComponent;
}());
LoadingIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'loading-indicator',
        template: __webpack_require__("../../../../../app/includes/loading-indicator.component.html"),
        styles: [__webpack_require__("../../../../../app/includes/loading-indicator.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('loadingState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: 0,
                    display: 'none'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                    opacity: 1,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('active => inactive', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('200ms ease-out')),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('inactive => active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0ms ease-in'))
            ])
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _a || Object])
], LoadingIndicatorComponent);

var _a;
//# sourceMappingURL=loading-indicator.component.js.map

/***/ }),

/***/ "../../../../../app/includes/setting.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"theme-options\" class=\"admin-options\">\r\n\t<a href=\"javascript:void(0);\" class=\"btn btn-primary theme-switcher tooltip-button\" data-placement=\"left\" title=\"Color schemes and layout options\">\r\n\t\t<i class=\"glyph-icon icon-linecons-cog icon-spin\"></i>\r\n\t</a>\r\n\t<div id=\"theme-switcher-wrapper\">\r\n\t\t<div class=\"scroll-switcher\">\r\n\t\t\t<h5 class=\"header\">Layout options</h5>\r\n\t\t\t<ul class=\"reset-ul\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<label for=\"boxed-layout\">Boxed layout</label>\r\n\t\t\t\t\t<input type=\"checkbox\" data-toggletarget=\"boxed-layout\" id=\"boxed-layout\" class=\"input-switch-alt\">\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<label for=\"fixed-header\">Fixed header</label>\r\n\t\t\t\t\t<input type=\"checkbox\" data-toggletarget=\"fixed-header\" id=\"fixed-header\" class=\"input-switch-alt\">\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<label for=\"fixed-sidebar\">Fixed sidebar</label>\r\n\t\t\t\t\t<input type=\"checkbox\" data-toggletarget=\"fixed-sidebar\" id=\"fixed-sidebar\" class=\"input-switch-alt\">\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<label for=\"closed-sidebar\">Closed sidebar</label>\r\n\t\t\t\t\t<input type=\"checkbox\" data-toggletarget=\"closed-sidebar\" id=\"closed-sidebar\" class=\"input-switch-alt\">\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<div class=\"boxed-bg-wrapper hide\">\r\n\t\t\t\t<h5 class=\"header\">\r\n\t\t\t\t\tBoxed Page Background\r\n\t\t\t\t\t<a class=\"set-background-style\" data-header-bg=\"\" title=\"Remove all styles\" href=\"javascript:void(0);\">Clear</a>\r\n\t\t\t\t</h5>\r\n\t\t\t\t<div class=\"theme-color-wrapper clearfix\">\r\n\t\t\t\t\t<h5>Patterns</h5>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-3\" data-header-bg=\"pattern-bg-3\" title=\"Pattern 3\" href=\"javascript:void(0);\">Pattern 3</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-4\" data-header-bg=\"pattern-bg-4\" title=\"Pattern 4\" href=\"javascript:void(0);\">Pattern 4</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-5\" data-header-bg=\"pattern-bg-5\" title=\"Pattern 5\" href=\"javascript:void(0);\">Pattern 5</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-6\" data-header-bg=\"pattern-bg-6\" title=\"Pattern 6\" href=\"javascript:void(0);\">Pattern 6</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-7\" data-header-bg=\"pattern-bg-7\" title=\"Pattern 7\" href=\"javascript:void(0);\">Pattern 7</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-8\" data-header-bg=\"pattern-bg-8\" title=\"Pattern 8\" href=\"javascript:void(0);\">Pattern 8</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-9\" data-header-bg=\"pattern-bg-9\" title=\"Pattern 9\" href=\"javascript:void(0);\">Pattern 9</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style pattern-bg-10\" data-header-bg=\"pattern-bg-10\" title=\"Pattern 10\" href=\"javascript:void(0);\">Pattern 10</a>\r\n\t\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t\t<h5 class=\"mrg15T\">Solids &amp;Images</h5>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style bg-black\" data-header-bg=\"bg-black\" title=\"Black\" href=\"javascript:void(0);\">Black</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style bg-gray mrg10R\" data-header-bg=\"bg-gray\" title=\"Gray\" href=\"javascript:void(0);\">Gray</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-1\" data-header-bg=\"full-bg-1 fixed-bg\" title=\"Image 1\" href=\"javascript:void(0);\">Image 1</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-2\" data-header-bg=\"full-bg-2 fixed-bg\" title=\"Image 2\" href=\"javascript:void(0);\">Image 2</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-3\" data-header-bg=\"full-bg-3 fixed-bg\" title=\"Image 3\" href=\"javascript:void(0);\">Image 3</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-4\" data-header-bg=\"full-bg-4 fixed-bg\" title=\"Image 4\" href=\"javascript:void(0);\">Image 4</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-5\" data-header-bg=\"full-bg-5 fixed-bg\" title=\"Image 5\" href=\"javascript:void(0);\">Image 5</a>\r\n\t\t\t\t\t<a class=\"tooltip-button set-background-style full-bg-6\" data-header-bg=\"full-bg-6 fixed-bg\" title=\"Image 6\" href=\"javascript:void(0);\">Image 6</a>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<h5 class=\"header\">\r\n\t\t\t\tHeader Style\r\n\t\t\t\t<a class=\"set-adminheader-style\" data-header-bg=\"bg-gradient-9\" title=\"Remove all styles\" href=\"javascript:void(0);\">Clear</a>\r\n\t\t\t</h5>\r\n\t\t\t<div class=\"theme-color-wrapper clearfix\">\r\n\t\t\t\t<h5>Solids</h5>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-primary\" data-header-bg=\"bg-primary font-inverse\" title=\"Primary\" href=\"javascript:void(0);\">Primary</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-green\" data-header-bg=\"bg-green font-inverse\" title=\"Green\" href=\"javascript:void(0);\">Green</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-red\" data-header-bg=\"bg-red font-inverse\" title=\"Red\" href=\"javascript:void(0);\">Red</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-blue\" data-header-bg=\"bg-blue font-inverse\" title=\"Blue\" href=\"javascript:void(0);\">Blue</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-warning\" data-header-bg=\"bg-warning font-inverse\" title=\"Warning\" href=\"javascript:void(0);\">Warning</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-purple\" data-header-bg=\"bg-purple font-inverse\" title=\"Purple\" href=\"javascript:void(0);\">Purple</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-black\" data-header-bg=\"bg-black font-inverse\" title=\"Black\" href=\"javascript:void(0);\">Black</a>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t<h5 class=\"mrg15T\">Gradients</h5>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-1\" data-header-bg=\"bg-gradient-1 font-inverse\" title=\"Gradient 1\" href=\"javascript:void(0);\">Gradient 1</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-2\" data-header-bg=\"bg-gradient-2 font-inverse\" title=\"Gradient 2\" href=\"javascript:void(0);\">Gradient 2</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-3\" data-header-bg=\"bg-gradient-3 font-inverse\" title=\"Gradient 3\" href=\"javascript:void(0);\">Gradient 3</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-4\" data-header-bg=\"bg-gradient-4 font-inverse\" title=\"Gradient 4\" href=\"javascript:void(0);\">Gradient 4</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-5\" data-header-bg=\"bg-gradient-5 font-inverse\" title=\"Gradient 5\" href=\"javascript:void(0);\">Gradient 5</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-6\" data-header-bg=\"bg-gradient-6 font-inverse\" title=\"Gradient 6\" href=\"javascript:void(0);\">Gradient 6</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-7\" data-header-bg=\"bg-gradient-7 font-inverse\" title=\"Gradient 7\" href=\"javascript:void(0);\">Gradient 7</a>\r\n\t\t\t\t<a class=\"tooltip-button set-adminheader-style bg-gradient-8\" data-header-bg=\"bg-gradient-8 font-inverse\" title=\"Gradient 8\" href=\"javascript:void(0);\">Gradient 8</a>\r\n\t\t\t</div>\r\n\t\t\t<h5 class=\"header\">\r\n\t\t\t\tSidebar Style\r\n\t\t\t\t<a class=\"set-sidebar-style\" data-header-bg=\"\" title=\"Remove all styles\" href=\"javascript:void(0);\">Clear</a>\r\n\t\t\t</h5>\r\n\t\t\t<div class=\"theme-color-wrapper clearfix\">\r\n\t\t\t\t<h5>Solids</h5>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-primary\" data-header-bg=\"bg-primary font-inverse\" title=\"Primary\" href=\"javascript:void(0);\">Primary</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-green\" data-header-bg=\"bg-green font-inverse\" title=\"Green\" href=\"javascript:void(0);\">Green</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-red\" data-header-bg=\"bg-red font-inverse\" title=\"Red\" href=\"javascript:void(0);\">Red</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-blue\" data-header-bg=\"bg-blue font-inverse\" title=\"Blue\" href=\"javascript:void(0);\">Blue</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-warning\" data-header-bg=\"bg-warning font-inverse\" title=\"Warning\" href=\"javascript:void(0);\">Warning</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-purple\" data-header-bg=\"bg-purple font-inverse\" title=\"Purple\" href=\"javascript:void(0);\">Purple</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-black\" data-header-bg=\"bg-black font-inverse\" title=\"Black\" href=\"javascript:void(0);\">Black</a>\r\n\t\t\t\t<div class=\"clear\"></div>\r\n\t\t\t\t<h5 class=\"mrg15T\">Gradients</h5>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-1\" data-header-bg=\"bg-gradient-1 font-inverse\" title=\"Gradient 1\" href=\"javascript:void(0);\">Gradient 1</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-2\" data-header-bg=\"bg-gradient-2 font-inverse\" title=\"Gradient 2\" href=\"javascript:void(0);\">Gradient 2</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-3\" data-header-bg=\"bg-gradient-3 font-inverse\" title=\"Gradient 3\" href=\"javascript:void(0);\">Gradient 3</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-4\" data-header-bg=\"bg-gradient-4 font-inverse\" title=\"Gradient 4\" href=\"javascript:void(0);\">Gradient 4</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-5\" data-header-bg=\"bg-gradient-5 font-inverse\" title=\"Gradient 5\" href=\"javascript:void(0);\">Gradient 5</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-6\" data-header-bg=\"bg-gradient-6 font-inverse\" title=\"Gradient 6\" href=\"javascript:void(0);\">Gradient 6</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-7\" data-header-bg=\"bg-gradient-7 font-inverse\" title=\"Gradient 7\" href=\"javascript:void(0);\">Gradient 7</a>\r\n\t\t\t\t<a class=\"tooltip-button set-sidebar-style bg-gradient-8\" data-header-bg=\"bg-gradient-8 font-inverse\" title=\"Gradient 8\" href=\"javascript:void(0);\">Gradient 8</a>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../app/includes/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingComponent = (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent.prototype.ngAfterViewInit = function () {
    };
    return SettingComponent;
}());
SettingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'setting',
        template: __webpack_require__("../../../../../app/includes/setting.component.html"),
    }),
    __metadata("design:paramtypes", [])
], SettingComponent);

//# sourceMappingURL=setting.component.js.map

/***/ }),

/***/ "../../../../../app/includes/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"page-sidebar\">\r\n\t<div class=\"scroll-sidebar\">\r\n\t\t<ul id=\"sidebar-menu\">\r\n\t\t\t<li class=\"header\"><span>Users</span></li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/users']\" title=\"All Users\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-users\"></i>\r\n\t\t\t\t\t<span>All Users</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/user/add-new']\" title=\"Add New\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-plus\"></i>\r\n\t\t\t\t\t<span>Add New</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"header\"><span>Category</span></li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/categories']\" title=\"All Categories\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-tags\"></i>\r\n\t\t\t\t\t<span>All Categories</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/category/add-new']\" title=\"Add New\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-plus\"></i>\r\n\t\t\t\t\t<span>Add New</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"header\"><span>News</span></li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/news']\" title=\"All News\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-newspaper-o\"></i>\r\n\t\t\t\t\t<span>All News</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/news/add-new']\" title=\"Add New\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-plus\"></i>\r\n\t\t\t\t\t<span>Add New</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a href=\"#\" title=\"Today Events\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-bullhorn\"></i>\r\n\t\t\t\t\t<span>Hot News</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"header\"><span>Profile</span></li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/update-profile']\" title=\"Your Profile\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-user\"></i>\r\n\t\t\t\t\t<span>Update Profile</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/change-password']\" title=\"All News\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-calendar\"></i>\r\n\t\t\t\t\t<span>Change Password</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/news/add-new']\" title=\"Add New\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-sign-out\"></i>\r\n\t\t\t\t\t<span>Logout</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li class=\"header\"><span>More</span></li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/403']\" title=\"Your Profile\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-warning\"></i>\r\n\t\t\t\t\t<span>403</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/404']\" title=\"Your Profile\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-meh-o\"></i>\r\n\t\t\t\t\t<span>404</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t\t<li>\r\n\t\t\t\t<a [routerLink]=\"['/500']\" title=\"All News\">\r\n\t\t\t\t\t<i class=\"glyph-icon icon-flash\"></i>\r\n\t\t\t\t\t<span>500</span>\r\n\t\t\t\t</a>\r\n\t\t\t</li>\r\n\t\t</ul>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../app/includes/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(monarchUI, authService) {
        this.monarchUI = monarchUI;
        this.authService = authService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.ngAfterViewInit = function () {
        this.monarchUI.sidebarMenu();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'sidebar',
        template: __webpack_require__("../../../../../app/includes/sidebar.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_raven_index__["y" /* MonarchUI */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_raven_index__["y" /* MonarchUI */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_raven_index__["C" /* AuthService */]) === "function" && _b || Object])
], SidebarComponent);

var _a, _b;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../app/includes/simple-layout.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\r\nbody {\r\n\theight: 100%;\r\n}\r\n\r\nbody {\r\n\tbackground: #fff;\r\n\toverflow: hidden;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../app/includes/simple-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n<loading-indicator></loading-indicator>"

/***/ }),

/***/ "../../../../../app/includes/simple-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function routerTransition() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_raven_index__["O" /* slideToBottom */])();
}
var SimpleLayoutComponent = (function () {
    function SimpleLayoutComponent() {
    }
    SimpleLayoutComponent.prototype.ngOnInit = function () {
    };
    return SimpleLayoutComponent;
}());
SimpleLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'simple-layout',
        template: __webpack_require__("../../../../../app/includes/simple-layout.component.html"),
        styles: [__webpack_require__("../../../../../app/includes/simple-layout.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        animations: [routerTransition()],
        host: { '[@routerTransition]': '' }
    }),
    __metadata("design:paramtypes", [])
], SimpleLayoutComponent);

//# sourceMappingURL=simple-layout.component.js.map

/***/ }),

/***/ "../../../../../app/models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category() {
    }
    Category.prototype.isNameValid = function () {
        var err = [];
        var stat = true;
        if (!this.name) {
            err.push("Name is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.name.length < 4) {
            err.push("Name Length cannot be less than 4 ");
            stat = false;
        }
        if (this.name.length > 300) {
            err.push("Name Length cannot be more than 300");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    Category.prototype.isValid = function () {
        return this.isNameValid().stat;
    };
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../app/models/news.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return News; });
var News = (function () {
    function News() {
    }
    News.prototype.isTitleValid = function () {
        var err = [];
        var stat = true;
        if (!this.title) {
            err.push("Title is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.title.length < 4) {
            err.push("Title Length cannot be less than 4 ");
            stat = false;
        }
        if (this.title.length > 300) {
            err.push("Title Length cannot be more than 300");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    News.prototype.isContentValid = function () {
        var err = [];
        var stat = true;
        if (!this.content) {
            err.push("Content is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.content.length < 4) {
            err.push("Content Length cannot be less than 4 ");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    News.prototype.isThumbnailValid = function () {
        var err = [];
        var stat = true;
        if (!this.thumbnail) {
            err.push("Thumbnail is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.thumbnail.length < 4) {
            err.push("Thumbnail Length cannot be less than 4 ");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    News.prototype.isCategoryValid = function () {
        var err = [];
        var stat = true;
        if (!this.category) {
            err.push("Category is required");
            stat = false;
            return { stat: stat, err: err };
        }
        return { stat: stat, err: err };
    };
    News.prototype.isValid = function () {
        return this.isTitleValid() && this.isContentValid() &&
            this.isThumbnailValid() && this.isCategoryValid();
    };
    return News;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ "../../../../../app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.isNameValid = function () {
        var err = [];
        var stat = true;
        if (!this.name) {
            err.push("Fullname is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.name.length < 4) {
            err.push("Name Length cannot be less than 4 ");
            stat = false;
        }
        if (this.name.length > 50) {
            err.push("Name Length cannot be more than 50");
            stat = false;
        }
        var myRe = /\d/;
        var myArray = myRe.exec(this.name);
        if (myArray) {
            err.push("Name Cannot contain numbers");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    User.prototype.isUsernameValid = function () {
        var err = [];
        var stat = true;
        if (!this.username) {
            err.push("Username is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.username.length < 4) {
            err.push("Username Length cannot be less than 4");
            stat = false;
        }
        if (this.username.length > 30) {
            err.push("Username Length cannot be more than 30 ");
            stat = false;
        }
        var myRe = /^[\d\w\_-]*$/;
        var myArray = myRe.exec(this.username);
        if (!myArray) {
            err.push("Username can only contain Letters, numbers, underscore(_) and hyphen(-).");
            stat = false;
        }
        myRe = /^[A-Za-z].*$/;
        myArray = myRe.exec(this.username);
        if (!myArray) {
            err.push("Username can only start with Alphabets. ");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    User.prototype.isPasswordValid = function () {
        var err = [];
        var stat = true;
        if (!this.password) {
            err.push("Password is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.password.length < 5) {
            err.push("Password Length cannot be less than 5");
            stat = false;
        }
        if (this.password.length > 30) {
            err.push("Password Length cannot be more than 30");
            stat = false;
        }
        var myRe = /^[\d\w_.-]*$/;
        var myArray = myRe.exec(this.password);
        if (!myArray) {
            err.push("Password can only contain Letters, numbers, underscore(_) and hyphen(-).");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    User.prototype.isrPasswordValid = function () {
        var err = [];
        var stat = true;
        if (!this.rPassword) {
            err.push("Retype password is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.password != this.rPassword) {
            err.push("Password does not match.");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    User.prototype.isEmailValid = function () {
        var err = [];
        var stat = true;
        if (!this.email) {
            err.push("Email is required");
            stat = false;
            return { stat: stat, err: err };
        }
        var myRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var myArray = myRe.exec(this.email);
        if (!myArray) {
            err.push("The Email Adress is not in valid format.");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    User.prototype.isPhoneNumberValid = function () {
        var err = [];
        var stat = true;
        if (this.phone_number) {
            if (this.phone_number.length < 10) {
                err.push("Mobile No Length cannot be less than 10");
                stat = false;
            }
            if (this.phone_number.length > 11) {
                err.push("Mobile No Length cannot be more than 11 ");
                stat = false;
            }
            var myRe = /^[0-9]{10,11}$/;
            if (!myRe.exec(this.phone_number)) {
                err.push("The Phone Number is not in valid format.");
                stat = false;
            }
        }
        return { stat: stat, err: err };
    };
    User.prototype.isValid = function () {
        return this.isEmailValid().stat &&
            this.isNameValid().stat &&
            this.isPasswordValid().stat &&
            this.isUsernameValid().stat &&
            this.isrPasswordValid().stat &&
            this.isPhoneNumberValid().stat;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../app/modules/animation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* unused harmony export fadeInOut */
/* unused harmony export slideToRight */
/* harmony export (immutable) */ __webpack_exports__["b"] = slideToLeft;
/* harmony export (immutable) */ __webpack_exports__["a"] = slideToBottom;
/* unused harmony export slideToTop */

function fadeInOut() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('2000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('2000ms', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }))
        ])
    ]);
}
function slideToRight() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }))
        ])
    ]);
}
function slideToLeft() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({})),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
function slideToBottom() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(100%)' }))
        ])
    ]);
}
function slideToTop() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('routerTransition', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('void', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ position: 'fixed', width: '100%', height: '100%' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':enter', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(100%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }))
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])(':leave', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(0%)' }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('0.5s ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateY(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=animation.module.js.map

/***/ }),

/***/ "../../../../../app/modules/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["h" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'users', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["m" /* UserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'user/add-new', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["p" /* AddUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["n" /* UpdateUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'change-password', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["t" /* ChangePasswordComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'update-profile', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["u" /* UpdateProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'user/:id', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["n" /* UpdateUserComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["q" /* CategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'category/add-new', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["r" /* AddCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'category/:id', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["s" /* UpdateCategoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'news', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["v" /* NewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'news/add-new', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["w" /* AddNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: 'news/:id', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["x" /* UpdateNewsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["A" /* AuthGuard */]] },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["e" /* HeaderComponent */], outlet: 'header' },
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["f" /* SidebarComponent */], outlet: 'sidebar' },
        ]
    },
    {
        path: '', children: [
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["l" /* LoginComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_raven_index__["B" /* NotForUserGuard */]] },
            { path: '404', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["i" /* NotFoundComponent */] },
            { path: '403', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["j" /* ForbiddenComponent */] },
            { path: '500', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["k" /* ServerErrorComponent */] },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_2_raven_index__["i" /* NotFoundComponent */] },
        ]
    },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../app/modules/loading-indicator.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_loading_indicator_service__ = __webpack_require__("../../../../../app/services/loading-indicator.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_includes_loading_indicator_component__ = __webpack_require__("../../../../../app/includes/loading-indicator.component.ts");
/* unused harmony reexport LoadingIndicatorService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoadingIndicatorModule = LoadingIndicatorModule_1 = (function () {
    function LoadingIndicatorModule() {
    }
    LoadingIndicatorModule.forRoot = function () {
        return {
            ngModule: LoadingIndicatorModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_2_services_loading_indicator_service__["a" /* LoadingIndicatorService */]]
        };
    };
    return LoadingIndicatorModule;
}());
LoadingIndicatorModule = LoadingIndicatorModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3_includes_loading_indicator_component__["a" /* LoadingIndicatorComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_3_includes_loading_indicator_component__["a" /* LoadingIndicatorComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2_services_loading_indicator_service__["a" /* LoadingIndicatorService */]]
    })
], LoadingIndicatorModule);

var LoadingIndicatorModule_1;
//# sourceMappingURL=loading-indicator.module.js.map

/***/ }),

/***/ "../../../../../app/modules/monarch.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonarchUI; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MonarchUI = (function () {
    function MonarchUI() {
    }
    MonarchUI.prototype.onLoad = function () {
        this.initSetting();
        this.widgetInit();
        this.body_sizer();
        this.sidebarToggle();
        this.pageTransitions();
        this.dropdownSmooth();
        this.settingBar();
        this.swither_resizer();
    };
    MonarchUI.prototype.onSizer = function () {
        this.body_sizer();
        this.swither_resizer();
    };
    MonarchUI.prototype.initSetting = function () {
        if (localStorage.getItem("body-class") != null) {
            $('body').addClass(localStorage.getItem("body-class"));
        }
        if ($('body').hasClass('closed-sidebar')) {
            $('#closed-sidebar').prop("checked", true);
        }
        if ($('body').hasClass('fixed-sidebar')) {
            $('#fixed-sidebar').prop("checked", true);
        }
        if ($('body').hasClass('fixed-header')) {
            $('#fixed-header').prop("checked", true);
        }
        if ($('body').hasClass('boxed-layout')) {
            $('#boxed-layout').prop("checked", true);
        }
    };
    MonarchUI.prototype.body_sizer = function () {
        if ($('body').hasClass('fixed-sidebar')) {
            var windowHeight = $(window).height();
            var headerHeight = $('#page-header').height();
            var contentHeight = windowHeight - headerHeight;
            $('#page-sidebar').css('height', contentHeight);
            $('.scroll-sidebar').css('height', contentHeight);
            $('#page-content').css('min-height', contentHeight);
        }
        else {
            var windowHeight = $(document).height();
            var headerHeight = $('#page-header').height();
            var contentHeight = windowHeight - headerHeight;
            $('#page-sidebar').css('height', contentHeight);
            $('.scroll-sidebar').css('height', contentHeight);
            $('#page-content').css('min-height', contentHeight);
        }
    };
    MonarchUI.prototype.pageTransitions = function () {
        var transitions = ['.pt-page-moveFromLeft', 'pt-page-moveFromRight', 'pt-page-moveFromTop', 'pt-page-moveFromBottom', 'pt-page-fade', 'pt-page-moveFromLeftFade', 'pt-page-moveFromRightFade', 'pt-page-moveFromTopFade', 'pt-page-moveFromBottomFade', 'pt-page-scaleUp', 'pt-page-scaleUpCenter', 'pt-page-flipInLeft', 'pt-page-flipInRight', 'pt-page-flipInBottom', 'pt-page-flipInTop', 'pt-page-rotatePullRight', 'pt-page-rotatePullLeft', 'pt-page-rotatePullTop', 'pt-page-rotatePullBottom', 'pt-page-rotateUnfoldLeft', 'pt-page-rotateUnfoldRight', 'pt-page-rotateUnfoldTop', 'pt-page-rotateUnfoldBottom'];
        for (var i in transitions) {
            var transition_name = transitions[i];
            if ($('.add-transition').hasClass(transition_name)) {
                $('.add-transition').addClass(transition_name + '-init page-transition');
                setTimeout(function () {
                    $('.add-transition').removeClass(transition_name + ' ' + transition_name + '-init page-transition');
                }, 1200);
                return;
            }
        }
    };
    MonarchUI.prototype.sidebarToggle = function () {
        $("div[id='#fixed-sidebar']").on('click', function () {
            if ($(this).hasClass("switch-on")) {
                var windowHeight = $(window).height();
                var headerHeight = $('#page-header').height();
                var contentHeight = windowHeight - headerHeight;
                $('#page-sidebar').css('height', contentHeight);
                $('.scroll-sidebar').css('height', contentHeight);
                $('.scroll-sidebar').slimscroll({
                    height: '100%',
                    color: 'rgba(155, 164, 169, 0.68)',
                    size: '6px'
                });
                var headerBg = $('#page-header').attr('class');
                $('#header-logo').addClass(headerBg);
            }
            else {
                var windowHeight = $(document).height();
                var headerHeight = $('#page-header').height();
                var contentHeight = windowHeight - headerHeight;
                $('#page-sidebar').css('height', contentHeight);
                $('.scroll-sidebar').css('height', contentHeight);
                $(".scroll-sidebar").slimScroll({
                    destroy: true
                });
                $('#header-logo').removeClass('bg-gradient-9');
            }
        });
    };
    MonarchUI.prototype.sidebarMenu = function () {
        $('#sidebar-menu').superclick({
            animation: {
                height: 'show'
            },
            animationOut: {
                height: 'hide'
            }
        });
        var pathArr = window.location.pathname.split('/');
        var path = pathArr[pathArr.length - 1];
        if (path !== undefined) {
            $("#sidebar-menu").find("a[href$='" + path + "']").addClass('sfActive');
            $("#sidebar-menu").find("a[href$='" + path + "']").parents().eq(3).superclick('show');
        }
        $('#close-sidebar').click(function () {
            $('body').toggleClass('closed-sidebar');
            $('.glyph-icon', this).toggleClass('icon-angle-right').toggleClass('icon-angle-left');
        });
    };
    MonarchUI.prototype.dropdownSmooth = function () {
        $('.dropdown').on('show.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
        });
        $('.dropdown').on('hide.bs.dropdown', function (e) {
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
        });
    };
    MonarchUI.prototype.settingBar = function () {
        $(".theme-switcher").click(function () {
            $("#theme-options").toggleClass('active');
        });
        $('#theme-switcher-wrapper .switch-toggle').on('click', this, function () {
            var dataToggle = $(this).prev().attr('data-toggletarget');
            $('body').toggleClass(dataToggle);
            localStorage.setItem("body-class", $('body').attr("class"));
            if (dataToggle = 'closed-sidebar') {
                $('#close-sidebar .glyph-icon').toggleClass('icon-angle-right').toggleClass('icon-angle-left');
            }
        });
        $('.switch-toggle[id="#boxed-layout"]').click(function () {
            if ($('#boxed-layout').attr("checked")) {
                $('.boxed-bg-wrapper').slideDown();
            }
            else {
                $('.boxed-bg-wrapper').slideUp();
            }
            localStorage.setItem("boxed-layout", $('#boxed-layout').attr("checked"));
        });
        $('.scroll-switcher').slimscroll({
            height: '100%',
            color: 'rgba(0,0,0,0.3)',
            size: '10px',
            alwaysVisible: true
        });
        $('.set-adminheader-style').click(function () {
            $('.set-adminheader-style').removeClass('active');
            $(this).addClass('active');
            var newBg = $(this).attr('data-header-bg');
            $("#page-header").removeClass(function (index, css) {
                return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
            });
            $("#page-header").removeClass(function (index, css) {
                return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
            });
            $('#page-header').addClass(newBg);
            localStorage.setItem("page-header", newBg);
        });
        $('.set-sidebar-style').click(function () {
            $('.set-sidebar-style').removeClass('active');
            $(this).addClass('active');
            var newBg = $(this).attr('data-header-bg');
            $("#page-sidebar").removeClass(function (index, css) {
                return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
            });
            $("#page-sidebar").removeClass(function (index, css) {
                return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
            });
            $('#page-sidebar').addClass(newBg);
            localStorage.setItem("page-sidebar", newBg);
        });
    };
    MonarchUI.prototype.setHeaderStyle = function (newBg) {
        $("#page-header").removeClass(function (index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $("#page-header").removeClass(function (index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('#page-header').addClass(newBg);
    };
    MonarchUI.prototype.setSidebarStyle = function (newBg) {
        $("#page-sidebar").removeClass(function (index, css) {
            return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
        });
        $("#page-sidebar").removeClass(function (index, css) {
            return (css.match(/(^|\s)font-\S+/g) || []).join(' ');
        });
        $('#page-sidebar').addClass(newBg);
    };
    MonarchUI.prototype.swither_resizer = function () {
        var windowHeight = $(window).height();
        $('#theme-switcher-wrapper').height(windowHeight / 1.4);
    };
    MonarchUI.prototype.widgetInit = function () {
        $(function () {
            "use strict";
            $('a[href="#"]').click(function (event) {
                event.preventDefault();
            });
        });
        $(function () {
            "use strict";
            $(".todo-box li input").on('click', function () {
                $(this).parent().toggleClass('todo-done');
            });
        });
        $(function () {
            "use strict";
            var overall_width = 0;
            $('.timeline-scroll .tl-row').each(function (index, elem) {
                var $elem = $(elem);
                overall_width += $elem.outerWidth() + parseInt($elem.css('margin-left'), 10) + parseInt($elem.css('margin-right'), 10);
            });
            $('.timeline-horizontal', this).width(overall_width);
        });
        $(function () {
            "use strict";
            $('.input-switch-alt').simpleCheckbox();
        });
        $(function () {
            "use strict";
            $('.scrollable-slim').slimScroll({
                color: '#8da0aa',
                size: '10px',
                alwaysVisible: true
            });
        });
        $(function () {
            "use strict";
            $('.scrollable-slim-sidebar').slimScroll({
                color: '#8da0aa',
                size: '10px',
                height: '100%',
                alwaysVisible: true
            });
        });
        $(function () {
            "use strict";
            $('.scrollable-slim-box').slimScroll({
                color: '#8da0aa',
                size: '6px',
                alwaysVisible: false
            });
        });
        $(function () {
            "use strict";
            $('.loading-button').click(function () {
                var btn = $(this);
                btn.button('loading');
            });
        });
        $(function () {
            "use strict";
            $('.tooltip-button').tooltip({
                container: 'body'
            });
        });
        $(function () {
            "use strict";
            $('.alert-close-btn').click(function () {
                $(this).parent().addClass('animated fadeOutDown');
            });
        });
        $(function () {
            "use strict";
            $('.popover-button').popover({
                container: 'body',
                html: true,
                animation: true,
                content: function () {
                    var dataID = $(this).attr('data-id');
                    return $(dataID).html();
                }
            }).click(function (evt) {
                evt.preventDefault();
            });
        });
        $(function () {
            "use strict";
            $('.popover-button-default').popover({
                container: 'body',
                html: true,
                animation: true
            }).click(function (evt) {
                evt.preventDefault();
            });
        });
        var mUIColors = {
            'default': '#3498db',
            'gray': '#d6dde2',
            'primary': '#00bca4',
            'success': '#2ecc71',
            'warning': '#e67e22',
            'danger': '#e74c3c',
            'info': '#3498db'
        };
        var getUIColor = function (name) {
            if (mUIColors[name]) {
                return mUIColors[name];
            }
            else {
                return mUIColors['default'];
            }
        };
    };
    return MonarchUI;
}());
MonarchUI = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MonarchUI);

//# sourceMappingURL=monarch.module.js.map

/***/ }),

/***/ "../../../../../app/modules/notification.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Notification = (function () {
    function Notification() {
    }
    Notification.notySuccessMessage = function (message) {
        noty({
            text: message,
            type: 'success',
            dismissQueue: true,
            theme: 'agileUI',
            layout: 'top',
            timeout: 4000
        });
    };
    Notification.notyErrorMessage = function (message) {
        noty({
            text: message,
            type: 'error',
            dismissQueue: true,
            theme: 'agileUI',
            layout: 'top',
            timeout: 4000
        });
    };
    Notification.notyConfirmMessage = function (message, callback) {
        noty({
            text: message,
            type: 'information',
            layout: 'center',
            theme: 'agileUI',
            buttons: [
                {
                    addClass: 'btn btn-primary', text: 'Ok', onClick: function ($noty) {
                        $noty.close();
                        callback();
                    }
                },
                {
                    addClass: 'btn btn-danger', text: 'Cancel', onClick: function ($noty) {
                        $noty.close();
                    }
                }
            ]
        });
    };
    Notification.toastSuccessMessage = function (message) {
        $.jGrowl(message, {
            sticky: false,
            position: 'bottom-right',
            theme: 'bg-green'
        });
    };
    Notification.toastErrorMessage = function (message) {
        $.jGrowl(message, {
            sticky: false,
            position: 'bottom-right',
            theme: 'bg-red'
        });
    };
    return Notification;
}());
Notification = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], Notification);

//# sourceMappingURL=notification.module.js.map

/***/ }),

/***/ "../../../../../app/pages/403/403.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-layout>\r\n\t<img src=\"assets/images/blurred-bg/blurred-bg-5.jpg\" class=\"login-img wow fadeIn\" alt=\"\">\r\n\t<div class=\"center-vertical\">\r\n\t\t<div class=\"center-content row\">\r\n\t\t\t<div class=\"col-md-6 center-margin\">\r\n\t\t\t\t<div class=\"server-message wow bounceInDown inverse\">\r\n\t\t\t\t\t<h1>Error 403</h1>\r\n\t\t\t\t\t<h2>You might not have permission to use this feature</h2>\r\n\t\t\t\t\t<p>Try again in a few minutes or contact the website administrator.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</simple-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/403/403.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForbiddenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = (function () {
    function ForbiddenComponent() {
    }
    return ForbiddenComponent;
}());
ForbiddenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-forbidden',
        template: __webpack_require__("../../../../../app/pages/403/403.component.html")
    }),
    __metadata("design:paramtypes", [])
], ForbiddenComponent);

//# sourceMappingURL=403.component.js.map

/***/ }),

/***/ "../../../../../app/pages/404/404.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-layout>\r\n\t<img src=\"assets/images/blurred-bg/blurred-bg-2.jpg\" class=\"login-img wow fadeIn\" alt=\"\">\r\n\t<div class=\"center-vertical\">\r\n\t\t<div class=\"center-content row\">\r\n\t\t\t<div class=\"col-md-6 center-margin\">\r\n\t\t\t\t<div class=\"server-message wow bounceInDown inverse\">\r\n\t\t\t\t\t<h1>Error 404</h1>\r\n\t\t\t\t\t<h2>Page not found</h2>\r\n\t\t\t\t\t<p>The page you are looking for has been moved or no longer exists. Use the search field below to locate the page you were looking for.</p>\r\n\t\t\t\t\t<form>\r\n\t\t\t\t\t\t<div class=\"input-group mrg25B mrg10T input-group-lg\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"Search terms here...\" class=\"form-control\">\r\n\t\t\t\t\t\t\t<div class=\"input-group-btn\">\r\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" tabindex=\"-1\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyph-icon icon-search\"></i>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<button (click)=\"goBack()\" class=\"btn btn-lg btn-success\">Return to previous page</button>\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</simple-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/404/404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(location) {
        this.location = location;
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent.prototype.goBack = function () {
        this.location.back();
    };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'notfound',
        template: __webpack_require__("../../../../../app/pages/404/404.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], NotFoundComponent);

var _a;
//# sourceMappingURL=404.component.js.map

/***/ }),

/***/ "../../../../../app/pages/500/500.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-layout>\r\n\t<img src=\"assets/images/blurred-bg/blurred-bg-8.jpg\" class=\"login-img wow fadeIn\" alt=\"\">\r\n\t<div class=\"center-vertical\">\r\n\t\t<div class=\"center-content row\">\r\n\t\t\t<div class=\"col-md-6 center-margin\">\r\n\t\t\t\t<div class=\"server-message wow bounceInDown inverse\">\r\n\t\t\t\t\t<h1>Error 500</h1>\r\n\t\t\t\t\t<h2>The server encountered a syntax error and could not complete your request.</h2>\r\n\t\t\t\t\t<p>Try again in a few minutes or contact the website administrator.</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</simple-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/500/500.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerErrorComponent = (function () {
    function ServerErrorComponent() {
    }
    return ServerErrorComponent;
}());
ServerErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-server-error',
        template: __webpack_require__("../../../../../app/pages/500/500.component.html")
    }),
    __metadata("design:paramtypes", [])
], ServerErrorComponent);

//# sourceMappingURL=500.component.js.map

/***/ }),

/***/ "../../../../../app/pages/category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>Add Category</h2>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        Category Data\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"category\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Name</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"category.name\"  #name=\"ngModel\" placeholder=\"Category name\" />\r\n              <span class=\"input-validation\" *ngIf=\"!category.isNameValid().stat && (name.dirty || name.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of category.isNameValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Description</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"category.description\"  #description=\"ngModel\" placeholder=\"Category description\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-right\">\r\n            <div class=\"span7 col-sm-9\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div *ngIf=\"!category\">\r\n          Loading...\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCategoryComponent = (function () {
    function AddCategoryComponent(categoryService, location, _loadingSvc, router) {
        this.categoryService = categoryService;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.router = router;
        this.category = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["M" /* Category */]();
        this.isSubmited = false;
    }
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    AddCategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.category.isValid()) {
            this._loadingSvc.setValue(true);
            this.categoryService.create(this.category).then(function () {
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notySuccessMessage("Successfully created category with name: " + _this.category.name);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/categories']);
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage("Category could not be created with received data.");
            });
        }
    };
    AddCategoryComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AddCategoryComponent;
}());
AddCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-add-category',
        template: __webpack_require__("../../../../../app/pages/category/add-category.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddCategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ "../../../../../app/pages/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>All Categories</h2>\r\n    <p>List of all actived categories. You can create, update or delete category data.</p>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        Category List\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <table cellspacing=\"0\" width=\"100%\" class=\"table table-striped table-bordered responsive no-wrap\" id=\"datatable-example\">\r\n          <thead>\r\n            <tr>\r\n              <th>ID</th>\r\n              <th>Name</th>\r\n              <th>Description</th>\r\n              <th>Created At</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryComponent = (function () {
    function CategoryComponent(zone, router, windowRef, _loadingSvc, categoryService) {
        var _this = this;
        this.zone = zone;
        this.router = router;
        this.windowRef = windowRef;
        this._loadingSvc = _loadingSvc;
        this.categoryService = categoryService;
        windowRef.nativeWindow.angularComponentRefer = {
            zone: this.zone,
            componentFn: function (value) { return _this.removeItem(value); },
            component: this
        };
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.datatableInstance = $('#datatable-example').dataTable({
            "processing": true,
            "serverSide": true,
            "responsive": true,
            "columns": [
                { "data": "_id" },
                { "data": "name" },
                {
                    "data": "description",
                    "defaultContent": ""
                },
                {
                    "data": "created_date"
                },
            ],
            "columnDefs": [
                {
                    "render": function (row, type, val, meta) {
                        return "<a onclick=\"routeLink('category/" + val._id + "');\">\n              <button class=\"btn btn-primary\">Update</button>\n            </a> \n            <a onclick=\"removeItem('" + val._id + "');\">\n              <button class=\"btn btn-danger\">Delete</button>\n            </a>";
                    },
                    "targets": 4,
                    "orderable": false,
                    "data": "_id",
                },
                {
                    "render": function (row, type, val, meta) {
                        var d = new Date(val.created_date);
                        return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
                    },
                    "targets": 3
                },
                {
                    "width": "25%",
                    "targets": [1, 2]
                },
                {
                    "width": "20%",
                    "targets": [3]
                },
                {
                    "width": "10%",
                    "targets": [4]
                }
            ],
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'categories/data_table',
                "data": function (d) {
                    d["x-access-token"] = localStorage.getItem("auth_token");
                }
            }
        });
        $('.dataTables_filter input').attr("placeholder", "Search...");
    };
    CategoryComponent.prototype.removeItem = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyConfirmMessage("Are you sure you want to delete this category ?", function () {
            _this._loadingSvc.setValue(true);
            _this.categoryService.delete(id).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notySuccessMessage("Successfully deleted category with ID: " + id);
                _this._loadingSvc.setValue(false);
                _this.router.navigateByUrl('/categories');
                _this.datatableInstance.fnDraw();
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyErrorMessage("This category could not deleted.");
            });
        });
    };
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-category',
        template: __webpack_require__("../../../../../app/pages/category/category.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["H" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["H" /* CategoryService */]) === "function" && _e || Object])
], CategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../app/pages/category/update-category.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>Update Category</h2>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        Category Data\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"category\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Name</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"category.name\"  #name=\"ngModel\" placeholder=\"Category name\" />\r\n              <span class=\"input-validation\" *ngIf=\"!category.isNameValid().stat && (name.dirty || name.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of category.isNameValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Description</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"description\" name=\"description\" [(ngModel)]=\"category.description\"  #description=\"ngModel\" placeholder=\"Category description\" />\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-right\">\r\n            <div class=\"span7 col-sm-9\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div *ngIf=\"!category\">\r\n          Loading...\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/category/update-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateCategoryComponent = (function () {
    function UpdateCategoryComponent(categoryService, route, router, location, _loadingSvc) {
        this.categoryService = categoryService;
        this.route = route;
        this.router = router;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.isSubmited = false;
    }
    UpdateCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.categoryService.getCategory(params['id']); })
            .subscribe(function (category) {
            _this.category = new __WEBPACK_IMPORTED_MODULE_4_raven_index__["M" /* Category */]();
            for (var key in category)
                _this.category[key] = category[key];
        });
    };
    UpdateCategoryComponent.prototype.ngAfterViewInit = function () {
    };
    UpdateCategoryComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.category.isNameValid().stat) {
            this._loadingSvc.setValue(true);
            this.categoryService.update(this.category).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notySuccessMessage("Successfully updated category account with category name: " + _this.category.name);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/categories']);
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notyErrorMessage("Category could not be updated with received data.");
            });
        }
    };
    UpdateCategoryComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateCategoryComponent;
}());
UpdateCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'raven-update-category',
        template: __webpack_require__("../../../../../app/pages/category/update-category.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["H" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["H" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _e || Object])
], UpdateCategoryComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-category.component.js.map

/***/ }),

/***/ "../../../../../app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\tdashboard\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'dashboard',
        template: __webpack_require__("../../../../../app/pages/dashboard/dashboard.component.html")
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../app/pages/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<simple-layout>\r\n\t<img src=\"assets/images/blurred-bg/blurred-bg-1.jpg\" class=\"login-img wow fadeIn\" alt=\"\">\r\n\t<div class=\"center-vertical\">\r\n\t\t<div class=\"center-content row\">\r\n\t\t\t<form #loginForm=\"ngForm\" action=\"/login/\" (ngSubmit)=\"onSubmit()\" id=\"login-validation\" class=\"col-md-4 col-sm-5 col-xs-11 col-lg-3 center-margin\" method=\"POST\">\r\n\t\t\t\t{{model.name}}\r\n\t\t\t\t<div id=\"login-form\" class=\"content-box bg-default\">\r\n\t\t\t\t\t<div class=\"content-box-wrapper pad20A\">\r\n\t\t\t\t\t\t<img class=\"mrg25B center-margin radius-all-100 display-block\" src=\"https://agileui.com/demo/monarch/assets/image-resources/gravatar.jpg\" alt=\"\" />\r\n\t\t\t\t\t\t<div *ngIf=\"errorMessage\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t{{errorMessage}}\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div *ngIf=\"(username.errors && (username.dirty || username.touched)) || (password.errors && (password.dirty || password.touched))\" class=\"alert alert-danger\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"username.errors && (username.dirty || username.touched)\">\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!username.errors.required\">\r\n\t\t\t\t\t\t\t\t\tUsername is required\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!username.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tUsername must be at least 6 characters long.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!username.errors.maxlength\">\r\n\t\t\t\t\t\t\t\t\tUsername cannot be more than 24 characters long.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!password.errors.required\">\r\n\t\t\t\t\t\t\t\t\tPassword is required\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!password.errors.minlength\">\r\n\t\t\t\t\t\t\t\t\tPassword must be at least 6 characters long.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div [hidden]=\"!password.errors.maxlength\">\r\n\t\t\t\t\t\t\t\t\tPassword cannot be more than 24 characters long.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon addon-inside bg-gray\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyph-icon icon-envelope-o\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"model.username\" placeholder=\"Enter username\" minlength=\"4\" maxlength=\"24\" required #username=\"ngModel\" />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon addon-inside bg-gray\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"glyph-icon icon-unlock-alt\"></i>\r\n\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" minlength=\"4\" maxlength=\"24\" placeholder=\"Password\" required />\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!loginForm.form.valid\" class=\"btn btn-block btn-primary\">Login</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"checkbox-primary col-md-6\" style=\"height: 20px;\">\r\n\t\t\t\t\t\t\t\t<label>\r\n\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" id=\"loginCheckbox1\" class=\"custom-checkbox\"> Remember me\r\n\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"text-right col-md-6\">\r\n\t\t\t\t\t\t\t\t<a href=\"#\" class=\"switch-button\" switch-target=\"#login-forgot\" switch-parent=\"#login-form\" title=\"Recover password\">Forgot your password?</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id=\"login-forgot\" class=\"content-box bg-default hide\">\r\n\t\t\t\t\t<div class=\"content-box-wrapper pad20A\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t<label for=\"exampleInputEmail2\">Email address:</label>\r\n\t\t\t\t\t\t\t<div class=\"input-group\">\r\n\t\t\t\t\t\t\t\t<span class=\"input-group-addon addon-inside bg-gray\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"glyph-icon icon-envelope-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"exampleInputEmail2\" placeholder=\"Enter email\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"button-pane text-center\">\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn btn-md btn-primary\">Recover Password</button>\r\n\t\t\t\t\t\t<a href=\"#\" class=\"btn btn-md btn-link switch-button\" switch-target=\"#login-form\" switch-parent=\"#login-forgot\" title=\"Cancel\">Cancel</a>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t</div>\r\n</simple-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
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
    function LoginComponent(authService, location, router, _loadingSvc) {
        this.authService = authService;
        this.location = location;
        this.router = router;
        this._loadingSvc = _loadingSvc;
        this.model = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["N" /* User */]("", "");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this._loadingSvc.setValue(true);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this._loadingSvc.setValue(true);
        this.authService.login(this.model.username, this.model.password)
            .then(function () {
            _this.router.navigate(['/']);
        })
            .catch(function () {
            _this.errorMessage = "Login information incorrect. Try again";
        })
            .then(function () {
            _this._loadingSvc.setValue(false);
        });
    };
    LoginComponent.prototype.onClose = function () {
        this.location.back();
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../app/pages/login/login.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../app/pages/news/add-news.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>Add News</h2>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        News Data\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"news\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Title</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"news.title\"  #title=\"ngModel\" placeholder=\"News title\" />\r\n              <span class=\"input-validation\" *ngIf=\"!news.isTitleValid().stat && (title.dirty || title.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isTitleValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Thumbnail</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"file\" class=\"form-control\" id=\"thumbnail\" name=\"thumbnail\" [(ngModel)]=\"news.thumbnail\"  #thumbnail=\"ngModel\" (change)=\"onChange($event)\" />\r\n              <span class=\"input-validation\" *ngIf=\"!fileValidate.stat && (thumbnail.dirty || thumbnail.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of fileValidate.err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Category</label>\r\n            <div class=\"col-sm-6\">\r\n              <raven-dropdown [values]=\"categories\" [(value)]=\"news.category\" #category></raven-dropdown>\r\n              <span class=\"input-validation\" *ngIf=\"!news.isCategoryValid().stat && (category.dirty || category.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isCategoryValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Content</label>\r\n            <div class=\"col-sm-8\">\r\n              <ckeditor\r\n                [(ngModel)]=\"news.content\"\r\n                #content=\"ngModel\"\r\n                id=\"content\" name=\"content\"\r\n                debounce=\"500\">\r\n              </ckeditor>\r\n              <span class=\"input-validation\" *ngIf=\"!news.isContentValid().stat && (content.dirty || content.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isContentValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-right\">\r\n            <div class=\"span7 col-sm-9\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div *ngIf=\"!news\">\r\n          Loading...\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/news/add-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddNewsComponent = (function () {
    function AddNewsComponent(newsService, categoryService, authService, location, _loadingSvc, router) {
        this.newsService = newsService;
        this.categoryService = categoryService;
        this.authService = authService;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.router = router;
        this.news = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["J" /* News */]();
        this.isSubmited = false;
        this.fileValidate = { "err": [], stat: false };
        this.categories = [];
    }
    AddNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (listCategories) {
            var item;
            for (var _i = 0, listCategories_1 = listCategories; _i < listCategories_1.length; _i++) {
                item = listCategories_1[_i];
                _this.categories.push({ 'value': item._id, 'label': item.name });
            }
        });
    };
    AddNewsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        this.fileValidate = { "err": [], stat: false };
        if (!this.thumbnail) {
            this.fileValidate['err'].push("Thumbnail is required");
            this.fileValidate['stat'] = false;
        }
        else if (this.thumbnail[0].type && typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["L" /* MediaMimeType */][this.thumbnail[0].type] === 'undefined') {
            this.fileValidate['err'].push("The selected file is not a valid image file");
            this.fileValidate['stat'] = false;
        }
        else if (this.news.isValid()) {
            this._loadingSvc.setValue(true);
            this.news.author = this.authService.getUser();
            this.newsService.create(this.news, this.thumbnail).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notySuccessMessage("Successfully created news with title: " + _this.news.title);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/news']);
            }).catch(function (res) {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage("News could not be created with received data.");
            });
        }
    };
    AddNewsComponent.prototype.onChange = function (event) {
        this.thumbnail = event.srcElement.files;
    };
    AddNewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AddNewsComponent;
}());
AddNewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-add-news',
        template: __webpack_require__("../../../../../app/pages/news/add-news.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["I" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["I" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _f || Object])
], AddNewsComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=add-news.component.js.map

/***/ }),

/***/ "../../../../../app/pages/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>All News</h2>\r\n    <p>List of all actived news. You can create, update or delete news data.</p>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        News List\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <table cellspacing=\"0\" width=\"100%\" class=\"table table-striped table-bordered responsive no-wrap\" id=\"datatable-example\">\r\n          <thead>\r\n            <tr>\r\n              <th>Thumbnail</th>\r\n              <th>Title</th>\r\n              <th>Category</th>\r\n              <th>Author</th>\r\n              <th>Created At</th>\r\n              <th>Action</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = (function () {
    function NewsComponent(zone, router, windowRef, _loadingSvc, newsService) {
        var _this = this;
        this.zone = zone;
        this.router = router;
        this.windowRef = windowRef;
        this._loadingSvc = _loadingSvc;
        this.newsService = newsService;
        windowRef.nativeWindow.angularComponentRefer = {
            zone: this.zone,
            componentFn: function (value) { return _this.removeItem(value); },
            component: this
        };
    }
    NewsComponent.prototype.ngOnInit = function () {
        this.datatableInstance = $('#datatable-example').dataTable({
            "processing": true,
            "serverSide": true,
            "responsive": true,
            "columns": [
                { "data": "thumbnail" },
                { "data": "title" },
                { "data": "category.name" },
                { "data": "author.name" },
                { "data": "created_date" },
                { "data": "_id" },
            ],
            "aoColumnDefs": [
                {
                    "render": function (row, type, val, meta) {
                        return "<a onclick=\"routeLink('news/" + val._id + "');\">\n              <button class=\"btn btn-primary\">Update</button>\n            </a> \n            <a onclick=\"removeItem('" + val._id + "');\">\n              <button class=\"btn btn-danger\">Delete</button>\n            </a>";
                    },
                    "targets": 5,
                    "orderable": false,
                },
                {
                    "render": function (row, type, val, meta) {
                        return "<img src=\"" + __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].UploadUrl + "/" + val.thumbnail + "\" style=\"width: 50px; height: 50px\" />";
                    },
                    "targets": 0,
                    "orderable": false,
                    "bVisible": false,
                },
                {
                    "render": function (row, type, val, meta) {
                        var d = new Date(val.created_date);
                        return d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes();
                    },
                    "targets": 4
                }
            ],
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'news/data_table',
                "data": function (d) {
                    d["x-access-token"] = localStorage.getItem("auth_token");
                }
            }
        });
        $('.dataTables_filter input').attr("placeholder", "Search...");
    };
    NewsComponent.prototype.removeItem = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyConfirmMessage("Are you sure you want to delete this news ?", function () {
            _this._loadingSvc.setValue(true);
            _this.newsService.delete(id).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notySuccessMessage("Successfully deleted news with ID: " + id);
                _this._loadingSvc.setValue(false);
                _this.router.navigateByUrl('/news');
                _this.datatableInstance.fnDraw();
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyErrorMessage("This news could not deleted.");
            });
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-news',
        template: __webpack_require__("../../../../../app/pages/news/news.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["I" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["I" /* NewsService */]) === "function" && _e || Object])
], NewsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../app/pages/news/update-news.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n  <div id=\"page-title\">\r\n    <h2>Update News</h2>\r\n  </div>\r\n  <div class=\"panel\">\r\n    <div class=\"panel-body\">\r\n      <h3 class=\"title-hero\">\r\n        News Data\r\n      </h3>\r\n      <div class=\"example-box-wrapper\">\r\n        <form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"news\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Title</label>\r\n            <div class=\"col-sm-6\">\r\n              <input type=\"text\" class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"news.title\"  #title=\"ngModel\" placeholder=\"News title\" />\r\n              <span class=\"input-validation\" *ngIf=\"!news.isTitleValid().stat && (title.dirty || title.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isTitleValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Thumbnail</label>\r\n            <div class=\"col-sm-6\">\r\n              <img src=\"{{uploadUrl}}/{{news.thumbnail}}\" style=\"width: 50px; height: 50px\" />\r\n              <input type=\"file\" class=\"form-control\" id=\"thumbnail\" name=\"thumbnail\" (ngModel)=\"news.thumbnail\"  #thumbnail=\"ngModel\" (change)=\"onChange($event)\" />\r\n              <span class=\"input-validation\" *ngIf=\"!fileValidate.stat && (thumbnail.dirty || thumbnail.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of fileValidate.err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Category</label>\r\n            <div class=\"col-sm-6\">\r\n              <raven-dropdown [values]=\"categories\" [(value)]=\"news.category\" #category></raven-dropdown>\r\n              <span class=\"input-validation\" *ngIf=\"!news.isCategoryValid().stat && (category.dirty || category.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isCategoryValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"col-sm-3 control-label\">Content</label>\r\n            <div class=\"col-sm-8\">\r\n              <ckeditor\r\n                [(ngModel)]=\"news.content\"\r\n                #content=\"ngModel\"\r\n                id=\"content\" name=\"content\"\r\n                (change)=\"onChangeContent($event)\"\r\n                debounce=\"500\">\r\n              </ckeditor>\r\n              <span class=\"input-validation\" *ngIf=\"!news.isContentValid().stat && (content.dirty || content.touched || isSubmited)\"> \r\n                <ul>\r\n                  <li *ngFor=\"let e of news.isContentValid().err\">{{e}}</li>\r\n                </ul>\r\n              </span>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group text-right\">\r\n            <div class=\"span7 col-sm-9\">\r\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div *ngIf=\"!news\">\r\n          Loading...\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/news/update-news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateNewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateNewsComponent = (function () {
    function UpdateNewsComponent(newsService, categoryService, authService, location, route, _loadingSvc, router) {
        this.newsService = newsService;
        this.categoryService = categoryService;
        this.authService = authService;
        this.location = location;
        this.route = route;
        this._loadingSvc = _loadingSvc;
        this.router = router;
        this.news = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["J" /* News */]();
        this.isSubmited = false;
        this.fileValidate = { "err": [], stat: false };
        this.categories = [];
        this.uploadUrl = __WEBPACK_IMPORTED_MODULE_3_raven_index__["K" /* Config */].UploadUrl;
    }
    UpdateNewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategories().then(function (listCategories) {
            var item;
            for (var _i = 0, listCategories_1 = listCategories; _i < listCategories_1.length; _i++) {
                item = listCategories_1[_i];
                _this.categories.push({ 'value': item._id, 'label': item.name });
            }
        });
        this.route.params
            .switchMap(function (params) { return _this.newsService.getNews(params['id']); })
            .subscribe(function (news) {
            _this.news = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["J" /* News */]();
            for (var key in news)
                _this.news[key] = news[key];
        });
    };
    UpdateNewsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        this.fileValidate = { "err": [], stat: false };
        if (this.thumbnail && this.thumbnail[0].type && typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["L" /* MediaMimeType */][this.thumbnail[0].type] === 'undefined') {
            this.fileValidate['err'].push("The selected file is not a valid image file");
            this.fileValidate['stat'] = false;
        }
        else if (this.news.isValid()) {
            this._loadingSvc.setValue(true);
            this.news.author = this.authService.getUser();
            this.newsService.update(this.news, this.thumbnail).then(function (res) {
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notySuccessMessage("Successfully updated news with title: " + _this.news.title);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/news']);
            }).catch(function (res) {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage("News could not be updated with received data.");
            });
        }
    };
    UpdateNewsComponent.prototype.onChange = function (event) {
        this.thumbnail = event.srcElement.files;
    };
    UpdateNewsComponent.prototype.onChangeContent = function (event) {
        this.news.content = event;
    };
    UpdateNewsComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateNewsComponent;
}());
UpdateNewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-update-news',
        template: __webpack_require__("../../../../../app/pages/news/update-news.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["I" /* NewsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["I" /* NewsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["H" /* CategoryService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _g || Object])
], UpdateNewsComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=update-news.component.js.map

/***/ }),

/***/ "../../../../../app/pages/user/add-user.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\t<div id=\"page-title\">\r\n\t\t<h2>Add User</h2>\r\n\t</div>\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h3 class=\"title-hero\">\r\n\t\t\t\tUser Instance\r\n\t\t\t</h3>\r\n\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t<form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"user\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Username</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" [(ngModel)]=\"user.username\"  #username=\"ngModel\" (blur)=\"searchByUsername()\" placeholder=\"Username\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!usernameValidation().stat && (username.dirty || username.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of usernameValidation().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Password</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"  #password=\"ngModel\" placeholder=\"Password\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isPasswordValid().stat && (password.dirty || password.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isPasswordValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Retype Password</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"rPassword\" name=\"rPassword\" [(ngModel)]=\"user.rPassword\" #rPassword=\"ngModel\" placeholder=\"Retype password\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isrPasswordValid().stat && (rPassword.dirty || rPassword.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isrPasswordValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\"  #fullName=\"ngModel\" placeholder=\"Full name\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isNameValid().stat && (fullName.dirty || fullName.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isNameValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Email</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" (blur)=\"searchByEmail()\" #email=\"ngModel\" placeholder=\"Email\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!emailValidation().stat && (email.dirty || email.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of emailValidation().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Phone Number</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"user.phone_number\" value=\"{{user.phone_number}}\" #phone_number=\"ngModel\" placeholder=\"Phone number\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isPhoneNumberValid().stat\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isPhoneNumberValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-right\">\r\n\t\t\t\t\t\t<div class=\"span7 col-sm-9\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div *ngIf=\"!user\">\r\n\t\t\t\t\tLoading...\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/user/add-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddUserComponent = (function () {
    function AddUserComponent(userService, location, _loadingSvc, router) {
        this.userService = userService;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.router = router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["N" /* User */]("", "");
        this.isSubmited = false;
        this.prevUsername = "";
        this.prevEmail = "";
        this.isExistUsername = false;
        this.isExistEmail = false;
    }
    AddUserComponent.prototype.ngOnInit = function () {
    };
    AddUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.user.isValid() && !this.isExistEmail && !this.isExistUsername) {
            this._loadingSvc.setValue(true);
            this.userService.create(this.user).then(function () {
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notySuccessMessage("Successfully created user account with username: " + _this.user.username);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/users']);
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage("Account could not be created with received data.");
            });
        }
    };
    AddUserComponent.prototype.searchByEmail = function () {
        var _this = this;
        if (this.user.email == this.prevEmail) {
            return;
        }
        this.prevEmail = this.user.email;
        this.userService.searchByEmail(this.user.email, false).then(function (response) {
            _this.isExistEmail = response.count > 0;
        }).catch(function () {
            _this.isExistEmail = false;
        });
    };
    AddUserComponent.prototype.searchByUsername = function () {
        var _this = this;
        if (this.user.username == this.prevUsername) {
            return;
        }
        this.prevUsername = this.user.username;
        this.userService.searchByUsername(this.user.username, false).then(function (response) {
            _this.isExistUsername = response.count > 0;
        }).catch(function () {
            _this.isExistUsername = false;
        });
    };
    AddUserComponent.prototype.emailValidation = function () {
        if (this.isExistEmail == true) {
            return {
                stat: false,
                err: [
                    "This email is already registered please choose another one"
                ]
            };
        }
        return this.user.isEmailValid();
    };
    AddUserComponent.prototype.usernameValidation = function () {
        if (this.isExistUsername == true) {
            return {
                stat: false,
                err: [
                    "This username is already registered please choose another one"
                ]
            };
        }
        return this.user.isUsernameValid();
    };
    AddUserComponent.prototype.goBack = function () {
        this.location.back();
    };
    return AddUserComponent;
}());
AddUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-add-user',
        template: __webpack_require__("../../../../../app/pages/user/add-user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["G" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["G" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], AddUserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-user.component.js.map

/***/ }),

/***/ "../../../../../app/pages/user/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\t<div id=\"page-title\">\r\n\t\t<h2>Change Password</h2>\r\n\t</div>\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h3 class=\"title-hero\">\r\n\t\t\t\tChange Password\r\n\t\t\t</h3>\r\n\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t<form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"user\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Current Password</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"current\" name=\"current\" [(ngModel)]=\"currentPassword\"  #current=\"ngModel\" placeholder=\"Current password\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!isCurrentPasswordValid.stat && (current.dirty || current.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of isCurrentPasswordValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">New Password</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\"  #password=\"ngModel\" placeholder=\"Password\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isPasswordValid().stat && (password.dirty || password.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isPasswordValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Confirm Password</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"rPassword\" name=\"rPassword\" [(ngModel)]=\"user.rPassword\" #rPassword=\"ngModel\" placeholder=\"Retype password\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isrPasswordValid().stat && (rPassword.dirty || rPassword.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isrPasswordValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-right\">\r\n\t\t\t\t\t\t<div class=\"span7 col-sm-9\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div *ngIf=\"!user\">\r\n\t\t\t\t\tLoading...\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/user/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(authService, userService, route, router, location, _loadingSvc) {
        this.authService = authService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.location = location;
        this._loadingSvc = _loadingSvc;
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.user = new __WEBPACK_IMPORTED_MODULE_3_raven_index__["N" /* User */]("", "");
        this.user._id = this.authService.getUser()._id;
    };
    ChangePasswordComponent.prototype.isCurrentPasswordValid = function () {
        var err = [];
        var stat = true;
        if (!this.currentPassword) {
            err.push("Current Password is required");
            stat = false;
            return { stat: stat, err: err };
        }
        if (this.currentPassword.length < 5) {
            err.push("Current Password Length cannot be less than 5");
            stat = false;
        }
        if (this.currentPassword.length > 30) {
            err.push("Current Password Length cannot be more than 30");
            stat = false;
        }
        var myRe = /^[\d\w_.-]*$/;
        var myArray = myRe.exec(this.currentPassword);
        if (!myArray) {
            err.push("Current Password can only contain Letters, numbers, underscore(_) and hyphen(-).");
            stat = false;
        }
        return { stat: stat, err: err };
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.user.isPasswordValid().stat && this.user.isrPasswordValid().stat && this.isCurrentPasswordValid().stat) {
            this._loadingSvc.setValue(true);
            var pwObj = {
                "currentPassword": this.currentPassword,
                "newPassword": this.user.password
            };
            this.userService.changePassword(pwObj).then(function (res) {
                _this._loadingSvc.setValue(false);
                if (res.status && res.status == 'success') {
                    __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notySuccessMessage(res.message);
                    var that_1 = _this;
                    setTimeout(function () {
                        that_1.authService.logout();
                        that_1.router.navigate(['/login']);
                    }, 3000);
                }
                else if (res.status && res.status == 'error') {
                    __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage(res.message);
                }
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_3_raven_index__["z" /* Notification */].notyErrorMessage("Something wrong. Please try again later.");
            });
        }
    };
    ChangePasswordComponent.prototype.goBack = function () {
        this.location.back();
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-change-password',
        template: __webpack_require__("../../../../../app/pages/user/change-password.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["C" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["G" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["G" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _f || Object])
], ChangePasswordComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=change-password.component.js.map

/***/ }),

/***/ "../../../../../app/pages/user/update-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\t<div id=\"page-title\">\r\n\t\t<h2>Update Profile</h2>\r\n\t</div>\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h3 class=\"title-hero\">\r\n\t\t\t\tUser Profile\r\n\t\t\t</h3>\r\n\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t<form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"user\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Username</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"{{user.username}}\"   readonly=\"readonly\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\"  #fullName=\"ngModel\" placeholder=\"Full name\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isNameValid().stat && (fullName.dirty || fullName.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isNameValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Email</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" value=\"{{user.email}}\" readonly=\"readonly\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Phone Number</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"user.phone_number\" value=\"{{user.phone_number}}\" #phone_number=\"ngModel\" placeholder=\"Phone number\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isPhoneNumberValid().stat\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isPhoneNumberValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-right\">\r\n\t\t\t\t\t\t<div class=\"span7 col-sm-9\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div *ngIf=\"!user\">\r\n\t\t\t\t\tLoading...\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</full-layout>"

/***/ }),

/***/ "../../../../../app/pages/user/update-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateProfileComponent = (function () {
    function UpdateProfileComponent(userService, authService, route, router, location, _loadingSvc) {
        this.userService = userService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.isSubmited = false;
    }
    UpdateProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUser(_this.authService.getUser()._id); })
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_4_raven_index__["N" /* User */]("", "");
            for (var key in user)
                _this.user[key] = user[key];
        });
    };
    UpdateProfileComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.user.isNameValid().stat && this.user.isPhoneNumberValid().stat) {
            var submitUserObj = new __WEBPACK_IMPORTED_MODULE_4_raven_index__["N" /* User */]("", "");
            submitUserObj.name = this.user.name;
            submitUserObj.phone_number = this.user.phone_number;
            delete submitUserObj.password;
            delete submitUserObj.username;
            this._loadingSvc.setValue(true);
            this.userService.updateProfile(submitUserObj).then(function (res) {
                localStorage.setItem("user_info", JSON.stringify(res));
                _this.authService.setUser(res);
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notySuccessMessage("Successfully updated your profile.");
                _this._loadingSvc.setValue(false);
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notyErrorMessage("Your profile could not be updated with received data.");
            });
        }
    };
    UpdateProfileComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateProfileComponent;
}());
UpdateProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'raven-update-profile',
        template: __webpack_require__("../../../../../app/pages/user/update-profile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["G" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["G" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["C" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _f || Object])
], UpdateProfileComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=update-profile.component.js.map

/***/ }),

/***/ "../../../../../app/pages/user/update-user.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\t<div id=\"page-title\">\r\n\t\t<h2>Update User</h2>\r\n\t</div>\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h3 class=\"title-hero\">\r\n\t\t\t\tUser Instance\r\n\t\t\t</h3>\r\n\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t<form class=\"form-horizontal bordered-row\" method=\"post\" *ngIf=\"user\" #updateForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Username</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" value=\"{{user.username}}\"   readonly=\"readonly\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Full name</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\"  #fullName=\"ngModel\" placeholder=\"Full name\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isNameValid().stat && (fullName.dirty || fullName.touched || isSubmited)\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isNameValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Email</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" value=\"{{user.email}}\" readonly=\"readonly\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t<label class=\"col-sm-3 control-label\">Phone Number</label>\r\n\t\t\t\t\t\t<div class=\"col-sm-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"phone_number\" name=\"phone_number\" [(ngModel)]=\"user.phone_number\" value=\"{{user.phone_number}}\" #phone_number=\"ngModel\" placeholder=\"Phone number\" />\r\n\t\t\t\t\t\t\t<span class=\"input-validation\" *ngIf=\"!user.isPhoneNumberValid().stat\"> \r\n\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t<li *ngFor=\"let e of user.isPhoneNumberValid().err\">{{e}}</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"form-group text-right\">\r\n\t\t\t\t\t\t<div class=\"span7 col-sm-9\">\r\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-default\" (click)=\"goBack()\">Back</button>\r\n\t\t\t\t\t\t\t<input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t\t<div *ngIf=\"!user\">\r\n\t\t\t\t\tLoading...\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</full-layout>"

/***/ }),

/***/ "../../../../../app/pages/user/update-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UpdateUserComponent = (function () {
    function UpdateUserComponent(userService, route, router, location, _loadingSvc) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.location = location;
        this._loadingSvc = _loadingSvc;
        this.isSubmited = false;
    }
    UpdateUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.userService.getUser(params['id']); })
            .subscribe(function (user) {
            _this.user = new __WEBPACK_IMPORTED_MODULE_4_raven_index__["N" /* User */]("", "");
            for (var key in user)
                _this.user[key] = user[key];
        });
    };
    UpdateUserComponent.prototype.ngAfterViewInit = function () {
    };
    UpdateUserComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmited = true;
        if (this.user.isNameValid().stat && this.user.isPhoneNumberValid().stat) {
            this._loadingSvc.setValue(true);
            delete this.user.password;
            this.userService.update(this.user).then(function () {
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notySuccessMessage("Successfully updated user account with username: " + _this.user.username);
                _this._loadingSvc.setValue(false);
                _this.router.navigate(['/users']);
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_4_raven_index__["z" /* Notification */].notyErrorMessage("Account could not be updated with received data.");
            });
        }
    };
    UpdateUserComponent.prototype.goBack = function () {
        this.location.back();
    };
    return UpdateUserComponent;
}());
UpdateUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'raven-update-user',
        template: __webpack_require__("../../../../../app/pages/user/update-user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["G" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["G" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _e || Object])
], UpdateUserComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=update-user.component.js.map

/***/ }),

/***/ "../../../../../app/pages/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<full-layout>\r\n\t<div id=\"page-title\">\r\n\t\t<h2>All Users</h2>\r\n\t\t<p>List of all actived users. You can create, update or delete user data.</p>\r\n\t</div>\r\n\t<div class=\"panel\">\r\n\t\t<div class=\"panel-body\">\r\n\t\t\t<h3 class=\"title-hero\">\r\n\t\t\t\tUser List\r\n\t\t\t</h3>\r\n\t\t\t<div class=\"example-box-wrapper\">\r\n\t\t\t\t<table cellspacing=\"0\" width=\"100%\" class=\"table table-striped table-bordered responsive no-wrap\" id=\"datatable-example\">\r\n\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t<th>ID</th>\r\n\t\t\t\t\t\t\t<th>Username</th>\r\n\t\t\t\t\t\t\t<th>Full Name</th>\r\n\t\t\t\t\t\t\t<th>Email</th>\r\n\t\t\t\t\t\t\t<th>Phone Number</th>\r\n\t\t\t\t\t\t\t<th>Action</th>\r\n\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t</thead>\r\n\t\t\t\t\t<tbody>\r\n\t\t\t\t\t</tbody>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</full-layout>\r\n"

/***/ }),

/***/ "../../../../../app/pages/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(authService, zone, router, windowRef, _loadingSvc, userService) {
        var _this = this;
        this.authService = authService;
        this.zone = zone;
        this.router = router;
        this.windowRef = windowRef;
        this._loadingSvc = _loadingSvc;
        this.userService = userService;
        windowRef.nativeWindow.angularComponentRefer = {
            zone: this.zone,
            componentFn: function (value) { return _this.removeItem(value); },
            component: this
        };
    }
    UserComponent.prototype.removeItem = function (id) {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyConfirmMessage("Are you sure you want to delete this user ?", function () {
            _this._loadingSvc.setValue(true);
            _this.userService.delete(id).then(function () {
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notySuccessMessage("Successfully deleted user account with ID: " + id);
                _this._loadingSvc.setValue(false);
                _this.router.navigateByUrl('/users');
                _this.datatableInstance.fnDraw();
            }).catch(function () {
                _this._loadingSvc.setValue(false);
                __WEBPACK_IMPORTED_MODULE_2_raven_index__["z" /* Notification */].notyErrorMessage("This user could not deleted.");
            });
        });
    };
    UserComponent.prototype.destroyDatatable = function () {
        $('#datatable-example').dataTable().destroy();
    };
    UserComponent.prototype.initDatatable = function () {
        this.datatableInstance = $('#datatable-example').dataTable({
            "processing": true,
            "serverSide": true,
            "responsive": true,
            "columns": [
                { "data": "_id" },
                { "data": "username" },
                { "data": "name" },
                { "data": "email" },
                {
                    "data": "phone_number",
                    "defaultContent": ""
                }
            ],
            "columnDefs": [
                {
                    "render": function (row, type, val, meta) {
                        return "<a onclick=\"routeLink('user/" + val._id + "');\">\n              <button class=\"btn btn-primary\">Update</button>\n            </a> \n            <a onclick=\"removeItem('" + val._id + "');\">\n              <button class=\"btn btn-danger\">Delete</button>\n            </a>";
                    },
                    "targets": 5,
                    "orderable": false,
                    "data": "_id",
                },
                {
                    "width": "20%",
                    "targets": [1, 2, 3, 4]
                },
                {
                    "width": "10%",
                    "targets": [5]
                }
            ],
            "ajax": {
                "url": __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'users',
                "data": function (d) {
                    d["x-access-token"] = localStorage.getItem("auth_token");
                }
            }
        });
        $('.dataTables_filter input').attr("placeholder", "Search...");
    };
    UserComponent.prototype.ngOnInit = function () {
        this.initDatatable();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'raven-user',
        template: __webpack_require__("../../../../../app/pages/user/user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["F" /* WindowRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["E" /* LoadingIndicatorService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["G" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["G" /* UserService */]) === "function" && _f || Object])
], UserComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../app/raven.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sb-site\">\r\n\t<div id=\"page-wrapper\">\r\n\t\t<router-outlet name=\"header\"></router-outlet>\r\n\t\t<router-outlet name=\"sidebar\"></router-outlet>\r\n\t\t<setting></setting>\r\n\t\t<router-outlet></router-outlet>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../app/raven.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RavenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RavenComponent = (function () {
    function RavenComponent(monarchUI, zone, router, windowRef) {
        var _this = this;
        this.monarchUI = monarchUI;
        this.zone = zone;
        this.router = router;
        this.windowRef = windowRef;
        this.currentComponent = "";
        windowRef.nativeWindow.angularComponentRef = {
            zone: this.zone,
            componentFn: function (value) { return _this.routeLink(value); },
            component: this
        };
    }
    RavenComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("page-header") != null) {
            this.monarchUI.setHeaderStyle(localStorage.getItem("page-header"));
        }
        if (localStorage.getItem("page-sidebar") != null) {
            this.monarchUI.setSidebarStyle(localStorage.getItem("page-sidebar"));
        }
    };
    RavenComponent.prototype.ngAfterViewInit = function () {
        this.monarchUI.onLoad();
    };
    RavenComponent.prototype.onResize = function (event) {
        this.monarchUI.onSizer();
    };
    RavenComponent.prototype.routeLink = function (url) {
        this.router.navigate([url]);
    };
    return RavenComponent;
}());
RavenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'body',
        template: __webpack_require__("../../../../../app/raven.component.html"),
        host: {
            '(window:resize)': 'onResize($event)'
        },
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__raven_index__["y" /* MonarchUI */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__raven_index__["y" /* MonarchUI */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__raven_index__["F" /* WindowRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__raven_index__["F" /* WindowRef */]) === "function" && _d || Object])
], RavenComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=raven.component.js.map

/***/ }),

/***/ "../../../../../app/raven.enum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return StatusCode; });
/* unused harmony export Status */
/* unused harmony export DocumentMimeType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaMimeType; });
var Config;
(function (Config) {
    Config[Config["ApiUrl"] = "http://localhost:3003/"] = "ApiUrl";
    Config[Config["UploadUrl"] = "http://localhost:3003/uploads"] = "UploadUrl";
})(Config || (Config = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["Created"] = 201] = "Created";
    StatusCode[StatusCode["Accepted"] = 202] = "Accepted";
    StatusCode[StatusCode["Moved"] = 301] = "Moved";
    StatusCode[StatusCode["BadRequest"] = 400] = "BadRequest";
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["Error"] = 500] = "Error";
})(StatusCode || (StatusCode = {}));
var Status;
(function (Status) {
    Status[Status["Disable"] = 0] = "Disable";
    Status[Status["Enable"] = 1] = "Enable";
})(Status || (Status = {}));
var DocumentMimeType;
(function (DocumentMimeType) {
    DocumentMimeType[DocumentMimeType["application/pdf"] = 0] = "application/pdf";
    DocumentMimeType[DocumentMimeType["application/msword"] = 1] = "application/msword";
    DocumentMimeType[DocumentMimeType["application/vnd.ms-excel"] = 2] = "application/vnd.ms-excel";
    DocumentMimeType[DocumentMimeType["application/vnd.ms-powerpoint"] = 3] = "application/vnd.ms-powerpoint";
    DocumentMimeType[DocumentMimeType["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"] = 4] = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    DocumentMimeType[DocumentMimeType["application/vnd.openxmlformats-officedocument.wordprocessingml.document"] = 5] = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
})(DocumentMimeType || (DocumentMimeType = {}));
var MediaMimeType;
(function (MediaMimeType) {
    MediaMimeType[MediaMimeType["image/gif"] = 0] = "image/gif";
    MediaMimeType[MediaMimeType["image/jpeg"] = 1] = "image/jpeg";
    MediaMimeType[MediaMimeType["image/png"] = 2] = "image/png";
    MediaMimeType[MediaMimeType["image/bmp"] = 3] = "image/bmp";
    MediaMimeType[MediaMimeType["image/vnd.microsoft.icon"] = 4] = "image/vnd.microsoft.icon";
})(MediaMimeType || (MediaMimeType = {}));
//# sourceMappingURL=raven.enum.js.map

/***/ }),

/***/ "../../../../../app/raven.index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_app_routing_module__ = __webpack_require__("../../../../../app/modules/app-routing.module.ts");
/* unused harmony reexport AppRoutingModule */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_animation_module__ = __webpack_require__("../../../../../app/modules/animation.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_animation_module__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return __WEBPACK_IMPORTED_MODULE_1__modules_animation_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_monarch_module__ = __webpack_require__("../../../../../app/modules/monarch.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return __WEBPACK_IMPORTED_MODULE_2__modules_monarch_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_notification_module__ = __webpack_require__("../../../../../app/modules/notification.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return __WEBPACK_IMPORTED_MODULE_3__modules_notification_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loading_indicator_service__ = __webpack_require__("../../../../../app/services/loading-indicator.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return __WEBPACK_IMPORTED_MODULE_4__services_loading_indicator_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_loading_indicator_module__ = __webpack_require__("../../../../../app/modules/loading-indicator.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__modules_loading_indicator_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__includes_loading_indicator_component__ = __webpack_require__("../../../../../app/includes/loading-indicator.component.ts");
/* unused harmony reexport LoadingIndicatorComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__("../../../../../app/services/auth.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__ = __webpack_require__("../../../../../app/services/auth-guard.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return __WEBPACK_IMPORTED_MODULE_8__services_auth_guard_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_http_client_service__ = __webpack_require__("../../../../../app/services/http-client.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return __WEBPACK_IMPORTED_MODULE_9__services_http_client_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_window_service__ = __webpack_require__("../../../../../app/services/window.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return __WEBPACK_IMPORTED_MODULE_10__services_window_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_service__ = __webpack_require__("../../../../../app/services/user.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return __WEBPACK_IMPORTED_MODULE_11__services_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_category_service__ = __webpack_require__("../../../../../app/services/category.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return __WEBPACK_IMPORTED_MODULE_12__services_category_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_news_service__ = __webpack_require__("../../../../../app/services/news.service.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return __WEBPACK_IMPORTED_MODULE_13__services_news_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__raven_enum__ = __webpack_require__("../../../../../app/raven.enum.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return __WEBPACK_IMPORTED_MODULE_14__raven_enum__["c"]; });
/* unused harmony reexport Status */
/* unused harmony reexport DocumentMimeType */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return __WEBPACK_IMPORTED_MODULE_14__raven_enum__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return __WEBPACK_IMPORTED_MODULE_14__raven_enum__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_user__ = __webpack_require__("../../../../../app/models/user.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return __WEBPACK_IMPORTED_MODULE_15__models_user__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_category__ = __webpack_require__("../../../../../app/models/category.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return __WEBPACK_IMPORTED_MODULE_16__models_category__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_news__ = __webpack_require__("../../../../../app/models/news.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return __WEBPACK_IMPORTED_MODULE_17__models_news__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__includes_full_layout_component__ = __webpack_require__("../../../../../app/includes/full-layout.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_18__includes_full_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__includes_simple_layout_component__ = __webpack_require__("../../../../../app/includes/simple-layout.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_19__includes_simple_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__includes_header_component__ = __webpack_require__("../../../../../app/includes/header.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_20__includes_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__includes_sidebar_component__ = __webpack_require__("../../../../../app/includes/sidebar.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_21__includes_sidebar_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__includes_setting_component__ = __webpack_require__("../../../../../app/includes/setting.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_22__includes_setting_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__includes_dropdown_component__ = __webpack_require__("../../../../../app/includes/dropdown.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_23__includes_dropdown_component__["a"]; });
/* unused harmony reexport DropdownValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__raven_component__ = __webpack_require__("../../../../../app/raven.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_24__raven_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_404_404_component__ = __webpack_require__("../../../../../app/pages/404/404.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_25__pages_404_404_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_403_403_component__ = __webpack_require__("../../../../../app/pages/403/403.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_26__pages_403_403_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_500_500_component__ = __webpack_require__("../../../../../app/pages/500/500.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_27__pages_500_500_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_dashboard_dashboard_component__ = __webpack_require__("../../../../../app/pages/dashboard/dashboard.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_28__pages_dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_login_login_component__ = __webpack_require__("../../../../../app/pages/login/login.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_29__pages_login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_user_user_component__ = __webpack_require__("../../../../../app/pages/user/user.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_30__pages_user_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_user_update_user_component__ = __webpack_require__("../../../../../app/pages/user/update-user.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_31__pages_user_update_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_user_update_profile_component__ = __webpack_require__("../../../../../app/pages/user/update-profile.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_32__pages_user_update_profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_user_change_password_component__ = __webpack_require__("../../../../../app/pages/user/change-password.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_33__pages_user_change_password_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_user_add_user_component__ = __webpack_require__("../../../../../app/pages/user/add-user.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_34__pages_user_add_user_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_category_category_component__ = __webpack_require__("../../../../../app/pages/category/category.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_35__pages_category_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_category_add_category_component__ = __webpack_require__("../../../../../app/pages/category/add-category.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_36__pages_category_add_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_category_update_category_component__ = __webpack_require__("../../../../../app/pages/category/update-category.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_37__pages_category_update_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_news_news_component__ = __webpack_require__("../../../../../app/pages/news/news.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_38__pages_news_news_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_news_add_news_component__ = __webpack_require__("../../../../../app/pages/news/add-news.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_39__pages_news_add_news_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_news_update_news_component__ = __webpack_require__("../../../../../app/pages/news/update-news.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return __WEBPACK_IMPORTED_MODULE_40__pages_news_update_news_component__["a"]; });
// Module




// Loading indicator module



// Services







// Enum

// Model



// Includes






// Component

















//# sourceMappingURL=raven.index.js.map

/***/ }),

/***/ "../../../../../app/raven.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_app_routing_module__ = __webpack_require__("../../../../../app/modules/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RavenModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Module


var RavenModule = (function () {
    function RavenModule() {
    }
    return RavenModule;
}());
RavenModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__modules_app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["a" /* LoadingIndicatorModule */].forRoot(),
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["b" /* RavenComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["c" /* FullLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["d" /* SimpleLayoutComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["e" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["f" /* SidebarComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["g" /* SettingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["h" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["i" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["j" /* ForbiddenComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["k" /* ServerErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["l" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["m" /* UserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["n" /* UpdateUserComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["o" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["p" /* AddUserComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["q" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["r" /* AddCategoryComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["s" /* UpdateCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["t" /* ChangePasswordComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["u" /* UpdateProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["v" /* NewsComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["w" /* AddNewsComponent */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["x" /* UpdateNewsComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["y" /* MonarchUI */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["z" /* Notification */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["A" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["B" /* NotForUserGuard */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["C" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["D" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["E" /* LoadingIndicatorService */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["F" /* WindowRef */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["G" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__raven_index__["H" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_7__raven_index__["I" /* NewsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__raven_index__["b" /* RavenComponent */]]
    })
], RavenModule);

//# sourceMappingURL=raven.module.js.map

/***/ }),

/***/ "../../../../../app/raven.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__raven_module__ = __webpack_require__("../../../../../app/raven.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../app/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__raven_module__["a" /* RavenModule */]);
//# sourceMappingURL=raven.js.map

/***/ }),

/***/ "../../../../../app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotForUserGuard; });
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
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (state.url !== '/login' && !this.authService.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */]) === "function" && _b || Object])
], AuthGuard);

var NotForUserGuard = (function () {
    function NotForUserGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NotForUserGuard.prototype.canActivate = function (route, state) {
        if (state.url !== '/' && this.authService.isLoggedIn()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    };
    return NotForUserGuard;
}());
NotForUserGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["C" /* AuthService */]) === "function" && _d || Object])
], NotForUserGuard);

var _a, _b, _c, _d;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = AuthService_1 = (function () {
    function AuthService(http) {
        this.http = http;
        this.username = "";
        this.authToken = "";
        this.authUrl = __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + "authenticate";
        if (localStorage.getItem("user_info") != null) {
            AuthService_1.userInfo = JSON.parse(localStorage.getItem("user_info"));
        }
    }
    AuthService.prototype.getCookie = function (name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    };
    AuthService.prototype.login = function (username, password) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["e" /* URLSearchParams */]();
        urlSearchParams.append('username', username);
        urlSearchParams.append('password', password);
        var body = urlSearchParams.toString();
        return this.http.post(this.authUrl, urlSearchParams, options)
            .toPromise()
            .then(function (response) {
            var body = response.json();
            if (response.status == __WEBPACK_IMPORTED_MODULE_2_raven_index__["Q" /* StatusCode */].Success && body.token != null && body.user_info != null) {
                body.user_info.expired = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                AuthService_1.userInfo = body.user_info;
                localStorage.setItem("user_info", JSON.stringify(AuthService_1.userInfo));
                localStorage.setItem("auth_token", body.token);
            }
            return body;
        })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        return AuthService_1.userInfo != null &&
            (new Date().getTime() < new Date(AuthService_1.userInfo.expired).getTime());
    };
    AuthService.prototype.getUser = function () {
        return AuthService_1.userInfo;
    };
    AuthService.prototype.setUser = function (user) {
        AuthService_1.userInfo = user;
    };
    AuthService.prototype.getToken = function () {
        return "Token " + AuthService_1.userInfo.token;
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem("user_info");
        localStorage.removeItem("auth_token");
        AuthService_1.userInfo = null;
    };
    AuthService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error.message || error);
    };
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AuthService);

var AuthService_1, _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.categoryUrl = __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'category';
        this.categoriesUrl = __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'categories';
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategory = function (id) {
        var url = this.categoryUrl + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.delete = function (id) {
        var url = this.categoryUrl + "/" + id + "/";
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CategoryService.prototype.create = function (category) {
        return this.http
            .post(this.categoriesUrl + "/", category)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CategoryService.prototype.update = function (category) {
        var url = this.categoryUrl + "/" + category._id + "/";
        return this.http
            .put(url, category)
            .toPromise()
            .then(function () { return category; })
            .catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),

/***/ "../../../../../app/services/http-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HttpClient = (function () {
    function HttpClient(http) {
        this.http = http;
    }
    HttpClient.prototype.createAuthorizationHeader = function (headers) {
        headers.append('x-access-token', localStorage.getItem("auth_token"));
    };
    HttpClient.prototype.get = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        });
    };
    HttpClient.prototype.post = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.post(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.postWithFile = function (url, data) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('POST', url, true);
            xhr.setRequestHeader('x-access-token', localStorage.getItem("auth_token"));
            xhr.send(data);
        });
    };
    HttpClient.prototype.put = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.put(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.putWithFile = function (url, data) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('PUT', url, true);
            xhr.setRequestHeader('x-access-token', localStorage.getItem("auth_token"));
            xhr.send(data);
        });
    };
    HttpClient.prototype.patch = function (url, data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        headers.append('Content-Type', 'application/json');
        return this.http.patch(url, data, {
            headers: headers
        });
    };
    HttpClient.prototype.patchWithFile = function (url, data) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].create(function (observer) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        observer.next(JSON.parse(xhr.response));
                        observer.complete();
                    }
                    else {
                        observer.error(xhr.response);
                    }
                }
            };
            xhr.open('PATCH', url, true);
            xhr.setRequestHeader('x-access-token', localStorage.getItem("auth_token"));
            xhr.send(data);
        });
    };
    HttpClient.prototype.delete = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.createAuthorizationHeader(headers);
        return this.http.delete(url, {
            headers: headers
        });
    };
    return HttpClient;
}());
HttpClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HttpClient);

var _a;
//# sourceMappingURL=http-client.service.js.map

/***/ }),

/***/ "../../../../../app/services/loading-indicator.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingIndicatorService = (function () {
    function LoadingIndicatorService() {
        this.gLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LoadingIndicatorService.prototype.setValue = function (isLoading) {
        this.gLoading.emit(isLoading);
    };
    LoadingIndicatorService.prototype.getValue = function () {
        return this.gLoading;
    };
    return LoadingIndicatorService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], LoadingIndicatorService.prototype, "gLoading", void 0);
LoadingIndicatorService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], LoadingIndicatorService);

var _a;
//# sourceMappingURL=loading-indicator.service.js.map

/***/ }),

/***/ "../../../../../app/services/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsService = (function () {
    function NewsService(http) {
        this.http = http;
        this.newsUrl = __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'news';
    }
    NewsService.prototype.getAllNews = function () {
        return this.http.get(this.newsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.getNews = function (id) {
        var url = this.newsUrl + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    NewsService.prototype.delete = function (id) {
        var url = this.newsUrl + "/" + id + "/";
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    NewsService.prototype.create = function (news, files) {
        var formData = new FormData();
        formData.append("thumbnail", files[0], files[0].name);
        for (var property in news) {
            if (news.hasOwnProperty(property)) {
                if (typeof news[property] == 'object')
                    formData.append(property, news[property]._id);
                else
                    formData.append(property, news[property]);
            }
        }
        return this.http
            .postWithFile(this.newsUrl + "/", formData)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    NewsService.prototype.update = function (news, files) {
        var url = this.newsUrl + "/" + news._id + "/";
        var formData = new FormData();
        if (files)
            formData.append("thumbnail", files[0], files[0].name);
        for (var property in news) {
            if (news.hasOwnProperty(property)) {
                if (typeof news[property] == 'object')
                    formData.append(property, news[property]._id);
                else
                    formData.append(property, news[property]);
            }
        }
        return this.http
            .putWithFile(url, formData)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return NewsService;
}());
NewsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */]) === "function" && _a || Object])
], NewsService);

var _a;
//# sourceMappingURL=news.service.js.map

/***/ }),

/***/ "../../../../../app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_raven_index__ = __webpack_require__("../../../../../app/raven.index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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
        this.userUrl = __WEBPACK_IMPORTED_MODULE_2_raven_index__["K" /* Config */].ApiUrl + 'user';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.userUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.getUser = function (id) {
        var url = this.userUrl + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.delete = function (id) {
        var url = this.userUrl + "/" + id + "/";
        return this.http.delete(url)
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    UserService.prototype.create = function (user) {
        return this.http
            .post(this.userUrl + "s/", user)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.update = function (user) {
        var url = this.userUrl + "/" + user._id + "/";
        return this.http
            .put(url, user)
            .toPromise()
            .then(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.updateProfile = function (user) {
        var url = this.userUrl + "/update_profile/";
        return this.http
            .put(url, user)
            .toPromise()
            .then(function () { return user; })
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (data) {
        return this.http.post(this.userUrl + "/change_password/", data)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.patch = function (user) {
        var url = this.userUrl + "/" + user._id + "/";
        return this.http
            .patch(url, user)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    UserService.prototype.searchByEmail = function (term, exclude) {
        return this.http.get(this.userUrl + '/count_by_email/?email=' + term + '&exclude=' + exclude)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.searchByUsername = function (term, exclude) {
        return this.http.get(this.userUrl + '/count_by_username/?username=' + term + '&exclude=' + exclude)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        return Promise.reject(error.message || error);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_raven_index__["D" /* HttpClient */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../app/services/window.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WindowRef; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

function _window() {
    return window;
}
var WindowRef = (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());
WindowRef = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], WindowRef);

//# sourceMappingURL=window.service.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../app/raven.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map