/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_helpers__ = __webpack_require__(2);


class Modal {
    constructor(modalName, btnModalName, btnResetName) {
        this.count = 0;
        this.modal = document.querySelector(`.${[modalName]}`);
        this.counter = document.querySelector(`.${[modalName]}__count`);
        this.resetBtn = document.querySelector(`.${[btnResetName]}`);
        this.mountingComponent(btnModalName);
    }

    mountingComponent(btnModalName) {
        this.btnModalHandler(btnModalName);
        this.handleLocalStorage();
        this.getClickTarget();
        this.resetBtnHandler();
    }

    modalVisibilityHandler() {
        this.modal.classList.toggle(`modal__hidden`);
    }

    btnModalHandler(btnModalName) {
        const btn = document.querySelector(`.${[btnModalName]}`);
        btn.addEventListener('click',() => {
            this.modalVisibilityHandler();
            this.incrementCounter();
        })
    }

    getClickTarget() {
        this.modal.addEventListener('click', (e) => {
            this.handleClickTarget(e)
        })
    }

    handleClickTarget(e) {
       const {target} = e;
       if (target.closest('.modal__exit-icon') || !target.closest('.modal__wrapper')) {
            this.modalVisibilityHandler()
        } 
    }

    incrementCounter() {
        this.count++;
        this.useStorage(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* SET */]);
        this.counter.textContent = `${this.count} times`;
        this.count > 5 ? this.resetBtn.classList.remove('button__hidden') : this.resetBtn.classList.add('button__hidden');
    }

    resetBtnHandler() {
        this.resetBtn.addEventListener('click', this.resetCounter.bind(this))
    }

    resetCounter() {
        this.useStorage(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["b" /* CLEAR */]);
        this.modalVisibilityHandler();
    }

    handleLocalStorage() {
       localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* COUNT */]) === null ? this.useStorage(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* SET */]) : this.useStorage(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* GET */]);
    }

    useStorage(action) {
        switch (action) {
            case __WEBPACK_IMPORTED_MODULE_0__utils_helpers__["d" /* GET */] :
                const getStorage = JSON.parse(localStorage.getItem(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* COUNT */]));
                this.count = getStorage;
                break;
            case __WEBPACK_IMPORTED_MODULE_0__utils_helpers__["b" /* CLEAR */] :
                this.count = 0;
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* COUNT */], JSON.stringify(this.count));
                break;
            case __WEBPACK_IMPORTED_MODULE_0__utils_helpers__["a" /* SET */] : 
                localStorage.setItem(__WEBPACK_IMPORTED_MODULE_0__utils_helpers__["c" /* COUNT */], JSON.stringify(this.count));
                break;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Modal__ = __webpack_require__(0);


const modalAlert = new __WEBPACK_IMPORTED_MODULE_0__components_Modal__["a" /* default */]('modalAlert','button--modal','button--reset');

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return GET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SET; });
const COUNT = 'COUNT';
const CLEAR = 'CLEAR';
const GET = 'GET';
const SET = 'SET';



/***/ })
/******/ ]);