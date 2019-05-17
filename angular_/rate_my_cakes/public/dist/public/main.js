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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
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

module.exports = "h1{\n    text-align: center;\n}\ndiv.submitacake{\n    display: inline-block;\n    margin: 0px 35%;\n}\ndiv.submitacake h3{\n        text-align: center;\n    }\ndiv.scrollable{\n    display: inline-block;\n    width: 49%;\n    height: 650px;\n    overflow-y: auto;\n    vertical-align: top;\n    outline: 2px solid salmon;\n}\ndiv.allcakes{\n        display: inline-block;\n        margin-left: 20px;\n    }\ndiv.selectedcake{\n    display: inline-block;\n    padding: 10px;\n    width: 45%;\n    vertical-align: top;\n    outline: 2px solid green;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25CO0FBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCO0FBQ0k7UUFDSSxxQkFBcUI7UUFDckIsaUJBQWlCO0lBQ3JCO0FBQ0o7SUFDSSxxQkFBcUI7SUFDckIsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5kaXYuc3VibWl0YWNha2V7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMHB4IDM1JTtcbn1cbiAgICBkaXYuc3VibWl0YWNha2UgaDN7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5kaXYuc2Nyb2xsYWJsZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDQ5JTtcbiAgICBoZWlnaHQ6IDY1MHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvdXRsaW5lOiAycHggc29saWQgc2FsbW9uO1xufVxuICAgIGRpdi5hbGxjYWtlc3tcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICB9XG5kaXYuc2VsZWN0ZWRjYWtle1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA0NSU7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBvdXRsaW5lOiAycHggc29saWQgZ3JlZW47XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <hr>\n  <h1>Rate My Cakes</h1>\n  <hr>\n  <div class=\"submitacake\">\n    <h3>Submit a cake to be rated</h3>\n    <form (submit)=\"onSubmitCake()\">\n      <!-- <p>{{newCake | json}}</p> -->\n      <label>Baker name:\n        <input type=\"text\" name=\"newCake.name\" [(ngModel)]=\"newCake.name\" />\n      </label>\n      <label>Image URL:\n        <input type=\"text\" name=\"newCake.image\" [(ngModel)]=\"newCake.image\" />\n      </label>\n      <input type=\"submit\" value=\"Submit\" />\n    </form>\n  </div>\n  <hr>\n  <div class=\"scrollable\">\n    <div class=\"allcakes\" *ngFor=\"let cake of cakes\">\n      <!-- Have each image make all the reviews for that cake show up  -->\n      <img (click)=\"getThisCakeFromService(cake)\" [src]=\"cake.image\" alt=\"image_url_broken\" width=\"500px\">\n      <form (submit)=\"onSubmitReview(cake)\">\n        <!-- <p>{{newReview | json}}</p> -->\n        <label>Rating:\n          <select name=\"newReview.rating\" [(ngModel)]=\"newReview.rating\" >\n            <option value=\"5\">5 Stars</option>\n            <option value=\"4\">4 Stars</option>\n            <option value=\"3\">3 Stars</option>\n            <option value=\"2\">2 Stars</option>\n            <option value=\"1\">1 Stars</option>\n          </select>\n        </label><br>\n        <label>Comment:\n          <input type=\"text\" name=\"newReview.comment\" [(ngModel)]=\"newReview.comment\" />\n        </label>\n        <input type=\"submit\" value=\"Submit\" />\n      </form>\n      <br>\n    </div>\n  </div>\n  <div *ngIf=\"showThisCake\" class=\"selectedcake\">\n    <h2>Baked by {{thisCake.name}}</h2>\n    <img [src]=\"thisCake.image\" alt=\"image_url_broken\" width=\"300px\">\n    <h2>Average Rating: {{avgRating}}</h2>\n    <div *ngFor=\"let review of reviews\">\n      <h3>{{review.comment}}</h3>\n      <h3>{{review.rating}} stars</h3>\n    </div>\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.cakes = [];
        this.reviews = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCakesFromService();
        this.showThisCake = false;
        this.newCake = { name: "", image: "" };
        this.newReview = { cake_id: "", rating: null, comment: "" };
        this.thisCake = {};
        this.avgRating = null;
    };
    AppComponent.prototype.getCakesFromService = function () {
        var _this = this;
        var observable = this._httpService.getCakes();
        observable.subscribe(function (data) {
            console.log("Got all the cake data!", data);
            _this.cakes = data["data"];
        });
    };
    AppComponent.prototype.getThisCakeFromService = function (cake) {
        this.showThisCake = true;
        this.thisCake = cake;
        this.reviews = this.thisCake.reviews;
        this.getReviewsFromService(cake);
    };
    AppComponent.prototype.onSubmitCake = function () {
        var _this = this;
        var observable = this._httpService.addCake(this.newCake);
        observable.subscribe(function (data) {
            console.log("Got cake data from post back", data);
            _this.newCake = { name: "", image: "" };
            _this.getCakesFromService();
        });
    };
    AppComponent.prototype.getReviewsFromService = function (thisCake) {
        var _this = this;
        var observable = this._httpService.getReviews(thisCake);
        observable.subscribe(function (data) {
            console.log("Got all the review data!", data);
            _this.reviews = data["data"][0].reviews;
            //console.log(this.reviews);
            var totalRating = 0;
            for (var i = 0; i < _this.reviews.length; i++) {
                totalRating += _this.reviews[i].rating;
            }
            _this.avgRating = totalRating / _this.reviews.length;
        });
    };
    AppComponent.prototype.onSubmitReview = function (cake) {
        var _this = this;
        this.newReview.cake_id = cake._id;
        var observable = this._httpService.addReview(this.newReview);
        observable.subscribe(function (data) {
            console.log("Got review data from post back", data);
            _this.getReviewsFromService(cake);
            _this.newReview = { cake_id: "", rating: null, comment: "" };
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getCakes = function () {
        return this._http.get("/cakes");
    };
    HttpService.prototype.showCake = function () {
        return this._http.get("/cakes/show");
    };
    HttpService.prototype.addCake = function (newCake) {
        return this._http.post("/cakes/new", newCake);
    };
    HttpService.prototype.getReviews = function (thisCake) {
        console.log(thisCake);
        return this._http.get("/reviews/" + thisCake._id);
    };
    HttpService.prototype.addReview = function (newReview) {
        return this._http.post("/reviews/new", newReview);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
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

module.exports = __webpack_require__(/*! /Users/koba/Desktop/angular/DOM_manipulation_and_events/rate_my_cakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map