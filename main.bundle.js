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

/***/ "./src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = " <app-nav-left></app-nav-left>\n<app-nav-right></app-nav-right>\n<app-header></app-header>\n<div class=\"about-container\">\n  <div class=\"half-left half\">\n    <span class=\"about-blurb\"><span class=\"bigtext\">Hi! </span> I'm Michael, a web developer and a creative. I have worked as a Front-End Web Developer, and a writer. Previous works include large dataset manipulation, data visualisation, and even a platform-wide UI/UX overhaul.\n      <br>\n      <br>\n     Currently I am working on a variable traffic system that uses a neural network and an algorithm to reduce travel time, and increase traffic flow in a simulated environment. </span>\n    <span class=\"about-blurb resume\">\n      You can download my resume by clicking, <a href=\"\">here</a>.</span>\n    <span class=\"about-blurb resume\">\n      I'm most proficient at programming:\n    </span>\n    <div class=\"icon-wrapper\">\n      <div class=\"icon-container angular\">\n        <i class=\"fab fa-angular icon\"></i>\n        <span class=\"icon-text\">AngularJS</span>\n      </div>\n      <div class=\"icon-container react\">\n        <i class=\"fab fa-react icon\"></i>\n        <span class=\"icon-text\">React</span>\n      </div>\n      <div class=\"icon-container node\">\n        <i class=\"fab fa-node-js icon\"></i>\n        <span class=\"icon-text\">Node.js</span>\n      </div>\n      <div class=\"icon-container python\">\n        <i class=\"fab fa-python icon\"></i>\n        <span class=\"icon-text\">Python</span>\n      </div>\n      <div class=\"icon-container ruby\">\n        <i class=\"fas fa-gem icon\"></i>\n        <span class=\"icon-text\">Ruby</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"half-right half\">\n    <div class=\"animation-layer\">\n      <span class=\"self-image\"></span>\n    </div>\n  </div>\n</div>\n<app-nav-footer></app-nav-footer>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\nabout {\n  display: inline-block;\n  width: 100%;\n  height: 100%; }\n\n.about-container {\n  margin: 9vh 11vh 0 11vh;\n  background-color: #ECECEC;\n  height: 81vh;\n  overflow-y: hidden;\n  font-size: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.about-container .half {\n    font-size: 0;\n    width: 50%;\n    display: inline-block;\n    height: 100%;\n    font-family: 'Poppins', sans-serif; }\n\n.about-container .half-left {\n      background-color: #F3D250; }\n\n.about-container .half-left .bigtext {\n        font-size: 10vh;\n        text-align: left;\n        display: inline-block;\n        padding: 4vh 0 0 3vw; }\n\n.about-container .half-left .about-blurb {\n        font-size: 3vh;\n        color: #3E3E3E;\n        padding: 2vh 0vh 2vh 2vw;\n        display: inline-block;\n        float: left;\n        line-height: 4vh;\n        text-align: left;\n        position: relative;\n        width: calc(100% - 2vw); }\n\n.about-container .half-left .resume {\n        font-size: 2.5vh; }\n\n.about-container .half-left .resume a {\n          text-decoration: none;\n          color: #ECECEC; }\n\n.about-container .half-left .resume a:hover {\n          text-decoration: underline; }\n\n.about-container .half-left .icon-wrapper {\n        position: absolute;\n        bottom: 12vh;\n        width: 44vw;\n        text-align: center; }\n\n.about-container .half-left .icon-wrapper .icon-container {\n          display: inline-block;\n          padding: 0 1.5vw; }\n\n.about-container .half-left .icon-wrapper .icon-container .icon {\n            -webkit-transition: all 0.08s ease-out;\n            transition: all 0.08s ease-out;\n            font-size: 6vh; }\n\n.about-container .half-left .icon-wrapper .icon-container .fa-gem {\n            -webkit-transform: rotate(330deg);\n                    transform: rotate(330deg); }\n\n.about-container .half-left .icon-wrapper .icon-container .icon-text {\n            -webkit-transition: color 0.08s ease-out;\n            transition: color 0.08s ease-out;\n            font-size: 2vh;\n            display: block;\n            font-weight: normal;\n            visibility: hidden;\n            color: #fff; }\n\n.about-container .half-left .icon-wrapper .icon-container:hover {\n          color: #fff; }\n\n.about-container .half-left .icon-wrapper .icon-container:hover .icon {\n            -webkit-transition: all 0.08s ease-in;\n            transition: all 0.08s ease-in;\n            -webkit-transform: scale(1.3);\n                    transform: scale(1.3); }\n\n.about-container .half-left .icon-wrapper .icon-container:hover .icon-text {\n            -webkit-transition: color 0.08s ease-in;\n            transition: color 0.08s ease-in;\n            visibility: visible; }\n\n.about-container .half-left .icon-wrapper .icon-container:hover .fa-gem {\n            -webkit-transition: all 0.08s ease-in;\n            transition: all 0.08s ease-in;\n            -webkit-transform: scale(1.25) rotate(330deg);\n                    transform: scale(1.25) rotate(330deg); }\n\n.about-container .half-right {\n      background-color: #3E3E3E; }\n\n.about-container .half-right .self-image {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        background-size: cover;\n        background-position: 20% 50%;\n        background-image: url(\"https://ronalechat.github.io/angular5site/assets/img/walkleysday2.JPG\");\n        display: block;\n        background-repeat: no-repeat;\n        -webkit-filter: grayscale(100%);\n                filter: grayscale(100%); }\n\n.about-container .half .animation-layer {\n      display: inline-block;\n      height: 100%;\n      width: 100%; }\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about/about.component.html"),
            styles: [__webpack_require__("./src/app/about/about.component.scss")]
        })
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<html ng-app=\"app\">\n  <head>\n    <title>Michael Z Lin</title>\n    <script defer src=\"https://use.fontawesome.com/releases/v5.0.8/js/all.js\"></script>\n    <style>\n      @import url('https://fonts.googleapis.com/css?family=Emblema+One|Montserrat+Subrayada:400,700|PT+Sans+Narrow:400,700|Poppins:700,800');\n    </style>\n  </head>\n\n  <router-outlet></router-outlet>\n</html>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__ = __webpack_require__("./node_modules/@fortawesome/fontawesome/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_solid__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-solid/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands__ = __webpack_require__("./node_modules/@fortawesome/fontawesome-free-brands/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("./src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__work_work_component__ = __webpack_require__("./src/app/work/work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__nav_footer_nav_footer_component__ = __webpack_require__("./src/app/nav-footer/nav-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__nav_left_nav_left_component__ = __webpack_require__("./src/app/nav-left/nav-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__nav_right_nav_right_component__ = __webpack_require__("./src/app/nav-right/nav-right.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] }
];
__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome__["a" /* default */].library.add(__WEBPACK_IMPORTED_MODULE_4__fortawesome_fontawesome_free_solid__["a" /* faEnvelopeSquare */], __WEBPACK_IMPORTED_MODULE_5__fortawesome_fontawesome_free_brands__["a" /* faTwitterSquare */]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__work_work_component__["a" /* WorkComponent */],
                __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__nav_footer_nav_footer_component__["a" /* NavFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__nav_left_nav_left_component__["a" /* NavLeftComponent */],
                __WEBPACK_IMPORTED_MODULE_14__nav_right_nav_right_component__["a" /* NavRightComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true }),
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
                // AngularFontAwesomeModule
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-left></app-nav-left>\n<app-nav-right></app-nav-right>\n<app-header></app-header>\n<div class=contact-container>\n  <div class=\"half-left half\">\n      <span class=\"contact-blurb\">\n        Feel free to reach out if you have any interesting opportunities, a willingness to collaborate, or if you’d simply like to know more!\n      </span>\n  </div>\n  <div class=\"half-right half\">\n    <div class=\"contact-link-container\">\n      <div class=\"email-link-container on-hover\">\n        <a class=\"email-link\" href=\"mailto:dir.michaellin@gmail.com\">\n          <span class=\"icon fas fa-envelope-square\"></span>\n        </a>\n      </div>\n      <div class=\"linkedin-link-container on-hover\">\n        <a class=\"linkedin-link\" href=\"https://www.linkedin.com/in/michael-z-lin/\" target=\"_blank\">\n          <i class=\"icon fab fa-linkedin\"></i>\n        </a>\n      </div>\n      <div class=\"twitter-link-container on-hover\">\n        <a class=\"twitter-link\" href=\"https://twitter.com/VMikeLActual\" target=\"_blank\">\n          <i class=\"icon fab fa-twitter-square\"></i>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<app-nav-footer></app-nav-footer>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  width: 100%;\n  height: 100%;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\ncontact {\n  display: inline-block;\n  text-align: center;\n  width: 100%;\n  height: 100%; }\n\n.contact-container {\n  margin: 10vh 11vh 0 11vh;\n  background-color: #ECECEC;\n  height: 81vh;\n  overflow-y: hidden;\n  font-size: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.contact-container .half {\n    font-size: 0;\n    width: 50%;\n    display: inline-block;\n    height: 80vh;\n    font-family: 'Poppins', sans-serif; }\n\n.contact-container .half-left {\n      background-color: #3E3E3E; }\n\n.contact-container .half-left .contact-blurb {\n        font-size: 3vh;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        color: #ECECEC;\n        line-height: 5vh;\n        text-align: left;\n        vertical-align: middle;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        padding: 7vh 3vw 7vh 3vw;\n        height: 80vh;\n        position: relative; }\n\n.contact-container .half-right {\n      background-color: #F78888; }\n\n.contact-container .half-right .contact-link-container {\n        font-size: 10vh;\n        display: -webkit-inline-box;\n        display: -ms-inline-flexbox;\n        display: inline-flex;\n        -webkit-box-align: center;\n            -ms-flex-align: center;\n                align-items: center;\n        position: relative;\n        width: 100%;\n        height: 100%; }\n\n.contact-container .half-right .contact-link-container .on-hover {\n          position: absolute;\n          vertical-align: bottom;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n\n.contact-container .half-right .contact-link-container .email-link-container {\n          display: inherit;\n          left: 20%; }\n\n.contact-container .half-right .contact-link-container .linkedin-link-container {\n          display: inherit;\n          left: 45%; }\n\n.contact-container .half-right .contact-link-container .twitter-link-container {\n          display: inherit;\n          left: 70%; }\n\n.contact-container .half-right .contact-link-container .icon {\n          -webkit-transition: all 0.24s ease-out;\n          transition: all 0.24s ease-out;\n          color: #ECECEC; }\n\n.contact-container .half-right .contact-link-container .on-hover:hover .icon {\n          -webkit-transition: -webkit-transform 0.08s ease-in;\n          transition: -webkit-transform 0.08s ease-in;\n          transition: transform 0.08s ease-in;\n          transition: transform 0.08s ease-in, -webkit-transform 0.08s ease-in;\n          -webkit-transform: scale(1.25);\n                  transform: scale(1.25);\n          color: #fff; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width nav header pull-top\">\n  <div class=\"border-container\">\n    <div class=\"hexagon\">\n      <a href=\"/angular5site/home\" class=\"home-link\">\n        <span class=\"name-first\">Michael</span>\n        <span class=\"name-middle\">Z</span>\n        <span class=\"name-last\">Lin</span>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ".header {\n  height: 9vh;\n  width: 100%;\n  display: block;\n  text-align: center;\n  z-index: 10;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  background-color: #ECECEC; }\n  .header .border-container {\n    border-bottom: 1px solid #3E3E3E;\n    height: 8.2vh;\n    display: inline-block;\n    width: 50vw;\n    text-align: -webkit-center; }\n  .header .border-container .home-link {\n      line-height: 25px;\n      text-decoration: none;\n      position: relative;\n      font-family: 'PT Sans Narrow', sans-serif;\n      font-weight: bold;\n      font-size: 34px;\n      padding: 6px 6px 2px 6px;\n      color: #ECECEC;\n      position: relative;\n      top: 16%;\n      left: 50%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%);\n      float: left;\n      display: inline-block;\n      vertical-align: middle; }\n  .header .border-container .home-link:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 1px;\n        bottom: 0;\n        left: 0;\n        background-color: #5DA2D5;\n        visibility: hidden;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        -webkit-transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s;\n        transition: all 0.5s cubic-bezier(1, 0.25, 0, 0.75) 0s; }\n  .header .border-container .home-link:hover:before {\n        visibility: visible;\n        -webkit-transform: scaleX(1);\n        transform: scaleX(1);\n        height: 5px;\n        margin-bottom: -3px; }\n  .hexagon {\n  position: relative;\n  width: 100px;\n  height: 57.74px;\n  background-color: #3E3E3E;\n  margin: 28.87px 0;\n  top: -6%; }\n  .hexagon:before,\n.hexagon:after {\n  content: \"\";\n  position: relative;\n  width: 0;\n  border-left: 50px solid transparent;\n  border-right: 50px solid transparent; }\n  .hexagon:before {\n  bottom: 81%;\n  border-bottom: 28.87px solid #3E3E3E; }\n  .hexagon:after {\n  top: 4%;\n  width: 0;\n  border-top: 28.87px solid #3E3E3E;\n  position: absolute;\n  left: 0;\n  top: 100%;\n  z-index: -1; }\n  .pull-top {\n  position: absolute;\n  top: 0; }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav-left></app-nav-left>\n<app-nav-right></app-nav-right>\n<app-header></app-header>\n<div class=home-container>\n  <div class=\"third home-link-plut\">\n    <div class=\"animation-layer plut-container\">\n      <a class=\"plut-link\" href=\"http://www.plutora.com/\" target=\"_blank\">\n        <span class=\"plut-text job-title\">front-end developer</span>\n        <span class=\"plut-image\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"third home-link-rotv\">\n    <div class=\"animation-layer rotv-container\">\n      <a class=\"rotv-link\" target=\"_blank\" href=\"http://www.imdb.com/name/nm6715644/\">\n        <span class=\"rotv-text title-text top\">RISE</span>\n        <span class=\"rotv-text title-text middle\">OF THE</span>\n        <span class=\"rotv-text title-text bottom\">VALKYRIE</span>\n        <span class=\"rotv-text credit\">co-writer</span>\n        <span class=\"rotv-image\"></span>\n      </a>\n    </div>\n  </div>\n  <div class=\"third home-link-wrs\">\n    <div class=\"animation-layer wrs-container\">\n      <a class=\"wrs-link\" href=\"https://wealth-redistribution-sim.herokuapp.com/\" target=\"_blank\">\n        <span class=\"wrs-text top\">WEALTH </span>\n        <span class=\"wrs-text center\">REDISTRIBUTION</span>\n        <span class=\"wrs-text bottom\">SIMULATOR</span>\n        <span class=\"wrs-text credit\">designer/developer</span>\n        <span class=\"wrs-image\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n<app-nav-footer></app-nav-footer>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = "html, body {\n  width: 100%;\n  height: 100%;\n  max-height: 100vh;\n  max-width: 100vw;\n  margin: 0px;\n  padding: 0px;\n  overflow-x: hidden;\n  overflow-y: hidden; }\n\nhome {\n  display: inline-block;\n  width: 100%;\n  height: 100%; }\n\n.home-container {\n  margin: 9vh 0 0 0;\n  background-color: #ECECEC;\n  height: 81vh;\n  overflow-y: hidden;\n  font-size: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.home-container .third {\n    font-size: 0;\n    width: 33.33333333%;\n    display: inline-block;\n    height: 100%;\n    font-family: 'Poppins', sans-serif;\n    overflow: hidden; }\n\n.home-container .third .animation-layer {\n      -webkit-transition: -webkit-transform .08s ease-out;\n      transition: -webkit-transform .08s ease-out;\n      transition: transform .08s ease-out;\n      transition: transform .08s ease-out, -webkit-transform .08s ease-out;\n      display: inline-block;\n      height: 100%;\n      width: 100%; }\n\n.home-container .third .animation-layer span {\n        font-size: 5vh; }\n\n.home-container .third .animation-layer:hover {\n      -webkit-transition: -webkit-transform .08s ease-in;\n      transition: -webkit-transform .08s ease-in;\n      transition: transform .08s ease-in;\n      transition: transform .08s ease-in, -webkit-transform .08s ease-in;\n      -webkit-transform: scale(1.02);\n              transform: scale(1.02); }\n\n.home-container .home-link-plut {\n    background-color: #F3D250; }\n\n.home-container .home-link-plut .plut-container .plut-image {\n      -webkit-transition: all .08s ease-out;\n      transition: all .08s ease-out;\n      position: relative;\n      background-image: url(\"https://ronalechat.github.io/angular5site/assets/img/justplutoralogo.png\");\n      width: 100%;\n      height: 100%;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: 50% 50%;\n      display: block;\n      -webkit-clip-path: polygon(5% 3%, 95% 3%, 95% 97%, 5% 97%);\n      clip-path: polygon(5% 3%, 95% 3%, 95% 97%, 5% 97%);\n      -webkit-filter: grayscale(100%);\n      filter: grayscale(100%); }\n\n.home-container .home-link-plut .plut-container .plut-text {\n      position: absolute;\n      z-index: 10;\n      color: #3E3E3E;\n      text-align: left;\n      padding: 0;\n      opacity: 0; }\n\n.home-container .home-link-plut .plut-container .plut-text.job-title {\n        width: calc(99vw / 3.38);\n        text-align: center;\n        margin-top: 73vh;\n        font-size: 4vh; }\n\n.home-container .home-link-plut .plut-container:hover .plut-image {\n      -webkit-transition: all 0.08s ease-in;\n      transition: all 0.08s ease-in;\n      background-image: url(\"https://ronalechat.github.io/angular5site/assets/img/plutoralogoandname.png\");\n      -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      -webkit-filter: grayscale(0%);\n      filter: grayscale(0%); }\n\n.home-container .home-link-plut .plut-container:hover .plutora-name {\n      visibility: hidden; }\n\n.home-container .home-link-plut .plut-container:hover .job-title {\n      opacity: 1; }\n\n.home-container .home-link-rotv {\n    background-color: #90CCF4; }\n\n.home-container .home-link-rotv .rotv-container {\n      opacity: 1;\n      text-align: left; }\n\n.home-container .home-link-rotv .rotv-container .rotv-text {\n        position: absolute;\n        z-index: 10;\n        color: white;\n        text-align: left;\n        padding: 0.6vh;\n        opacity: 0; }\n\n.home-container .home-link-rotv .rotv-container .credit {\n        text-align: center;\n        margin-top: 73vh;\n        width: calc(99vw / 3.38);\n        padding: 0; }\n\n.home-container .home-link-rotv .rotv-container .title-text {\n        font-size: 7vh;\n        margin-left: 1.5vw;\n        width: calc(99vw / 3.45); }\n\n.home-container .home-link-rotv .rotv-container .title-text.top {\n          margin-top: 42vh; }\n\n.home-container .home-link-rotv .rotv-container .title-text.middle {\n          margin-top: 47.1vh;\n          min-width: 20vw; }\n\n.home-container .home-link-rotv .rotv-container .title-text.bottom {\n          margin-top: 52.2vh; }\n\n.home-container .home-link-rotv .rotv-container .rotv-link {\n        width: 100%;\n        padding-top: 66.666666%;\n        position: relative; }\n\n.home-container .home-link-rotv .rotv-container .rotv-link .rotv-image {\n          -webkit-transition: all .08s ease-out;\n          transition: all .08s ease-out;\n          position: relative;\n          background-image: url(\"https://ronalechat.github.io/angular5site/assets/img/ROTVstabby.jpg\");\n          width: 150%;\n          height: 100%;\n          background-size: cover;\n          background-repeat: no-repeat;\n          background-position: 50% 50%;\n          left: -9.4vw;\n          opacity: 0.8;\n          display: block;\n          -webkit-clip-path: polygon(24.5% 3%, 84.7% 3%, 84.7% 97%, 24.5% 97%);\n          clip-path: polygon(24.5% 3%, 84.7% 3%, 84.7% 97%, 24.5% 97%);\n          -webkit-filter: grayscale(100%);\n          filter: grayscale(100%); }\n\n.home-container .home-link-rotv .rotv-container:hover .rotv-image {\n      -webkit-transition: all 0.08s ease-in;\n      transition: all 0.08s ease-in;\n      opacity: 1;\n      left: -14.9vw;\n      -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      -webkit-filter: grayscale(0%);\n      filter: grayscale(0%); }\n\n.home-container .home-link-rotv .rotv-container:hover .rotv-text {\n      -webkit-transition: opacity 0.08s ease-in;\n      transition: opacity 0.08s ease-in;\n      opacity: 1;\n      margin-left: 0; }\n\n.home-container .home-link-wrs {\n    background-color: #F78888;\n    z-index: 12; }\n\n.home-container .home-link-wrs .wrs-container .wrs-link {\n      position: relative; }\n\n.home-container .home-link-wrs .wrs-container .wrs-image {\n      -webkit-transition: all 0.08s ease-out;\n      transition: all 0.08s ease-out;\n      position: relative;\n      background-image: url(\"https://ronalechat.github.io/angular5site/assets/img/wrsbg.png\");\n      width: 100%;\n      height: 190%;\n      background-size: cover;\n      background-repeat: no-repeat;\n      background-position: 105% 50%;\n      display: block;\n      opacity: 0.8;\n      -webkit-clip-path: polygon(5% 1.5%, 95% 1.5%, 95% 51%, 5% 51%);\n      clip-path: polygon(5% 1.5%, 95% 1.5%, 95% 51%, 5% 51%);\n      -webkit-filter: grayscale(100%);\n      filter: grayscale(100%); }\n\n.home-container .home-link-wrs .wrs-container .wrs-text {\n      position: absolute;\n      display: inline-block;\n      z-index: 10;\n      color: white;\n      text-align: left;\n      vertical-align: middle;\n      width: calc(99vw / 3.38);\n      font-size: 5vh;\n      opacity: 0; }\n\n.home-container .home-link-wrs .wrs-container .wrs-text.top {\n        -webkit-transition: margin-top 0.08s ease-out;\n        transition: margin-top 0.08s ease-out;\n        margin-top: 15vh; }\n\n.home-container .home-link-wrs .wrs-container .wrs-text.center {\n        -webkit-transition: margin-top 0.08s ease-out;\n        transition: margin-top 0.08s ease-out;\n        margin-top: 19vh; }\n\n.home-container .home-link-wrs .wrs-container .wrs-text.bottom {\n        -webkit-transition: margin-top 0.08s ease-out;\n        transition: margin-top 0.08s ease-out;\n        margin-top: 23vh; }\n\n.home-container .home-link-wrs .wrs-container .wrs-text.credit {\n        font-size: 4vh;\n        margin-top: 73vh; }\n\n.home-container .home-link-wrs .wrs-container:hover .wrs-image {\n      -webkit-transition: all 0.08s ease-in;\n      transition: all 0.08s ease-in;\n      background-position: 50% 50%;\n      height: 100%;\n      opacity: 1;\n      -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      clip-path: polygon(0% 0%, 100% 0, 100% 100%, 0% 100%);\n      -webkit-filter: grayscale(0%);\n      filter: grayscale(0%); }\n\n.home-container .home-link-wrs .wrs-container:hover .wrs-text {\n      opacity: 1;\n      visibility: visible;\n      padding: 1vh; }\n\n.home-container .home-link-wrs .wrs-container:hover .top {\n      -webkit-transition: margin-top 0.08s ease-in;\n      transition: margin-top 0.08s ease-in;\n      margin-top: 46vh; }\n\n.home-container .home-link-wrs .wrs-container:hover .center {\n      -webkit-transition: margin-top 0.08s ease-in;\n      transition: margin-top 0.08s ease-in;\n      margin-top: 50vh; }\n\n.home-container .home-link-wrs .wrs-container:hover .bottom {\n      -webkit-transition: margin-top 0.08s ease-in;\n      transition: margin-top 0.08s ease-in;\n      margin-top: 54vh; }\n\n.home-container .home-link-wrs .wrs-container:hover .credit {\n      text-align: center; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav-footer/nav-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width nav footer pull-bottom\">\n  <a class=\"clickable\" href=\"/angular5site/home\">\n    <div class=\"full-width\">\n      <span class=\"footer-text\">W&nbsp;O&nbsp;R&nbsp;K</span>\n      <i class=\"fas fa-cubes\"></i>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/nav-footer/nav-footer.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n  height: 10vh; }\n\n.footer {\n  display: block;\n  text-align: center;\n  background-color: #ECECEC;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n\n.footer .clickable div .footer-text {\n    position: relative;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    float: left;\n    display: inline-block;\n    vertical-align: middle;\n    text-decoration: none;\n    font-family: 'PT Sans Narrow', sans-serif;\n    font-size: 7vh;\n    white-space: nowrap;\n    color: #3E3E3E;\n    font-weight: bold; }\n\n.footer .clickable div .fa-cubes:before {\n    font-size: 7vh;\n    visibility: hidden; }\n\n.footer .clickable div .fa-cubes {\n    color: #ECECEC;\n    margin-right: 200vh; }\n\n.footer:hover {\n  -webkit-transition: all .4s ease-in;\n  transition: all .4s ease-in;\n  background-color: #90CCF4; }\n\n.footer:hover .footer-text {\n    visibility: hidden; }\n\n.footer:hover .fa-cubes {\n    font-size: 7vh;\n    visibility: visible;\n    color: #ECECEC;\n    margin-top: 1vh;\n    margin-left: -10vw;\n    margin-right: 0 !important; }\n\n.pull-bottom {\n  position: absolute;\n  bottom: 0; }\n"

/***/ }),

/***/ "./src/app/nav-footer/nav-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavFooterComponent; });
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

var NavFooterComponent = /** @class */ (function () {
    function NavFooterComponent() {
    }
    NavFooterComponent.prototype.ngOnInit = function () {
    };
    NavFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-footer',
            template: __webpack_require__("./src/app/nav-footer/nav-footer.component.html"),
            styles: [__webpack_require__("./src/app/nav-footer/nav-footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavFooterComponent);
    return NavFooterComponent;
}());



/***/ }),

/***/ "./src/app/nav-left/nav-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-left full-height nav left pull-left\">\n  <a class=\"clickable\" href=\"/angular5site/about\">\n    <div class=\"full-height\">\n      <span class=\"vertical-text-left\">A B O U T</span>\n      <i class=\"fas fa-child\"></i>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/nav-left/nav-left.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-height-left {\n  background-color: #ECECEC;\n  float: left;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n  .full-height-left .clickable .full-height .vertical-text-left {\n    position: absolute;\n    top: 46%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    display: inline-block;\n    vertical-align: -webkit-baseline-middle;\n    text-decoration: none;\n    -webkit-transform: rotate(270deg);\n            transform: rotate(270deg);\n    -webkit-transform-origin: left top 0;\n            transform-origin: left top 0;\n    left: 1vw;\n    font-family: 'PT Sans Narrow', sans-serif;\n    font-weight: bold;\n    font-size: 7vh;\n    white-space: nowrap;\n    color: #3E3E3E;\n    margin-top: 7vw; }\n  .full-height-left .clickable .full-height .fa-child {\n    color: #ECECEC;\n    margin-top: 200vh; }\n  .left:hover {\n  -webkit-transition: all .4s ease-in;\n  transition: all .4s ease-in;\n  background-color: #F3D250; }\n  .left:hover .vertical-text-left {\n    visibility: hidden; }\n  .left:hover .fa-child {\n    -webkit-transition-delay: 400ms;\n            transition-delay: 400ms;\n    -webkit-transition: font-size 600ms ease-in;\n    transition: font-size 600ms ease-in;\n    font-size: 7vh;\n    margin-top: 45vh !important;\n    position: absolute;\n    left: 1.8vw; }\n  .left:hover .fa-child:after {\n    -webkit-transition: all 1s ease-in;\n    transition: all 1s ease-in;\n    visibility: visible;\n    color: #fff;\n    vertical-align: -webkit-baseline-middle; }\n"

/***/ }),

/***/ "./src/app/nav-left/nav-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavLeftComponent; });
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

var NavLeftComponent = /** @class */ (function () {
    function NavLeftComponent() {
    }
    NavLeftComponent.prototype.ngOnInit = function () {
    };
    NavLeftComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-left',
            template: __webpack_require__("./src/app/nav-left/nav-left.component.html"),
            styles: [__webpack_require__("./src/app/nav-left/nav-left.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavLeftComponent);
    return NavLeftComponent;
}());



/***/ }),

/***/ "./src/app/nav-right/nav-right.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-height-right full-height nav right pull-right\">\n  <a class=\"clickable\" href=\"/angular5site/contact\">\n    <div class=\"full-height\">\n      <span class=\"vertical-text-right\">C O N T A C T</span>\n      <i class=\"fas fa-braille\"></i>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/nav-right/nav-right.component.scss":
/***/ (function(module, exports) {

module.exports = ".full-height-right {\n  background-color: #ECECEC;\n  float: right;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out; }\n  .full-height-right .clickable .full-height .vertical-text-right {\n    position: absolute;\n    top: 83%;\n    left: 99vw;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    display: inline-block;\n    vertical-align: -webkit-baseline-middle;\n    text-decoration: none;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n    -webkit-transform-origin: left top 0;\n            transform-origin: left top 0;\n    font-family: 'PT Sans Narrow', sans-serif;\n    font-weight: bold;\n    font-size: 7vh;\n    white-space: nowrap;\n    margin-top: -26vw;\n    color: #3E3E3E; }\n  .full-height-right .clickable .full-height .fa-braille:before {\n    -webkit-transition: all 0.3 ease-out;\n    transition: all 0.3 ease-out;\n    font-size: 7vh;\n    visibility: hidden; }\n  .full-height-right .clickable .full-height .fa-braille {\n    color: #fff; }\n  .right:hover {\n  -webkit-transition: all 0.4s ease-in;\n  transition: all 0.4s ease-in;\n  background-color: #F78888; }\n  .right:hover .vertical-text-right {\n    visibility: hidden; }\n  .right:hover .fa-braille {\n    -webkit-transition-delay: 200ms;\n            transition-delay: 200ms;\n    -webkit-transition: visibility 0.5s linear, color 0.1s ease-in, -webkit-transform 0.3s ease-in;\n    transition: visibility 0.5s linear, color 0.1s ease-in, -webkit-transform 0.3s ease-in;\n    transition: visibility 0.5s linear, color 0.1s ease-in, transform 0.3s ease-in;\n    transition: visibility 0.5s linear, color 0.1s ease-in, transform 0.3s ease-in, -webkit-transform 0.3s ease-in;\n    font-size: 7vh;\n    visibility: visible;\n    margin-top: 49vh;\n    color: #fff;\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n"

/***/ }),

/***/ "./src/app/nav-right/nav-right.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavRightComponent; });
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

var NavRightComponent = /** @class */ (function () {
    function NavRightComponent() {
    }
    NavRightComponent.prototype.ngOnInit = function () {
    };
    NavRightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav-right',
            template: __webpack_require__("./src/app/nav-right/nav-right.component.html"),
            styles: [__webpack_require__("./src/app/nav-right/nav-right.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavRightComponent);
    return NavRightComponent;
}());



/***/ }),

/***/ "./src/app/work/work.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  work works!\n</p>\n"

/***/ }),

/***/ "./src/app/work/work.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/work/work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkComponent; });
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

var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-work',
            template: __webpack_require__("./src/app/work/work.component.html"),
            styles: [__webpack_require__("./src/app/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
}());



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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map