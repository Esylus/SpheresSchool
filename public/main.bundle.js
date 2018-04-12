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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n"

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
            styles: [__webpack_require__("./src/app/app.component.css")]
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_send_msg_service__ = __webpack_require__("./src/app/services/send-msg.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("./src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_ourschool_ourschool_component__ = __webpack_require__("./src/app/components/ourschool/ourschool.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_testimonials_testimonials_component__ = __webpack_require__("./src/app/components/testimonials/testimonials.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_piano_piano_component__ = __webpack_require__("./src/app/components/piano/piano.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_production_production_component__ = __webpack_require__("./src/app/components/production/production.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__ = __webpack_require__("./src/app/components/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_performance_performance_component__ = __webpack_require__("./src/app/components/performance/performance.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__ = __webpack_require__("./src/app/components/not-found/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'ourschool', component: __WEBPACK_IMPORTED_MODULE_8__components_ourschool_ourschool_component__["a" /* OurschoolComponent */] },
    { path: 'testimonials', component: __WEBPACK_IMPORTED_MODULE_9__components_testimonials_testimonials_component__["a" /* TestimonialsComponent */] },
    { path: 'piano', component: __WEBPACK_IMPORTED_MODULE_10__components_piano_piano_component__["a" /* PianoComponent */] },
    { path: 'production', component: __WEBPACK_IMPORTED_MODULE_11__components_production_production_component__["a" /* ProductionComponent */] },
    { path: 'performance', component: __WEBPACK_IMPORTED_MODULE_15__components_performance_performance_component__["a" /* PerformanceComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */] },
    { path: '404', component: __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__["a" /* NotFoundComponent */] },
    { path: '**', redirectTo: '/404' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_ourschool_ourschool_component__["a" /* OurschoolComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_testimonials_testimonials_component__["a" /* TestimonialsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_piano_piano_component__["a" /* PianoComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_production_production_component__["a" /* ProductionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_performance_performance_component__["a" /* PerformanceComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_not_found_not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_send_msg_service__["a" /* SendMsgService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "/* Stationary Hero Section */\r\n\r\n.bgContact {\r\n    background: url('contact.b8ef3918384ac9bb919a.jpg')  no-repeat center center fixed;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box; \r\n    position: relative;\r\n    top: 0;\r\n    left: 0;\r\n    overflow: auto;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-size: cover; \r\n    background-attachment: scroll\r\n}\r\n\r\n.landing-text {\r\n    margin-top: 50px;\r\n}\r\n\r\n.landing-text h1 {\r\n    font-size: 500%;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n}\r\n\r\n.landing-text h3 {\r\n\tfont-size: 250%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;\r\n    color: #FFF;\r\n}\r\n\r\n/* -----------------------------------Contact Form----------------------------- */\r\n\r\n.main-section{\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    padding-left: -30px;\r\n    padding: 0;\r\n}\r\n\r\n/* Main container */\r\n\r\n.modal-content {\r\n    background-color: #3b4652;\r\n    opacity: 0.95;\r\n    padding: 0 18px;\r\n    -webkit-box-shadow: 0px 0px 3px #848484;\r\n            box-shadow: 0px 0px 3px #848484; \r\n}\r\n\r\n/* Spheres Logo Container */\r\n\r\n.user-img {\r\n    margin-top: 35px;\r\n    margin-bottom: 35px;\r\n}\r\n\r\n/* Spheres Logo */\r\n\r\n.user-img img {\r\n    height: 75px;\r\n    width: 75px;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* Spacing between inputs */\r\n\r\n.form-group {\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* Input shaping */\r\n\r\n.form-group input {\r\n    height: 42px;\r\n    border-radius: 5px;\r\n    border: 0;\r\n    font-size: 18px;\r\n    padding-left: 54px;\r\n}\r\n\r\n/* Textbox shaping */\r\n\r\n.form-group textarea {\r\n    border-radius: 5px;\r\n    border: 0;\r\n    font-size: 18px;\r\n    padding-left: 54px;\r\n}\r\n\r\n.form-group::before{\r\n    font-family: 'Font Awesome\\ 5 Free';\r\n    content: \"\\f007\";\r\n    position: absolute;\r\n    font-size: 22px;\r\n    color: #555e60;\r\n    left: 28px;\r\n    padding-top: 4px;\r\n}\r\n\r\n/* Email */\r\n\r\n.form-group:nth-child(2)::before {\r\n    content: \"\\f0e0\";\r\n}\r\n\r\n/* Phone */\r\n\r\n.form-group:nth-child(3)::before {\r\n    content: \"\\f3cd\";\r\n}\r\n\r\n/* Message */\r\n\r\n.form-group:last-of-type::before {\r\n    content: \"\\f11c\";\r\n}\r\n\r\nbutton {\r\n    width: 40%;\r\n    margin: 5px 0 25px;\r\n}\r\n\r\n.btn {\r\n    background-color: #27c2a5;\r\n    color: #fff;\r\n    font-size: 19px;\r\n    padding: 7px 10px;\r\n    border-radius: 5px;\r\n    border-bottom: 4px solid #219882;\r\n}\r\n\r\n.btn:hover, .btn:focus {\r\n    background-color: #25a890 !important;\r\n    border-bottom: 4px solid #25a890;\r\n}\r\n\r\n.svg-inline--fa {\r\n    font-size: 20px;\r\n    margin-right: 7px;   \r\n}\r\n\r\n.forgot {\r\n    padding: 5px 0 25px;\r\n}\r\n\r\n.forgot a {\r\n    color: #c2fbfe;\r\n}\r\n\r\n.response p {\r\n\tfont-size: 100%;\r\n    font-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n}\r\n\r\n/*------------------------------------------Audio Icons -----------------------------*/\r\n\r\n.landing-text a {\r\n\tpadding-right : 0.5rem;\r\n  }\r\n\r\n.fa-facebook, .fa-instagram, .fa-linkedin,\r\n.fa-soundcloud, .fa-youtube {\r\n    font-size: 4.5em;\r\n}\r\n\r\n.fa-facebook{\r\n    color: #4267B2;\r\n  }\r\n\r\n.fa-instagram{\r\n\tcolor: #DF3A66;\r\n  }\r\n\r\n.fa-linkedin{\r\n\tcolor: #0077B5;\r\n  }\r\n\r\n.fa-soundcloud{\r\n\tcolor: #FF4700;\r\n  }\r\n\r\n.fa-youtube{\r\n\tcolor: #FF0000;\r\n  }\r\n\r\n.fa-facebook:hover,\r\n  .fa-instagram:hover,\r\n  .fa-linkedin:hover,\r\n  .fa-soundcloud:hover,\r\n  .fa-youtube:hover {\r\n\tcolor: #d5d5d5;\r\n  }\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n    .landing-text {\r\n        margin-top: 50px;\r\n        text-align: center;\r\n    }\r\n    \r\n    .landing-text h1 {\r\n        font-size: 350%;\r\n    }\r\n    \r\n    .landing-text h3 {\r\n        font-size: 200%;\r\n        padding: 10px;\r\n        \r\n    }\r\n\r\n    .fa-facebook, .fa-instagram, .fa-linkedin,\r\n    .fa-soundcloud, .fa-youtube {\r\n    font-size: 2.5em;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n\r\n    .landing-text {\r\n        margin-top: 50px;\r\n        text-align: center;\r\n\r\n    }\r\n    \r\n    .landing-text h1 {\r\n        font-size: 300%;\r\n    }\r\n    \r\n    .landing-text h3 {\r\n        font-size: 150%;\r\n        padding: 10px;\r\n    }\r\n\r\n    .fa-facebook, .fa-instagram, .fa-linkedin,\r\n    .fa-soundcloud, .fa-youtube {\r\n    font-size: 2em;\r\n    }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bgContact\">\r\n\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">  \r\n          \r\n            <div class=\"col-md-6\">\r\n                <div class=\"landing-text text-center\">        \r\n                 <h1>Get in touch with Spheres</h1>         \r\n                 <h3>778-317-9753</h3>         \r\n                 <h3>Anna@SpheresSchool.ca</h3>  \r\n                   <div class=\"col-12\">\r\n                     <a href=\"https://soundcloud.com/user-169407138\"><i class=\"fab fa-soundcloud\"></i></a>                     \r\n                     <a href=\"https://www.facebook.com/Kousk\"><i class=\"fab fa-facebook\"></i></a>\r\n                     <a href=\"https://www.instagram.com/spheresschool\"><i class=\"fab fa-instagram\"></i></a>\r\n                     <a href=\"https://www.linkedin.com/company/18518507/\"><i class=\"fab fa-linkedin\"></i></a>\r\n                     <a href=\"https://www.youtube.com/channel/UClk7P1TLnfFqvzYYqLcvixA/featured\"><i class=\"fab fa-youtube\"></i></a>\r\n                   </div>       \r\n               </div>\r\n            </div>          \r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"modal-dialog text-center\">\r\n                    <div class=\"col-sm-8 main-section\">\r\n                      <div class=\"modal-content\">\r\n                        <div class=\"col-12 user-img\">\r\n                          <img id=\"contactlogo\" src=\"../../../assets/images/logo.png\">                               \r\n                        </div>\r\n                \r\n                        <form class=\"col-12\" type=\"post\" (submit)=\"messageSubmit()\">\r\n                         \r\n                          <div class=\"form-group fullName\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Name\" [(ngModel)]=\"name\" name=\"name\">\r\n                          </div>\r\n                         \r\n                          <div class=\"form-group\">\r\n                            <input  type=\"email\" class=\"form-control\" placeholder=\"Enter Email\" [(ngModel)]=\"email\" name=\"email\">\r\n                          </div>\r\n                         \r\n                          <div class=\"form-group\">\r\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter Phone\" [(ngModel)]=\"phone\" name=\"phone\">\r\n                          </div>\r\n         \r\n                         <div class=\"form-group\">  \r\n                            <textarea  class=\"form-control\" name=\"message\" [(ngModel)]=\"message\" rows=\"4\" placeholder=\"Enter Message\"></textarea>\r\n                          </div>\r\n                         \r\n                          <button href=\"#\" type=\"submit\" class=\"btn\"><i class=\"fas fa-sign-in-alt\"></i>Send</button>\r\n                        </form>\r\n                \r\n                        <div class=\"col-12 response\">\r\n                          <p>{{response}}</p>\r\n                        </div>\r\n                \r\n                    </div>      <!-- End of modal content -->\r\n                  </div>\r\n                </div>        \r\n            </div>\r\n        </div>\r\n      </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_send_msg_service__ = __webpack_require__("./src/app/services/send-msg.service.ts");
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
    function ContactComponent(sendMsgService) {
        this.sendMsgService = sendMsgService;
        this.response = '';
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.messageSubmit = function () {
        var _this = this;
        var message = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        console.log(message);
        this.sendMsgService.sendMessage(message).subscribe(function (data) {
            if (data.success) {
                console.log('Message sent - Thanks');
                _this.response = 'Message sent';
                _this.name = '';
                _this.email = '';
                _this.phone = '';
                _this.message = '';
            }
            else {
                console.log('There was an error');
                _this.response = 'Error';
            }
        });
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_send_msg_service__["a" /* SendMsgService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nfooter {\r\n\tbackground-color: #000;\r\n\tcolor: #d5d5d5;\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n}\r\n\r\nhr.light-100 {\r\n\tborder-top: 1px solid #d5d5d5;\r\n\twidth: 100%;\r\n\tmargin-top: 0.8rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\nh5 {\r\n\tfont-size: 180%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n\th5 {\r\n\t\tfont-size: 150%;\r\n\t}\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n        <div class=\"col-12 text-center\">\r\n          <hr class=\"light-100\">\r\n          <h5 id=\"copyright\">&copy; SpheresSchool.ca</h5>\r\n        </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "/* -----------------------------------Globals-------------------- */\r\n.white{\r\n\tbackground-color: white;\r\n}\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n/* -------------------------------------Hero---------- */\r\n.bgHome{\r\n\tbackground: url('home.dc53b60bde98931e0324.jpg') no-repeat center center fixed;\r\n\tdisplay: table;\r\n\tposition: relative;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover;\r\n\tz-index: -1;\r\n}\r\n.bgHome:before{\r\n\tcontent: '';\r\n\tbackground: url('home.dc53b60bde98931e0324.jpg') no-repeat center center;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover; \r\n\tz-index: -1;\r\n}\r\n/* Style caption sitting directly in the center */\r\n.landing-text {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n  }\r\n/* Main Spheres heading */\r\n.landing-text h1 {\r\n\tfont-size: 900%;\r\n\ttext-shadow: 7px 2px 6px #000000;      \r\n\tcolor: #FFF;\r\n}\r\n/* School Of Music heading */\r\n.landing-text h3 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000000;\r\n\tcolor: #FFF;\r\n\tpadding-top: 20px;\r\n}\r\n/* School of Music horizontal line */\r\n.landing-text hr {\r\n\tborder-top: 4px solid #FFF;\r\n\t-webkit-box-shadow: 0px -1px;\r\n\t        box-shadow: 0px -1px;\r\n\twidth: 250px; \r\n\tpadding-bottom: 30px;\r\n\tmargin-top: -2px;\r\n}\r\n#herologo {\r\n\twidth: 250px;\r\n\tpadding-bottom: 20px;\r\n}\r\n/*------------------------------------ JumboTron Section----------------------- */\r\n.jumbotron {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0;                              /*Remove default jumbotron padding*/\r\n\tmargin-bottom: 0px;                            /* Removes small parralax gap */\r\n\tbackground-color: #000;\r\n\tborder-top: 1px solid #FFF;\r\n}\r\n.jumbotron h6 {\r\n\tpadding-top: 1%;\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n }\r\n/*----------------------------------------Welcome Section--------------------------*/\r\n/* Welcome section */\r\n.welcome {\r\n width: 75%;\r\n\tmargin: 0 auto; \r\n\tpadding-top: 4rem;\r\n}\r\n/* Welcome horizontal line */\r\n.welcome hr {\r\n\tborder-top: 2px solid #000;\r\n\twidth: 95%; \r\n\tmargin-top: .3rem;\r\n\tmargin-bottom: 1rem; \r\n}\r\n/* Welcome heading */\r\n.welcome h2 {\r\n\tfont-size: 450%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n/* Welcome sub heading */\r\n.welcome h6 {\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n.welcome span{\r\n\tcolor: #0d5f13;\t\r\n}\r\n/*------------------------------------------Audio Icons -----------------------------*/\r\n/* 3 Column Section Icons*/\r\n.fa-music{\r\n\tcolor: #0d5f13;\r\n}\r\n.fa-headphones{\r\n\tcolor: #563d7c;\r\n}\r\n.fa-microphone{\r\n\tcolor: #2163af;\r\n}\r\n.fa-music, .fa-headphones, .fa-microphone {\r\n\tfont-size: 8em;\r\n\tpadding-top: 18px;\r\n}\r\n.fa-music:hover,\r\n.fa-headphones:hover,\r\n.fa-microphone:hover {\r\n\tcolor: #d5d5d5;\r\n }\r\n/* Icons sub heading */\r\n.icons h5 {\r\n\tpadding-top: 1em;\r\n\tfont-size: 220%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n }\r\n.icons h6 {\r\n\tfont-size: 170%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n }\r\n/* ---------------------------------------------- Fixed-image-scolling------------------------------- */\r\n.fixed {\r\n  background: url('about.8d427a82275eca43b82f.jpg')  no-repeat center center fixed;\r\n  width: 100%;\r\n  height: 30vh;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  position: relative;\r\n  display: table;\r\n  background-size: cover;\r\n  margin-bottom: -16px;\r\n  z-index: -1;\r\n}\r\n/*----------------------------------------------- Logo 2 Part Section---------------------------------- */\r\n.logo {\r\n\tpadding-top: 75px;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n\tmargin-bottom: -50px;                              /* Removes small parallax gap */\r\n}\r\n#sphereslogo {\r\n\twidth: 300px;\r\n}\r\n.logo h2 {\r\n\tfont-size: 250%;\r\n}\r\n.logo p {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n/* Learn more + Contact buttons */\r\n.btn-primary {\r\n\tcolor: #000000;\r\n\tbackground-color: #FFF;\r\n\tborder: 1px solid rgb(26, 26, 26);\r\n\tmargin-bottom: 30px;\t\r\n}\r\n.btn-primary:hover {\r\n\tbackground-color: #3390bb;\r\n}\r\n/*----------------------------------------------- Social Media Connect Section --------------------------*/\r\n/* Connect heading */\r\n.connect h2 {\r\n\tfont-size: 500%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n\tpadding: 3rem;\r\n}\r\n/* Welcome horizontal line */\r\n.my-4 {\r\n\t\tborder-top: 2px solid #000;\r\n\t\twidth: 95%; \r\n\t\tmargin-top: .3rem;\r\n\t\tmargin-bottom: 1rem; \r\n}\r\n.social a {\r\n\tfont-size: 5.5em;\r\n\tpadding : 3.5rem;\r\n  }\r\n.fa-facebook{\r\n\tcolor: #4267B2;\r\n}\r\n.fa-instagram{\r\n\tcolor: #DF3A66;\r\n}\r\n.fa-linkedin{\r\n\tcolor: #0077B5;\r\n}\r\n.fa-soundcloud{\r\n\tcolor: #FF4700;\r\n}\r\n.fa-youtube{\r\n\tcolor: #FF0000;\r\n}\r\n.fa-facebook:hover,\r\n.fa-instagram:hover,\r\n.fa-linkedin:hover,\r\n.fa-soundcloud:hover,\r\n.fa-youtube:hover {\r\n\tcolor: #d5d5d5;\r\n}\r\n/*-------------------------------------------------- Footer Section--------------------------------------- */\r\n.footerDetails{\r\n\tbackground-color: #000;\r\n\tcolor: #d5d5d5;\r\n\tpadding-top: 2rem;\r\n}\r\nhr.light {\r\n\tborder-top: 1px solid #d5d5d5;\r\n\twidth: 75%;\r\n\tmargin-top: 0.8rem;\r\n\tmargin-bottom: 1rem;\r\n}\r\n.footertext p {\r\n\tfont-size: 130%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n}\r\n.footertext h5 {\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n}\r\n.footertext .btn-primary {\r\n\tmargin-bottom: 10px;\t\r\n}\r\n/* -----------------------------------Responsive Media Queries-------------------------------------------- */\r\n/*---Media Queries --*/\r\n@media (max-width: 992px) {\r\n\r\n}\r\n@media (max-width: 768px) {\r\n\r\n\t/* Main Spheres heading */\r\n\t.landing-text h1 {\r\n\t\tfont-size: 650%;\r\n\t}\r\n\r\n\t.welcome h2 {\r\n\t\tfont-size: 400%;\r\n\t}\r\n\r\n\t#sphereslogo {\r\n\t\twidth: 250px;\r\n\t}\r\n\r\n\t.welcome {\r\n\t   width: 85%;\r\n   }\r\n\r\n}\r\n@media (max-width: 576px) {\r\n\r\n\t/* Main Spheres heading */\r\n\t.landing-text h1 {\r\n\t\tfont-size: 500%;\r\n\t}\r\n\r\n\t/* School Of Music heading */\r\n\t.landing-text h3 {\r\n\t\tfont-size: 250%;\r\n\t\tpadding-top: 20px;\r\n\t}\r\n\r\n\t/* School of Music horizontal line */\r\n\t.landing-text hr {\r\n\t\twidth: 250px; \r\n\t\tpadding-bottom: 30px;\r\n\t\tmargin-top: -2px;\r\n\t}\r\n\r\n\t#herologo {\r\n\t\twidth: 200px;\r\n\t}\r\n\r\n\t.jumbotron h6 {\r\n\t\tfont-size: 150%;\r\n\t}\r\n\r\n\t.welcome h2 {\r\n\t\tfont-size: 300%;\r\n\t}\r\n\r\n\t.welcome h6 {\r\n\t\tfont-size: 150%;\r\n\t}\r\n\r\n\t.fa-music, .fa-headphones, .fa-microphone {\r\n\t\tfont-size: 6em;\r\n\t\tpadding-top: 18px;\r\n\t}\r\n\r\n\t.icons h6 {\r\n\t\tfont-size: 140%;\r\n\t }\r\n\r\n\t.logo h2 {\r\n\t\tfont-size: 200%;\r\n\t}\r\n\r\n\t.logo p {\r\n\t\tfont-size: 140%;\r\n\t}\r\n\t\r\n\t#sphereslogo {\r\n\t\twidth: 200px;\r\n\t}\r\n\t\r\n\t.connect h2 {\r\n\t\tfont-size: 350%;\r\n\t\tpadding: 2rem;\r\n\t}\r\n\t\r\n\t.social a {\r\n\t\tfont-size: 3.5em;\r\n\t\tpadding : 1.5rem;\r\n\t\t}\r\n\r\n\t#youtube{\r\n\t\tmargin-left: 35px;\r\n\t}\r\n\r\n\t.fixed {\r\n\t\tbackground: url('about.8d427a82275eca43b82f.jpg')  no-repeat center center;\r\n\t\twidth: 100%;\r\n\t\theight: 30vh;\r\n\t\t-webkit-box-sizing: border-box;\r\n\t\t        box-sizing: border-box;\r\n\t\tposition: relative;\r\n\t\tdisplay: table;\r\n\t\tbackground-size: cover;\r\n\t\tmargin-bottom: -16px;\r\n\t\tz-index: -1;\r\n\t  }\r\n\r\n}\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n\r\n<!-- fixed image background -->\r\n\r\n  <section class=\"bgHome\">\r\n      <div class=\"landing-text\">\r\n          <h1 class=\"display-2\">Spheres</h1>\r\n          <h3>School of Music</h3>\r\n          <hr>\r\n          <div class=\"col-lg-12\">\r\n              <img id=\"herologo\" src=\"../../../assets/images/logo.png\" class=\"img-fluid\">\r\n          </div>\r\n        </div> \r\n  </section>\r\n \r\n<!--- Jumbotron -->\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row jumbotron\">\r\n    <div class=\"col-12  text-center\">\r\n      <h6>Lessons individually designed to suit the unique talents of each student</h6>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--- Welcome Section -->\r\n\r\n\t<div class=\"container-fluid white padding\"> \r\n\t\t<div class=\"row welcome text-center\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<h2 class=\"display-4\">Learn With Passion</h2>\r\n\t\t\t</div>\r\n\t\t\t<hr>\r\n\t\t\t<div class=\"col-12\">\r\n            <h6 >Uncover the <span>d</span>epths of your uni<span>q</span>ue form of \r\n            musical <span>s</span>elf-expression by lea<span>r</span>ning and creating \r\n            mu<span>s</span>ic that inspires <span>y</span>ou. Through growth and \r\n            explo<span>r</span>ation, experience the fun a<span>n</span>d enjoyment \r\n            th<span>a</span>t are esse<span>n</span>tial to the a<span>r</span>t of \r\n            musical le<span>a</span>rning.</h6>      \r\n      </div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!--- Three Column Section -->\r\n\r\n<div class=\"container-fluid white padding\">\r\n\t\t<div class=\"row icons text-center\">\r\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">        \r\n        <a href=\"#\" [routerLink]=\"['/piano']\"><i class=\"fas fa-music\"></i></a>         \r\n\t\t\t\t<h5>Piano</h5>\r\n\t\t\t\t<h6>Technique & music theory</h6>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-xs-12 col-sm-6 col-md-4\">\r\n        <a href=\"#\" [routerLink]=\"['/production']\"><i class=\"fas fa-headphones\"></i></a>          \r\n\t\t\t\t<h5>Production</h5>\r\n\t\t\t\t<h6>Ableton Live & Garageband</h6>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col-sm-12 col-md-4\">\r\n        <a href=\"#\" [routerLink]=\"['/performance']\"><i class=\"fas fa-microphone\"></i></a>            \r\n\t\t\t\t<h5>Performance</h5>\r\n\t\t\t\t<h6>We can get you started</h6>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!--- Fixed background -->\r\n\r\n<figure>\r\n\t\t<div class=\"fixed-wrap\">\r\n\t\t\t<div class=\"fixed\">\r\n\t\t\t</div>\r\n\t\t</div>\r\n</figure>\r\n\r\n<!--- Two Column Section -->\r\n\r\n<div class=\"container-fluid white \">\r\n\t\t<div class=\"row logo padding\">      \r\n        <div class=\"col-lg-6\">\r\n          <h2>Spheres School of Music</h2>\r\n          <p>Dedicated to fueling the inspiration and curiosity of each student whether it's exploring piano basics, composing songs or producing with music software.</p>\r\n          <p>We believe that a solid musical production foundation will set you up to play and create music you love for the rest of your life</p>\r\n          <br>\r\n          <a href=\"#\" [routerLink]=\"['/ourschool']\" class=\"btn btn-primary\">Learn More</a>\r\n\t\t\t  </div>\r\n\t\t\t  <div class=\"col-lg-6\">\r\n\t\t\t  \t<img id=\"sphereslogo\" src=\"../../../assets/images/logo.png\" class=\"img-fluid\">\r\n\t\t  \t</div>\r\n\t\t</div>\r\n</div>\r\n<hr class=\"my-4\">\r\n  \r\n<!--- Connect -->\r\n\r\n<div class=\"container-fluid white padding\">\r\n    <div class=\"row text-center\">\r\n      <div class=\"connect col-12\">\r\n        <h2>Connect</h2>\r\n      </div>\r\n      <div class=\"col-12 social padding\">\r\n        <a href=\"https://soundcloud.com/user-169407138\"><i class=\"fab fa-soundcloud\"></i></a>        \r\n        <a href=\"https://www.facebook.com/Kousk\"><i class=\"fab fa-facebook\"></i></a>\r\n        <a href=\"https://www.instagram.com/spheresschool\"><i class=\"fab fa-instagram\"></i></a>\r\n        <a href=\"https://www.linkedin.com/company/18518507/\"><i class=\"fab fa-linkedin\"></i></a>\r\n        <a href=\"https://www.youtube.com/channel/UClk7P1TLnfFqvzYYqLcvixA/featured\"><i id=\"youtube\" class=\"fab fa-youtube\"></i></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!--- Footer Details -->\r\n\r\n<div class=\"footerDetails\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row footertext text-center\">\r\n       \r\n        <div class=\"col-md-4\">\r\n          <hr class=\"light\">\r\n          <h5>Contact</h5>\r\n          <hr class=\"light\">\r\n          <p>778-317-9753</p>\r\n          <p>Anna@SpheresSchool.ca</p>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <hr class=\"light\">\r\n          <h5>Our Hours</h5>\r\n          <hr class=\"light\"> \r\n          <p>Please contact for availability</p>\r\n          <a href=\"#\" [routerLink]=\"['/contact']\" class=\"btn btn-primary\">Contact</a>\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n          <hr class=\"light\">\r\n          <h5>Service Area</h5>\r\n          <hr class=\"light\">\r\n          <p>Greater Victoria Area, BC</p>\r\n          <p>Online Lessons Available</p>\r\n        </div>   \r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
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
            template: __webpack_require__("./src/app/components/home/home.component.html"),
            styles: [__webpack_require__("./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "\r\nnav.navbar {\r\n    width: 100%;\r\n    background-color: black;\r\n    border-bottom: 1px solid #FFF;\r\n}\r\n\r\nnav.navbar a {\r\n    font-size: 150%;\r\n}\r\n\r\n#whitelogo{\r\n    width: 50px;\r\n    margin-left: 5%;\r\n}\r\n\r\n/* Style nav items */\r\n\r\n.navbar .nav-item .nav-link{\r\n    color: rgb(255, 255, 255);\r\n    font-family: kouskFont, sans-serif;\r\n    font-size: 180%;\r\n    text-shadow: 3px 1px #000000;\r\n    padding-left: 15px;\r\n}\r\n\r\n.navbar .nav-item .nav-link:hover{\r\n    color: rgb(104, 104, 104);\r\n}\r\n\r\n/* Background of dropdowns  */\r\n\r\n.navbar-nav > li > .dropdown-menu {\r\n    background-color: #000;\r\n    border-radius: 5%;\r\n}\r\n\r\n/* Style dropdown nav items */\r\n\r\n.dropdown-menu .dropdown-item{\r\n    color: rgb(255, 255, 255);\r\n    font-family: kouskFont, sans-serif;\r\n    font-size: 160%;\r\n    background-color:#000;\r\n    text-shadow: 3px 1px #000000;\r\n}\r\n\r\n.dropdown-menu .dropdown-item:hover{\r\n    background-color:transparent;\r\n    color: rgb(104, 104, 104);\r\n}\r\n\r\n/* Toggler button border color */\r\n\r\nbutton.navbar-toggler{\r\n    border-color: rgb(251, 251, 251);\r\n    -webkit-box-shadow: 2px 1px #000000;\r\n            box-shadow: 2px 1px #000000;\r\n}\r\n\r\nbutton.navbar-toggler:hover{\r\n    border-color: rgb(104, 104, 104);\r\n    outline: none;    \r\n}\r\n\r\nbutton.navbar-toggler:focus{\r\n    border-color: #FFF; \r\n    outline: none;  \r\n}\r\n\r\n@media (max-width: 992px) {\r\n   \r\n    /* Style nav items */\r\n    .navbar .nav-item .nav-link{\r\n        font-size: 150%;\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n    /* Spheres White Logo */\r\n    nav.navbar a {\r\n        font-size: 120%;\r\n    }\r\n\r\n    #whitelogo{\r\n        width: 40px;\r\n        margin-left: 3%;\r\n    }\r\n\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<nav class=\"navbar navbar-expand-md navbar-dark fixed\" >\r\n\t<div class=\"container-fluid\">         \r\n              <a class=\"navbar-brand\" [routerLink]=\"['/']\"> \r\n                <img id=\"whitelogo\" src=\"../../../assets/images/whitelogo.png\" class=\"img-fluid\"> pheres</a>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n\t\t\t<ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>       \r\n          <li class=\"nav-item dropdown\" onmouseover=\"\">\r\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"  role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">About</a>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/ourschool']\">Our School</a>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/testimonials']\">Testimonials</a>           \r\n            </div>\r\n          </li>         \r\n          <li class=\"nav-item dropdown\" onmouseover=\"\">\r\n            <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\"  role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Lessons</a>\r\n            <div class=\"dropdown-menu\">\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/piano']\">Piano</a>\r\n              <a class=\"dropdown-item\" [routerLink]=\"['/production']\">Production</a>             \r\n              <a class=\"dropdown-item\" [routerLink]=\"['/performance']\">Performance</a>             \r\n            </div>\r\n          </li>  \r\n\t\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['/contact']\">Contact</a></li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
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

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ".bgNotFound {\r\n    width: 100%;\r\n    height: 100vh;\r\n    -webkit-box-sizing: border-box;\r\n            box-sizing: border-box;\r\n    background: url('notFound.f8711b24ad3e41fabb9e.jpg')  no-repeat 50% 50%;\r\n    display: table;\r\n    position: relative;\r\n    background-size: cover;\r\n}\r\n\r\n/* Style caption sitting directly in the center */\r\n\r\n.landing-text {\r\n\tdisplay: table-cell;\r\n\ttext-align: center;\r\n\tvertical-align: middle;\r\n}\r\n\r\n/* Main Spheres heading */\r\n\r\n.landing-text h1 {\r\n\tfont-size: 400%;\r\n\ttext-shadow: 2px 2px 4px #FFF;       \r\n\tcolor: #000;\r\n}\r\n\r\n/* School Of Music heading */\r\n\r\n.landing-text h3 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 2px 2px 4px #FFF;\r\n\tcolor: #000;\r\n}"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"bgNotFound\">\r\n    <div class=\"landing-text\">\r\n      <h1 class=\"display-2\">404- Page Not Found</h1>\r\n   </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/ourschool/ourschool.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.white{\r\n\tbackground-color: white;\r\n}\r\n\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n\r\n/*------------------------- Parralax Hero Section */\r\n\r\n.bgAbout {\r\n  background: url('about.8d427a82275eca43b82f.jpg')  no-repeat center center fixed;\r\n  display: table; \r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n}\r\n\r\n.bgAbout:before{\r\n\tcontent: '';\r\n\tbackground: url('about.8d427a82275eca43b82f.jpg') no-repeat center center;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover; \r\n\tz-index: -1;\r\n}\r\n\r\n.about-hero {\r\n  display: table-cell;\r\n\ttext-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n.about-hero h1 {\r\n\tfont-size: 700%;\r\n\ttext-shadow: 7px 2px 6px #000000;       \r\n\tcolor: #FFF;\r\n\tmargin-top: -40px;                       \r\n}\r\n\r\n.about-hero h3 {\r\n  font-size: 300%;\r\n  font-weight: 500;\r\n  text-shadow: 7px 2px 6px #000000;\r\n  color: #FFF;\r\n  padding-top: 20px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n#butterfly {\r\n  width: 70%;\r\n  margin: -40px;\r\n}\r\n\r\n/*----------------------------------------Our Purpose Section--------------------------*/\r\n\r\n.about {\r\n  width: 60%;\r\n  margin: 0 auto; \r\n  padding-top: 4rem;\r\n}\r\n\r\n.about hr {\r\n  border-top: 2px solid #000;\r\n  width: 95%; \r\n  margin-top: .3rem;\r\n  margin-bottom: 1rem; \r\n}\r\n\r\n.about h2 {\r\n  font-size: 500%;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\n.about h6 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\n/* -------------------------------Team Section */\r\n\r\n/* Meet heading */\r\n\r\n.team h2 {\r\n  font-size: 500%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  margin-top: 40px;\r\n  text-shadow: 7px 2px 6px #000000;  \r\n}\r\n\r\n.team h4 {\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n\r\n.team p {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n\r\n.card {\r\n  -webkit-box-shadow: 7px 2px 6px 0px rgba(0,0,0,0.75);\r\n}\r\n\r\n/* Learn more Buttons */\r\n\r\n.btn-primary {\r\n\tcolor: #000000;\r\n\tbackground-color: #FFF;\r\n\tborder: 1px solid rgb(26, 26, 26);\r\n\tmargin-bottom: 30px;\t\r\n}\r\n\r\n.btn-primary:hover {\r\n\tbackground-color: #3390bb;\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .about-hero h1 {\r\n    font-size: 600%;                  \r\n  }\r\n\r\n  .about-hero h3 {\r\n    font-size: 250%;\r\n  }\r\n\r\n  .about {\r\n    width: 80%;\r\n  }\r\n\r\n  .about h2 {\r\n    font-size: 400%;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n  .about-hero h1 {\r\n    font-size: 400%;                  \r\n  }\r\n\r\n  .about-hero h3 {\r\n    font-size: 225%;\r\n  }\r\n\r\n  #butterfly {\r\n    width: 90%;\r\n  }\r\n\r\n  .about {\r\n    width: 90%;\r\n  }\r\n\r\n  .about h2 {\r\n    font-size: 300%;\r\n  }\r\n\r\n  .about h6 {\r\n    font-size: 150%;\r\n    color: #000;\r\n  }\r\n\r\n  .team h2 {\r\n    font-size: 300%;\r\n  }\r\n\r\n  .team p {\r\n  \tfont-size: 140%;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/ourschool/ourschool.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<section class=\"bgAbout\">\r\n        <div class=\"about-hero\">\r\n            <h1 class=\"display-2\">Our School</h1>\r\n            <h3>Behind every door an adventure awaits</h3>\r\n            <img id=\"butterfly\" src=\"../../../assets/images/fly.png\" class=\"img-fluid\">\r\n        </div> \r\n</section>\r\n\r\n\r\n\r\n<!--- Our Purpose Section -->\r\n\r\n<div class=\"container-fluid white padding\"> \r\n\t\t<div class=\"row about text-center\">\t\r\n            <div class=\"col-12\">\r\n                <h2>Our Purpose</h2>\r\n            </div>           \t\t\r\n\t\t\t<hr>\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<h6 >Spheres strives to blend the worlds of classical music and electronic music production \r\n                    into a seamless education program that inspires and empowers students to explore, \r\n                    discover and express their passion for musical creativity and expression</h6>\r\n\r\n                <h6 >   After the fundamentals of musical language are learned students will be encouraged to \r\n                    create their own musical ideas. These musical ideas can be further developed into professional \r\n                    sounding songs using music production software such as Ableton Live or GarageBand</h6>\r\n            </div>\r\n            <hr>\r\n\t\t</div>\r\n</div>\r\n\r\n<!--- Meet the team -->\r\n\r\n<div class=\"container-fluid padding\">\r\n    <div class=\"row team text-center\">\r\n        <div class=\"col-12\">\r\n            <h2>Meet The Team</h2>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n    \r\n    <!--- Cards -->\r\n    <div class=\"container-fluid padding\">\r\n        <div class=\"row text-center team padding\">\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <img src=\"../../../assets/images/anna.jpeg\" class=\"card-img-top\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">Anna Kousk</h4>\r\n                        <p class=\"card-text\">Anna’s teaching philosophy arises from a space of inspiration and curiosity. \r\n                            In order to uncover the depths of each student’s unique form of creative self-expression,\r\n                            fun and enjoyment are fundamental to the process of musical learning, growth and exploration. \r\n                                Anna has been playing piano for 23 years, composing and performing her own music for 10 \r\n                                years and teaching for 5 years. With a BAMus & Minor in Sonic Arts from the University of \r\n                                Calgary, and an Electronic Music Production certificate from Langara College she has \r\n                                developed  her own innovative teaching style. This style builds practical piano techniques\r\n                                and music theory as a basic foundation for understanding and exploring musical language. \r\n                                There are further opportunities to integrate this knowledge into music production using \r\n                                new music technology to create full professional sounding songs.</p>\r\n                        <a href=\"https://soundcloud.com/kousk\" class=\"btn btn-primary\">See Profile</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"card\">\r\n                    <img src=\"../../../assets/images/pj.jpg\" class=\"card-img-top\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title\">PJ Miller</h4>\r\n                        <p class=\"card-text\">PJ is an experienced composer, audio engineer and concert sound designer \r\n                            with over 10 years experience in the music industry. Blending his classical guitar roots \r\n                            with modern production and sound design techniques, he has sculpted his own compositional \r\n                            approach with intricate classically inspired melodies morphed by innovative sound design. \r\n                            As a concert sound designer, he has tuned stereo rigs for concerts up to 20,000 people\r\n                            and has done many tours throughout North America and Europe. He spent several years \r\n                            as a sound designer in R&D at PK Sound developing large-format line array \r\n                            loudspeakers and subwoofers. All this live sound design experience has left him with \r\n                            a unique approach to mixing and mastering studio music. He has been training audio \r\n                            engineers in the art of acoustics for over 6 years with many of his students going on\r\n                            to become touring sound technicians.</p>\r\n                        <a href=\"https://soundcloud.com/esylus\" class=\"btn btn-primary\">See Profile</a>\r\n                    </div>\r\n                </div>\r\n            </div>                \r\n        </div>\r\n    </div>\r\n    \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/ourschool/ourschool.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurschoolComponent; });
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

var OurschoolComponent = /** @class */ (function () {
    function OurschoolComponent() {
    }
    OurschoolComponent.prototype.ngOnInit = function () {
    };
    OurschoolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ourschool',
            template: __webpack_require__("./src/app/components/ourschool/ourschool.component.html"),
            styles: [__webpack_require__("./src/app/components/ourschool/ourschool.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OurschoolComponent);
    return OurschoolComponent;
}());



/***/ }),

/***/ "./src/app/components/performance/performance.component.css":
/***/ (function(module, exports) {

module.exports = ".padding {\r\n\tpadding-bottom: 4rem;\r\n  }\r\n\r\n/* Carousel removed until further experimentation */\r\n\r\n/* .carousel-inner img \r\n{\r\n    box-sizing: border-box; \r\n    display: table;\r\n    position: relative;\r\n    height: 100vh;\r\n    width: 100%;\r\n    background-size: cover;\r\n    margin-top: -80px;\r\n}\r\n\r\n.carousel-caption {\r\n  position: absolute;\r\n  top: 45%;\r\n  transform: translateY(-50%);\r\n}\r\n  \r\n\r\n.carousel-caption h1 {\r\n  font-size: 800%;\r\n\ttext-shadow: 7px 2px 6px #FFF;    \r\n\tcolor: #000;   \r\n}\r\n  \r\n.carousel-caption h3 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;\r\n  color: #FFF;\r\n  padding-bottom: 40px;\r\n}\r\n  \r\n*/\r\n\r\n.bgProduct {\r\n  background: url('basscoast.634e6d2e8d34cbfcd608.jpg')  no-repeat 50% 50%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box; \r\n  display: table;\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.landing-text {\r\n  display: table-cell;\r\n\tvertical-align: middle;\r\n\tpadding-bottom: 100px;\r\n}\r\n\r\n.frame{\r\n\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\tborder-radius: 1%;\r\n\tmargin-left: 15%;\r\n\tmargin-right: 15%;\r\n}\r\n\r\n.landing-text h1 {\r\n  font-size: 800%;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n.landing-text h3 {\r\n\tfont-size: 350%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;\r\n\tcolor: #FFF ;\r\n}\r\n\r\n.btn-primary {\r\n  color: #000000;\r\n  background-color: #FFF;\r\n  border: 1px solid rgb(26, 26, 26);\r\n}\r\n\r\n.btn-primary:hover {\r\n  background-color: #3390bb;\r\n}\r\n\r\n/*----------------------------------------Welcome Section--------------------------*/\r\n\r\n.blackSpace{\r\n  width: 100%;\r\n  height: 80px;\r\n  background-color: #000;\r\n  border-top: 1px solid #FFF;\r\n}\r\n\r\n.perform {\r\n  width: 77%;\r\n  margin: 0 auto; \r\n  padding-top: 4rem;\r\n}\r\n\r\n.perform hr {\r\n  border-top: 2px solid #000;\r\n  width: 95%; \r\n  margin-top: .3rem;\r\n  margin-bottom: 1rem; \r\n}\r\n\r\n.perform h2 {\r\n  font-size: 500%;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\n.perform h6 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\n/*----------------------------------------------- Logo 2 Part Section---------------------------------- */\r\n\r\n.performdetail{\r\n\ttext-align: center;\r\n  vertical-align: middle;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.performdetail p {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n}\r\n\r\n.performdetail hr {\r\n  border-top: 2px solid #000;\r\n  width: 55%; \r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem; \r\n}\r\n\r\n#makemusic {\r\n  -webkit-filter:brightness(120%);\r\n          filter:brightness(120%);\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .landing-text h1 {\r\n    font-size: 500%;\r\n  }\r\n  \r\n  .landing-text h3 {\r\n    font-size: 225%;\r\n  }\r\n\r\n  .perform h2 {\r\n    font-size: 400%;\r\n  }\r\n  \r\n  .perform h6 {\r\n    font-size: 170%;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n  .landing-text h1 {\r\n    font-size: 400%;\r\n  }\r\n  \r\n  .landing-text h3 {\r\n    font-size: 200%;\r\n  }\r\n\r\n  .perform {\r\n    width: 90%;\r\n  }\r\n\r\n  .perform h2 {\r\n    font-size: 300%;\r\n  }\r\n  \r\n  .perform h6 {\r\n    font-size: 170%;\r\n  }\r\n\r\n}  "

/***/ }),

/***/ "./src/app/components/performance/performance.component.html":
/***/ (function(module, exports) {

module.exports = "<!--- Performance Hero Slider -->\r\n\r\n<!-- Carousel removed until further testing -->\r\n\r\n<!-- <div id=\"slides\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <ul class=\"carousel-indicators\">\r\n      <li data-target=\"#slides\" data-slide-to=\"0\" class=\"active\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"1\"></li>\r\n      <li data-target=\"#slides\" data-slide-to=\"2\"></li>\r\n    </ul>\r\n    <div class=\"carousel-inner\">\r\n      <div class=\"carousel-caption\">\r\n        <h1 class=\"display-2\">Performance</h1>\r\n        <h3>What are your dreams made of?</h3>\r\n        <button type=\"button\" class=\"btn btn-outline-light btn-lg\">Production</button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-lg\">Sign Up</button>\r\n      </div>\r\n      <div class=\"carousel-item active\">\r\n        <img src=\"../../../assets/images/kousk.jpg\">       \r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../../assets/images/basscoast.jpg\">\r\n      </div>\r\n      <div class=\"carousel-item\">\r\n        <img src=\"../../../assets/images/folkfest.jpg\">\r\n      </div>\r\n    </div>\r\n</div> -->\r\n  \r\n<!-- Main Hero Image -->\r\n\r\n<section class=\"bgProduct\">\r\n    <div class=\"landing-text text-center\">\r\n        <h1 class=\"display-2\">Performance</h1>\r\n        <h3>What are your dreams made of?</h3>      \r\n        \r\n        <a href=\"#\" [routerLink]=\"['/production']\"><button type=\"button\" class=\"btn btn-outline-light btn-lg\">Production</button></a>      \r\n        <a href=\"#\" [routerLink]=\"['/contact']\"><button type=\"button\" class =\"btn btn-primary btn-lg\">Sign Up</button></a>      \r\n    </div>\r\n</section>\r\n\r\n<!-- Black Jumbotron-like line -->\r\n\r\n<div class=\"blackSpace\"></div>\r\n  \r\n<!--- Welcome Section -->\r\n\r\n<div class=\"container-fluid white padding\"> \r\n\t\t<div class=\"row perform text-center\">\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<h2 class=\"display-4\">First listen - then build it... </h2>\r\n\t\t\t</div>\r\n\t\t\t<hr>\r\n\t\t\t<div class=\"col-12\">\r\n\t\t\t\t<h6>Music gives a soul to the universe, wings to the mind, flight to the imagination and life to everything</h6>\r\n        <h6> -- Plato </h6>\r\n      </div>\r\n\t\t</div>\r\n  </div>\r\n  \r\n  <!--- Two Column Section -->\r\n\r\n<div class=\"container-fluid  \">\r\n\t\t<div class=\"row performdetail\">      \r\n        <div class=\"col-lg-6\">     \r\n          <h2>Make great music</h2>\r\n         \r\n          <p>We can help you with this part! Writing comes from the soul and learning to listen can be \r\n           expediated through thoughtful instruction</p>\r\n           <hr>\r\n           <h2>Support a community / Make some friends</h2>\r\n          <p>You have to do this part! But it's fun - make friends, and support the community you admire\r\n           and want to be a part of</p>    \r\n           <hr>\r\n           <h2>Engage / Share</h2>\r\n          <p>Success is simply preparation meeting opportunity. Make great music and great friends and the \r\n           opportunities to share your music will surely follow</p>\r\n          </div>\r\n\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t<img id=\"makemusic\" src=\"../../../assets/images/writemusic.png\" class=\"img-fluid\">\r\n\t\t\t</div>\r\n \t</div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/performance/performance.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerformanceComponent; });
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

var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent() {
    }
    PerformanceComponent.prototype.ngOnInit = function () {
    };
    PerformanceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-performance',
            template: __webpack_require__("./src/app/components/performance/performance.component.html"),
            styles: [__webpack_require__("./src/app/components/performance/performance.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/components/piano/piano.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n\r\n.bgPiano {\r\n  background: url('piano.9621b2227f4a4b756909.jpg')  no-repeat 50% 50%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box; \r\n  display: table;\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n/*------------------------------------------ Hero Section */\r\n\r\n.landing-text {\r\n  display: table-cell;\r\n  padding-left: 20%;\r\n  padding-top: 150px;\r\n}\r\n\r\n.landing-text h1 {\r\n  font-size: 700%;\r\n\ttext-shadow: 7px 2px 6px #FFF;    \r\n  color: #000;\r\n}\r\n\r\n.landing-text h3 {\r\n\tfont-size: 300%;\r\n  font-weight: 500;\r\n  letter-spacing: 2px; \r\n\ttext-shadow: 7px 2px 6px #000;\r\n  color: #FFF;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.btnContact{\r\n  padding-left: 10%;\r\n}\r\n\r\n.btn-primary {\r\n\tcolor: #000000;\r\n\tbackground-color: #FFF;\r\n  border: 1px solid rgb(26, 26, 26);\r\n  padding-bottom: 10px;\r\n}\r\n\r\n.btn-primary:hover {\r\n\tbackground-color: #3390bb;\r\n}\r\n\r\n/*------------------------------------ JumboTron Section----------------------- */\r\n\r\n.jumbotron {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0;                          \r\n\tmargin-bottom: -65px;                          \r\n  background-color: #000;\r\n  border-top: 1px solid #FFF;\r\n}\r\n\r\n.jumbotron h6 {\r\n\tpadding-top: 1%;\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n }\r\n\r\n/* ---------------------------------------Piano Levels-------------------------------------- */\r\n\r\n.lessons hr {\r\n  border-top: 2px solid #000;\r\n  width: 35%; \r\n  margin-bottom: 2rem; \r\n}\r\n\r\n.lessons h1 {\r\n  font-size: 400%;\r\n  text-shadow: 7px 2px 6px #FFF;    \r\n  color: #000;\r\n  padding-top: 50px;\r\n}\r\n\r\n.piano h6 {\r\n  padding-top: 1%;\r\n  font-size: 175%;\r\n  font-weight: 500;\r\n  color: #000;\r\n}\r\n\r\n.black h1 {\r\n  color: white;\r\n  text-shadow: none;\r\n}\r\n\r\n.black hr {\r\n  border-top: 2px solid #FFF;\r\n}\r\n\r\n.black {\r\n  background-color: black;\r\n}\r\n\r\n.piano .card {\r\n  border:none;\r\n\r\n  \r\n}\r\n\r\n.black h6{\r\n  color: white;\r\n}\r\n\r\n#intermediate {\r\n  width: 55%;\r\n}\r\n\r\n#advanced {\r\n  width: 65%;\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .landing-text {\r\n    padding-left: 10%;\r\n    padding-top: 100px;\r\n  }\r\n\r\n  .landing-text h1 {\r\n    font-size: 500%;\r\n  }\r\n  \r\n  .landing-text h3 {\r\n    font-size: 225%;\r\n  }\r\n\r\n  .lessons h1 {\r\n    font-size: 400%;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n\r\n  .landing-text h1 {\r\n    font-size: 400%;\r\n  }\r\n  \r\n  .landing-text h3 {\r\n    font-size: 200%;\r\n  }\r\n\r\n  .jumbotron h6 {\r\n\t\tfont-size: 150%;\r\n  }\r\n  \r\n  .lessons h1 {\r\n    font-size: 300%;\r\n  }\r\n\r\n  .piano h6 {\r\n    font-size: 150%;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/components/piano/piano.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Main Hero Image -->\r\n\r\n<section class=\"bgPiano\">\r\n        <div class=\"landing-text\">\r\n            <h1 class=\"display-2\">Piano Lessons</h1>\r\n            <h3>Master proper technique while learning your favorite songs</h3>\r\n            <div class=\"btnContact\">\r\n                <a href=\"#\" [routerLink]=\"['/contact']\"><button type=\"button\" \r\n                    class =\"btn btn-primary btn-lg\">Sign Up</button></a>\r\n            </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n<!--- Jumbotron -->\r\n\r\n<div class=\"container-fluid padding\">\r\n        <div class=\"row jumbotron\">\r\n          <div class=\"col-12 text-center\">\r\n            <h6>It's never too late to learn to play the piano. No matter your age or level \r\n            of experience, Spheres will customize the lessons to meet your musical aspirations. </h6>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n<!--- Beginner -->\r\n\r\n<div class=\"container-fluid\">\r\n    <div class=\"row lessons text-center\">\r\n        <div class=\"col-12\">\r\n            <h1 class=\"display-4\">Beginner</h1>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<!--- Beginner Cards -->\r\n<div class=\"container-fluid padding\">\r\n    <div class=\"row piano\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card w-100\">\r\n                <div class=\"card-body\">\r\n                    <img src=\"../../../assets/images/beginner.jpg\" class=\"img-fluid\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card w-100 text-center\">\r\n                <div class=\"card-body\">\r\n                    <h6 class=\"card-text\">Students will learn how to read and write notes & rhythms,\r\n                    develop proper playing technique and learn basic music theory. </h6>\r\n                    <h6 class=\"card-text\"> They will develop skills in sight reading and ear training, and\r\n                    have the opportunity to play their favourite songs and create some of their own.</h6>\r\n                    <h6 class=\"card-text\">Preparation for Royal Conservatory Exams at the beginner level is offered.</h6>\r\n                </div>\r\n                </div>\r\n            </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card text-center w-100\">\r\n                <div class=\"card-body video-wrapper\">\r\n                    <div class=\"embed-responsive embed-responsive-4by3\">\r\n                        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/L8efNhZiQ2A?start=9\" \r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<!--- Intermediate -->\r\n<div class=\"container-fluid\">\r\n    <div class=\"row black lessons text-center\">\r\n        <div class=\"col-12\">\r\n            <h1 class=\"display-4\">Intermediate</h1>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<!--- Intermediate Cards -->\r\n<div class=\"container-fluid black padding\">\r\n    <div class=\"row piano \">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card w-100 text-center\">\r\n                <div class=\"card-body \">\r\n                <img id=\"intermediate\" src=\"../../../assets/images/intermediateS.jpg\" class=\"img-fluid\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card w-100 black text-center\">\r\n                <div class=\"card-body \">\r\n                    <h6 class=\"card-text\">Students will expand on the basics learned in beginner lessons to \r\n                    include major keys, chords, and scales. </h6>\r\n                    <h6 class=\"card-text\"> They will progress to more difficult levels of sight reading and \r\n                    ear training and move on to more challenging songs.</h6>\r\n                    <h6 class=\"card-text\">Preparation for Royal Conservatory Exams at the intermediate level is offered.</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card text-center w-100\">\r\n                <div class=\"card-body video-wrapper\">\r\n                    <div class=\"embed-responsive embed-responsive-4by3\">\r\n                        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/KWj4g0PrQBo\" \r\n                            allowfullscreen></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n <!--- Advanced -->\r\n<div class=\"container-fluid\">\r\n    <div class=\"row lessons text-center\">\r\n        <div class=\"col-12\">\r\n            <h1 class=\"display-4\">Advanced</h1>\r\n        </div>\r\n        <hr>\r\n    </div>\r\n</div>\r\n\r\n<!--- Advanced -->\r\n<div class=\"container-fluid padding\">\r\n    <div class=\"row piano\">\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card w-100 text-center\">\r\n                <div class=\"card-body\">\r\n                    <img id=\"advanced\" src=\"../../../assets/images/furelise.jpg\" class=\"img-fluid\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <div class=\"card w-100 text-center\">\r\n                <div class=\"card-body\">\r\n                    <h6 class=\"card-text\">The skills learned in the beginner and intermediate stages will be further\r\n                    expanded into playing more advanced music and understanding of music theory. </h6>\r\n                    <h6 class=\"card-text\"> The new techniques learned here will provide fundamental building blocks \r\n                    for music composition and a deeper understanding of musical language that will allow more freedom \r\n                    in creative expression.</h6>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3\">\r\n            <div class=\"card text-center w-100\">\r\n                <div class=\"card-body video-wrapper\">\r\n                    <div class=\"embed-responsive embed-responsive-4by3\">\r\n                        <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Xrkq-yBVcQQ?start=3\" allowfullscreen></iframe>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/piano/piano.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoComponent; });
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

var PianoComponent = /** @class */ (function () {
    function PianoComponent() {
    }
    PianoComponent.prototype.ngOnInit = function () {
    };
    PianoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-piano',
            template: __webpack_require__("./src/app/components/piano/piano.component.html"),
            styles: [__webpack_require__("./src/app/components/piano/piano.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PianoComponent);
    return PianoComponent;
}());



/***/ }),

/***/ "./src/app/components/production/production.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n\r\n.bgProduct {\r\n  background: url('ableton.c57911c4fd7ebad376cb.png')  no-repeat 50% 50%;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box; \r\n  display: table;\r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n}\r\n\r\n.landing-text {\r\n  display: table-cell;\r\n\tvertical-align: middle;\r\n\tpadding-bottom: 100px;\r\n}\r\n\r\n.frame{\r\n\tbackground-color: rgba(0, 0, 0, 0.7);\r\n\tborder-radius: 1%;\r\n\tmargin-left: 15%;\r\n\tmargin-right: 15%;\r\n}\r\n\r\n.landing-text h1 {\r\n  font-size: 800%;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n.landing-text h3 {\r\n\tfont-size: 350%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;\r\n\tcolor: #FFF ;\r\n}\r\n\r\n.btnSignUp{\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 35px;\r\n}\r\n\r\n/*------------------------------------ JumboTron Section----------------------- */\r\n\r\n.jumbotron {\r\n\tpadding: 1rem;\r\n\tborder-radius: 0;                              \r\n\tmargin-bottom: 50px;                        \r\n\tbackground-color: #000;\r\n\tborder-top: 1px solid #FFF;\r\n}\r\n\r\n.jumbotron h6 {\r\n\tpadding-top: 1%;\r\n\tfont-size: 200%;\r\n\tfont-weight: 500;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.btn-primary {\r\n\tcolor: #000000;\r\n\tbackground-color: #FFF;\r\n\tborder: 1px solid rgb(26, 26, 26);\r\n}\r\n\r\n.btn-primary:hover {\r\n\tbackground-color: #3390bb;\r\n\t}\r\n\r\n/*----------------------------------------------- Global Containers---------------------------------- */\r\n\r\n/* .product{\r\n\tpadding-top: 75px;\r\n\ttext-align: center;\r\n    vertical-align: middle;                      \r\n}\r\n\r\n.product hr {\r\n    border-top: 2px solid #000;\r\n    width: 50%; \r\n  }\r\n\r\n .product h2 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #FFF;\r\n\tcolor: #000;\r\n  }\r\n\r\n.product p {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n\tcolor: #000;\r\n} */\r\n\r\n/*-------------------------------------------------- Global Black Container Size and Alignment   */\r\n\r\n.bgBlack{\r\n\tpadding-top: 75px;\r\n\ttext-align: center;\r\n  vertical-align: middle; \r\n  background-color: #000;                     \r\n}\r\n\r\n.bgBlack hr {\r\n  border-top: 2px solid #FFF;\r\n  width: 50%; \r\n}\r\n\r\n.bgBlack h2 {\r\n\tfont-size: 300%;\r\n\tfont-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;\r\n\tcolor: #FFF;\r\n}\r\n\r\n.bgBlack p {\r\n\tfont-size: 150%;\r\n  font-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #000;    \r\n\tcolor: #FFF;\r\n}\r\n\r\n.bgBlack h5 {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n  color: #FFF;\r\n  margin-top: 10px;\r\n}\r\n\r\n/* -------------------------------------------------------------Global WHITE Container Size and Alignment   */\r\n\r\n.bgWhite {\r\n\tpadding-top: 75px;\r\n\ttext-align: center;\r\n  vertical-align: middle;                      \r\n}\r\n\r\n.bgWhite hr {\r\n  border-top: 2px solid #000;\r\n  width: 50%; \r\n}\r\n\r\n.bgWhite h2 {\r\n  font-size: 300%;\r\n  font-weight: 500;\r\n  text-shadow: 7px 2px 6px #FFF;\r\n  color: #000;\r\n}\r\n\r\n.bgWhite p {\r\n\tfont-size: 150%;\r\n  font-weight: 500;\r\n\ttext-shadow: 7px 2px 6px #FFF;    \r\n\tcolor: #000;\r\n}\r\n\r\n.bgWhite h5 {\r\n\tfont-size: 150%;\r\n\tfont-weight: 500;\r\n  color: #000;\r\n  margin-top: 10px;\r\n}\r\n\r\n/*----------------------- Dropdown Section */\r\n\r\n/* Global Space below button and dropdown */\r\n\r\n.padBelow {\r\n  margin-bottom: 2rem;\r\n}\r\n\r\n/* Dropdown thumbnails */\r\n\r\n.thumbnail {\r\n  max-width: 100%;\r\n}\r\n\r\n/* Specific images */\r\n\r\n#serum {\r\n\twidth: 400px;\r\n}\r\n\r\n#kick {\r\n\twidth: 500px;\r\n}\r\n\r\n#composing {\r\n\twidth: 600px;\r\n}\r\n\r\n#abletonMix {\r\n\twidth: 450px;\r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n\t.landing-text h1 {\r\n\t\tfont-size: 500%;\r\n\t}\r\n\t\r\n\t.landing-text h3 {\r\n\t\tfont-size: 225%;\r\n\t}\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n\t.frame{\r\n\t\tmargin-left: 5%;\r\n\t\tmargin-right: 5%;\r\n\t}\r\n\r\n\t.landing-text h1 {\r\n\t\tfont-size: 400%;\r\n\t}\r\n\t\r\n\t.landing-text h3 {\r\n\t\tfont-size: 200%;\r\n\t}\r\n\r\n\t.jumbotron h6 {\r\n\t\tfont-size: 150%;\r\n  }\r\n\r\n\t.bgBlack h2 {\r\n\t\tfont-size: 200%;\r\n\t}\r\n\r\n\t.bgWhite h2 {\r\n\t\tfont-size: 200%;\r\n\t}\r\n\r\n\t.thumbnail {\r\n\t  max-width: 50%;\r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/production/production.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Main Hero Image -->\r\n\r\n<section class=\"bgProduct\">\r\n        <div class=\"landing-text\">\r\n            <div class=\"frame text-center\">\r\n                <h1 class=\"display-2\">Production</h1>\r\n                <h3>Bring your ideas to LIFE with modern studio techniques</h3>\r\n                <div class=\"btnSignUp\">\r\n                    <a href=\"#\" [routerLink]=\"['/contact']\"><button type=\"button\" class =\"btn btn-primary btn-lg\">Sign Up</button></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</section>\r\n\r\n\r\n<!--- Jumbotron -->\r\n\r\n<div class=\"container-fluid padding\">\r\n    <div class=\"row jumbotron\">\r\n        <div class=\"col-12 text-center\">\r\n         <h6>Learn cutting edge home studio production software and techniques to produce your own musical projects. \r\n         Experience how easy and fun audio engineering can be while creating things you can share with  your friends.</h6>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n  <!--- Sound Design  Section -->\r\n\r\n  <div class=\"container-fluid\">\r\n\t\t<div class=\"row bgBlack padding\">  \r\n            <div class=\"col-lg-6 padding\">\r\n                <img id=\"serum\" src=\"../../../assets/images/production/serumS.jpg\" class=\"img-fluid\">\r\n                <h5>Serum</h5>\r\n            </div>    \r\n        <div class=\"col-lg-6\">\r\n                <h2>Sound Design</h2>\r\n                <hr>\r\n\t\t\t\t<p>Forge your own music with sound design tools like Serum, FM8, Absynth, Kontakt, Massive</p>\r\n\t\t\t\t<p>Evoke emotions and reflect moods by capturing, manipulating and mixing various audio files \r\n                and using plugins and virtual synthesizer instruments</p>\r\n\t\t\t\t<p>Use sound design to expand your sonic fluency and understand sounds heard in the world around \r\n                you, but also be able to create or record sounds you are imagining for your own music</p>\r\n                <br>\r\n                <a class=\"btn btn-primary padBelow\" data-toggle=\"collapse\" data-target=\"#design\">More Tools</a>\r\n                <div id=\"design\" class=\"collapse\">\r\n                    <div class=\"container-fluid padding\">\r\n                        <div class=\"row text-center\">                      \r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/sdFM8S.jpg\" class=\"thumbnail\">\r\n                                <h5>FM8</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/sdMassiveS.jpg\" class=\"thumbnail\">\r\n                                <h5>Massive</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/sdAbsynthS.jpg\" class=\"thumbnail\">\r\n                                <h5>Absynth</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">  \r\n                                <img src=\"../../../assets/images/production/sdKontaktS.jpg\" class=\"thumbnail\">\r\n                                <h5>Kontakt</h5>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n\t</div>\r\n\r\n<!-- Percussion and Drums -->\r\n\r\n <div class=\"container-fluid\">\r\n\t\t<div class=\"row bgWhite padding\">           \r\n             <div class=\"col-lg-6\">\r\n                <h2>Percussion & Drums</h2>\r\n                <hr>\r\n\t\t\t\t<p>Understand the basic and functional elements of beats. Play with dynamics and timing to learn to \r\n                create your own rhythmic feel</p>\r\n\t\t\t\t<p>Use drum kits to shape unique grooves and create electronic drum tracks. Enhance these grooves \r\n                with layers of percussion and newly designed electronic timbres</p>\r\n                <br>\r\n                <a class=\"btn btn-primary padBelow\" data-toggle=\"collapse\" data-target=\"#drums\">More Tools</a>\r\n                <div id=\"drums\" class=\"collapse\">\r\n                    <div class=\"container-fluid padding\">\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/drumRackS.jpg\" class=\"thumbnail\">\r\n                                <h5>Racks</h5>                                \r\n                             </div>\r\n                            <div class=\"col-sm-6 col-md-3\">  \r\n                                <img src=\"../../../assets/images/production/perBatteryS.jpg\" class=\"thumbnail\">\r\n                                <h5>Battery</h5>\r\n                            </div>                          \r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/drumLoopsS.jpg\" class=\"thumbnail\">\r\n                                <h5>Arranging</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/drumADSRS.jpg\" class=\"thumbnail\">\r\n                                <h5>ADSR</h5>                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t</div>\t\t\t\r\n            <div class=\"col-lg-6 padding\">\r\n                <img id=\"kick\" src=\"../../../assets/images/production/kickS.jpg\" class=\"img-fluid\">\r\n                <h5>Kick 2</h5>\r\n            </div> \r\n        </div>    \r\n\t</div>\r\n\r\n     <!--- Composing Section -->\r\n\r\n  <div class=\"container-fluid\">\r\n\t\t<div class=\"row bgBlack padding\">  \r\n            <div class=\"col-lg-6 padding\">\r\n                <img id=\"composing\" src=\"../../../assets/images/production/comAbletonS.jpg\" class=\"img-fluid\">\r\n                <h5>Ableton Live - Arranger View </h5>\r\n            </div>    \r\n        <div class=\"col-lg-6\">\r\n                <h2>Composing</h2>\r\n                <hr>\r\n\t\t\t\t<p>Enter the practice of creating or writing a new song or piece of music</p>\r\n\t\t\t\t<p>Use the fundamentals principles of music to construct complex and interesting ideas</p>\r\n\t\t\t\t<p>Bring together elements of melody & rhythm</p>\r\n\t\t\t\t<p>Explore new possibilities and express your own unique musical voice</p>\r\n                <br>\r\n                <a class=\"btn btn-primary padBelow\" data-toggle=\"collapse\" data-target=\"#compose\">More Tools</a>\r\n                <div id=\"compose\" class=\"collapse\">\r\n                    <div class=\"container-fluid padding\">\r\n                        <div class=\"row text-center\">\r\n                                <div class=\"col-sm-6 col-md-3\">\r\n                                        <img src=\"../../../assets/images/production/comBitWigS.jpg\" class=\"thumbnail\">\r\n                                        <h5>BitWig</h5>                                \r\n                                    </div>\r\n        \r\n                            <div class=\"col-sm-6 col-md-3\">  <!-- assume xs=12, then specify what to do as screen increases-->\r\n                                <img src=\"../../../assets/images/production/comLogicS.jpg\" class=\"thumbnail\">\r\n                                <h5>Logic</h5>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/comGBS.jpg\" class=\"thumbnail\">\r\n                                <h5>GarageBand</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/comNotateS.jpg\" class=\"thumbnail\">\r\n                                <h5>Noteability Pro</h5>                                \r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t</div>\t\t\t\r\n\t\t</div>\r\n    </div>\r\n    \r\n<!-- Mixing -->\r\n\r\n <div class=\"container-fluid\">\r\n\t\t<div class=\"row bgWhite padding\">           \r\n             <div class=\"col-lg-6\">\r\n                <h2>Mixing</h2>\r\n                <hr>\r\n\t\t\t\t<p>Learn how to apply EQ, panning, reverberation and compression among other audio processing tools to bring out the best in your song</p>\r\n\t\t\t\t<p>Bring your tapestry of sounds together with clean and efficient mixing techniques</p>\r\n                \r\n                <br>\r\n                <a class=\"btn btn-primary padBelow\" data-toggle=\"collapse\" data-target=\"#mixing\">More Tools</a>\r\n                <div id=\"mixing\" class=\"collapse\">\r\n                    <div class=\"container-fluid padding\">\r\n                        <div class=\"row text-center\">\r\n                            <div class=\"col-sm-6 col-md-3\">  <!-- assume xs=12, then specify what to do as screen increases-->\r\n                                <img src=\"../../../assets/images/production/mixproqS.jpg\" class=\"thumbnail\">\r\n                                <h5>ProQ</h5>\r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/oscarizerS.jpg\" class=\"thumbnail\">\r\n                                <h5>Oscarizer</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/saturnS.jpg\" class=\"thumbnail\">\r\n                                <h5>Saturn</h5>                                \r\n                            </div>\r\n                            <div class=\"col-sm-6 col-md-3\">\r\n                                <img src=\"../../../assets/images/production/mixReplicaS.jpg\" class=\"thumbnail\">\r\n                                <h5>Replika</h5>                                \r\n                            </div>\r\n                        \r\n                          \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t</div>\t\t\t\r\n            <div class=\"col-lg-6 padding\">\r\n                <img id=\"abletonMix\" src=\"../../../assets/images/production/abletonMixS.jpg\" class=\"img-fluid\">\r\n                <h5>Ableton Live - Clip View</h5>\r\n            </div> \r\n        </div>    \r\n\t</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/production/production.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductionComponent; });
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

var ProductionComponent = /** @class */ (function () {
    function ProductionComponent() {
    }
    ProductionComponent.prototype.ngOnInit = function () {
    };
    ProductionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-production',
            template: __webpack_require__("./src/app/components/production/production.component.html"),
            styles: [__webpack_require__("./src/app/components/production/production.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductionComponent);
    return ProductionComponent;
}());



/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n.padding {\r\n\tpadding-bottom: 4rem;\r\n}\r\n\r\n/*--------------------------------- Background Imaginig Hero Section */\r\n\r\n.bgTest {\r\n  background: url('testimonials.a8bab47ace3780953586.jpg')  no-repeat center center fixed;\r\n  display: table; \r\n  position: relative;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background-size: cover;\r\n  z-index: -1;\r\n}\r\n\r\n.bgTest:before {\r\n\tcontent: '';\r\n\tbackground: url('testimonials.a8bab47ace3780953586.jpg') no-repeat center center;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\theight: 100vh;\r\n\twidth: 100%;\r\n\tbackground-size: cover; \r\n\tz-index: -1;\r\n}\r\n\r\n/* ----------------------------------------------Intro */\r\n\r\n.test-headline {\r\n  display: table-cell;\r\n\ttext-align: center;\r\n  vertical-align: middle;\r\n}\r\n\r\n/* Main heading */\r\n\r\n.test-headline h1 {\r\n\tfont-size: 600%;\r\n\ttext-shadow: 2px 2px 3px #3D8103;       \r\n\tcolor: #FFF;          \r\n  padding-bottom: 50px;\r\n  line-height: 150%;\t\r\n}\r\n\r\n/* Sub headings */\r\n\r\n.test-headline h5 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 1px 1px 3px #3D8103; \r\n }\r\n\r\n/* -----------------------------------------------Animation */\r\n\r\n#whyStudy {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 1s;\r\n}\r\n\r\n#quote1 {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 3s;\r\n}\r\n\r\n#quote2 {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 4s;\r\n}\r\n\r\n#quote3 {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 5s;\r\n}\r\n\r\n#quote4 {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 6s;\r\n}\r\n\r\n#quote5 {\r\n  -webkit-animation-duration: 2s;\r\n  -webkit-animation-delay: 7s;\r\n}\r\n\r\n/*----------------------------------------Testimonial Section--------------------------*/\r\n\r\n.test {\r\n  width: 67%;\r\n  margin: 0 auto; \r\n  padding-top: 4rem;\r\n}\r\n\r\n.test hr {\r\n  border-top: 2px solid #FFF;\r\n  width: 95%; \r\n  margin-top: 3rem;\r\n  margin-bottom: 1rem; \r\n}\r\n\r\n.test h2 {\r\n  font-size: 600%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 2px 2px 3px #3D8103;  \r\n}\r\n\r\n.test h6 {\r\n  font-size: 200%;\r\n  font-weight: 500;\r\n  color: #FFF;\r\n  text-shadow: 1px 1px 3px #3D8103; \r\n}\r\n\r\n/*-------------------------------------------Media Queries ---------------------------*/\r\n\r\n@media (max-width: 992px) {\r\n\r\n}\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .test-headline h1 {\r\n\t  font-size: 400%;\r\n  }\r\n\r\n  .test-headline h5 {\r\n    font-size: 175%; \r\n  }\r\n\r\n  .test {\r\n    width: 80%;\r\n  }\r\n\r\n  .test h2 {\r\n    font-size: 400%; \r\n  }\r\n  \r\n  .test h6 {\r\n    font-size: 175%; \r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 576px) {\r\n\r\n  .test-headline h1 {\r\n\t  font-size: 300%;\r\n  }\r\n\r\n  .test-headline h5 {\r\n    font-size: 150%; \r\n  }\r\n\r\n  .test {\r\n    width: 90%;\r\n  }\r\n  \r\n  .test h6 {\r\n    font-size: 150%; \r\n  }\r\n\r\n}"

/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<section class=\"bgTest\">\r\n        <div class=\"test-headline text-center\">\r\n            <h1 id=\"whyStudy\" class=\"display-2 animated fadeIn\">Why study with Spheres?</h1> \r\n            <h5 id=\"quote1\" class=\"animated fadeIn\">My daughter really appreciated having input into the lesson plan...</h5>    \r\n            <h5 id=\"quote2\" class=\"animated fadeIn\">Anna can tune into the individual needs of the student...</h5>          \r\n            <h5 id=\"quote3\" class=\"animated fadeIn\"> I cannot recommend her highly enough...</h5>\r\n            <h5 id=\"quote4\" class=\"animated fadeIn\">This is all because Anna made learning fun...</h5>\r\n            <h5 id=\"quote5\" class=\"animated fadeIn\">Scroll down for more reviews</h5>     \r\n        </div> \r\n</section>\r\n\r\n\r\n<!--- Testimonial Section -->\r\n\r\n<div class=\"container-fluid white padding\"> \r\n\t<div class=\"row test text-center\">\t\t\t           \r\n                <div class=\"col-12\">\r\n                        <h2 class=\"display-4\">Reviews</h2>\r\n                </div>\r\n                <hr>            \r\n\t        <div class=\"col-12\">\r\n\t\t    <h6 >\"When I went out to search for a piano instructor for my daughter I was looking for someone \r\n                    who of course loved music but more importantly could pass that love along and make the learning \r\n                    experience fun, not a chore. Also, someone who had patience, they were working with kids \r\n                    (so kind of a prerequisite). We went through two horrible experiences before someone referred us \r\n                    to Anna, who has taught my daughter for the past four years. My daughter is now eleven and practices \r\n                    without being nagged, I actually have to get her to stop on occasion, she is excited for her lessons\r\n                    and her skill has excelled significantly. This is all because Anna made learning fun, she knows how\r\n                    to speak to kids and keep them engaged. It has been a joy watching them work together!\" </h6>\r\n                    <h6>- Jennifer Kanik</h6>\r\n                    <hr> \r\n                    <h6 >Anna of Spheres School has been teaching piano to my son and daughter, aged 8 and 10, since March 2017. \r\n                    We have been so impressed with their progress in this time. They have progressed from absolute beginners \r\n                    to kids that can read notes, play the piano with both hands, and interpret the music with feeling. Most \r\n                    importantly, they’ve both grown to thoroughly enjoy playing the piano! Anna’s calm demeanour and fun teaching \r\n                    methods were well received by both kids and their individual learning styles. I know that my daughter also \r\n                    really appreciated having input into the lesson plan when she got to choose some of the music to learn. \r\n                    Anna was always punctual and organized, and she made very good use of the lesson time. I cannot recommend \r\n                    her highly enough. We are very sorry to see her leave Calgary! </h6>                \r\n                    <h6 >- Kate Dochstader</h6>\r\n                    <hr> \r\n                    <h6 >\"In just a couple of words Anna is an awesome piano teacher.   My children, 11 & 9, have been taking traditional\r\n                    piano classes in the past and therefore lost interest in piano all together.  Until we found Anna. Anna can\r\n                    tune into the individual needs of the students and allow them to be excited about learning piano. We are very\r\n                    happy for Anna's new phase of life as she is moving closer to family in Victoria, BC. However, we are sad at \r\n                    the same time to let her go.\" </h6>\r\n                    <h6>- Izabela Bulman</h6>\r\n                </div>\r\n\t</div>\r\n</div>\r\n        \r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/testimonials/testimonials.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestimonialsComponent; });
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

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
    };
    TestimonialsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-testimonials',
            template: __webpack_require__("./src/app/components/testimonials/testimonials.component.html"),
            styles: [__webpack_require__("./src/app/components/testimonials/testimonials.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/services/send-msg.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendMsgService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendMsgService = /** @class */ (function () {
    function SendMsgService(http) {
        this.http = http;
    }
    SendMsgService.prototype.sendMessage = function (message) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('www.spheresschool.ca/send', message, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    SendMsgService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], SendMsgService);
    return SendMsgService;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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