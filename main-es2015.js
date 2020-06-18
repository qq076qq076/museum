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

/***/ "./src/app/animation/animation.ts":
/*!****************************************!*\
  !*** ./src/app/animation/animation.ts ***!
  \****************************************/
/*! exports provided: fadeInOutAnimation, cardAnimation, cardBackgroundAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeInOutAnimation", function() { return fadeInOutAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardAnimation", function() { return cardAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBackgroundAnimation", function() { return cardBackgroundAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fadeInOutAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeInOutAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s cubic-bezier(0.22, 0.73, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 1 })
        ]))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.2s cubic-bezier(0.22, 0.73, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, offset: 1 })
        ]))
    ])
]);
const cardAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('thirdWait', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.5,
        transform: 'scale(0.85) translateY(-100px)',
        'z-index': 9,
        'pointer-events': 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('secondWait', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0.5,
        transform: 'scale(0.93) translateY(-50px)',
        'z-index': 9,
        'pointer-events': 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>*', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.2s'),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 1,
            transform: 'scale(0.85) translateY(-100px)',
            'z-index': 9,
            'pointer-events': 'none',
        }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            opacity: 0,
            transform: 'scale(0.85) translateY(-100px)',
            'z-index': 9,
            'pointer-events': 'none',
        }),
    ]),
]);
const cardBackgroundAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardBackgroundAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('thirdWait', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        'z-index': -7,
        'pointer-events': 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('secondWait', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        'z-index': -6,
        'pointer-events': 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1,
        'z-index': -5,
        'pointer-events': 'none',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('*=>*', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s'),
    ]),
]);


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
/* harmony import */ var _animation_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation/animation */ "./src/app/animation/animation.ts");
/* harmony import */ var _question__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./question */ "./src/app/question.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");









function AppComponent_app_home_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-home", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_app_home_0_Template_app_home_next_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutAnimation", ctx_r0.step === 0);
} }
function AppComponent_ng_container_1_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_ng_container_1_app_card_1_Template_app_card_next_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.next(ctx_r9.firstQuestion, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", ctx_r6.firstQuestion)("showState", ctx_r6.getShowState(1))("index", 1);
} }
function AppComponent_ng_container_1_app_card_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_ng_container_1_app_card_2_Template_app_card_next_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.next(ctx_r11.secondQuestion, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("question", ctx_r7.secondQuestion)("showState", ctx_r7.getShowState(2))("index", 2);
} }
function AppComponent_ng_container_1_ng_container_3_app_card_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("next", function AppComponent_ng_container_1_ng_container_3_app_card_1_Template_app_card_next_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const question_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.next(question_r13, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const i_r14 = ctx_r19.index;
    const question_r13 = ctx_r19.$implicit;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r14 + 3)("question", question_r13)("showState", ctx_r15.getShowState(i_r14 + 3));
} }
function AppComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_ng_container_3_app_card_1_Template, 1, 3, "app-card", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.step >= i_r14 + 1 && i_r14 + 3 >= ctx_r8.step);
} }
function AppComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_app_card_1_Template, 1, 3, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_ng_container_1_app_card_2_Template, 1, 3, "app-card", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.step === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.step <= 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.questionList);
} }
function AppComponent_app_result_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-result", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("restart", function AppComponent_app_result_2_Template_app_result_restart_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.restart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("secondQuestion", ctx_r2.secondQuestion)("@fadeInOutAnimation", undefined);
} }
const _c0 = function (a0) { return { current: a0 }; };
function AppComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const i_r24 = ctx.index;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r22.step - 1 === i_r24));
} }
function AppComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_3_div_1_Template, 1, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.point);
} }
class AppComponent {
    constructor() {
        this.step = 0;
        this.firstQuestion = _question__WEBPACK_IMPORTED_MODULE_2__["FirstQuestion"];
        this.questionList = _question__WEBPACK_IMPORTED_MODULE_2__["QuestionList"];
        this.optionPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].optionPath;
        this.point = Array(15);
    }
    get qIndex() {
        return this.step - 1;
    }
    ngOnInit() {
        this.setRandomSort();
    }
    start() {
        this.step = this.step + 1;
    }
    next(question, option) {
        if (this.step === 1) {
            this.secondQuestion = _question__WEBPACK_IMPORTED_MODULE_2__["SecondQuestion"][this.firstQuestion.value.next];
        }
        question.value = option;
        this.step = this.step + 1;
    }
    restart() {
        this.step = 0;
        this.firstQuestion.value = null;
        this.secondQuestion.value = null;
        this.questionList = this.questionList.map(question => (Object.assign(Object.assign({}, question), { value: null })));
        this.setRandomSort();
    }
    getShowState(index) {
        if (index === this.step) {
            return 'show';
        }
        else if (index === this.step + 1) {
            return 'secondWait';
        }
        else if (index === this.step + 2) {
            return 'thirdWait';
        }
    }
    setRandomSort() {
        this.questionList.sort(() => Math.random() - 0.5);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 4, consts: [[3, "next", 4, "ngIf"], [4, "ngIf"], [3, "secondQuestion", "restart", 4, "ngIf"], ["class", "point-area", 4, "ngIf"], [1, "institution"], ["src", "./assets/images/institution.svg"], [1, "copyright"], ["target", "__blank", "href", "https://www.cultural.pthg.gov.tw/pPrivateNotice.aspx"], [3, "next"], [3, "question", "showState", "index", "next", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "question", "showState", "index", "next"], [3, "index", "question", "showState", "next", 4, "ngIf"], [3, "index", "question", "showState", "next"], [3, "secondQuestion", "restart"], [1, "point-area"], ["class", "point", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "point", 3, "ngClass"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_home_0_Template, 1, 1, "app-home", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_app_result_2_Template, 1, 2, "app-result", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u672C\u7DB2\u7AD9\u70BA\u5C4F\u6771\u7E23\u653F\u5E9C\u6587\u5316\u8655\u7248\u6B0A\u6240\u6709 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u514D\u8CAC\u53CA\u96B1\u79C1\u6B0A\u5BA3\u544A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step === 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.step !== 0 && ctx.step !== 16);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/bg1.svg'), url('https://qq076qq076.github.io/museum/assets/images/bg2.svg');\n  background-size: auto 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  display: block;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: flex-start;\n  position: absolute;\n  bottom: 13px;\n  left: 19px;\n  z-index: 10;\n  font-family: PingFangTC;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 11px;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  margin-left: 64px;\n  color: rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  right: 12px;\n  top: 0;\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  background: #659605;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  opacity: 0.25;\n  margin: 5px 0;\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%]   .point.current[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 10px;\n    bottom: 7px;\n    font-size: 10px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 210px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 42px;\n    font-size: 10px;\n    opacity: 0.5;\n  }\n  [_nghost-%COMP%]   .point-area[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 22px;\n    bottom: 11px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 223px;\n    top: 6px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 45px;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 20px;\n    bottom: 20px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 319px;\n    top: 0;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 65px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxEYXZpZFxcRGVza3RvcFxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQU1FLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0pBQUE7RUFHQSwwQkFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNORjtBRFFFO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUNOSjtBRFFJO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDTk47QURTSTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUNQTjtBRFNNO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtBQ1BSO0FEWUU7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7QUNWSjtBRFlJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7QUNWTjtBRFlNO0VBQ0UsVUFBQTtBQ1ZSO0FEZ0JFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNkSjtFRGdCSTtJQUNFLFlBQUE7RUNkTjtFRGlCSTtJQUNFLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNmTjtFRG1CRTtJQUNFLGFBQUE7RUNqQko7QUFDRjtBRHFCRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFlBQUE7RUNuQko7RURxQkk7SUFDRSxZQUFBO0lBQ0EsUUFBQTtFQ25CTjtFRHNCSTtJQUNFLGlCQUFBO0VDcEJOO0FBQ0Y7QUR5QkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDdkJKO0VEeUJJO0lBQ0UsWUFBQTtJQUNBLE1BQUE7RUN2Qk47RUQwQkk7SUFDRSxpQkFBQTtFQ3hCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAvLyBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvYmcxLnN2ZycpLFxyXG4gICAgdXJsKCd+L2Fzc2V0cy9pbWFnZXMvYmcyLnN2ZycpO1xyXG4gIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAuaW5zdGl0dXRpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMTNweDtcclxuICAgIGxlZnQ6IDE5cHg7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiAxMXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNjRweDtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvaW50LWFyZWEge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEycHg7XHJcbiAgICB0b3A6IDA7XHJcblxyXG4gICAgLnBvaW50IHtcclxuICAgICAgYmFja2dyb3VuZDogIzY1OTYwNTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB3aWR0aDogMTBweDtcclxuICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICBvcGFjaXR5OiAuMjU7XHJcbiAgICAgIG1hcmdpbjogNXB4IDA7XHJcblxyXG4gICAgICAmLmN1cnJlbnQge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIG1vYmxlXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgICAuaW5zdGl0dXRpb24ge1xyXG4gICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICBib3R0b206IDdweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjEwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAuNTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb2ludC1hcmVhIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIHRhYmxldFxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgICAuaW5zdGl0dXRpb24ge1xyXG4gICAgICBsZWZ0OiAyMnB4O1xyXG4gICAgICBib3R0b206IDExcHg7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMjNweDtcclxuICAgICAgICB0b3A6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIGxhcmdlIHBjXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xyXG4gICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgbGVmdDogMjBweDtcclxuICAgICAgYm90dG9tOiAyMHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzE5cHg7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNjVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9iZzEuc3ZnXCIpLCB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvYmcyLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3QgLmluc3RpdHV0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMTNweDtcbiAgbGVmdDogMTlweDtcbiAgei1pbmRleDogMTA7XG4gIGZvbnQtZmFtaWx5OiBQaW5nRmFuZ1RDO1xufVxuOmhvc3QgLmluc3RpdHV0aW9uIGltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxMXB4O1xufVxuOmhvc3QgLmluc3RpdHV0aW9uIC5jb3B5cmlnaHQge1xuICBtYXJnaW4tbGVmdDogNjRweDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbjpob3N0IC5pbnN0aXR1dGlvbiAuY29weXJpZ2h0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG46aG9zdCAucG9pbnQtYXJlYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTJweDtcbiAgdG9wOiAwO1xufVxuOmhvc3QgLnBvaW50LWFyZWEgLnBvaW50IHtcbiAgYmFja2dyb3VuZDogIzY1OTYwNTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBvcGFjaXR5OiAwLjI1O1xuICBtYXJnaW46IDVweCAwO1xufVxuOmhvc3QgLnBvaW50LWFyZWEgLnBvaW50LmN1cnJlbnQge1xuICBvcGFjaXR5OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IC5pbnN0aXR1dGlvbiB7XG4gICAgbGVmdDogMTBweDtcbiAgICBib3R0b206IDdweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gIH1cbiAgOmhvc3QgLmluc3RpdHV0aW9uIGltZyB7XG4gICAgd2lkdGg6IDIxMHB4O1xuICB9XG4gIDpob3N0IC5pbnN0aXR1dGlvbiAuY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogNDJweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG4gIDpob3N0IC5wb2ludC1hcmVhIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICA6aG9zdCAuaW5zdGl0dXRpb24ge1xuICAgIGxlZnQ6IDIycHg7XG4gICAgYm90dG9tOiAxMXB4O1xuICB9XG4gIDpob3N0IC5pbnN0aXR1dGlvbiBpbWcge1xuICAgIHdpZHRoOiAyMjNweDtcbiAgICB0b3A6IDZweDtcbiAgfVxuICA6aG9zdCAuaW5zdGl0dXRpb24gLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgOmhvc3QgLmluc3RpdHV0aW9uIHtcbiAgICBsZWZ0OiAyMHB4O1xuICAgIGJvdHRvbTogMjBweDtcbiAgfVxuICA6aG9zdCAuaW5zdGl0dXRpb24gaW1nIHtcbiAgICB3aWR0aDogMzE5cHg7XG4gICAgdG9wOiAwO1xuICB9XG4gIDpob3N0IC5pbnN0aXR1dGlvbiAuY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogNjVweDtcbiAgfVxufSJdfQ== */"], data: { animation: [_animation_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInOutAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_animation_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInOutAnimation"]],
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _component_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/button/button.component */ "./src/app/component/button/button.component.ts");
/* harmony import */ var _component_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/card/card.component */ "./src/app/component/card/card.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/title-underline/title-underline.component */ "./src/app/component/title-underline/title-underline.component.ts");
/* harmony import */ var _component_image_select_image_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/image-select/image-select.component */ "./src/app/component/image-select/image-select.component.ts");
/* harmony import */ var _component_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/text-select/text-select.component */ "./src/app/component/text-select/text-select.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./result/result.component */ "./src/app/result/result.component.ts");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _component_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _component_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
        _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_7__["TitleUnderlineComponent"],
        _component_image_select_image_select_component__WEBPACK_IMPORTED_MODULE_8__["ImageSelectComponent"],
        _component_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_9__["TextSelectComponent"],
        _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _component_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                    _component_card_card_component__WEBPACK_IMPORTED_MODULE_5__["CardComponent"],
                    _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_7__["TitleUnderlineComponent"],
                    _component_image_select_image_select_component__WEBPACK_IMPORTED_MODULE_8__["ImageSelectComponent"],
                    _component_text_select_text_select_component__WEBPACK_IMPORTED_MODULE_9__["TextSelectComponent"],
                    _result_result_component__WEBPACK_IMPORTED_MODULE_10__["ResultComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/component/button/button.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/button/button.component.ts ***!
  \******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class ButtonComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["app-button"]], ngContentSelectors: _c0, decls: 1, vars: 0, template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
    } }, styles: ["[_nghost-%COMP%] {\n  width: 237px;\n  height: 70px;\n  border-radius: 20px;\n  border: none;\n  background-color: #d8e321;\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  border: solid 6px rgba(216, 227, 33, 0.33);\n  background-clip: padding-box;\n}\n[disabled=true][_nghost-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    width: 142px;\n    height: 42px;\n    border-radius: 12px;\n  }\n  [_nghost-%COMP%]::after {\n    border-radius: 12px;\n    width: calc(100% + 7px);\n    height: calc(100% + 7px);\n    top: -3.5px;\n    left: -3.5px;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%] {\n    width: 298px;\n    height: 88px;\n    border-radius: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2J1dHRvbi9DOlxcVXNlcnNcXERhdmlkXFxEZXNrdG9wXFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGNvbXBvbmVudFxcYnV0dG9uXFxidXR0b24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0FDQ0Y7QURHRTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQ0RKO0FETUE7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUNIRjtFREtFO0lBQ0UsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNISjtBQUNGO0FET0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsbUJBQUE7RUNMRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgd2lkdGg6IDIzN3B4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlMzIxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyOiBzb2xpZCA2cHggcmdiYSgyMTYsIDIyNywgMzMsIDAuMzMpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgLy8gei1pbmRleDogMjA7XHJcbiAgLy8gYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJltkaXNhYmxlZD10cnVlXSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIH1cclxufVxyXG5cclxuLy8gbW9ibGVcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IDE0MnB4O1xyXG4gICAgaGVpZ2h0OiA0MnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA3cHgpO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDdweCk7XHJcbiAgICAgIHRvcDogLTMuNXB4O1xyXG4gICAgICBsZWZ0OiAtMy41cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IDI5OHB4O1xyXG4gICAgaGVpZ2h0OiA4OHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMjM3cHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhlMzIxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyOiBzb2xpZCA2cHggcmdiYSgyMTYsIDIyNywgMzMsIDAuMzMpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xufVxuOmhvc3RbZGlzYWJsZWQ9dHJ1ZV0ge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDE0MnB4O1xuICAgIGhlaWdodDogNDJweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG4gIDpob3N0OjphZnRlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICB3aWR0aDogY2FsYygxMDAlICsgN3B4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSArIDdweCk7XG4gICAgdG9wOiAtMy41cHg7XG4gICAgbGVmdDogLTMuNXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIDpob3N0IHtcbiAgICB3aWR0aDogMjk4cHg7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/component/card/card.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/card/card.component.ts ***!
  \**************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/animation/animation */ "./src/app/animation/animation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../title-underline/title-underline.component */ "./src/app/component/title-underline/title-underline.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../button/button.component */ "./src/app/component/button/button.component.ts");
/* harmony import */ var _image_select_image_select_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image-select/image-select.component */ "./src/app/component/image-select/image-select.component.ts");
/* harmony import */ var _text_select_text_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../text-select/text-select.component */ "./src/app/component/text-select/text-select.component.ts");









function CardComponent_div_2_app_image_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-image-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeSelect", function CardComponent_div_2_app_image_select_6_Template_app_image_select_changeSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.select($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionList", ctx_r26.question.optionList)("selected", ctx_r26.question.value);
} }
function CardComponent_div_2_app_text_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-text-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeSelect", function CardComponent_div_2_app_text_select_7_Template_app_text_select_changeSelect_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.select($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("optionList", ctx_r27.question.optionList)("selected", ctx_r27.question.value)("font", ctx_r27.question.font);
} }
function CardComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-title-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CardComponent_div_2_app_image_select_6_Template, 1, 2, "app-image-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_2_app_text_select_7_Template, 1, 3, "app-text-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_2_Template_app_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInOutAnimation", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r25.index, "/15");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r25.question.topic);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.question.type === "image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r25.question.type === "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", !ctx_r25.question.value);
} }
const _c0 = function (a0) { return { current: a0 }; };
class CardComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].optionPath;
    }
    ngOnInit() { }
    select(option) {
        this.question.value = option;
        // this.next.emit(option);
    }
    nextStep() {
        if (this.question.value) {
            this.next.emit(this.question.value);
        }
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { question: "question", showState: "showState", index: "index" }, outputs: { next: "next" }, decls: 3, vars: 8, consts: [[1, "background-image"], [1, "card", 3, "ngClass"], ["class", "card-container", 4, "ngIf"], [1, "card-container"], [1, "page"], [3, "optionList", "selected", "changeSelect", 4, "ngIf"], [3, "optionList", "selected", "font", "changeSelect", 4, "ngIf"], [3, "click"], ["src", "./assets/images/btn_next.svg"], [3, "optionList", "selected", "changeSelect"], [3, "optionList", "selected", "font", "changeSelect"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CardComponent_div_2_Template, 10, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.optionPath + (ctx.question == null ? null : ctx.question.background) + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardBackgroundAnimation", ctx.showState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showState === "show"))("@cardAnimation", ctx.showState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState === "show");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__["TitleUnderlineComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _image_select_image_select_component__WEBPACK_IMPORTED_MODULE_6__["ImageSelectComponent"], _text_select_text_select_component__WEBPACK_IMPORTED_MODULE_7__["TextSelectComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/bg3_desktop.svg');\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  z-index: -4;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  background-color: #ffffff;\n  width: 930px;\n  height: 540px;\n  margin: auto;\n  margin-top: 109px;\n  z-index: 10;\n  padding-top: 36px;\n}\n.card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 35px;\n  max-width: 750px;\n  margin-top: 35px;\n}\n.card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%]::before {\n  background-repeat: no-repeat;\n  background-size: 612px 55px;\n  background-position: top center;\n}\n.card.current[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\napp-image-select[_ngcontent-%COMP%], app-text-select[_ngcontent-%COMP%] {\n  flex: 0 auto;\n}\n.background-image[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -5;\n  opacity: 0;\n}\napp-button[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 55px;\n  margin-bottom: 34px;\n  z-index: 20;\n}\n.page[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 10px;\n  margin-left: 25px;\n  margin-bottom: 11px;\n  z-index: 20;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]::before {\n    background-size: auto;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-top: 42px;\n    margin-left: 15px;\n    margin-right: 15px;\n    padding-top: 17px;\n    width: auto;\n    min-height: 80%;\n  }\n  .card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 30px;\n    margin-top: auto;\n  }\n  .card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%]::before {\n    background-repeat: no-repeat;\n    background-size: 310px 27px;\n    background-position: top center;\n  }\n\n  app-image-select[_ngcontent-%COMP%], app-text-select[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n    height: 23px;\n  }\n\n  .page[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .background-image[_ngcontent-%COMP%] {\n    background-image: auto 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  .card[_ngcontent-%COMP%] {\n    width: calc(100vw - 60px);\n    height: 800px;\n  }\n\n  app-text-select[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n\n  .background-image[_ngcontent-%COMP%] {\n    background-image: auto 100%;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%]::before {\n    background-size: 100% 100%;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin-top: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhcmQvQzpcXFVzZXJzXFxEYXZpZFxcRGVza3RvcFxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXGNhcmRcXGNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSwwRkFBQTtFQUVBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0FDQUo7QURJQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0RGO0FER0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDREo7QURHSTtFQUNFLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtBQ0ROO0FES0U7RUFDRSx5Q0FBQTtBQ0hKO0FET0E7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTs7RUFFRSxZQUFBO0FDSkY7QURPQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDSkY7QURPQTtFQUVFO0lBQ0UscUJBQUE7RUNMRjs7RURRQTtJQUNFLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7RUNMRjtFRE9FO0lBQ0UsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7RUNMSjtFRE9JO0lBQ0UsNEJBQUE7SUFDQSwyQkFBQTtJQUNBLCtCQUFBO0VDTE47O0VEVUE7O0lBRUUsT0FBQTtFQ1BGOztFRFdBO0lBQ0UsYUFBQTtFQ1JGO0VEVUU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ1JKOztFRFlBO0lBQ0UsY0FBQTtFQ1RGOztFRFlBO0lBQ0UsMkJBQUE7RUNURjtBQUNGO0FEZUE7RUFDRTtJQUNFLHlCQUFBO0lBQ0EsYUFBQTtFQ2JGOztFRGdCQTtJQUNFLE9BQUE7RUNiRjs7RURnQkE7SUFDRSwyQkFBQTtFQ2JGO0FBQ0Y7QURnQkE7RUFDRTtJQUNFLDBCQUFBO0VDZEY7O0VEaUJBO0lBQ0UsZ0JBQUE7RUNkRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9iZzNfZGVza3RvcC5zdmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XHJcbiAgICB6LWluZGV4OiAtNDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgd2lkdGg6IDkzMHB4O1xyXG4gIGhlaWdodDogNTQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwOXB4O1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIHBhZGRpbmctdG9wOiAzNnB4O1xyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDYxMnB4IDU1cHg7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmN1cnJlbnQge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuYXBwLWltYWdlLXNlbGVjdCxcclxuYXBwLXRleHQtc2VsZWN0IHtcclxuICBmbGV4OiAwIGF1dG87XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IC01O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmFwcC1idXR0b24ge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiA1NXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDM0cHg7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5wYWdlIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMXB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuXHJcbiAgOmhvc3Q6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2FyZCB7XHJcbiAgICBtYXJnaW4tdG9wOiA0MnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogODAlO1xyXG5cclxuICAgIGFwcC10aXRsZS11bmRlcmxpbmUge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzEwcHggMjdweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtaW1hZ2Utc2VsZWN0LFxyXG4gIGFwcC10ZXh0LXNlbGVjdCB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcblxyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogODhweDtcclxuICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBhZ2Uge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBhdXRvIDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBAbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHt9XHJcblxyXG4vLyBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgdXApXHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgLmNhcmQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2MHB4KTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGV4dC1zZWxlY3Qge1xyXG4gICAgZmxleDogMDtcclxuICB9XHJcblxyXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGF1dG8gMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcclxuICA6aG9zdDo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYXBwLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2JnM19kZXNrdG9wLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgei1pbmRleDogLTQ7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgd2lkdGg6IDkzMHB4O1xuICBoZWlnaHQ6IDU0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwOXB4O1xuICB6LWluZGV4OiAxMDtcbiAgcGFkZGluZy10b3A6IDM2cHg7XG59XG4uY2FyZCBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICBtYXgtd2lkdGg6IDc1MHB4O1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmNhcmQgYXBwLXRpdGxlLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiA2MTJweCA1NXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xufVxuLmNhcmQuY3VycmVudCB7XG4gIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmFwcC1pbWFnZS1zZWxlY3QsXG5hcHAtdGV4dC1zZWxlY3Qge1xuICBmbGV4OiAwIGF1dG87XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtNTtcbiAgb3BhY2l0eTogMDtcbn1cblxuYXBwLWJ1dHRvbiB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogNTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMzRweDtcbiAgei1pbmRleDogMjA7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgei1pbmRleDogMjA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XG4gIH1cblxuICAuY2FyZCB7XG4gICAgbWFyZ2luLXRvcDogNDJweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy10b3A6IDE3cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWluLWhlaWdodDogODAlO1xuICB9XG4gIC5jYXJkIGFwcC10aXRsZS11bmRlcmxpbmUge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbiAgLmNhcmQgYXBwLXRpdGxlLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMzEwcHggMjdweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICB9XG5cbiAgYXBwLWltYWdlLXNlbGVjdCxcbmFwcC10ZXh0LXNlbGVjdCB7XG4gICAgZmxleDogMTtcbiAgfVxuXG4gIGFwcC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cbiAgYXBwLWJ1dHRvbiBpbWcge1xuICAgIHdpZHRoOiA4OHB4O1xuICAgIGhlaWdodDogMjNweDtcbiAgfVxuXG4gIC5wYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBhdXRvIDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDYwcHgpO1xuICAgIGhlaWdodDogODAwcHg7XG4gIH1cblxuICBhcHAtdGV4dC1zZWxlY3Qge1xuICAgIGZsZXg6IDA7XG4gIH1cblxuICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogYXV0byAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIDpob3N0OjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB9XG5cbiAgYXBwLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcbiAgfVxufSJdfQ== */"], data: { animation: [src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInOutAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardBackgroundAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
                animations: [src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInOutAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardBackgroundAnimation"]],
            }]
    }], function () { return []; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showState: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/image-select/image-select.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/image-select/image-select.component.ts ***!
  \******************************************************************/
/*! exports provided: ImageSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSelectComponent", function() { return ImageSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0, a1, a2, a3, a4) { return { selected: a0, unselected: a1, height4: a2, height3: a3, height2: a4 }; };
function ImageSelectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ImageSelectComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const item_r35 = ctx.$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.changeSelect.emit(item_r35); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r35 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r34.optionPath + item_r35.src + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](3, _c0, item_r35 === ctx_r34.selected, ctx_r34.selected && item_r35 !== ctx_r34.selected, ctx_r34.optionList.length === 4, ctx_r34.optionList.length === 3, ctx_r34.optionList.length === 2));
} }
class ImageSelectComponent {
    constructor() {
        this.changeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.optionPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].optionPath;
    }
    ngOnInit() {
    }
}
ImageSelectComponent.ɵfac = function ImageSelectComponent_Factory(t) { return new (t || ImageSelectComponent)(); };
ImageSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSelectComponent, selectors: [["app-image-select"]], inputs: { optionList: "optionList", selected: "selected" }, outputs: { changeSelect: "changeSelect" }, decls: 1, vars: 1, consts: [["class", "option", 3, "ngClass", "background-image", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "ngClass", "click"]], template: function ImageSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageSelectComponent_div_0_Template, 1, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 20;\n}\n\n.option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  width: 200px;\n  height: 200px;\n  border-radius: 20px;\n  border: solid 5px transparent;\n  margin: 15px;\n  z-index: 20;\n  background-clip: content-box;\n}\n\n.option.selected[_ngcontent-%COMP%] {\n  border: solid 5px #d8e321;\n}\n\n.option.unselected[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    display: block;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    border-radius: 11px;\n    height: 88px;\n    margin: 15px 45px;\n    width: auto;\n    background-size: 100% auto;\n    background-position: center;\n  }\n  .option[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n  .option[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ltYWdlLXNlbGVjdC9DOlxcVXNlcnNcXERhdmlkXFxEZXNrdG9wXFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGNvbXBvbmVudFxcaW1hZ2Utc2VsZWN0XFxpbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9pbWFnZS1zZWxlY3QvaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNDRjs7QURDRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FESUE7RUFDRTtJQUNFLGNBQUE7RUNERjs7RURJQTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsMkJBQUE7RUNERjtFREdFO0lBQ0UsYUFBQTtFQ0RKO0VESUU7SUFDRSxnQkFBQTtFQ0ZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaW1hZ2Utc2VsZWN0L2ltYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IHNvbGlkIDVweCB0cmFuc3BhcmVudDtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDtcclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDVweCAjZDhlMzIxO1xyXG4gIH1cclxuXHJcbiAgJi51bnNlbGVjdGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm9wdGlvbiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xyXG4gICAgaGVpZ2h0OiA4OHB4O1xyXG4gICAgbWFyZ2luOiAxNXB4IDQ1cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyMDtcbn1cblxuLm9wdGlvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMTVweDtcbiAgei1pbmRleDogMjA7XG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XG59XG4ub3B0aW9uLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiBzb2xpZCA1cHggI2Q4ZTMyMTtcbn1cbi5vcHRpb24udW5zZWxlY3RlZCB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgaGVpZ2h0OiA4OHB4O1xuICAgIG1hcmdpbjogMTVweCA0NXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgfVxuICAub3B0aW9uOmZpcnN0LWNoaWxkIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIC5vcHRpb246bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-select',
                templateUrl: './image-select.component.html',
                styleUrls: ['./image-select.component.scss']
            }]
    }], function () { return []; }, { optionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/text-select/text-select.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/text-select/text-select.component.ts ***!
  \****************************************************************/
/*! exports provided: TextSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextSelectComponent", function() { return TextSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function (a0, a1, a2, a3, a4) { return { selected: a0, unselected: a1, large: a2, small: a3, "font-small": a4 }; };
function TextSelectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TextSelectComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.changeSelect.emit(item_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r39 = ctx.$implicit;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](2, _c0, item_r39 === ctx_r38.selected, ctx_r38.selected && item_r39 !== ctx_r38.selected, ctx_r38.optionList.length === 2, ctx_r38.optionList.length === 4, ctx_r38.font === "small"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r39.text, "\n");
} }
class TextSelectComponent {
    constructor() {
        this.changeSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    // readonly optionPath = environment.optionPath;
    ngOnInit() {
    }
}
TextSelectComponent.ɵfac = function TextSelectComponent_Factory(t) { return new (t || TextSelectComponent)(); };
TextSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TextSelectComponent, selectors: [["app-text-select"]], inputs: { optionList: "optionList", selected: "selected", font: "font" }, outputs: { changeSelect: "changeSelect" }, decls: 1, vars: 1, consts: [["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "ngClass", "click"]], template: function TextSelectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TextSelectComponent_div_0_Template, 2, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.optionList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 165px;\n  width: 615px;\n  margin: auto;\n  z-index: 20;\n}\n\n.option[_ngcontent-%COMP%] {\n  max-width: 470px;\n  border-radius: 10px;\n  border: solid 2px #4a5141;\n  border: solid 2px rgba(74, 81, 65, 0.15);\n  color: #4a5141;\n  font-size: 24px;\n  font-family: \"NotoSansCJKtc\";\n  flex: 1 0 calc(50% - 14px);\n  z-index: 20;\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  align-items: center;\n  padding: 0 15px;\n  margin: 7px;\n  word-wrap: break-word;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.option.large[_ngcontent-%COMP%] {\n  width: 470px;\n}\n\n.option.small[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.option.selected[_ngcontent-%COMP%] {\n  background: #d8e321;\n  border: solid 2px #d8e321;\n}\n\n.option.selected[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 28px;\n  height: 28px;\n  background: url('https://qq076qq076.github.io/museum/assets/images/icon_check.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  margin-right: 10px;\n}\n\n.option.unselected[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.option.font-small[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    padding-left: 15px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    display: block;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 10px 0;\n    font-size: 18px;\n    height: 66px;\n  }\n  .option.font-small[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    flex: 1 0 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RleHQtc2VsZWN0L0M6XFxVc2Vyc1xcRGF2aWRcXERlc2t0b3BcXHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcY29tcG9uZW50XFx0ZXh0LXNlbGVjdFxcdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90ZXh0LXNlbGVjdC90ZXh0LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFFQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNBRjs7QURFRTtFQUNFLFlBQUE7QUNBSjs7QURHRTtFQUNFLFlBQUE7QUNESjs7QURJRTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNGSjs7QURJSTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1GQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDRk47O0FETUU7RUFDRSxZQUFBO0FDSko7O0FET0U7RUFDRSxlQUFBO0FDTEo7O0FEU0EsOEVBQUE7O0FBRUE7RUFDRTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0VDUEY7O0VEVUE7SUFDRSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtFQ1BGO0VEU0U7SUFDRSxlQUFBO0VDUEo7QUFDRjs7QURjQTtFQUNFO0lBQ0UsbUJBQUE7SUFDQSxlQUFBO0VDWkY7O0VEZUE7SUFDRSxhQUFBO0VDWkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90ZXh0LXNlbGVjdC90ZXh0LXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDE2NXB4O1xyXG4gIHdpZHRoOiA2MTVweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgei1pbmRleDogMjA7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIG1heC13aWR0aDogNDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIDJweCAjNGE1MTQxO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoNzQsIDgxLCA2NSwgLjE1KTtcclxuICBjb2xvcjogIzRhNTE0MTtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0NKS3RjJztcclxuICAvLyBoZWlnaHQ6IDY2cHg7XHJcbiAgZmxleDoxIDAgY2FsYyg1MCUgLSAxNHB4KTtcclxuICB6LWluZGV4OiAyMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgbWFyZ2luOiA3cHg7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAmLmxhcmdlIHtcclxuICAgIHdpZHRoOiA0NzBweDtcclxuICB9XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gIH1cclxuXHJcbiAgJi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDhlMzIxO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAycHggI2Q4ZTMyMTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICB3aWR0aDogMjhweDtcclxuICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9pY29uX2NoZWNrLnN2ZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYudW5zZWxlY3RlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICAmLmZvbnQtc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG4vLyBFeHRyYSBzbWFsbCBkZXZpY2VzIChwb3J0cmFpdCBwaG9uZXMsIGxlc3MgdGhhbiA1NzZweClcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLm9wdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDY2cHg7XHJcblxyXG4gICAgJi5mb250LXNtYWxsIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7fVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gIDpob3N0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uIHtcclxuICAgIGZsZXg6IDEgMCA0NSU7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBoZWlnaHQ6IDE2NXB4O1xuICB3aWR0aDogNjE1cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMjA7XG59XG5cbi5vcHRpb24ge1xuICBtYXgtd2lkdGg6IDQ3MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjNGE1MTQxO1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDc0LCA4MSwgNjUsIDAuMTUpO1xuICBjb2xvcjogIzRhNTE0MTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0NKS3RjXCI7XG4gIGZsZXg6IDEgMCBjYWxjKDUwJSAtIDE0cHgpO1xuICB6LWluZGV4OiAyMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogN3B4O1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5vcHRpb24ubGFyZ2Uge1xuICB3aWR0aDogNDcwcHg7XG59XG4ub3B0aW9uLnNtYWxsIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQ6ICNkOGUzMjE7XG4gIGJvcmRlcjogc29saWQgMnB4ICNkOGUzMjE7XG59XG4ub3B0aW9uLnNlbGVjdGVkOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9pY29uX2NoZWNrLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ub3B0aW9uLnVuc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG4ub3B0aW9uLmZvbnQtc21hbGwge1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGhlaWdodDogNjZweDtcbiAgfVxuICAub3B0aW9uLmZvbnQtc21hbGwge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgOmhvc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLm9wdGlvbiB7XG4gICAgZmxleDogMSAwIDQ1JTtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TextSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-text-select',
                templateUrl: './text-select.component.html',
                styleUrls: ['./text-select.component.scss']
            }]
    }], function () { return []; }, { optionList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], font: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/component/title-underline/title-underline.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/title-underline/title-underline.component.ts ***!
  \************************************************************************/
/*! exports provided: TitleUnderlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleUnderlineComponent", function() { return TitleUnderlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class TitleUnderlineComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TitleUnderlineComponent.ɵfac = function TitleUnderlineComponent_Factory(t) { return new (t || TitleUnderlineComponent)(); };
TitleUnderlineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleUnderlineComponent, selectors: [["app-title-underline"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "index"]], template: function TitleUnderlineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n  margin-bottom: 26px;\n  text-align: center;\n  font-size: 36px;\n  font-family: \"NotoSansCJKtc\";\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  width: 579px;\n}\n[_nghost-%COMP%]   .index[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  left: -2.5%;\n  display: block;\n  height: 100%;\n  width: 107%;\n  background: url('https://qq076qq076.github.io/museum/assets/images/des-bg.png');\n  background-size: 100% 100%;\n  z-index: 5;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 25px;\n    font-size: 20px;\n    margin-bottom: 35px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%]::before {\n    height: 100%;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 37px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RpdGxlLXVuZGVybGluZS9DOlxcVXNlcnNcXERhdmlkXFxEZXNrdG9wXFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGNvbXBvbmVudFxcdGl0bGUtdW5kZXJsaW5lXFx0aXRsZS11bmRlcmxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC90aXRsZS11bmRlcmxpbmUvdGl0bGUtdW5kZXJsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBRUEsa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUVBLDRCQUFBO0FDREY7QURHRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNGSjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwrRUFBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtBQ0hKO0FEUUE7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDTEY7O0VEUUE7SUFDRSxXQUFBO0VDTEY7QUFDRjtBRFNBO0VBRUk7SUFDRSxZQUFBO0VDUko7QUFDRjtBRGFBO0VBQ0U7SUFDRSxtQkFBQTtFQ1hGOztFRGNBO0lBQ0UsWUFBQTtFQ1hGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGl0bGUtdW5kZXJsaW5lL3RpdGxlLXVuZGVybGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAvLyBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIC8vIG1heC13aWR0aDogNjEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvU2Fuc0NKS3RjJztcclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwdnc7XHJcbiAgICB3aWR0aDogNTc5cHg7XHJcbiAgfVxyXG5cclxuICAuaW5kZXgge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgfVxyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBsZWZ0OiAtMi41JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwNyU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9kZXMtYmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHotaW5kZXg6IDU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtb2JsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRhYmxldFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gIDpob3N0IHtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGxhcmdlIHBjXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA3MjBweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5vdG9TYW5zQ0pLdGNcIjtcbn1cbjpob3N0IGltZyB7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIHdpZHRoOiA1NzlweDtcbn1cbjpob3N0IC5pbmRleCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG59XG46aG9zdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE0cHg7XG4gIGxlZnQ6IC0yLjUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTA3JTtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2Rlcy1iZy5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICB6LWluZGV4OiA1O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICA6aG9zdDo6YmVmb3JlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgOmhvc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDM3cHg7XG4gIH1cblxuICBpbWcge1xuICAgIHdpZHRoOiA3MjBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleUnderlineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title-underline',
                templateUrl: './title-underline.component.html',
                styleUrls: ['./title-underline.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/title-underline/title-underline.component */ "./src/app/component/title-underline/title-underline.component.ts");
/* harmony import */ var _component_button_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/button/button.component */ "./src/app/component/button/button.component.ts");




class HomeComponent {
    constructor() {
        this.next = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], outputs: { next: "next" }, decls: 9, vars: 0, consts: [["src", "./assets/images/Pingtung.svg", 1, "place"], ["src", "./assets/images/home-title2.svg", 1, "title2"], ["src", "./assets/images/cast.svg", 1, "cast"], [1, "start-area"], [3, "click"], ["src", "./assets/images/btn.svg"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-title-underline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u5C4F\u83F8 1936 \u6587\u5316\u57FA\u5730\u672A\u4F86\u5C07\u5448\u73FE\u4E00\u500B\u85DD\u8853\u3001\u7522\u696D\u3001\u83F8\u8449\u53CA\u5152\u7AE5\u63A2\u7D22\u7684\u7A7A\u9593\uFF0C\u73FE\u5728\u8DDF\u6211\u4E00\u8D77\u627E\u51FA\u5C6C\u65BC\u4F60\u7684\u535A\u7269\u9928\u89D2\u8272\u985E\u578B\u53CA\u53CB\u4F34\u5427!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_app_button_click_7_listener() { return ctx.next.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_1__["TitleUnderlineComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  align-items: flex-start;\n  width: 850px;\n  max-width: 100vw;\n  margin: auto;\n  padding-top: 178px;\n  box-sizing: border-box;\n  height: 100%;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  background: url('https://qq076qq076.github.io/museum/assets/images/home-header.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  z-index: -2;\n  pointer-events: none;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 0;\n  background: url('https://qq076qq076.github.io/museum/assets/images/home-footer.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-position: bottom center;\n  z-index: -2;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  font-family: NotoSansCJKtc;\n  max-width: 659px;\n  text-align: left;\n}\n.place[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  height: 36px;\n}\n.title2[_ngcontent-%COMP%] {\n  margin-bottom: 49px;\n  width: 400px;\n}\n.cast[_ngcontent-%COMP%] {\n  width: 215px;\n  height: 87px;\n}\n.start-area[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 13px;\n}\n.start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  background: url('https://qq076qq076.github.io/museum/assets/images/btn_bg.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 124px;\n  height: 124px;\n  position: absolute;\n  right: -20%;\n  z-index: -1;\n  pointer-events: none;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    padding: 130px 10px 0;\n  }\n  [_nghost-%COMP%]::before {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-header-mw.png');\n  }\n  [_nghost-%COMP%]::after {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer-mw.png');\n  }\n  [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    height: 36px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    width: 310px;\n    margin-bottom: 27px;\n  }\n\n  .start-area[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 96px;\n    height: 96px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n    height: 23px;\n  }\n\n  .cast[_ngcontent-%COMP%] {\n    width: 189px;\n    margin-bottom: 98px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%] {\n    width: calc(100vw - 178px);\n    padding-top: 196px;\n  }\n  [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n    max-width: 513px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n\n  .cast[_ngcontent-%COMP%] {\n    margin-bottom: 216px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    top: 0;\n    right: 13px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 144px;\n    height: 144px;\n    right: -17%;\n  }\n}\n@media (min-width: 1919px) {\n  .cast[_ngcontent-%COMP%] {\n    width: 272px;\n    height: 110px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    margin-bottom: 9px;\n    height: 45px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    margin-bottom: 66px;\n    width: 500px;\n  }\n\n  [_nghost-%COMP%] {\n    width: 1076px;\n    padding-top: 264px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n\n  .start-area[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    top: 16px;\n    right: 18px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 184px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 180px;\n    height: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXERhdmlkXFxEZXNrdG9wXFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxvRkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLFdBQUE7RUFFQSxvQkFBQTtBQ0FKO0FER0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLG9GQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7QUNGSjtBREtFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDSEo7QURPQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDSkY7QURNRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUNKSjtBRE1JO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSwrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ0pOO0FEVUE7RUFDRTtJQUNFLHFCQUFBO0VDUEY7RURTRTtJQUNFLDZGQUFBO0VDUEo7RURVRTtJQUNFLDZGQUFBO0VDUko7RURXRTtJQUNFLGVBQUE7RUNUSjs7RURhQTtJQUNFLFlBQUE7RUNWRjs7RURhQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFQ1ZGOztFRGFBO0lBQ0UsVUFBQTtFQ1ZGO0VEY0k7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ1pOO0VEZUk7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ2JOOztFRGtCQTtJQUNFLFlBQUE7SUFDQSxtQkFBQTtFQ2ZGOztFRGtCQTtJQUNFLFdBQUE7RUNmRjtBQUNGO0FEbUJBO0VBQ0U7SUFDRSwwQkFBQTtJQUNBLGtCQUFBO0VDakJGO0VEbUJFO0lBQ0UsZ0JBQUE7RUNqQko7O0VEcUJBO0lBQ0Usa0JBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsbUJBQUE7RUNsQkY7O0VEcUJBO0lBQ0Usb0JBQUE7RUNsQkY7O0VEcUJBO0lBQ0UsbUJBQUE7RUNsQkY7O0VEc0JFO0lBQ0UsTUFBQTtJQUNBLFdBQUE7RUNuQko7RURxQkk7SUFDRSxZQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7RUNuQk47QUFDRjtBRHlCQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUN2QkY7O0VEMEJBO0lBQ0Usa0JBQUE7SUFDQSxZQUFBO0VDdkJGOztFRDBCQTtJQUNFLG1CQUFBO0lBQ0EsWUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxhQUFBO0lBQ0Esa0JBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsWUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxXQUFBO0VDdkJGO0VEeUJFO0lBQ0UsU0FBQTtJQUNBLFdBQUE7RUN2Qko7RUR5Qkk7SUFDRSxZQUFBO0VDdkJOO0VEMEJJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7RUN4Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICB3aWR0aDogODUwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDE3OHB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWhlYWRlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICAvLyBtaW4td2lkdGg6IDgwMHB4O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgLy8gbWluLXdpZHRoOiA4MDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgaDUge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc0NKS3RjO1xyXG4gICAgbWF4LXdpZHRoOiA2NTlweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucGxhY2Uge1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi50aXRsZTIge1xyXG4gIG1hcmdpbi1ib3R0b206IDQ5cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4uY2FzdCB7XHJcbiAgd2lkdGg6IDIxNXB4O1xyXG4gIGhlaWdodDogODdweDtcclxufVxyXG5cclxuLnN0YXJ0LWFyZWEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYXBwLWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMTNweDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2J0bl9iZy5zdmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICB3aWR0aDogMTI0cHg7XHJcbiAgICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IC0yMCU7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIG1vYmxlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHBhZGRpbmc6IDEzMHB4IDEwcHggMDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWhlYWRlci1tdy5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLW13LnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIGg1IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBsYWNlIHtcclxuICAgIGhlaWdodDogMzZweDtcclxuICB9XHJcblxyXG4gIC50aXRsZTIge1xyXG4gICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcclxuICB9XHJcblxyXG4gIC5zdGFydC1hcmVhIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcblxyXG4gICAgYXBwLWJ1dHRvbiB7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXN0IHtcclxuICAgIHdpZHRoOiAxODlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDk4cHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi8vIHRhYmxldFxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMTc4cHgpO1xyXG4gICAgcGFkZGluZy10b3A6IDE5NnB4O1xyXG5cclxuICAgIGg1IHtcclxuICAgICAgbWF4LXdpZHRoOiA1MTNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGFjZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FzdCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMTZweDtcclxuICB9XHJcblxyXG4gIGFwcC10aXRsZS11bmRlcmxpbmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcblxyXG4gIC5zdGFydC1hcmVhIHtcclxuICAgIGFwcC1idXR0b24ge1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHJpZ2h0OiAxM3B4O1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogMTQ0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDRweDtcclxuICAgICAgICByaWdodDogLTE3JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gbGFyZ2UgcGNcclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xyXG4gIC5jYXN0IHtcclxuICAgIHdpZHRoOiAyNzJweDtcclxuICAgIGhlaWdodDogMTEwcHg7XHJcbiAgfVxyXG5cclxuICAucGxhY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NnB4O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gIH1cclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwNzZweDtcclxuICAgIHBhZGRpbmctdG9wOiAyNjRweDtcclxuICB9XHJcblxyXG4gIGFwcC10aXRsZS11bmRlcmxpbmUgaW1nIHtcclxuICAgIHdpZHRoOiA3MjBweDtcclxuICB9XHJcblxyXG4gIC5zdGFydC1hcmVhIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGFwcC1idXR0b24ge1xyXG4gICAgICB0b3A6IDE2cHg7XHJcbiAgICAgIHJpZ2h0OiAxOHB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTg0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICB3aWR0aDogODUwcHg7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDE3OHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtaGVhZGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xuICB6LWluZGV4OiAtMjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZS1mb290ZXIucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gY2VudGVyO1xuICB6LWluZGV4OiAtMjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG46aG9zdCBoNSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1mYW1pbHk6IE5vdG9TYW5zQ0pLdGM7XG4gIG1heC13aWR0aDogNjU5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wbGFjZSB7XG4gIG1hcmdpbi1ib3R0b206IDlweDtcbiAgaGVpZ2h0OiAzNnB4O1xufVxuXG4udGl0bGUyIHtcbiAgbWFyZ2luLWJvdHRvbTogNDlweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uY2FzdCB7XG4gIHdpZHRoOiAyMTVweDtcbiAgaGVpZ2h0OiA4N3B4O1xufVxuXG4uc3RhcnQtYXJlYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RhcnQtYXJlYSBhcHAtYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxM3B4O1xufVxuLnN0YXJ0LWFyZWEgYXBwLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9idG5fYmcuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMjRweDtcbiAgaGVpZ2h0OiAxMjRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwJTtcbiAgei1pbmRleDogLTE7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHBhZGRpbmc6IDEzMHB4IDEwcHggMDtcbiAgfVxuICA6aG9zdDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZS1oZWFkZXItbXcucG5nXCIpO1xuICB9XG4gIDpob3N0OjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLW13LnBuZ1wiKTtcbiAgfVxuICA6aG9zdCBoNSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLnBsYWNlIHtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gIH1cblxuICAudGl0bGUyIHtcbiAgICB3aWR0aDogMzEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjdweDtcbiAgfVxuXG4gIC5zdGFydC1hcmVhIHtcbiAgICB3aWR0aDogOTAlO1xuICB9XG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b246OmJlZm9yZSB7XG4gICAgd2lkdGg6IDk2cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICB9XG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b24gaW1nIHtcbiAgICB3aWR0aDogODhweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gIH1cblxuICAuY2FzdCB7XG4gICAgd2lkdGg6IDE4OXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDk4cHg7XG4gIH1cblxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIDpob3N0IHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE3OHB4KTtcbiAgICBwYWRkaW5nLXRvcDogMTk2cHg7XG4gIH1cbiAgOmhvc3QgaDUge1xuICAgIG1heC13aWR0aDogNTEzcHg7XG4gIH1cblxuICAucGxhY2Uge1xuICAgIG1hcmdpbi1ib3R0b206IDdweDtcbiAgfVxuXG4gIC50aXRsZTIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIH1cblxuICAuY2FzdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjE2cHg7XG4gIH1cblxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICB9XG5cbiAgLnN0YXJ0LWFyZWEgYXBwLWJ1dHRvbiB7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAxM3B4O1xuICB9XG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b246OmJlZm9yZSB7XG4gICAgd2lkdGg6IDE0NHB4O1xuICAgIGhlaWdodDogMTQ0cHg7XG4gICAgcmlnaHQ6IC0xNyU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgLmNhc3Qge1xuICAgIHdpZHRoOiAyNzJweDtcbiAgICBoZWlnaHQ6IDExMHB4O1xuICB9XG5cbiAgLnBsYWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICB9XG5cbiAgLnRpdGxlMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogNjZweDtcbiAgICB3aWR0aDogNTAwcHg7XG4gIH1cblxuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwNzZweDtcbiAgICBwYWRkaW5nLXRvcDogMjY0cHg7XG4gIH1cblxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIGltZyB7XG4gICAgd2lkdGg6IDcyMHB4O1xuICB9XG5cbiAgLnN0YXJ0LWFyZWEge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b24ge1xuICAgIHRvcDogMTZweDtcbiAgICByaWdodDogMThweDtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDE4NHB4O1xuICB9XG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b246OmJlZm9yZSB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, { next: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/question.ts":
/*!*****************************!*\
  !*** ./src/app/question.ts ***!
  \*****************************/
/*! exports provided: FirstQuestion, SecondQuestion, QuestionList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstQuestion", function() { return FirstQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondQuestion", function() { return SecondQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionList", function() { return QuestionList; });
const FirstQuestion = {
    type: 'image',
    topic: '當你進到屏菸1936文化基地時，映入眼簾的畫面中哪一張圖片最吸引你的目光呢？',
    background: '01_bg.png',
    optionList: [
        {
            value: '1',
            src: '01_03.jpg',
            next: 2,
        },
        {
            value: '2',
            src: '01_01.jpg',
            next: 0
        },
        {
            value: '3',
            src: '01_02.jpg',
            next: 1,
        },
    ],
};
const SecondQuestion = [
    {
        type: 'text',
        topic: '想像一下，如果你將在屏菸1936文化基地裡經營特色小舖，你會選擇哪種商品進行販售呢？',
        background: '02_bg_2.png',
        optionList: [
            {
                text: '手作商品',
                value: 'b1',
            },
            {
                text: '健康蔬果或咖啡',
                value: 'b2',
            },
        ],
    },
    {
        type: 'text',
        topic: '當你進到美術館參觀，眼前有一個白色陶壺展件，你會想做的是？',
        background: '02_bg_3.png',
        optionList: [
            {
                text: '幫陶壺裝飾打扮一番',
                value: 'c1',
            },
            {
                text: '想知道陶壺的身家背景',
                value: 'c2',
            },
        ],
    },
    {
        type: 'text',
        topic: '假如屏菸1936文化基地將要辦理一系列活動，哪一個活動主題你會覺得最有趣呢？',
        background: '02_bg_1.png',
        optionList: [
            {
                text: '第一次說故事就上手',
                value: 'a1',
            },
            {
                text: '無塑生活大挑戰',
                value: 'a2',
            },
        ],
    },
];
const QuestionList = [
    {
        type: 'image',
        topic: '屏菸1936文化基地裡面有許多特色場域，你最想在哪裡拍照打卡？',
        background: '03_bg.png',
        optionList: [
            {
                value: '1',
                src: '03_01.jpg',
            },
            {
                value: '2',
                src: '03_02.JPG'
            },
            {
                value: '3',
                src: '03_03.jpg'
            },
        ],
    },
    {
        type: 'image',
        topic: '邀心儀的朋友同遊屏菸1936文化基地，你會選擇哪個特色場域，作為向她(他)告白的地點呢？',
        background: '04_bg.png',
        optionList: [
            {
                value: '1',
                src: '04_01.jpg',
            },
            {
                value: '2',
                src: '04_02.jpg'
            },
            {
                value: '3',
                src: '04_03.jpg'
            },
        ],
    },
    {
        type: 'text',
        topic: '這裡有個閒置的倉庫，你會想拿來經營什麼呢？',
        background: '05_bg.png',
        optionList: [
            {
                value: '1',
                text: '文創小舖店',
            },
            {
                value: '2',
                text: '旅館',
            },
            {
                value: '3',
                text: '食農市集',
            },
            {
                value: '4',
                text: '博物館或美術館',
            },
        ],
    },
    {
        type: 'text',
        topic: '逛博物館卻走到肚子餓，\n此時發現旁邊有在賣吃的，你會選擇吃哪一樣料理？',
        background: '06_bg.png',
        optionList: [
            {
                value: '1',
                text: '南國什錦沙拉',
            },
            {
                value: '2',
                text: '老鷹紅豆泥煎餅佐苦甜巧克力',
            },
        ],
    },
    {
        type: 'text',
        topic: '屏東擁有豐富多元的文化，你會最想從哪個面向來認識屏東呢？',
        background: '07_bg.png',
        optionList: [
            {
                value: '1',
                text: '海洋文化',
            },
            {
                value: '2',
                text: '食農文化',
            },
            {
                value: '3',
                text: '原民文化',
            },
            {
                value: '4',
                text: '在地藝術',
            },
        ],
    },
    {
        type: 'text',
        topic: '在網路上發現有新創料理的課程，是運用屏東在地食材創作一道「清燙石斑佐薑汁紅藜醬」，你會選擇參加課程嗎？',
        background: '08_bg.png',
        optionList: [
            {
                value: '1',
                text: '會',
            },
            {
                value: '2',
                text: '不會',
            },
        ],
    },
    {
        type: 'text',
        topic: '如果有朋友邀請你一起參加「屏菸1936手作工坊」活動，哪個主題是最吸引您的呢？',
        background: '09_bg.png',
        optionList: [
            {
                value: '1',
                text: '手刻木雕作品',
            },
            {
                value: '2',
                text: '食農廚藝教室',
            },
        ],
    },
    {
        type: 'text',
        topic: '在逛美術館時，通常什麼樣的展品會最吸引你的目光呢？',
        background: '10_bg.png',
        optionList: [
            {
                value: '1',
                text: '充滿原民風情的雕刻',
            },
            {
                value: '2',
                text: '描繪屏東風貌的畫作',
            },
        ],
    },
    {
        type: 'text',
        topic: '走進展間，發現裡面有著原住民所創作出的厲害木雕作品，你第一個會想做的事情是？',
        background: '11_bg.png',
        optionList: [
            {
                value: '1',
                text: '馬上跟作品合拍一張',
            },
            {
                value: '2',
                text: '走近觀察木雕的細節',
            },
        ],
    },
    {
        type: 'text',
        topic: '今天你參觀完屏菸1936文化基地，你最想分享怎樣的內容給朋友呢？',
        background: '12_bg.png',
        font: 'small',
        optionList: [
            {
                value: '1',
                text: '我參加了「創意時農，健康生活」活動講座，收穫滿滿',
            },
            {
                value: '2',
                text: '我今天在美術館裡看到了好多屏東在地的藝術家作品！',
            },
            {
                value: '3',
                text: '我發現兒童博物館裡的互動遊戲超好玩~',
            },
            {
                value: '4',
                text: '最近博物館推出「創新食農大秘辛」感覺有厲害~',
            },
        ],
    },
    {
        type: 'text',
        topic: '你想在博物館裡為另外一伴創造驚喜，你會選擇在哪個地點送出禮物呢？',
        background: '13_bg.png',
        font: 'small',
        optionList: [
            {
                value: '1',
                text: '具有濃濃藝術氣息的屏東藝術史常設展',
            },
            {
                value: '2',
                text: '在琳瑯滿目的文創商店前',
            },
            {
                value: '3',
                text: '吃著獨具創意食農料理的用餐地點',
            },
            {
                value: '4',
                text: '在充滿歡樂氛圍的兒童博物裡',
            },
        ],
    },
    {
        type: 'text',
        topic: '博物館正舉辦有關屏東的「創新食農大秘辛」分享會，以下哪種主題你會有興趣參加呢？',
        background: '14_bg.png',
        font: 'small',
        optionList: [
            {
                value: '1',
                text: '真「巧」遇見你~ 抗氧化幸福背後的巧克力故事',
            },
            {
                value: '2',
                text: '「蕉」個朋友吧！一起挖出屏東香蕉的前世今生',
            },
            {
                value: '3',
                text: '眼淚雖鹹但成果很甜~ 蓮霧的逆境生存術',
            },
            {
                value: '4',
                text: '遠「藜」負擔！讓紅藜麥成為你減重養身的好朋友',
            },
        ],
    },
    {
        type: 'image',
        topic: '屏菸1936文化基地要辦躲貓貓遊戲，您覺得躲在哪個空間最有勝算呢？',
        background: '14_bg.png',
        optionList: [
            {
                value: '1',
                src: '15_01.jpg',
            },
            {
                value: '2',
                src: '15_02.jpg',
            },
            {
                value: '3',
                src: '15_03.jpg',
            },
        ],
    },
];


/***/ }),

/***/ "./src/app/result/result.component.ts":
/*!********************************************!*\
  !*** ./src/app/result/result.component.ts ***!
  \********************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _result__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./result */ "./src/app/result/result.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/title-underline/title-underline.component */ "./src/app/component/title-underline/title-underline.component.ts");
/* harmony import */ var _component_button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/button/button.component */ "./src/app/component/button/button.component.ts");







function ResultComponent_div_3_app_title_underline_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-title-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r43.result.minPlace);
} }
function ResultComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u4F60\u7684\u89D2\u8272\u985E\u578B\u662F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "app-title-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u5C08\u5C6C\u53CB\u4F34 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "app-title-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u5C08\u5C6C\u5834\u6240");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "app-title-underline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ResultComponent_div_3_app_title_underline_26_Template, 3, 1, "app-title-underline", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "app-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_3_Template_app_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.toFB(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "app-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_3_Template_app_button_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r46.restart.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "app-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ResultComponent_div_3_Template_app_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.gift(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r42.resultPath + ctx_r42.result.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.result.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.result.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r42.result.describe);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r42.resultPath + ctx_r42.friend.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.friend.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r42.result.place, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r42.result.minPlace);
} }
class ResultComponent {
    constructor(renderer2) {
        this.renderer2 = renderer2;
        this.restart = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.resultPath = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].resultPath;
        this.result = _result__WEBPACK_IMPORTED_MODULE_2__["result"].a1;
        this.friend = _result__WEBPACK_IMPORTED_MODULE_2__["result"][_result__WEBPACK_IMPORTED_MODULE_2__["result"].a1.friend];
    }
    ngOnInit() {
        this.renderer2.addClass(document.body, 'result');
    }
    ngOnChanges() {
        this.getResult();
    }
    getResult() {
        this.result = _result__WEBPACK_IMPORTED_MODULE_2__["result"][this.secondQuestion.value.value];
        this.friend = _result__WEBPACK_IMPORTED_MODULE_2__["result"][this.result.friend];
    }
    gift() {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSfBPYyogf_Wa-MB9qiHwI_CPzaPcE_Ol96u4vtBjGRvyLXtuQ/viewform');
    }
    toFB() {
        const facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.location.href, 'facebook-popup', 'height=350,width=600');
        if (facebookWindow.focus) {
            facebookWindow.focus();
        }
        return false;
    }
}
ResultComponent.ɵfac = function ResultComponent_Factory(t) { return new (t || ResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultComponent, selectors: [["app-result"]], inputs: { secondQuestion: "secondQuestion" }, outputs: { restart: "restart" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 1, consts: [[1, "title"], ["src", "./assets/images/Pingtung.svg", 1, "place"], ["src", "./assets/images/home-title2.svg", 1, "title2"], ["class", "content", 4, "ngIf"], [1, "content"], [1, "head"], [3, "src"], [1, "describe"], [1, "column", "left"], [1, "gray"], [1, "column"], [1, "border"], [1, "friend-image", 3, "src"], [1, "place"], [4, "ngIf"], [1, "option"], [1, "fb", 3, "click"], ["src", "./assets/images/btn_fb.svg"], [1, "again", 3, "click"], ["src", "./assets/images/btn-again.png"], [1, "gift", 3, "click"], ["src", "./assets/images/btn-gift.png"], [1, "location"]], template: function ResultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ResultComponent_div_3_Template, 34, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.result);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__["TitleUnderlineComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 100vw;\n  margin: auto;\n  color: #4a5141;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 0;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-position: bottom center;\n  z-index: -2;\n  pointer-events: none;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n.title[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n  width: 86px;\n  display: inherit;\n  margin-bottom: 5px;\n}\n.title[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  display: inherit;\n}\n.gray[_ngcontent-%COMP%] {\n  color: rgba(74, 81, 65, 0.75);\n  font-size: 18px;\n  margin: 2px 0;\n  position: relative;\n  margin-top: 9px;\n}\n.content[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 40px;\n  width: 773px;\n}\n.place[_ngcontent-%COMP%] {\n  display: flex;\n}\n.place[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #4a5141;\n  opacity: 0.75;\n}\n.head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  margin-right: 69px;\n}\n.describe[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  position: relative;\n  top: -40px;\n}\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  position: relative;\n}\napp-title-underline[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  font-weight: 500;\n}\napp-title-underline[_ngcontent-%COMP%]::before {\n  height: 71%;\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 4px;\n  margin-bottom: 10px;\n  margin-bottom: 5px;\n  width: 291px;\n  height: 81px;\n  border: solid 1px rgba(0, 0, 0, 0.16);\n}\n.border[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  padding: 0 21px;\n}\n.border[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 22px;\n  font-weight: 500;\n}\n.left[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-right: 70px;\n  flex: 1;\n  font-size: 24px;\n}\n.friend-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: -27px;\n  right: 10px;\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  position: absolute;\n  left: -250px;\n  bottom: -92px;\n}\n.gift[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  background: url('https://qq076qq076.github.io/museum/assets/images/btn_bg.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 124px;\n  height: 124px;\n  position: absolute;\n  right: -20%;\n  z-index: -1;\n  pointer-events: none;\n}\napp-button[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n.fb[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]::after {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer-mw.png');\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 3px;\n    margin-bottom: -3px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    position: static;\n    padding-top: 17px;\n    display: flex;\n    \n    \n    display: -webkit-flex;\n    \n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .title[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n    width: 86px;\n    display: inline-block;\n  }\n  .title[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%] {\n    width: 65vw;\n    width: 194px;\n    display: inline-block;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n    width: 100%;\n  }\n\n  .head[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-top: 14px;\n  }\n  .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n    margin-right: 0;\n  }\n\n  .describe[_ngcontent-%COMP%] {\n    flex-direction: column;\n    top: 1px;\n  }\n\n  .column[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n\n  .friend-image[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    bottom: -35px;\n  }\n\n  .gray[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%] {\n    font-size: 26px;\n    font-weight: 500;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n    height: 67px;\n    margin-top: 25px;\n    margin-bottom: -17px;\n  }\n  .border[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .border[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-left: 15px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    position: relative;\n    top: 40px;\n    left: initial;\n    bottom: initial;\n  }\n\n  .gift[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .again[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .gift[_ngcontent-%COMP%]::before, .again[_ngcontent-%COMP%]::before {\n    width: 76px;\n    height: 76px;\n  }\n\n  .fb[_ngcontent-%COMP%] {\n    width: 42px;\n  }\n  .fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 28px;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin: 0 3px;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  .content[_ngcontent-%COMP%] {\n    width: 697px;\n    margin: auto;\n    margin-top: 123px;\n  }\n\n  .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .describe[_ngcontent-%COMP%] {\n    top: 0;\n    margin-top: 52px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    left: -315px;\n    bottom: -135px;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    width: 293px;\n    margin-right: 28px;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    margin-right: 35px;\n  }\n\n  .gray[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: 9px;\n  }\n}\n@media (min-width: 1919px) {\n  .content[_ngcontent-%COMP%] {\n    width: 847px;\n    margin: auto;\n    margin-top: 60px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    bottom: -130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L0M6XFxVc2Vyc1xcRGF2aWRcXERlc2t0b3BcXHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxccmVzdWx0XFxyZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDBGQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7QUNBSjtBRElBO0VBQ0UsZUFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDREY7QURHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDREo7QURJRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGSjtBRE1BO0VBQ0UsNkJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0hGO0FETUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSEY7QURNQTtFQUNFLGFBQUE7QUNIRjtBREtFO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUNISjtBRE9BO0VBQ0Usa0JBQUE7QUNKRjtBRE1FO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0pKO0FEUUE7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxnQkFBQTtBQ0xGO0FET0U7RUFDRSxXQUFBO0FDTEo7QURTQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0FDTkY7QURRRTtFQUNFLGVBQUE7QUNOSjtBRFNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNQSjtBRFdBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7QUNSRjtBRFdBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNSRjtBRFlFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSwrRUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ1RKO0FEYUE7RUFDRSxhQUFBO0FDVkY7QURhQTtFQUNFLFdBQUE7QUNWRjtBRFlFO0VBQ0UsV0FBQTtBQ1ZKO0FEaUJBO0VBQ0U7SUFDRSw2RkFBQTtFQ2RGOztFRGlCQTtJQUNFLGVBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7RUNkRjs7RURpQkE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUVBLG9DQUFBO0lBRUEsb0JBQUE7SUFDQSxxQkFBQTtJQUNBLHNDQUFBO0lBQ0EsbUJBQUE7SUFDQSx1QkFBQTtJQUNBLFdBQUE7RUNkRjtFRGdCRTtJQUdFLFdBQUE7SUFDQSxxQkFBQTtFQ2hCSjtFRG1CRTtJQUVFLFdBQUE7SUFDQSxZQUFBO0lBQ0EscUJBQUE7RUNsQko7O0VEc0JBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7RUNuQkY7O0VEc0JBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDbkJGO0VEcUJFO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxlQUFBO0VDbkJKOztFRHVCQTtJQUNFLHNCQUFBO0lBQ0EsUUFBQTtFQ3BCRjs7RUR1QkE7SUFDRSxlQUFBO0lBQ0Esc0JBQUE7RUNwQkY7O0VEdUJBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VDcEJGOztFRHVCQTtJQUNFLGVBQUE7RUNwQkY7O0VEdUJBO0lBQ0UsZUFBQTtJQUNBLGdCQUFBO0VDcEJGOztFRHVCQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLG9CQUFBO0VDcEJGO0VEc0JFO0lBQ0UsZUFBQTtFQ3BCSjtFRHVCRTtJQUNFLGVBQUE7SUFDQSxpQkFBQTtFQ3JCSjs7RUR5QkE7SUFDRSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ3RCRjs7RUQ0QkU7O0lBQ0UsV0FBQTtFQ3hCSjtFRDJCRTs7SUFDRSxXQUFBO0lBQ0EsWUFBQTtFQ3hCSjs7RUQ2QkE7SUFDRSxXQUFBO0VDMUJGO0VENEJFO0lBQ0UsV0FBQTtFQzFCSjs7RUQ4QkE7SUFDRSxhQUFBO0VDM0JGO0FBQ0Y7QUQrQkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsU0FBQTtFQzdCRjs7RURnQ0E7SUFDRSxNQUFBO0lBQ0EsZ0JBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsWUFBQTtJQUNBLGNBQUE7RUM3QkY7O0VEZ0NBO0lBRUUsWUFBQTtJQUNBLGtCQUFBO0VDOUJGOztFRGlDQTtJQUNFLGtCQUFBO0VDOUJGOztFRGlDQTtJQUNFLFNBQUE7SUFDQSxlQUFBO0VDOUJGO0FBQ0Y7QURrQ0E7RUFDRTtJQUNFLFlBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7RUNoQ0Y7O0VEbUNBO0lBQ0UsY0FBQTtFQ2hDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBjb2xvcjogIzRhNTE0MTtcclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgLy8gbWluLXdpZHRoOiA4MDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxucCB7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogMjBweDtcclxuXHJcbiAgLnBsYWNlIHtcclxuICAgIHdpZHRoOiA4NnB4O1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC50aXRsZTIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogaW5oZXJpdDtcclxuICB9XHJcbn1cclxuXHJcbi5ncmF5IHtcclxuICBjb2xvcjogcmdiYSg3NCwgODEsIDY1LCAuNzUpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW46IDJweCAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiA5cHg7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxuICB3aWR0aDogNzczcHg7XHJcbn1cclxuXHJcbi5wbGFjZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgLmxvY2F0aW9uIHtcclxuICAgIGNvbG9yOiAjNGE1MTQxO1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMzIwcHg7XHJcbiAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA2OXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmRlc2NyaWJlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTQwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuYXBwLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgZm9udC1zaXplOiAzNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBoZWlnaHQ6IDcxJTtcclxuICB9XHJcbn1cclxuXHJcbi5ib3JkZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHdpZHRoOiAyOTFweDtcclxuICBoZWlnaHQ6IDgxcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAuMTYpO1xyXG5cclxuICAuZ3JheSB7XHJcbiAgICBwYWRkaW5nOiAwIDIxcHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3MHB4O1xyXG4gIGZsZXg6IDE7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uZnJpZW5kLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgYm90dG9tOiAtMjdweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLm9wdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMjUwcHg7XHJcbiAgYm90dG9tOiAtOTJweDtcclxufVxyXG5cclxuLmdpZnQge1xyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvYnRuX2JnLnN2ZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHdpZHRoOiAxMjRweDtcclxuICAgIGhlaWdodDogMTI0cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTIwJTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5hcHAtYnV0dG9uIHtcclxuICBtYXJnaW46IDAgOHB4O1xyXG59XHJcblxyXG4uZmIge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDQ1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbi8vIG1vYmxlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIDpob3N0OjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci1tdy5wbmcnKTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gICAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAucGxhY2Uge1xyXG4gICAgICAvLyBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIC8vIHdpZHRoOiAyNHZ3O1xyXG4gICAgICB3aWR0aDogODZweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZTIge1xyXG4gICAgICAvLyB3aWR0aDogMjMwcHg7XHJcbiAgICAgIHdpZHRoOiA2NXZ3O1xyXG4gICAgICB3aWR0aDogMTk0cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMTRweDtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZXNjcmliZSB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdG9wOiAxcHg7XHJcbiAgfVxyXG5cclxuICAuY29sdW1uIHtcclxuICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICAuZnJpZW5kLWltYWdlIHtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgYm90dG9tOiAtMzVweDtcclxuICB9XHJcblxyXG4gIC5ncmF5IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIGFwcC10aXRsZS11bmRlcmxpbmUge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcblxyXG4gIC5ib3JkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjdweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDtcclxuXHJcbiAgICAuZ3JheSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA0MHB4O1xyXG4gICAgbGVmdDogaW5pdGlhbDtcclxuICAgIGJvdHRvbTogaW5pdGlhbDtcclxuICB9XHJcblxyXG4gIC5naWZ0LFxyXG4gIC5hZ2FpbiB7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgd2lkdGg6IDc2cHg7XHJcbiAgICAgIGhlaWdodDogNzZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuZmIge1xyXG4gICAgd2lkdGg6IDQycHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhcHAtYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0YWJsZXRcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICAuY29udGVudCB7XHJcbiAgICB3aWR0aDogNjk3cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMjNweDtcclxuICB9XHJcblxyXG4gIC5oZWFkIGltZyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpYmUge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTJweDtcclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgbGVmdDogLTMxNXB4O1xyXG4gICAgYm90dG9tOiAtMTM1cHg7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyIHtcclxuXHJcbiAgICB3aWR0aDogMjkzcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XHJcbiAgfVxyXG5cclxuICAubGVmdCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM1cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JheSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA5cHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsYXJnZSBwY1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDg0N3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgYm90dG9tOiAtMTMwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgbWF4LXdpZHRoOiAxMDB2dztcbiAgbWFyZ2luOiBhdXRvO1xuICBjb2xvcjogIzRhNTE0MTtcbn1cbjpob3N0OjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgei1pbmRleDogLTI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4udGl0bGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogMjBweDtcbn1cbi50aXRsZSAucGxhY2Uge1xuICB3aWR0aDogODZweDtcbiAgZGlzcGxheTogaW5oZXJpdDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLnRpdGxlIC50aXRsZTIge1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogaW5oZXJpdDtcbn1cblxuLmdyYXkge1xuICBjb2xvcjogcmdiYSg3NCwgODEsIDY1LCAwLjc1KTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDJweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDlweDtcbn1cblxuLmNvbnRlbnQge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIHdpZHRoOiA3NzNweDtcbn1cblxuLnBsYWNlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5wbGFjZSAubG9jYXRpb24ge1xuICBjb2xvcjogIzRhNTE0MTtcbiAgb3BhY2l0eTogMC43NTtcbn1cblxuLmhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaGVhZCBpbWcge1xuICB3aWR0aDogMzIwcHg7XG4gIGhlaWdodDogMzIwcHg7XG4gIG1hcmdpbi1yaWdodDogNjlweDtcbn1cblxuLmRlc2NyaWJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG59XG5cbi5jb2x1bW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYXBwLXRpdGxlLXVuZGVybGluZSB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuYXBwLXRpdGxlLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgaGVpZ2h0OiA3MSU7XG59XG5cbi5ib3JkZXIge1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tdG9wOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgd2lkdGg6IDI5MXB4O1xuICBoZWlnaHQ6IDgxcHg7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XG59XG4uYm9yZGVyIC5ncmF5IHtcbiAgcGFkZGluZzogMCAyMXB4O1xufVxuLmJvcmRlciBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmxlZnQge1xuICB3aWR0aDogNDUwcHg7XG4gIG1hcmdpbi1yaWdodDogNzBweDtcbiAgZmxleDogMTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZnJpZW5kLWltYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogLTI3cHg7XG4gIHJpZ2h0OiAxMHB4O1xufVxuXG4ub3B0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IC0yNTBweDtcbiAgYm90dG9tOiAtOTJweDtcbn1cblxuLmdpZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvYnRuX2JnLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTI0cHg7XG4gIGhlaWdodDogMTI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHotaW5kZXg6IC0xO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYXBwLWJ1dHRvbiB7XG4gIG1hcmdpbjogMCA4cHg7XG59XG5cbi5mYiB7XG4gIHdpZHRoOiA3MHB4O1xufVxuLmZiIGltZyB7XG4gIHdpZHRoOiA0NXB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Q6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaG9tZS1mb290ZXItbXcucG5nXCIpO1xuICB9XG5cbiAgcCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtM3B4O1xuICB9XG5cbiAgLnRpdGxlIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC50aXRsZSAucGxhY2Uge1xuICAgIHdpZHRoOiA4NnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudGl0bGUgLnRpdGxlMiB7XG4gICAgd2lkdGg6IDY1dnc7XG4gICAgd2lkdGg6IDE5NHB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5jb250ZW50IHtcbiAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuaGVhZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIG1hcmdpbi10b3A6IDE0cHg7XG4gIH1cbiAgLmhlYWQgaW1nIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gIH1cblxuICAuZGVzY3JpYmUge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdG9wOiAxcHg7XG4gIH1cblxuICAuY29sdW1uIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgfVxuXG4gIC5mcmllbmQtaW1hZ2Uge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBib3R0b206IC0zNXB4O1xuICB9XG5cbiAgLmdyYXkge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIGFwcC10aXRsZS11bmRlcmxpbmUge1xuICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG5cbiAgLmJvcmRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjdweDtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xN3B4O1xuICB9XG4gIC5ib3JkZXIgLmdyYXkge1xuICAgIHBhZGRpbmc6IDAgMTVweDtcbiAgfVxuICAuYm9yZGVyIGFwcC10aXRsZS11bmRlcmxpbmUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQwcHg7XG4gICAgbGVmdDogaW5pdGlhbDtcbiAgICBib3R0b206IGluaXRpYWw7XG4gIH1cblxuICAuZ2lmdCBpbWcsXG4uYWdhaW4gaW1nIHtcbiAgICB3aWR0aDogODhweDtcbiAgfVxuICAuZ2lmdDo6YmVmb3JlLFxuLmFnYWluOjpiZWZvcmUge1xuICAgIHdpZHRoOiA3NnB4O1xuICAgIGhlaWdodDogNzZweDtcbiAgfVxuXG4gIC5mYiB7XG4gICAgd2lkdGg6IDQycHg7XG4gIH1cbiAgLmZiIGltZyB7XG4gICAgd2lkdGg6IDI4cHg7XG4gIH1cblxuICBhcHAtYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgM3B4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAuY29udGVudCB7XG4gICAgd2lkdGg6IDY5N3B4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAxMjNweDtcbiAgfVxuXG4gIC5oZWFkIGltZyB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLmRlc2NyaWJlIHtcbiAgICB0b3A6IDA7XG4gICAgbWFyZ2luLXRvcDogNTJweDtcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIGxlZnQ6IC0zMTVweDtcbiAgICBib3R0b206IC0xMzVweDtcbiAgfVxuXG4gIC5ib3JkZXIge1xuICAgIHdpZHRoOiAyOTNweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDI4cHg7XG4gIH1cblxuICAubGVmdCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xuICB9XG5cbiAgLmdyYXkge1xuICAgIG1hcmdpbjogMDtcbiAgICBtYXJnaW4tdG9wOiA5cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA4NDdweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIGJvdHRvbTogLTEzMHB4O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result',
                templateUrl: './result.component.html',
                styleUrls: ['./result.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { secondQuestion: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], restart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/result/result.ts":
/*!**********************************!*\
  !*** ./src/app/result/result.ts ***!
  \**********************************/
/*! exports provided: result */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
const result = {
    a1: {
        name: '志工',
        title: '「我的播種，將發出美好之芽」',
        describe: '你樂於學習與分享，每天期待接受新事物。熱心助人，而且總能對他人侃侃而談，與對方創造美好關係！',
        friend: 'a2',
        place: '屏菸風華',
        minPlace: '菸葉常設展',
        image: 'museum_graphic_guide.png'
    },
    a2: {
        name: '康樂股長',
        title: '「散播快樂與歡笑，是我的天命！」',
        describe: '你樂觀又活潑，總能將歡樂帶給所愛的人，吃喝玩樂樣樣通。有你，無聊退散！',
        friend: 'a1',
        place: '身體力行',
        minPlace: '大武山遊戲場',
        image: 'museum_graphic_cheer_leader.png',
    },
    b1: {
        name: '博物館小老闆',
        title: '「在平凡生活中創造不平凡」',
        describe: '充滿想像力的你，樂於嘗試與挑戰，與他人分享有趣的點子，並持續在日常中勇於創造、精準實踐。',
        friend: 'b2',
        place: '屏菸 1936 文化基地',
        image: 'museum_graphic_store_keeper.png',
    },
    b2: {
        name: '食農大神',
        title: '「世界的健康，由我來守護」',
        describe: '你擁有無可比擬的耐心與毅力，能堅定自己的理念，並且付諸行動！願與他人合作，共創更美好的生活。',
        friend: 'b1',
        place: '屏菸 1936 文化基地',
        image: 'museum_graphic_farmer.png',
    },
    c1: {
        name: '藝術家',
        title: '「藝術－描繪著我們的靈魂」',
        describe: '你有著特別的氣質，總能為事物增添出新風采，喜歡接受挑戰與學習新事物，每天都充滿了行動力！',
        friend: 'c2',
        place: '南國美學',
        minPlace: '藝術描繪靈魂',
        image: 'museum_graphic_artist.png',
    },
    c2: {
        name: '鷹眼觀眾',
        title: '「探索博物館裡的無限可能」',
        describe: '你喜歡思考心思細膩，對於事物總具備敏銳的觀察力，而且總能發展出獨到的想法。',
        friend: 'c1',
        place: '屏東製造',
        minPlace: '今昔產業創新',
        image: 'museum_graphic_tourist.png',
    },
};


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
    production: false,
    optionPath: './assets/images/question/',
    resultPath: './assets/images/result/',
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

module.exports = __webpack_require__(/*! C:\Users\David\Desktop\project\museum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map