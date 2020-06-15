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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _component_card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_7__["ResultComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/bg1.svg'), url('https://qq076qq076.github.io/museum/assets/images/bg2.svg');\n  background-size: auto 100%;\n  background-position: center center;\n  background-repeat: no-repeat;\n  overflow: hidden;\n  display: block;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n  display: inline-block;\n  align-self: flex-start;\n  position: absolute;\n  bottom: 13px;\n  left: 19px;\n  z-index: 10;\n  font-family: PingFangTC;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  top: 11px;\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  margin-left: 64px;\n  color: rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(0, 0, 0, 0.5);\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  flex-direction: column;\n  height: 100%;\n  position: absolute;\n  right: 12px;\n  top: 0;\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  background: #659605;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  opacity: 0.25;\n  margin: 5px 0;\n}\n[_nghost-%COMP%]   .point-area[_ngcontent-%COMP%]   .point.current[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 10px;\n    bottom: 7px;\n    font-size: 10px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 210px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 42px;\n    font-size: 10px;\n    opacity: 0.5;\n  }\n  [_nghost-%COMP%]   .point-area[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 22px;\n    bottom: 11px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 223px;\n    top: 6px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 45px;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%] {\n    left: 20px;\n    bottom: 20px;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 319px;\n    top: 0;\n  }\n  [_nghost-%COMP%]   .institution[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n    margin-left: 65px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFNRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9KQUFBO0VBR0EsMEJBQUE7RUFDQSxrQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTkY7QURRRTtFQUNFLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FDTko7QURRSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQ05OO0FEU0k7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0FDUE47QURTTTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7QUNQUjtBRFlFO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0FDVko7QURZSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FDVk47QURZTTtFQUNFLFVBQUE7QUNWUjtBRGdCRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDZEo7RURnQkk7SUFDRSxZQUFBO0VDZE47RURpQkk7SUFDRSxpQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VDZk47RURtQkU7SUFDRSxhQUFBO0VDakJKO0FBQ0Y7QURxQkU7RUFDRTtJQUNFLFVBQUE7SUFDQSxZQUFBO0VDbkJKO0VEcUJJO0lBQ0UsWUFBQTtJQUNBLFFBQUE7RUNuQk47RURzQkk7SUFDRSxpQkFBQTtFQ3BCTjtBQUNGO0FEeUJFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsWUFBQTtFQ3ZCSjtFRHlCSTtJQUNFLFlBQUE7SUFDQSxNQUFBO0VDdkJOO0VEMEJJO0lBQ0UsaUJBQUE7RUN4Qk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2JnMS5zdmcnKSxcclxuICAgIHVybCgnfi9hc3NldHMvaW1hZ2VzL2JnMi5zdmcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuXHJcbiAgLmluc3RpdHV0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEzcHg7XHJcbiAgICBsZWZ0OiAxOXB4O1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBmb250LWZhbWlseTogUGluZ0ZhbmdUQztcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29weXJpZ2h0IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDY0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wb2ludC1hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gICAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMnB4O1xyXG4gICAgdG9wOiAwO1xyXG5cclxuICAgIC5wb2ludCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM2NTk2MDU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgb3BhY2l0eTogLjI1O1xyXG4gICAgICBtYXJnaW46IDVweCAwO1xyXG5cclxuICAgICAgJi5jdXJyZW50IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBtb2JsZVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgYm90dG9tOiA3cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY29weXJpZ2h0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDJweDtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucG9pbnQtYXJlYSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0YWJsZXRcclxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gICAgLmluc3RpdHV0aW9uIHtcclxuICAgICAgbGVmdDogMjJweDtcclxuICAgICAgYm90dG9tOiAxMXB4O1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjIzcHg7XHJcbiAgICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBsYXJnZSBwY1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcclxuICAgIC5pbnN0aXR1dGlvbiB7XHJcbiAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgIGJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMxOXB4O1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvcHlyaWdodCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDY1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvYmcxLnN2Z1wiKSwgdXJsKFwifi9hc3NldHMvaW1hZ2VzL2JnMi5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbjpob3N0IC5pbnN0aXR1dGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEzcHg7XG4gIGxlZnQ6IDE5cHg7XG4gIHotaW5kZXg6IDEwO1xuICBmb250LWZhbWlseTogUGluZ0ZhbmdUQztcbn1cbjpob3N0IC5pbnN0aXR1dGlvbiBpbWcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTFweDtcbn1cbjpob3N0IC5pbnN0aXR1dGlvbiAuY29weXJpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IDY0cHg7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG46aG9zdCAuaW5zdGl0dXRpb24gLmNvcHlyaWdodCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuOmhvc3QgLnBvaW50LWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEycHg7XG4gIHRvcDogMDtcbn1cbjpob3N0IC5wb2ludC1hcmVhIC5wb2ludCB7XG4gIGJhY2tncm91bmQ6ICM2NTk2MDU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgb3BhY2l0eTogMC4yNTtcbiAgbWFyZ2luOiA1cHggMDtcbn1cbjpob3N0IC5wb2ludC1hcmVhIC5wb2ludC5jdXJyZW50IHtcbiAgb3BhY2l0eTogMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdCAuaW5zdGl0dXRpb24ge1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgYm90dG9tOiA3cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICB9XG4gIDpob3N0IC5pbnN0aXR1dGlvbiBpbWcge1xuICAgIHdpZHRoOiAyMTBweDtcbiAgfVxuICA6aG9zdCAuaW5zdGl0dXRpb24gLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDQycHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuICA6aG9zdCAucG9pbnQtYXJlYSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgOmhvc3QgLmluc3RpdHV0aW9uIHtcbiAgICBsZWZ0OiAyMnB4O1xuICAgIGJvdHRvbTogMTFweDtcbiAgfVxuICA6aG9zdCAuaW5zdGl0dXRpb24gaW1nIHtcbiAgICB3aWR0aDogMjIzcHg7XG4gICAgdG9wOiA2cHg7XG4gIH1cbiAgOmhvc3QgLmluc3RpdHV0aW9uIC5jb3B5cmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIDpob3N0IC5pbnN0aXR1dGlvbiB7XG4gICAgbGVmdDogMjBweDtcbiAgICBib3R0b206IDIwcHg7XG4gIH1cbiAgOmhvc3QgLmluc3RpdHV0aW9uIGltZyB7XG4gICAgd2lkdGg6IDMxOXB4O1xuICAgIHRvcDogMDtcbiAgfVxuICA6aG9zdCAuaW5zdGl0dXRpb24gLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7XG4gIH1cbn0iXX0= */"], data: { animation: [_animation_animation__WEBPACK_IMPORTED_MODULE_1__["fadeInOutAnimation"]] } });
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
    } }, styles: ["[_nghost-%COMP%] {\n  width: 237px;\n  height: 70px;\n  border-radius: 20px;\n  border: none;\n  background-color: #d8e321;\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  border: solid 6px rgba(216, 227, 33, 0.33);\n  background-clip: padding-box;\n}\n[disabled=true][_nghost-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    width: 142px;\n    height: 42px;\n    border-radius: 12px;\n  }\n  [_nghost-%COMP%]::after {\n    border-radius: 12px;\n    width: calc(100% + 7px);\n    height: calc(100% + 7px);\n    top: -3.5px;\n    left: -3.5px;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%] {\n    width: 298px;\n    height: 88px;\n    border-radius: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2J1dHRvbi9EOlxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXGJ1dHRvblxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSw0QkFBQTtBQ0NGO0FER0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUNESjtBRE1BO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDSEY7RURLRTtJQUNFLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VDSEo7QUFDRjtBRE9BO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLG1CQUFBO0VDTEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOiAyMzdweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTMyMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogc29saWQgNnB4IHJnYmEoMjE2LCAyMjcsIDMzLCAwLjMzKTtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gIC8vIHotaW5kZXg6IDIwO1xyXG4gIC8vIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICZbZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICB9XHJcbn1cclxuXHJcbi8vIG1vYmxlXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiAxNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlICsgN3B4KTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA3cHgpO1xyXG4gICAgICB0b3A6IC0zLjVweDtcclxuICAgICAgbGVmdDogLTMuNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiAyOThweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgd2lkdGg6IDIzN3B4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZTMyMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlcjogc29saWQgNnB4IHJnYmEoMjE2LCAyMjcsIDMzLCAwLjMzKTtcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcbn1cbjpob3N0W2Rpc2FibGVkPXRydWVdIHtcbiAgb3BhY2l0eTogMC41O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxuICA6aG9zdDo6YWZ0ZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDdweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgKyA3cHgpO1xuICAgIHRvcDogLTMuNXB4O1xuICAgIGxlZnQ6IC0zLjVweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDI5OHB4O1xuICAgIGhlaWdodDogODhweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICB9XG59Il19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(." + ctx.optionPath + (ctx.question == null ? null : ctx.question.background) + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardBackgroundAnimation", ctx.showState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx.showState === "show"))("@cardAnimation", ctx.showState);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showState === "show");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__["TitleUnderlineComponent"], _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"], _image_select_image_select_component__WEBPACK_IMPORTED_MODULE_6__["ImageSelectComponent"], _text_select_text_select_component__WEBPACK_IMPORTED_MODULE_7__["TextSelectComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/bg3_desktop.svg');\n  background-repeat: no-repeat;\n  background-position: center bottom;\n  z-index: -4;\n}\n.card[_ngcontent-%COMP%] {\n  border-radius: 15px;\n  background-color: #ffffff;\n  width: 930px;\n  height: 540px;\n  margin: auto;\n  margin-top: 109px;\n  z-index: 10;\n  padding-top: 36px;\n}\n.card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-bottom: 35px;\n  max-width: 750px;\n  margin-top: 35px;\n}\n.card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%]::before {\n  background-repeat: no-repeat;\n  background-size: 612px 55px;\n  background-position: top center;\n}\n.card.current[_ngcontent-%COMP%] {\n  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);\n}\n.card-container[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\napp-image-select[_ngcontent-%COMP%], app-text-select[_ngcontent-%COMP%] {\n  flex: 0 auto;\n}\n.background-image[_ngcontent-%COMP%] {\n  min-width: 100%;\n  min-height: 100%;\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -5;\n  opacity: 0;\n}\napp-button[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 55px;\n  margin-bottom: 34px;\n  z-index: 20;\n}\n.page[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 10px;\n  margin-left: 25px;\n  margin-bottom: 11px;\n  z-index: 20;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]::before {\n    background-size: auto;\n  }\n\n  .card[_ngcontent-%COMP%] {\n    margin-top: 42px;\n    margin-left: 15px;\n    margin-right: 15px;\n    padding-top: 17px;\n    width: auto;\n    min-height: 80%;\n  }\n  .card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    margin-right: 10px;\n    margin-bottom: 30px;\n    margin-top: auto;\n  }\n  .card[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%]::before {\n    background-repeat: no-repeat;\n    background-size: 310px 27px;\n    background-position: top center;\n  }\n\n  app-image-select[_ngcontent-%COMP%], app-text-select[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n    height: 23px;\n  }\n\n  .page[_ngcontent-%COMP%] {\n    display: block;\n  }\n\n  .background-image[_ngcontent-%COMP%] {\n    background-image: auto 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  .card[_ngcontent-%COMP%] {\n    width: calc(100vw - 60px);\n    height: 800px;\n  }\n\n  app-text-select[_ngcontent-%COMP%] {\n    flex: 0;\n  }\n\n  .background-image[_ngcontent-%COMP%] {\n    background-image: auto 100%;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%]::before {\n    background-size: 100% 100%;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin-top: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhcmQvRDpcXHByb2plY3RcXG11c2V1bS9zcmNcXGFwcFxcY29tcG9uZW50XFxjYXJkXFxjYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsMEZBQUE7RUFFQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQ0FKO0FESUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0k7RUFDRSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUNETjtBREtFO0VBQ0UseUNBQUE7QUNISjtBRE9BO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0pGO0FET0E7O0VBRUUsWUFBQTtBQ0pGO0FET0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0pGO0FET0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNKRjtBRE9BO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ0pGO0FET0E7RUFFRTtJQUNFLHFCQUFBO0VDTEY7O0VEUUE7SUFDRSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDTEY7RURPRTtJQUNFLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0VDTEo7RURPSTtJQUNFLDRCQUFBO0lBQ0EsMkJBQUE7SUFDQSwrQkFBQTtFQ0xOOztFRFVBOztJQUVFLE9BQUE7RUNQRjs7RURXQTtJQUNFLGFBQUE7RUNSRjtFRFVFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNSSjs7RURZQTtJQUNFLGNBQUE7RUNURjs7RURZQTtJQUNFLDJCQUFBO0VDVEY7QUFDRjtBRGVBO0VBQ0U7SUFDRSx5QkFBQTtJQUNBLGFBQUE7RUNiRjs7RURnQkE7SUFDRSxPQUFBO0VDYkY7O0VEZ0JBO0lBQ0UsMkJBQUE7RUNiRjtBQUNGO0FEZ0JBO0VBQ0U7SUFDRSwwQkFBQTtFQ2RGOztFRGlCQTtJQUNFLGdCQUFBO0VDZEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvYmczX2Rlc2t0b3Auc3ZnJyk7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgei1pbmRleDogLTQ7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHdpZHRoOiA5MzBweDtcclxuICBoZWlnaHQ6IDU0MHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBtYXJnaW4tdG9wOiAxMDlweDtcclxuICB6LWluZGV4OiAxMDtcclxuICBwYWRkaW5nLXRvcDogMzZweDtcclxuXHJcbiAgYXBwLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiA2MTJweCA1NXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi5jdXJyZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbmFwcC1pbWFnZS1zZWxlY3QsXHJcbmFwcC10ZXh0LXNlbGVjdCB7XHJcbiAgZmxleDogMCBhdXRvO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB6LWluZGV4OiAtNTtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5hcHAtYnV0dG9uIHtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogNTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAzNHB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ucGFnZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcclxuICB6LWluZGV4OiAyMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcblxyXG4gIDpob3N0OjpiZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogNDJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE3cHg7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDgwJTtcclxuXHJcbiAgICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMxMHB4IDI3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWltYWdlLXNlbGVjdCxcclxuICBhcHAtdGV4dC1zZWxlY3Qge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG5cclxuICBhcHAtYnV0dG9uIHtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgIGhlaWdodDogMjNweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wYWdlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuXHJcbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogYXV0byAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7fVxyXG5cclxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xyXG4gIC5jYXJkIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gIH1cclxuXHJcbiAgYXBwLXRleHQtc2VsZWN0IHtcclxuICAgIGZsZXg6IDA7XHJcbiAgfVxyXG5cclxuICAuYmFja2dyb3VuZC1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBhdXRvIDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XHJcbiAgOmhvc3Q6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB9XHJcblxyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogYXV0bztcclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9iZzNfZGVza3RvcC5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XG4gIHotaW5kZXg6IC00O1xufVxuXG4uY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIHdpZHRoOiA5MzBweDtcbiAgaGVpZ2h0OiA1NDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiAxMDlweDtcbiAgei1pbmRleDogMTA7XG4gIHBhZGRpbmctdG9wOiAzNnB4O1xufVxuLmNhcmQgYXBwLXRpdGxlLXVuZGVybGluZSB7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgbWF4LXdpZHRoOiA3NTBweDtcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cbi5jYXJkIGFwcC10aXRsZS11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogNjEycHggNTVweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbn1cbi5jYXJkLmN1cnJlbnQge1xuICBib3gtc2hhZG93OiAwIDAgMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLmNhcmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5hcHAtaW1hZ2Utc2VsZWN0LFxuYXBwLXRleHQtc2VsZWN0IHtcbiAgZmxleDogMCBhdXRvO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogLTU7XG4gIG9wYWNpdHk6IDA7XG59XG5cbmFwcC1idXR0b24ge1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDU1cHg7XG4gIG1hcmdpbi1ib3R0b206IDM0cHg7XG4gIHotaW5kZXg6IDIwO1xufVxuXG4ucGFnZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gIG1hcmdpbi1ib3R0b206IDExcHg7XG4gIHotaW5kZXg6IDIwO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICB9XG5cbiAgLmNhcmQge1xuICAgIG1hcmdpbi10b3A6IDQycHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDgwJTtcbiAgfVxuICAuY2FyZCBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xuICB9XG4gIC5jYXJkIGFwcC10aXRsZS11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDMxMHB4IDI3cHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgfVxuXG4gIGFwcC1pbWFnZS1zZWxlY3QsXG5hcHAtdGV4dC1zZWxlY3Qge1xuICAgIGZsZXg6IDE7XG4gIH1cblxuICBhcHAtYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG4gIGFwcC1idXR0b24gaW1nIHtcbiAgICB3aWR0aDogODhweDtcbiAgICBoZWlnaHQ6IDIzcHg7XG4gIH1cblxuICAucGFnZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAuYmFja2dyb3VuZC1pbWFnZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogYXV0byAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSA2MHB4KTtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICB9XG5cbiAgYXBwLXRleHQtc2VsZWN0IHtcbiAgICBmbGV4OiAwO1xuICB9XG5cbiAgLmJhY2tncm91bmQtaW1hZ2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGF1dG8gMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xuICA6aG9zdDo6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgfVxuXG4gIGFwcC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbn0iXX0= */"], data: { animation: [src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["fadeInOutAnimation"], src_app_animation_animation__WEBPACK_IMPORTED_MODULE_2__["cardBackgroundAnimation"]] } });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(." + ctx_r34.optionPath + item_r35.src + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  align-items: center;\n  position: relative;\n  z-index: 20;\n}\n\n.option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  background-position: top center;\n  background-repeat: no-repeat;\n  background-size: auto 100%;\n  width: 200px;\n  height: 200px;\n  border-radius: 20px;\n  border: solid 5px transparent;\n  margin: 15px;\n  z-index: 20;\n  background-clip: content-box;\n}\n\n.option.selected[_ngcontent-%COMP%] {\n  border: solid 5px #d8e321;\n}\n\n.option.unselected[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    display: block;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    border-radius: 11px;\n    height: 88px;\n    margin: 15px 45px;\n    width: auto;\n    background-size: 100% auto;\n    background-position: center;\n  }\n  .option[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n  .option[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ltYWdlLXNlbGVjdC9EOlxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXGltYWdlLXNlbGVjdFxcaW1hZ2Utc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvaW1hZ2Utc2VsZWN0L2ltYWdlLXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0FKOztBRElBO0VBQ0U7SUFDRSxjQUFBO0VDREY7O0VESUE7SUFDRSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtJQUNBLDJCQUFBO0VDREY7RURHRTtJQUNFLGFBQUE7RUNESjtFRElFO0lBQ0UsZ0JBQUE7RUNGSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ltYWdlLXNlbGVjdC9pbWFnZS1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCA1cHggdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luOiAxNXB4O1xyXG4gIHotaW5kZXg6IDIwO1xyXG4gIGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiBzb2xpZCA1cHggI2Q4ZTMyMTtcclxuICB9XHJcblxyXG4gICYudW5zZWxlY3RlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTFweDtcclxuICAgIGhlaWdodDogODhweDtcclxuICAgIG1hcmdpbjogMTVweCA0NXB4O1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjA7XG59XG5cbi5vcHRpb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlcjogc29saWQgNXB4IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDE1cHg7XG4gIHotaW5kZXg6IDIwO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94O1xufVxuLm9wdGlvbi5zZWxlY3RlZCB7XG4gIGJvcmRlcjogc29saWQgNXB4ICNkOGUzMjE7XG59XG4ub3B0aW9uLnVuc2VsZWN0ZWQge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICA6aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMXB4O1xuICAgIGhlaWdodDogODhweDtcbiAgICBtYXJnaW46IDE1cHggNDVweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIH1cbiAgLm9wdGlvbjpmaXJzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuICAub3B0aW9uOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn0iXX0= */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 165px;\n  width: 615px;\n  margin: auto;\n  z-index: 20;\n}\n\n.option[_ngcontent-%COMP%] {\n  max-width: 470px;\n  border-radius: 10px;\n  border: solid 2px #4a5141;\n  border: solid 2px rgba(74, 81, 65, 0.15);\n  color: #4a5141;\n  font-size: 24px;\n  font-family: \"NotoSansCJKtc\";\n  flex: 1 0 calc(50% - 14px);\n  z-index: 20;\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  align-items: center;\n  padding: 0 15px;\n  margin: 7px;\n  word-wrap: break-word;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n\n.option.large[_ngcontent-%COMP%] {\n  width: 470px;\n}\n\n.option.small[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.option.selected[_ngcontent-%COMP%] {\n  background: #d8e321;\n  border: solid 2px #d8e321;\n}\n\n.option.selected[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 28px;\n  height: 28px;\n  background: url('https://qq076qq076.github.io/museum/assets/images/icon_check.svg');\n  background-repeat: no-repeat;\n  background-size: 100%;\n  margin-right: 10px;\n}\n\n.option.unselected[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.option.font-small[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n\n\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n    padding-left: 15px;\n    padding-right: 15px;\n    box-sizing: border-box;\n    display: block;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    width: 100% !important;\n    margin: 10px 0;\n    font-size: 18px;\n    height: 66px;\n  }\n  .option.font-small[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    flex: 1 0 45%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RleHQtc2VsZWN0L0Q6XFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXGNvbXBvbmVudFxcdGV4dC1zZWxlY3RcXHRleHQtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdGV4dC1zZWxlY3QvdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDRCQUFBO0VBRUEsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FDQUY7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FER0U7RUFDRSxZQUFBO0FDREo7O0FESUU7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FDRko7O0FESUk7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtRkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBRE1FO0VBQ0UsWUFBQTtBQ0pKOztBRE9FO0VBQ0UsZUFBQTtBQ0xKOztBRFNBLDhFQUFBOztBQUVBO0VBQ0U7SUFDRSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsY0FBQTtFQ1BGOztFRFVBO0lBQ0Usc0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7RUNQRjtFRFNFO0lBQ0UsZUFBQTtFQ1BKO0FBQ0Y7O0FEY0E7RUFDRTtJQUNFLG1CQUFBO0lBQ0EsZUFBQTtFQ1pGOztFRGVBO0lBQ0UsYUFBQTtFQ1pGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdGV4dC1zZWxlY3QvdGV4dC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiAxNjVweDtcclxuICB3aWR0aDogNjE1cHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHotaW5kZXg6IDIwO1xyXG59XHJcblxyXG4ub3B0aW9uIHtcclxuICBtYXgtd2lkdGg6IDQ3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggIzRhNTE0MTtcclxuICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDc0LCA4MSwgNjUsIC4xNSk7XHJcbiAgY29sb3I6ICM0YTUxNDE7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNDSkt0Yyc7XHJcbiAgLy8gaGVpZ2h0OiA2NnB4O1xyXG4gIGZsZXg6MSAwIGNhbGMoNTAlIC0gMTRweCk7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIG1hcmdpbjogN3B4O1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgJi5sYXJnZSB7XHJcbiAgICB3aWR0aDogNDcwcHg7XHJcbiAgfVxyXG5cclxuICAmLnNtYWxsIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gICYuc2VsZWN0ZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2Q4ZTMyMTtcclxuICAgIGJvcmRlcjogc29saWQgMnB4ICNkOGUzMjE7XHJcblxyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiAnJztcclxuICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaWNvbl9jaGVjay5zdmcnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLnVuc2VsZWN0ZWQge1xyXG4gICAgb3BhY2l0eTogMC41O1xyXG4gIH1cclxuXHJcbiAgJi5mb250LXNtYWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cclxuLy8gRXh0cmEgc21hbGwgZGV2aWNlcyAocG9ydHJhaXQgcGhvbmVzLCBsZXNzIHRoYW4gNTc2cHgpXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gIC5vcHRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgaGVpZ2h0OiA2NnB4O1xyXG5cclxuICAgICYuZm9udC1zbWFsbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIEBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge31cclxuXHJcbi8vIFNtYWxsIGRldmljZXMgKGxhbmRzY2FwZSBwaG9uZXMsIDU3NnB4IGFuZCB1cClcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLm9wdGlvbiB7XHJcbiAgICBmbGV4OiAxIDAgNDUlO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgaGVpZ2h0OiAxNjVweDtcbiAgd2lkdGg6IDYxNXB4O1xuICBtYXJnaW46IGF1dG87XG4gIHotaW5kZXg6IDIwO1xufVxuXG4ub3B0aW9uIHtcbiAgbWF4LXdpZHRoOiA0NzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm9yZGVyOiBzb2xpZCAycHggIzRhNTE0MTtcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSg3NCwgODEsIDY1LCAwLjE1KTtcbiAgY29sb3I6ICM0YTUxNDE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC1mYW1pbHk6IFwiTm90b1NhbnNDSkt0Y1wiO1xuICBmbGV4OiAxIDAgY2FsYyg1MCUgLSAxNHB4KTtcbiAgei1pbmRleDogMjA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW46IDdweDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4ub3B0aW9uLmxhcmdlIHtcbiAgd2lkdGg6IDQ3MHB4O1xufVxuLm9wdGlvbi5zbWFsbCB7XG4gIHdpZHRoOiAzMDBweDtcbn1cbi5vcHRpb24uc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kOiAjZDhlMzIxO1xuICBib3JkZXI6IHNvbGlkIDJweCAjZDhlMzIxO1xufVxuLm9wdGlvbi5zZWxlY3RlZDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvaWNvbl9jaGVjay5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLm9wdGlvbi51bnNlbGVjdGVkIHtcbiAgb3BhY2l0eTogMC41O1xufVxuLm9wdGlvbi5mb250LXNtYWxsIHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMTBweCAwO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBoZWlnaHQ6IDY2cHg7XG4gIH1cbiAgLm9wdGlvbi5mb250LXNtYWxsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XG4gIDpob3N0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuXG4gIC5vcHRpb24ge1xuICAgIGZsZXg6IDEgMCA0NSU7XG4gIH1cbn0iXX0= */"] });
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
    } }, styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  position: relative;\n  margin-bottom: 26px;\n  text-align: center;\n  font-size: 36px;\n  font-family: \"NotoSansCJKtc\";\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100vw;\n  width: 579px;\n}\n[_nghost-%COMP%]   .index[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 14px;\n  left: -2.5%;\n  display: block;\n  height: 100%;\n  width: 107%;\n  background: url('https://qq076qq076.github.io/museum/assets/images/des-bg.png');\n  background-size: 100% 100%;\n  z-index: 5;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 25px;\n    font-size: 20px;\n    margin-bottom: 35px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%]::before {\n    height: 100%;\n  }\n}\n@media (min-width: 1919px) {\n  [_nghost-%COMP%] {\n    margin-bottom: 37px;\n  }\n\n  img[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3RpdGxlLXVuZGVybGluZS9EOlxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxjb21wb25lbnRcXHRpdGxlLXVuZGVybGluZVxcdGl0bGUtdW5kZXJsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvdGl0bGUtdW5kZXJsaW5lL3RpdGxlLXVuZGVybGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSw0QkFBQTtBQ0RGO0FER0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FDRko7QURLRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0VBQUE7RUFDQSwwQkFBQTtFQUNBLFVBQUE7QUNISjtBRFFBO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQ0xGOztFRFFBO0lBQ0UsV0FBQTtFQ0xGO0FBQ0Y7QURTQTtFQUVJO0lBQ0UsWUFBQTtFQ1JKO0FBQ0Y7QURhQTtFQUNFO0lBQ0UsbUJBQUE7RUNYRjs7RURjQTtJQUNFLFlBQUE7RUNYRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L3RpdGxlLXVuZGVybGluZS90aXRsZS11bmRlcmxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICAvLyBtYXgtd2lkdGg6IDYxMnB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnTm90b1NhbnNDSkt0Yyc7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xyXG4gICAgd2lkdGg6IDU3OXB4O1xyXG4gIH1cclxuXHJcbiAgLmluZGV4IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gIH1cclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNHB4O1xyXG4gICAgbGVmdDogLTIuNSU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDclO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvZGVzLWJnLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gbW9ibGVcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cHg7XHJcbiAgfVxyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0YWJsZXRcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBsYXJnZSBwY1xyXG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XHJcbiAgOmhvc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzdweDtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogNzIwcHg7XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBmb250LWZhbWlseTogXCJOb3RvU2Fuc0NKS3RjXCI7XG59XG46aG9zdCBpbWcge1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICB3aWR0aDogNTc5cHg7XG59XG46aG9zdCAuaW5kZXgge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNHB4O1xuICBsZWZ0OiAtMi41JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwNyU7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9kZXMtYmcucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgei1pbmRleDogNTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzNXB4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIDpob3N0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAzN3B4O1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzIwcHg7XG4gIH1cbn0iXX0= */"] });
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
    } }, directives: [_component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_1__["TitleUnderlineComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  align-items: flex-start;\n  width: 850px;\n  max-width: 100vw;\n  margin: auto;\n  padding-top: 178px;\n  box-sizing: border-box;\n  height: 100%;\n}\n[_nghost-%COMP%]::before {\n  content: \"\";\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  background: url('https://qq076qq076.github.io/museum/assets/images/home-header.png');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: top center;\n  z-index: -2;\n  pointer-events: none;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  width: 100vw;\n  height: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 0;\n  background: url('https://qq076qq076.github.io/museum/assets/images/home-footer.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-position: bottom center;\n  z-index: -2;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 500;\n  font-family: NotoSansCJKtc;\n  max-width: 659px;\n  text-align: left;\n}\n.place[_ngcontent-%COMP%] {\n  margin-bottom: 9px;\n  height: 36px;\n}\n.title2[_ngcontent-%COMP%] {\n  margin-bottom: 49px;\n  width: 400px;\n}\n.cast[_ngcontent-%COMP%] {\n  width: 215px;\n  height: 87px;\n}\n.start-area[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 13px;\n}\n.start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  background: url('https://qq076qq076.github.io/museum/assets/images/btn_bg.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 124px;\n  height: 124px;\n  position: absolute;\n  right: -20%;\n  z-index: -1;\n  pointer-events: none;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%] {\n    padding: 130px 10px 0;\n  }\n  [_nghost-%COMP%]::before {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-header-mw.png');\n  }\n  [_nghost-%COMP%]::after {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer-mw.png');\n  }\n  [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    height: 36px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    width: 310px;\n    margin-bottom: 27px;\n  }\n\n  .start-area[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 96px;\n    height: 96px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n    height: 23px;\n  }\n\n  .cast[_ngcontent-%COMP%] {\n    width: 189px;\n    margin-bottom: 98px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  [_nghost-%COMP%] {\n    width: calc(100vw - 178px);\n    padding-top: 196px;\n  }\n  [_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n    max-width: 513px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    margin-bottom: 7px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n  }\n\n  .cast[_ngcontent-%COMP%] {\n    margin-bottom: 216px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    top: 0;\n    right: 13px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 144px;\n    height: 144px;\n    right: -17%;\n  }\n}\n@media (min-width: 1919px) {\n  .cast[_ngcontent-%COMP%] {\n    width: 272px;\n    height: 110px;\n  }\n\n  .place[_ngcontent-%COMP%] {\n    margin-bottom: 9px;\n    height: 45px;\n  }\n\n  .title2[_ngcontent-%COMP%] {\n    margin-bottom: 66px;\n    width: 500px;\n  }\n\n  [_nghost-%COMP%] {\n    width: 1076px;\n    padding-top: 264px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 720px;\n  }\n\n  .start-area[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {\n    top: 16px;\n    right: 18px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 184px;\n  }\n  .start-area[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]::before {\n    width: 180px;\n    height: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxccHJvamVjdFxcbXVzZXVtL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0Esb0ZBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7QUNBSjtBREdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxvRkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0FDRko7QURLRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0hKO0FET0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNKRjtBRE9BO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDSkY7QURPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0pGO0FETUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDSko7QURNSTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0VBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNKTjtBRFVBO0VBQ0U7SUFDRSxxQkFBQTtFQ1BGO0VEU0U7SUFDRSw2RkFBQTtFQ1BKO0VEVUU7SUFDRSw2RkFBQTtFQ1JKO0VEV0U7SUFDRSxlQUFBO0VDVEo7O0VEYUE7SUFDRSxZQUFBO0VDVkY7O0VEYUE7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUNWRjs7RURhQTtJQUNFLFVBQUE7RUNWRjtFRGNJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNaTjtFRGVJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUNiTjs7RURrQkE7SUFDRSxZQUFBO0lBQ0EsbUJBQUE7RUNmRjs7RURrQkE7SUFDRSxXQUFBO0VDZkY7QUFDRjtBRG1CQTtFQUNFO0lBQ0UsMEJBQUE7SUFDQSxrQkFBQTtFQ2pCRjtFRG1CRTtJQUNFLGdCQUFBO0VDakJKOztFRHFCQTtJQUNFLGtCQUFBO0VDbEJGOztFRHFCQTtJQUNFLG1CQUFBO0VDbEJGOztFRHFCQTtJQUNFLG9CQUFBO0VDbEJGOztFRHFCQTtJQUNFLG1CQUFBO0VDbEJGOztFRHNCRTtJQUNFLE1BQUE7SUFDQSxXQUFBO0VDbkJKO0VEcUJJO0lBQ0UsWUFBQTtJQUNBLGFBQUE7SUFDQSxXQUFBO0VDbkJOO0FBQ0Y7QUR5QkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDdkJGOztFRDBCQTtJQUNFLGtCQUFBO0lBQ0EsWUFBQTtFQ3ZCRjs7RUQwQkE7SUFDRSxtQkFBQTtJQUNBLFlBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsYUFBQTtJQUNBLGtCQUFBO0VDdkJGOztFRDBCQTtJQUNFLFlBQUE7RUN2QkY7O0VEMEJBO0lBQ0UsV0FBQTtFQ3ZCRjtFRHlCRTtJQUNFLFNBQUE7SUFDQSxXQUFBO0VDdkJKO0VEeUJJO0lBQ0UsWUFBQTtFQ3ZCTjtFRDBCSTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VDeEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDg1MHB4O1xyXG4gIG1heC13aWR0aDogMTAwdnc7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiAxNzhweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaG9tZS1oZWFkZXIucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIHotaW5kZXg6IC0yO1xyXG4gICAgLy8gbWluLXdpZHRoOiA4MDBweDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIC8vIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIGg1IHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LWZhbWlseTogTm90b1NhbnNDSkt0YztcclxuICAgIG1heC13aWR0aDogNjU5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnBsYWNlIHtcclxuICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcblxyXG4udGl0bGUyIHtcclxuICBtYXJnaW4tYm90dG9tOiA0OXB4O1xyXG4gIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmNhc3Qge1xyXG4gIHdpZHRoOiAyMTVweDtcclxuICBoZWlnaHQ6IDg3cHg7XHJcbn1cclxuXHJcbi5zdGFydC1hcmVhIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIGFwcC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDEzcHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9idG5fYmcuc3ZnJyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgd2lkdGg6IDEyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDEyNHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtMjAlO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBtb2JsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICBwYWRkaW5nOiAxMzBweCAxMHB4IDA7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaG9tZS1oZWFkZXItbXcucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci1tdy5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wbGFjZSB7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUyIHtcclxuICAgIHdpZHRoOiAzMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI3cHg7XHJcbiAgfVxyXG5cclxuICAuc3RhcnQtYXJlYSB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG5cclxuICAgIGFwcC1idXR0b24ge1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICB3aWR0aDogOTZweDtcclxuICAgICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDg4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FzdCB7XHJcbiAgICB3aWR0aDogMTg5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA5OHB4O1xyXG4gIH1cclxuXHJcbiAgYXBwLXRpdGxlLXVuZGVybGluZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyB0YWJsZXRcclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcclxuICA6aG9zdCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDE3OHB4KTtcclxuICAgIHBhZGRpbmctdG9wOiAxOTZweDtcclxuXHJcbiAgICBoNSB7XHJcbiAgICAgIG1heC13aWR0aDogNTEzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucGxhY2Uge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjE2cHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuc3RhcnQtYXJlYSB7XHJcbiAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMTNweDtcclxuXHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6IDE0NHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQ0cHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xNyU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGxhcmdlIHBjXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxOTE5cHgpIHtcclxuICAuY2FzdCB7XHJcbiAgICB3aWR0aDogMjcycHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gIH1cclxuXHJcbiAgLnBsYWNlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICB9XHJcblxyXG4gIC50aXRsZTIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjZweDtcclxuICAgIHdpZHRoOiA1MDBweDtcclxuICB9XHJcblxyXG4gIDpob3N0IHtcclxuICAgIHdpZHRoOiAxMDc2cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMjY0cHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIGltZyB7XHJcbiAgICB3aWR0aDogNzIwcHg7XHJcbiAgfVxyXG5cclxuICAuc3RhcnQtYXJlYSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICBhcHAtYnV0dG9uIHtcclxuICAgICAgdG9wOiAxNnB4O1xyXG4gICAgICByaWdodDogMThweDtcclxuXHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDE4NHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDg1MHB4O1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctdG9wOiAxNzhweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob21lLWhlYWRlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcbiAgei1pbmRleDogLTI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3Q6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcbiAgei1pbmRleDogLTI7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOmhvc3QgaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtZmFtaWx5OiBOb3RvU2Fuc0NKS3RjO1xuICBtYXgtd2lkdGg6IDY1OXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ucGxhY2Uge1xuICBtYXJnaW4tYm90dG9tOiA5cHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLnRpdGxlMiB7XG4gIG1hcmdpbi1ib3R0b206IDQ5cHg7XG4gIHdpZHRoOiA0MDBweDtcbn1cblxuLmNhc3Qge1xuICB3aWR0aDogMjE1cHg7XG4gIGhlaWdodDogODdweDtcbn1cblxuLnN0YXJ0LWFyZWEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0YXJ0LWFyZWEgYXBwLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTNweDtcbn1cbi5zdGFydC1hcmVhIGFwcC1idXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJ+L2Fzc2V0cy9pbWFnZXMvYnRuX2JnLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWR0aDogMTI0cHg7XG4gIGhlaWdodDogMTI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0yMCU7XG4gIHotaW5kZXg6IC0xO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0IHtcbiAgICBwYWRkaW5nOiAxMzBweCAxMHB4IDA7XG4gIH1cbiAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtaGVhZGVyLW13LnBuZ1wiKTtcbiAgfVxuICA6aG9zdDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci1tdy5wbmdcIik7XG4gIH1cbiAgOmhvc3QgaDUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5wbGFjZSB7XG4gICAgaGVpZ2h0OiAzNnB4O1xuICB9XG5cbiAgLnRpdGxlMiB7XG4gICAgd2lkdGg6IDMxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI3cHg7XG4gIH1cblxuICAuc3RhcnQtYXJlYSB7XG4gICAgd2lkdGg6IDkwJTtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uOjpiZWZvcmUge1xuICAgIHdpZHRoOiA5NnB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uIGltZyB7XG4gICAgd2lkdGg6IDg4cHg7XG4gICAgaGVpZ2h0OiAyM3B4O1xuICB9XG5cbiAgLmNhc3Qge1xuICAgIHdpZHRoOiAxODlweDtcbiAgICBtYXJnaW4tYm90dG9tOiA5OHB4O1xuICB9XG5cbiAgYXBwLXRpdGxlLXVuZGVybGluZSBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIGFuZCAobWF4LXdpZHRoOiA3NjlweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxNzhweCk7XG4gICAgcGFkZGluZy10b3A6IDE5NnB4O1xuICB9XG4gIDpob3N0IGg1IHtcbiAgICBtYXgtd2lkdGg6IDUxM3B4O1xuICB9XG5cbiAgLnBsYWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gIH1cblxuICAudGl0bGUyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgLmNhc3Qge1xuICAgIG1hcmdpbi1ib3R0b206IDIxNnB4O1xuICB9XG5cbiAgYXBwLXRpdGxlLXVuZGVybGluZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgfVxuXG4gIC5zdGFydC1hcmVhIGFwcC1idXR0b24ge1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMTNweDtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxNDRweDtcbiAgICBoZWlnaHQ6IDE0NHB4O1xuICAgIHJpZ2h0OiAtMTclO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIC5jYXN0IHtcbiAgICB3aWR0aDogMjcycHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxuXG4gIC5wbGFjZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgfVxuXG4gIC50aXRsZTIge1xuICAgIG1hcmdpbi1ib3R0b206IDY2cHg7XG4gICAgd2lkdGg6IDUwMHB4O1xuICB9XG5cbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDc2cHg7XG4gICAgcGFkZGluZy10b3A6IDI2NHB4O1xuICB9XG5cbiAgYXBwLXRpdGxlLXVuZGVybGluZSBpbWcge1xuICAgIHdpZHRoOiA3MjBweDtcbiAgfVxuXG4gIC5zdGFydC1hcmVhIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uIHtcbiAgICB0b3A6IDE2cHg7XG4gICAgcmlnaHQ6IDE4cHg7XG4gIH1cbiAgLnN0YXJ0LWFyZWEgYXBwLWJ1dHRvbiBpbWcge1xuICAgIHdpZHRoOiAxODRweDtcbiAgfVxuICAuc3RhcnQtYXJlYSBhcHAtYnV0dG9uOjpiZWZvcmUge1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICB9XG59Il19 */"] });
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _component_title_underline_title_underline_component__WEBPACK_IMPORTED_MODULE_4__["TitleUnderlineComponent"], _component_button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  align-items: flex-start;\n  max-width: 100vw;\n  margin: auto;\n  color: #4a5141;\n}\n[_nghost-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: block;\n  bottom: 0;\n  left: 0;\n  background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer.png');\n  background-size: 100% auto;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-position: bottom center;\n  z-index: -2;\n  pointer-events: none;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.title[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n}\n.title[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n  width: 86px;\n  display: inherit;\n  margin-bottom: 5px;\n}\n.title[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%] {\n  width: 300px;\n  max-width: 100%;\n  display: inherit;\n}\n.gray[_ngcontent-%COMP%] {\n  color: rgba(74, 81, 65, 0.75);\n  font-size: 18px;\n  margin: 2px 0;\n  position: relative;\n  margin-top: 9px;\n}\n.content[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 40px;\n  width: 773px;\n}\n.place[_ngcontent-%COMP%] {\n  display: flex;\n}\n.place[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  color: #4a5141;\n  opacity: 0.75;\n}\n.head[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 320px;\n  height: 320px;\n  margin-right: 69px;\n}\n.describe[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  position: relative;\n  top: -40px;\n}\n.column[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  flex-direction: column;\n  position: relative;\n}\napp-title-underline[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 0;\n  width: -webkit-max-content;\n  width: -moz-max-content;\n  width: max-content;\n  font-weight: 500;\n}\napp-title-underline[_ngcontent-%COMP%]::before {\n  height: 71%;\n}\n.border[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  margin-top: 4px;\n  margin-bottom: 10px;\n  margin-bottom: 5px;\n  width: 291px;\n  height: 81px;\n  border: solid 1px rgba(0, 0, 0, 0.16);\n}\n.border[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n  padding: 0 21px;\n}\n.border[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-left: 22px;\n  font-weight: 500;\n}\n.left[_ngcontent-%COMP%] {\n  width: 450px;\n  margin-right: 70px;\n  flex: 1;\n  font-size: 24px;\n}\n.friend-image[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100px;\n  height: 100px;\n  bottom: -27px;\n  right: 10px;\n}\n.option[_ngcontent-%COMP%] {\n  display: flex;\n  \n  \n  display: -webkit-flex;\n  \n  position: absolute;\n  left: -250px;\n  bottom: -92px;\n}\n.gift[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: block;\n  background: url('https://qq076qq076.github.io/museum/assets/images/btn_bg.svg');\n  background-size: 100%;\n  background-repeat: no-repeat;\n  width: 124px;\n  height: 124px;\n  position: absolute;\n  right: -20%;\n  z-index: -1;\n  pointer-events: none;\n}\napp-button[_ngcontent-%COMP%] {\n  margin: 0 8px;\n}\n.fb[_ngcontent-%COMP%] {\n  width: 70px;\n}\n.fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 45px;\n}\n@media (max-width: 575.98px) {\n  [_nghost-%COMP%]::after {\n    background-image: url('https://qq076qq076.github.io/museum/assets/images/home-footer-mw.png');\n  }\n\n  p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-top: 3px;\n    margin-bottom: -3px;\n  }\n\n  .title[_ngcontent-%COMP%] {\n    position: static;\n    padding-top: 17px;\n    display: flex;\n    \n    \n    display: -webkit-flex;\n    \n    align-items: center;\n    justify-content: center;\n    width: 100%;\n  }\n  .title[_ngcontent-%COMP%]   .place[_ngcontent-%COMP%] {\n    width: 86px;\n    display: inline-block;\n  }\n  .title[_ngcontent-%COMP%]   .title2[_ngcontent-%COMP%] {\n    width: 65vw;\n    width: 194px;\n    display: inline-block;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    margin: 0 0 0 0;\n    width: 100%;\n  }\n\n  .head[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-top: 14px;\n  }\n  .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 180px;\n    height: 180px;\n    margin-right: 0;\n  }\n\n  .describe[_ngcontent-%COMP%] {\n    flex-direction: column;\n    top: 1px;\n  }\n\n  .column[_ngcontent-%COMP%] {\n    padding: 0 20px;\n    box-sizing: border-box;\n  }\n\n  .friend-image[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    bottom: -35px;\n  }\n\n  .gray[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n\n  app-title-underline[_ngcontent-%COMP%] {\n    font-size: 26px;\n    font-weight: 500;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-right: 0;\n    width: 100%;\n    height: 67px;\n    margin-top: 25px;\n    margin-bottom: -17px;\n  }\n  .border[_ngcontent-%COMP%]   .gray[_ngcontent-%COMP%] {\n    padding: 0 15px;\n  }\n  .border[_ngcontent-%COMP%]   app-title-underline[_ngcontent-%COMP%] {\n    font-size: 18px;\n    margin-left: 15px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    position: relative;\n    top: 40px;\n    left: initial;\n    bottom: initial;\n  }\n\n  .gift[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .again[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 88px;\n  }\n  .gift[_ngcontent-%COMP%]::before, .again[_ngcontent-%COMP%]::before {\n    width: 76px;\n    height: 76px;\n  }\n\n  .fb[_ngcontent-%COMP%] {\n    width: 42px;\n  }\n  .fb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 28px;\n  }\n\n  app-button[_ngcontent-%COMP%] {\n    margin: 0 3px;\n  }\n}\n@media (min-width: 576px) and (max-width: 769px) {\n  .content[_ngcontent-%COMP%] {\n    width: 697px;\n    margin: auto;\n    margin-top: 123px;\n  }\n\n  .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n\n  .describe[_ngcontent-%COMP%] {\n    top: 0;\n    margin-top: 52px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    left: -315px;\n    bottom: -135px;\n  }\n\n  .border[_ngcontent-%COMP%] {\n    width: 293px;\n    margin-right: 28px;\n  }\n\n  .left[_ngcontent-%COMP%] {\n    margin-right: 35px;\n  }\n\n  .gray[_ngcontent-%COMP%] {\n    margin: 0;\n    margin-top: 9px;\n  }\n}\n@media (min-width: 1919px) {\n  .content[_ngcontent-%COMP%] {\n    width: 847px;\n    margin: auto;\n    margin-top: 60px;\n  }\n\n  .option[_ngcontent-%COMP%] {\n    bottom: -130px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzdWx0L0Q6XFxwcm9qZWN0XFxtdXNldW0vc3JjXFxhcHBcXHJlc3VsdFxccmVzdWx0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNDRjtBRENFO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSwwRkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtFQUVBLG9CQUFBO0FDQUo7QURJQTtFQUNFLGVBQUE7QUNERjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0RGO0FER0U7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FESUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDRko7QURNQTtFQUNFLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNIRjtBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0hGO0FETUE7RUFDRSxhQUFBO0FDSEY7QURLRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0FDSEo7QURPQTtFQUNFLGtCQUFBO0FDSkY7QURNRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNKSjtBRFFBO0VBQ0UsYUFBQTtFQUVBLG9DQUFBO0VBRUEsb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FDTEY7QURRQTtFQUNFLGFBQUE7RUFFQSxvQ0FBQTtFQUVBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMRjtBRE9FO0VBQ0UsV0FBQTtBQ0xKO0FEU0E7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtBQ05GO0FEUUU7RUFDRSxlQUFBO0FDTko7QURTRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUEo7QURXQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0FDUkY7QURXQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQ1JGO0FEV0E7RUFDRSxhQUFBO0VBRUEsb0NBQUE7RUFFQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUkY7QURZRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsK0VBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7QUNUSjtBRGFBO0VBQ0UsYUFBQTtBQ1ZGO0FEYUE7RUFDRSxXQUFBO0FDVkY7QURZRTtFQUNFLFdBQUE7QUNWSjtBRGlCQTtFQUNFO0lBQ0UsNkZBQUE7RUNkRjs7RURpQkE7SUFDRSxlQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0VDZEY7O0VEaUJBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGFBQUE7SUFFQSxvQ0FBQTtJQUVBLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxzQ0FBQTtJQUNBLG1CQUFBO0lBQ0EsdUJBQUE7SUFDQSxXQUFBO0VDZEY7RURnQkU7SUFHRSxXQUFBO0lBQ0EscUJBQUE7RUNoQko7RURtQkU7SUFFRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLHFCQUFBO0VDbEJKOztFRHNCQTtJQUNFLGVBQUE7SUFDQSxXQUFBO0VDbkJGOztFRHNCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ25CRjtFRHFCRTtJQUNFLFlBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQ25CSjs7RUR1QkE7SUFDRSxzQkFBQTtJQUNBLFFBQUE7RUNwQkY7O0VEdUJBO0lBQ0UsZUFBQTtJQUNBLHNCQUFBO0VDcEJGOztFRHVCQTtJQUNFLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtFQ3BCRjs7RUR1QkE7SUFDRSxlQUFBO0VDcEJGOztFRHVCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQ3BCRjs7RUR1QkE7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxvQkFBQTtFQ3BCRjtFRHNCRTtJQUNFLGVBQUE7RUNwQko7RUR1QkU7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7RUNyQko7O0VEeUJBO0lBQ0Usa0JBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUN0QkY7O0VENEJFOztJQUNFLFdBQUE7RUN4Qko7RUQyQkU7O0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUN4Qko7O0VENkJBO0lBQ0UsV0FBQTtFQzFCRjtFRDRCRTtJQUNFLFdBQUE7RUMxQko7O0VEOEJBO0lBQ0UsYUFBQTtFQzNCRjtBQUNGO0FEK0JBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0VDN0JGOztFRGdDQTtJQUNFLFNBQUE7RUM3QkY7O0VEZ0NBO0lBQ0UsTUFBQTtJQUNBLGdCQUFBO0VDN0JGOztFRGdDQTtJQUNFLFlBQUE7SUFDQSxjQUFBO0VDN0JGOztFRGdDQTtJQUVFLFlBQUE7SUFDQSxrQkFBQTtFQzlCRjs7RURpQ0E7SUFDRSxrQkFBQTtFQzlCRjs7RURpQ0E7SUFDRSxTQUFBO0lBQ0EsZUFBQTtFQzlCRjtBQUNGO0FEa0NBO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0VDaENGOztFRG1DQTtJQUNFLGNBQUE7RUNoQ0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDB2dztcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6ICM0YTUxNDE7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ34vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIC8vIG1pbi13aWR0aDogODAwcHg7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbnAge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjBweDtcclxuICB0b3A6IDIwcHg7XHJcblxyXG4gIC5wbGFjZSB7XHJcbiAgICB3aWR0aDogODZweDtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGluaGVyaXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZ3JheSB7XHJcbiAgY29sb3I6IHJnYmEoNzQsIDgxLCA2NSwgLjc1KTtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbWFyZ2luOiAycHggMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogOXB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDc3M3B4O1xyXG59XHJcblxyXG4ucGxhY2Uge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIC5sb2NhdGlvbiB7XHJcbiAgICBjb2xvcjogIzRhNTE0MTtcclxuICAgIG9wYWNpdHk6IDAuNzU7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDMyMHB4O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogNjlweDtcclxuICB9XHJcbn1cclxuXHJcbi5kZXNjcmliZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgLyogVFdFRU5FUiAtIElFIDEwICovXHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC00MHB4O1xyXG59XHJcblxyXG4uY29sdW1uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cclxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmFwcC10aXRsZS11bmRlcmxpbmUge1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgaGVpZ2h0OiA3MSU7XHJcbiAgfVxyXG59XHJcblxyXG4uYm9yZGVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB3aWR0aDogMjkxcHg7XHJcbiAgaGVpZ2h0OiA4MXB4O1xyXG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgLjE2KTtcclxuXHJcbiAgLmdyYXkge1xyXG4gICAgcGFkZGluZzogMCAyMXB4O1xyXG4gIH1cclxuXHJcbiAgYXBwLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubGVmdCB7XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIG1hcmdpbi1yaWdodDogNzBweDtcclxuICBmbGV4OiAxO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLmZyaWVuZC1pbWFnZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIGJvdHRvbTogLTI3cHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5vcHRpb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTI1MHB4O1xyXG4gIGJvdHRvbTogLTkycHg7XHJcbn1cclxuXHJcbi5naWZ0IHtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQ6IHVybCgnfi9hc3NldHMvaW1hZ2VzL2J0bl9iZy5zdmcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTI0cHg7XHJcbiAgICBoZWlnaHQ6IDEyNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0yMCU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuYXBwLWJ1dHRvbiB7XHJcbiAgbWFyZ2luOiAwIDhweDtcclxufVxyXG5cclxuLmZiIHtcclxuICB3aWR0aDogNzBweDtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA0NXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vLyBtb2JsZVxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc1Ljk4cHgpIHtcclxuICA6aG9zdDo6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCd+L2Fzc2V0cy9pbWFnZXMvaG9tZS1mb290ZXItbXcucG5nJyk7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgLyogT0xEIC0gaU9TIDYtLCBTYWZhcmkgMy4xLTYsIEJCNyAqL1xyXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cclxuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICAgIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLnBsYWNlIHtcclxuICAgICAgLy8gaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAvLyB3aWR0aDogMjR2dztcclxuICAgICAgd2lkdGg6IDg2cHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUyIHtcclxuICAgICAgLy8gd2lkdGg6IDIzMHB4O1xyXG4gICAgICB3aWR0aDogNjV2dztcclxuICAgICAgd2lkdGg6IDE5NHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5oZWFkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIG1hcmdpbi10b3A6IDE0cHg7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpYmUge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHRvcDogMXB4O1xyXG4gIH1cclxuXHJcbiAgLmNvbHVtbiB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgLmZyaWVuZC1pbWFnZSB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGJvdHRvbTogLTM1cHg7XHJcbiAgfVxyXG5cclxuICAuZ3JheSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAuYm9yZGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDY3cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XHJcblxyXG4gICAgLmdyYXkge1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLXRpdGxlLXVuZGVybGluZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAub3B0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGxlZnQ6IGluaXRpYWw7XHJcbiAgICBib3R0b206IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuZ2lmdCxcclxuICAuYWdhaW4ge1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiA4OHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiA3NnB4O1xyXG4gICAgICBoZWlnaHQ6IDc2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmZiIHtcclxuICAgIHdpZHRoOiA0MnB4O1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gdGFibGV0XHJcbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtd2lkdGg6IDc2OXB4KSB7XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDY5N3B4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogMTIzcHg7XHJcbiAgfVxyXG5cclxuICAuaGVhZCBpbWcge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLmRlc2NyaWJlIHtcclxuICAgIHRvcDogMDtcclxuICAgIG1hcmdpbi10b3A6IDUycHg7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uIHtcclxuICAgIGxlZnQ6IC0zMTVweDtcclxuICAgIGJvdHRvbTogLTEzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJvcmRlciB7XHJcblxyXG4gICAgd2lkdGg6IDI5M3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xyXG4gIH1cclxuXHJcbiAgLmxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNXB4O1xyXG4gIH1cclxuXHJcbiAgLmdyYXkge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gbGFyZ2UgcGNcclxuQG1lZGlhIChtaW4td2lkdGg6IDE5MTlweCkge1xyXG4gIC5jb250ZW50IHtcclxuICAgIHdpZHRoOiA4NDdweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG5cclxuICAub3B0aW9uIHtcclxuICAgIGJvdHRvbTogLTEzMHB4O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICM0YTUxNDE7XG59XG46aG9zdDo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn4vYXNzZXRzL2ltYWdlcy9ob21lLWZvb3Rlci5wbmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSBjZW50ZXI7XG4gIHotaW5kZXg6IC0yO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cblxuLnRpdGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAyMHB4O1xuICB0b3A6IDIwcHg7XG59XG4udGl0bGUgLnBsYWNlIHtcbiAgd2lkdGg6IDg2cHg7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi50aXRsZSAudGl0bGUyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGluaGVyaXQ7XG59XG5cbi5ncmF5IHtcbiAgY29sb3I6IHJnYmEoNzQsIDgxLCA2NSwgMC43NSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbWFyZ2luOiAycHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbi5jb250ZW50IHtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICB3aWR0aDogNzczcHg7XG59XG5cbi5wbGFjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ucGxhY2UgLmxvY2F0aW9uIHtcbiAgY29sb3I6ICM0YTUxNDE7XG4gIG9wYWNpdHk6IDAuNzU7XG59XG5cbi5oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmhlYWQgaW1nIHtcbiAgd2lkdGg6IDMyMHB4O1xuICBoZWlnaHQ6IDMyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDY5cHg7XG59XG5cbi5kZXNjcmliZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00MHB4O1xufVxuXG4uY29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gIC8qIFRXRUVORVIgLSBJRSAxMCAqL1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIC8qIE5FVyAtIFNhZmFyaSA2LjErLiBpT1MgNy4xKywgQkIxMCAqL1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmFwcC10aXRsZS11bmRlcmxpbmUge1xuICBmb250LXNpemU6IDM2cHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHdpZHRoOiBtYXgtY29udGVudDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbmFwcC10aXRsZS11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGhlaWdodDogNzElO1xufVxuXG4uYm9yZGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHdpZHRoOiAyOTFweDtcbiAgaGVpZ2h0OiA4MXB4O1xuICBib3JkZXI6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTYpO1xufVxuLmJvcmRlciAuZ3JheSB7XG4gIHBhZGRpbmc6IDAgMjFweDtcbn1cbi5ib3JkZXIgYXBwLXRpdGxlLXVuZGVybGluZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sZWZ0IHtcbiAgd2lkdGg6IDQ1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDcwcHg7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZyaWVuZC1pbWFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3R0b206IC0yN3B4O1xuICByaWdodDogMTBweDtcbn1cblxuLm9wdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAvKiBPTEQgLSBpT1MgNi0sIFNhZmFyaSAzLjEtNiwgQkI3ICovXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAvKiBORVcgLSBTYWZhcmkgNi4xKy4gaU9TIDcuMSssIEJCMTAgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMjUwcHg7XG4gIGJvdHRvbTogLTkycHg7XG59XG5cbi5naWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2J0bl9iZy5zdmdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgd2lkdGg6IDEyNHB4O1xuICBoZWlnaHQ6IDEyNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAlO1xuICB6LWluZGV4OiAtMTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbmFwcC1idXR0b24ge1xuICBtYXJnaW46IDAgOHB4O1xufVxuXG4uZmIge1xuICB3aWR0aDogNzBweDtcbn1cbi5mYiBpbWcge1xuICB3aWR0aDogNDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIDpob3N0OjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwifi9hc3NldHMvaW1hZ2VzL2hvbWUtZm9vdGVyLW13LnBuZ1wiKTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgfVxuXG4gIC50aXRsZSB7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC8qIE9MRCAtIGlPUyA2LSwgU2FmYXJpIDMuMS02LCBCQjcgKi9cbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAvKiBUV0VFTkVSIC0gSUUgMTAgKi9cbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgLyogTkVXIC0gU2FmYXJpIDYuMSsuIGlPUyA3LjErLCBCQjEwICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAudGl0bGUgLnBsYWNlIHtcbiAgICB3aWR0aDogODZweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnRpdGxlIC50aXRsZTIge1xuICAgIHdpZHRoOiA2NXZ3O1xuICAgIHdpZHRoOiAxOTRweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cblxuICAuY29udGVudCB7XG4gICAgbWFyZ2luOiAwIDAgMCAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmhlYWQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICB9XG4gIC5oZWFkIGltZyB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG5cbiAgLmRlc2NyaWJlIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMXB4O1xuICB9XG5cbiAgLmNvbHVtbiB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAuZnJpZW5kLWltYWdlIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm90dG9tOiAtMzVweDtcbiAgfVxuXG4gIC5ncmF5IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxuXG4gIC5ib3JkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDY3cHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAtMTdweDtcbiAgfVxuICAuYm9yZGVyIC5ncmF5IHtcbiAgICBwYWRkaW5nOiAwIDE1cHg7XG4gIH1cbiAgLmJvcmRlciBhcHAtdGl0bGUtdW5kZXJsaW5lIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0MHB4O1xuICAgIGxlZnQ6IGluaXRpYWw7XG4gICAgYm90dG9tOiBpbml0aWFsO1xuICB9XG5cbiAgLmdpZnQgaW1nLFxuLmFnYWluIGltZyB7XG4gICAgd2lkdGg6IDg4cHg7XG4gIH1cbiAgLmdpZnQ6OmJlZm9yZSxcbi5hZ2Fpbjo6YmVmb3JlIHtcbiAgICB3aWR0aDogNzZweDtcbiAgICBoZWlnaHQ6IDc2cHg7XG4gIH1cblxuICAuZmIge1xuICAgIHdpZHRoOiA0MnB4O1xuICB9XG4gIC5mYiBpbWcge1xuICAgIHdpZHRoOiAyOHB4O1xuICB9XG5cbiAgYXBwLWJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDNweDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY5cHgpIHtcbiAgLmNvbnRlbnQge1xuICAgIHdpZHRoOiA2OTdweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTIzcHg7XG4gIH1cblxuICAuaGVhZCBpbWcge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5kZXNjcmliZSB7XG4gICAgdG9wOiAwO1xuICAgIG1hcmdpbi10b3A6IDUycHg7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBsZWZ0OiAtMzE1cHg7XG4gICAgYm90dG9tOiAtMTM1cHg7XG4gIH1cblxuICAuYm9yZGVyIHtcbiAgICB3aWR0aDogMjkzcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyOHB4O1xuICB9XG5cbiAgLmxlZnQge1xuICAgIG1hcmdpbi1yaWdodDogMzVweDtcbiAgfVxuXG4gIC5ncmF5IHtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogOXB4O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTkxOXB4KSB7XG4gIC5jb250ZW50IHtcbiAgICB3aWR0aDogODQ3cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gIH1cblxuICAub3B0aW9uIHtcbiAgICBib3R0b206IC0xMzBweDtcbiAgfVxufSJdfQ== */"] });
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
    optionPath: '/assets/images/question/',
    resultPath: '/assets/images/result/',
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

module.exports = __webpack_require__(/*! D:\project\museum\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map