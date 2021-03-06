(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-captcha', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-captcha'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
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
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/base-recaptcha.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var BaseReCaptchaComponent = /** @class */ (function () {
        function BaseReCaptchaComponent(renderer, zone, injector, scriptService) {
            this.renderer = renderer;
            this.zone = zone;
            this.injector = injector;
            this.scriptService = scriptService;
            /**
             * Prefix of the captcha element
             */
            this.captchaElemPrefix = 'ngx_captcha_id_';
            this.setupCaptcha = true;
            /**
             * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
             */
            this.useGlobalDomain = false;
            /**
             * Type
             */
            this.type = 'image';
            /**
             * Tab index
             */
            this.tabIndex = 0;
            /**
             * Called when captcha receives successful response.
             * Captcha response token is passed to event.
             */
            this.success = new core.EventEmitter();
            /**
             * Called when captcha is loaded. Event receives id of the captcha
             */
            this.load = new core.EventEmitter();
            /**
             * Called when captcha is reset.
             */
            this.reset = new core.EventEmitter();
            /**
             * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
             */
            this.ready = new core.EventEmitter();
            /**
             * Error callback
             */
            this.error = new core.EventEmitter();
            /**
             * Expired callback
             */
            this.expire = new core.EventEmitter();
            /**
             * Indicates if captcha should be set on load
             */
            this.setupAfterLoad = false;
            /**
             * If enabled, captcha will reset after receiving success response. This is useful
             * when invisible captcha need to be resolved multiple times on same page
             */
            this.resetCaptchaAfterSuccess = false;
            /**
             * Indicates if captcha is loaded
             */
            this.isLoaded = false;
        }
        /**
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            try {
                this.control = this.injector.get(forms.NgControl).control;
            }
            catch (_a) { }
        };
        /**
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.ngAfterViewChecked = /**
         * @return {?}
         */
        function () {
            if (this.setupCaptcha) {
                this.setupCaptcha = false;
                this.setupComponent();
            }
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            // cleanup scripts if language changed because they need to be reloaded
            if (changes && changes.hl) {
                // cleanup scripts when language changes
                if (!changes.hl.firstChange && (changes.hl.currentValue !== changes.hl.previousValue)) {
                    this.scriptService.cleanup();
                }
            }
            if (changes && changes.useGlobalDomain) {
                // cleanup scripts when domain changes
                if (!changes.useGlobalDomain.firstChange && (changes.useGlobalDomain.currentValue !== changes.useGlobalDomain.previousValue)) {
                    this.scriptService.cleanup();
                }
            }
            this.setupCaptcha = true;
        };
        /**
        * Gets captcha response as per reCaptcha docs
        */
        /**
         * Gets captcha response as per reCaptcha docs
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.getResponse = /**
         * Gets captcha response as per reCaptcha docs
         * @return {?}
         */
        function () {
            return this.reCaptchaApi.getResponse(this.captchaId);
        };
        /**
        * Gets Id of captcha widget
        */
        /**
         * Gets Id of captcha widget
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.getCaptchaId = /**
         * Gets Id of captcha widget
         * @return {?}
         */
        function () {
            return this.captchaId;
        };
        /**
        * Resets captcha
        */
        /**
         * Resets captcha
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.resetCaptcha = /**
         * Resets captcha
         * @return {?}
         */
        function () {
            var _this = this;
            this.zone.run((/**
             * @return {?}
             */
            function () {
                // reset captcha using Google js api
                _this.reCaptchaApi.reset();
                // required due to forms
                _this.onChange(undefined);
                _this.onTouched(undefined);
                // trigger reset event
                _this.reset.next();
            }));
        };
        /**
        * Gets last submitted captcha response
        */
        /**
         * Gets last submitted captcha response
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.getCurrentResponse = /**
         * Gets last submitted captcha response
         * @return {?}
         */
        function () {
            return this.currentResponse;
        };
        /**
        * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
        */
        /**
         * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.reloadCaptcha = /**
         * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
         * @return {?}
         */
        function () {
            this.setupComponent();
        };
        /**
         * @protected
         * @param {?} captchaElemId
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.ensureCaptchaElem = /**
         * @protected
         * @param {?} captchaElemId
         * @return {?}
         */
        function (captchaElemId) {
            /** @type {?} */
            var captchaElem = document.getElementById(captchaElemId);
            if (!captchaElem) {
                throw Error("Captcha element with id '" + captchaElemId + "' was not found");
            }
            // assign captcha alem
            this.captchaElem = captchaElem;
        };
        /**
        * Responsible for instantiating captcha element
        */
        /**
         * Responsible for instantiating captcha element
         * @protected
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.renderReCaptcha = /**
         * Responsible for instantiating captcha element
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            // run outside angular zone due to timeout issues when testing
            // details: https://github.com/Enngage/ngx-captcha/issues/26
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                _this.captchaId = _this.reCaptchaApi.render(_this.captchaElemId, _this.getCaptchaProperties());
                _this.ready.next();
            }));
        };
        /**
        * Called when captcha receives response
        * @param callback Callback
        */
        /**
         * Called when captcha receives response
         * @protected
         * @param {?} callback Callback
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.handleCallback = /**
         * Called when captcha receives response
         * @protected
         * @param {?} callback Callback
         * @return {?}
         */
        function (callback) {
            var _this = this;
            this.currentResponse = callback;
            this.success.next(callback);
            this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.onChange(callback);
                _this.onTouched(callback);
            }));
            if (this.resetCaptchaAfterSuccess) {
                this.resetCaptcha();
            }
        };
        /**
         * @private
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.getPseudoUniqueNumber = /**
         * @private
         * @return {?}
         */
        function () {
            return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
        };
        /**
         * @private
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.setupComponent = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            // captcha specific setup
            this.captchaSpecificSetup();
            // create captcha wrapper
            this.createAndSetCaptchaElem();
            this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', (/**
             * @param {?} grecaptcha
             * @return {?}
             */
            function (grecaptcha) {
                _this.onloadCallback(grecaptcha);
            }), this.hl);
        };
        /**
        * Called when google's recaptcha script is ready
        */
        /**
         * Called when google's recaptcha script is ready
         * @private
         * @param {?} grecapcha
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.onloadCallback = /**
         * Called when google's recaptcha script is ready
         * @private
         * @param {?} grecapcha
         * @return {?}
         */
        function (grecapcha) {
            // assign reference to reCaptcha Api once its loaded
            this.reCaptchaApi = grecapcha;
            if (!this.reCaptchaApi) {
                throw Error("ReCaptcha Api was not initialized correctly");
            }
            // loaded flag
            this.isLoaded = true;
            // fire load event
            this.load.next();
            // render captcha
            this.renderReCaptcha();
            // setup component if it was flagged as such
            if (this.setupAfterLoad) {
                this.setupAfterLoad = false;
                this.setupComponent();
            }
        };
        /**
         * @private
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.generateNewElemId = /**
         * @private
         * @return {?}
         */
        function () {
            return this.captchaElemPrefix + this.getPseudoUniqueNumber();
        };
        /**
         * @private
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.createAndSetCaptchaElem = /**
         * @private
         * @return {?}
         */
        function () {
            // generate new captcha id
            this.captchaElemId = this.generateNewElemId();
            if (!this.captchaElemId) {
                throw Error("Captcha elem Id is not set");
            }
            if (!this.captchaWrapperElem) {
                throw Error("Captcha DOM element is not initialized");
            }
            // remove old html
            this.captchaWrapperElem.nativeElement.innerHTML = '';
            // create new wrapper for captcha
            /** @type {?} */
            var newElem = this.renderer.createElement('div');
            newElem.id = this.captchaElemId;
            this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
            // update captcha elem
            this.ensureCaptchaElem(this.captchaElemId);
        };
        /**
         * To be aligned with the ControlValueAccessor interface we need to implement this method
         * However as we don't want to update the recaptcha, this doesn't need to be implemented
         */
        /**
         * To be aligned with the ControlValueAccessor interface we need to implement this method
         * However as we don't want to update the recaptcha, this doesn't need to be implemented
         * @param {?} obj
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.writeValue = /**
         * To be aligned with the ControlValueAccessor interface we need to implement this method
         * However as we don't want to update the recaptcha, this doesn't need to be implemented
         * @param {?} obj
         * @return {?}
         */
        function (obj) { };
        /**
         * This method helps us tie together recaptcha and our formControl values
         */
        /**
         * This method helps us tie together recaptcha and our formControl values
         * @param {?} fn
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.registerOnChange = /**
         * This method helps us tie together recaptcha and our formControl values
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onChange = fn;
        };
        /**
        * At some point we might be interested whether the user has touched our component
        */
        /**
         * At some point we might be interested whether the user has touched our component
         * @param {?} fn
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.registerOnTouched = /**
         * At some point we might be interested whether the user has touched our component
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this.onTouched = fn;
        };
        /**
        * Handles error callback
        */
        /**
         * Handles error callback
         * @protected
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.handleErrorCallback = /**
         * Handles error callback
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            this.zone.run((/**
             * @return {?}
             */
            function () {
                _this.onChange(undefined);
                _this.onTouched(undefined);
            }));
            this.error.next();
        };
        /**
        * Handles expired callback
        */
        /**
         * Handles expired callback
         * @protected
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.handleExpireCallback = /**
         * Handles expired callback
         * @protected
         * @return {?}
         */
        function () {
            this.expire.next();
            // reset captcha on expire callback
            this.resetCaptcha();
        };
        BaseReCaptchaComponent.propDecorators = {
            siteKey: [{ type: core.Input }],
            useGlobalDomain: [{ type: core.Input }],
            type: [{ type: core.Input }],
            hl: [{ type: core.Input }],
            tabIndex: [{ type: core.Input }],
            success: [{ type: core.Output }],
            load: [{ type: core.Output }],
            reset: [{ type: core.Output }],
            ready: [{ type: core.Output }],
            error: [{ type: core.Output }],
            expire: [{ type: core.Output }]
        };
        return BaseReCaptchaComponent;
    }());
    if (false) {
        /**
         * Prefix of the captcha element
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.captchaElemPrefix;
        /**
         * @type {?}
         * @private
         */
        BaseReCaptchaComponent.prototype.setupCaptcha;
        /**
         * Google's site key.
         * You can find this under https://www.google.com/recaptcha
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.siteKey;
        /**
         * Indicates if global domain 'recaptcha.net' should be used instead of default domain ('google.com')
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.useGlobalDomain;
        /**
         * Type
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.type;
        /**
         * Language code. Auto-detects the user's language if unspecified.
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.hl;
        /**
         * Tab index
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.tabIndex;
        /**
         * Called when captcha receives successful response.
         * Captcha response token is passed to event.
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.success;
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.load;
        /**
         * Called when captcha is reset.
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.reset;
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.ready;
        /**
         * Error callback
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.error;
        /**
         * Expired callback
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.expire;
        /** @type {?} */
        BaseReCaptchaComponent.prototype.captchaWrapperElem;
        /**
         * Indicates if captcha should be set on load
         * @type {?}
         * @private
         */
        BaseReCaptchaComponent.prototype.setupAfterLoad;
        /**
         * Captcha element
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.captchaElem;
        /**
         * Id of the captcha elem
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.captchaId;
        /**
         * Holds last response value
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.currentResponse;
        /**
         * If enabled, captcha will reset after receiving success response. This is useful
         * when invisible captcha need to be resolved multiple times on same page
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.resetCaptchaAfterSuccess;
        /**
         * Captcha type
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.recaptchaType;
        /**
         * Required by ControlValueAccessor
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.onChange;
        /**
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.onTouched;
        /**
         * Indicates if captcha is loaded
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.isLoaded;
        /**
         * Reference to global reCaptcha API
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.reCaptchaApi;
        /**
         * Id of the DOM element wrapping captcha
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.captchaElemId;
        /**
         * Form Control to be enable usage in reactive forms
         * @type {?}
         */
        BaseReCaptchaComponent.prototype.control;
        /**
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.renderer;
        /**
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.zone;
        /**
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.injector;
        /**
         * @type {?}
         * @protected
         */
        BaseReCaptchaComponent.prototype.scriptService;
        /**
         * Gets reCaptcha properties
         * @abstract
         * @protected
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.getCaptchaProperties = function () { };
        /**
         * Used for captcha specific setup
         * @abstract
         * @protected
         * @return {?}
         */
        BaseReCaptchaComponent.prototype.captchaSpecificSetup = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/models/recaptcha-type.enum.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @enum {number} */
    var ReCaptchaType = {
        InvisibleReCaptcha: 0,
        ReCaptcha2: 1,
    };
    ReCaptchaType[ReCaptchaType.InvisibleReCaptcha] = 'InvisibleReCaptcha';
    ReCaptchaType[ReCaptchaType.ReCaptcha2] = 'ReCaptcha2';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/script.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ScriptService = /** @class */ (function () {
        function ScriptService(zone) {
            this.zone = zone;
            /**
             * Name of the global google recaptcha script
             */
            this.windowGrecaptcha = 'grecaptcha';
            /**
             * Name of the global callback
             */
            this.windowOnLoadCallbackProperty = 'ngx_captcha_onload_callback';
            this.globalDomain = 'recaptcha.net';
            this.defaultDomain = 'google.com';
        }
        /**
         * @param {?} useGlobalDomain
         * @param {?} render
         * @param {?} onLoad
         * @param {?=} language
         * @return {?}
         */
        ScriptService.prototype.registerCaptchaScript = /**
         * @param {?} useGlobalDomain
         * @param {?} render
         * @param {?} onLoad
         * @param {?=} language
         * @return {?}
         */
        function (useGlobalDomain, render, onLoad, language) {
            var _this = this;
            if (this.grecaptchaScriptLoaded()) {
                // recaptcha script is already loaded
                // just call the callback
                this.zone.run((/**
                 * @return {?}
                 */
                function () {
                    onLoad(window[_this.windowGrecaptcha]);
                }));
                return;
            }
            // we need to patch the callback through global variable, otherwise callback is not accessible
            // note: https://github.com/Enngage/ngx-captcha/issues/2
            window[this.windowOnLoadCallbackProperty] = (/** @type {?} */ (((/**
             * @return {?}
             */
            function () { return _this.zone.run(onLoad.bind(_this, window[_this.windowGrecaptcha])); }))));
            // prepare script elem
            /** @type {?} */
            var scriptElem = document.createElement('script');
            scriptElem.innerHTML = '';
            scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
            scriptElem.async = true;
            scriptElem.defer = true;
            // add script to header
            document.getElementsByTagName('head')[0].appendChild(scriptElem);
        };
        /**
         * @return {?}
         */
        ScriptService.prototype.cleanup = /**
         * @return {?}
         */
        function () {
            window[this.windowOnLoadCallbackProperty] = undefined;
            window[this.windowGrecaptcha] = undefined;
        };
        /**
         * Indicates if google recaptcha script is available and ready to be used
         */
        /**
         * Indicates if google recaptcha script is available and ready to be used
         * @private
         * @return {?}
         */
        ScriptService.prototype.grecaptchaScriptLoaded = /**
         * Indicates if google recaptcha script is available and ready to be used
         * @private
         * @return {?}
         */
        function () {
            if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
                return true;
            }
            return false;
        };
        /**
         * Gets language param used in script url
         */
        /**
         * Gets language param used in script url
         * @private
         * @param {?=} hl
         * @return {?}
         */
        ScriptService.prototype.getLanguageParam = /**
         * Gets language param used in script url
         * @private
         * @param {?=} hl
         * @return {?}
         */
        function (hl) {
            if (!hl) {
                return '';
            }
            return "&hl=" + hl;
        };
        /**
        * Url to google api script
        */
        /**
         * Url to google api script
         * @private
         * @param {?} useGlobalDomain
         * @param {?} render
         * @param {?=} language
         * @return {?}
         */
        ScriptService.prototype.getCaptchaScriptUrl = /**
         * Url to google api script
         * @private
         * @param {?} useGlobalDomain
         * @param {?} render
         * @param {?=} language
         * @return {?}
         */
        function (useGlobalDomain, render, language) {
            /** @type {?} */
            var domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
            // tslint:disable-next-line:max-line-length
            return "https://www." + domain + "/recaptcha/api.js?onload=" + this.windowOnLoadCallbackProperty + "&render=" + render + this.getLanguageParam(language);
        };
        ScriptService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ScriptService.ctorParameters = function () { return [
            { type: core.NgZone }
        ]; };
        return ScriptService;
    }());
    if (false) {
        /**
         * Name of the global google recaptcha script
         * @type {?}
         * @protected
         */
        ScriptService.prototype.windowGrecaptcha;
        /**
         * Name of the global callback
         * @type {?}
         * @protected
         */
        ScriptService.prototype.windowOnLoadCallbackProperty;
        /**
         * @type {?}
         * @protected
         */
        ScriptService.prototype.globalDomain;
        /**
         * @type {?}
         * @protected
         */
        ScriptService.prototype.defaultDomain;
        /**
         * @type {?}
         * @protected
         */
        ScriptService.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/invisible-recaptcha.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var InvisibleReCaptchaComponent = /** @class */ (function (_super) {
        __extends(InvisibleReCaptchaComponent, _super);
        function InvisibleReCaptchaComponent(renderer, zone, injector, scriptService) {
            var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
            _this.renderer = renderer;
            _this.zone = zone;
            _this.injector = injector;
            _this.scriptService = scriptService;
            /**
             * This size representing invisible captcha
             */
            _this.size = 'invisible';
            /**
             * Theme
             */
            _this.theme = 'light';
            /**
             * Badge
             */
            _this.badge = 'bottomright';
            _this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        InvisibleReCaptchaComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        /**
         * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
         */
        /**
         * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
         * @return {?}
         */
        InvisibleReCaptchaComponent.prototype.execute = /**
         * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
         * @return {?}
         */
        function () {
            var _this = this;
            // execute captcha
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            function () { return _this.reCaptchaApi.execute(_this.captchaId); }));
        };
        /**
         * @protected
         * @return {?}
         */
        InvisibleReCaptchaComponent.prototype.captchaSpecificSetup = /**
         * @protected
         * @return {?}
         */
        function () {
        };
        /**
        * Gets reCaptcha properties
        */
        /**
         * Gets reCaptcha properties
         * @protected
         * @return {?}
         */
        InvisibleReCaptchaComponent.prototype.getCaptchaProperties = /**
         * Gets reCaptcha properties
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                'sitekey': this.siteKey,
                'callback': (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleCallback(response); })); }),
                'expired-callback': (/**
                 * @return {?}
                 */
                function () { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleExpireCallback(); })); }),
                'error-callback': (/**
                 * @return {?}
                 */
                function () { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleErrorCallback(); })); }),
                'badge': this.badge,
                'type': this.type,
                'tabindex': this.tabIndex,
                'size': this.size,
                'theme': this.theme
            };
        };
        InvisibleReCaptchaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-invisible-recaptcha',
                        template: "\n  <div #captchaWrapperElem></div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return InvisibleReCaptchaComponent; })),
                                multi: true,
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        InvisibleReCaptchaComponent.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.Injector },
            { type: ScriptService }
        ]; };
        InvisibleReCaptchaComponent.propDecorators = {
            theme: [{ type: core.Input }],
            badge: [{ type: core.Input }],
            hl: [{ type: core.Input }],
            captchaWrapperElem: [{ type: core.ViewChild, args: ['captchaWrapperElem', { static: false },] }]
        };
        return InvisibleReCaptchaComponent;
    }(BaseReCaptchaComponent));
    if (false) {
        /**
         * This size representing invisible captcha
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.size;
        /**
         * Theme
         * @type {?}
         */
        InvisibleReCaptchaComponent.prototype.theme;
        /**
         * Badge
         * @type {?}
         */
        InvisibleReCaptchaComponent.prototype.badge;
        /**
         * Language code. Auto-detects the user's language if unspecified.
         * @type {?}
         */
        InvisibleReCaptchaComponent.prototype.hl;
        /** @type {?} */
        InvisibleReCaptchaComponent.prototype.captchaWrapperElem;
        /**
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.recaptchaType;
        /**
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.renderer;
        /**
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.zone;
        /**
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.injector;
        /**
         * @type {?}
         * @protected
         */
        InvisibleReCaptchaComponent.prototype.scriptService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/components/recaptcha-2.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReCaptcha2Component = /** @class */ (function (_super) {
        __extends(ReCaptcha2Component, _super);
        function ReCaptcha2Component(renderer, zone, injector, scriptService) {
            var _this = _super.call(this, renderer, zone, injector, scriptService) || this;
            _this.renderer = renderer;
            _this.zone = zone;
            _this.injector = injector;
            _this.scriptService = scriptService;
            /**
             * Name of the global expire callback
             */
            _this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
            /**
             * Name of the global error callback
             */
            _this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
            /**
             * Theme
             */
            _this.theme = 'light';
            /**
             * Size
             */
            _this.size = 'normal';
            _this.recaptchaType = ReCaptchaType.ReCaptcha2;
            return _this;
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        ReCaptcha2Component.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            _super.prototype.ngOnChanges.call(this, changes);
        };
        /**
         * @return {?}
         */
        ReCaptcha2Component.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            window[this.windowOnErrorCallbackProperty] = {};
            window[this.windowOnExpireCallbackProperty] = {};
        };
        /**
         * @protected
         * @return {?}
         */
        ReCaptcha2Component.prototype.captchaSpecificSetup = /**
         * @protected
         * @return {?}
         */
        function () {
            this.registerCallbacks();
        };
        /**
         * Gets reCaptcha properties
        */
        /**
         * Gets reCaptcha properties
         * @protected
         * @return {?}
         */
        ReCaptcha2Component.prototype.getCaptchaProperties = /**
         * Gets reCaptcha properties
         * @protected
         * @return {?}
         */
        function () {
            var _this = this;
            return {
                'sitekey': this.siteKey,
                'callback': (/**
                 * @param {?} response
                 * @return {?}
                 */
                function (response) { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleCallback(response); })); }),
                'expired-callback': (/**
                 * @return {?}
                 */
                function () { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleExpireCallback(); })); }),
                'error-callback': (/**
                 * @return {?}
                 */
                function () { return _this.zone.run((/**
                 * @return {?}
                 */
                function () { return _this.handleErrorCallback(); })); }),
                'theme': this.theme,
                'type': this.type,
                'size': this.size,
                'tabindex': this.tabIndex
            };
        };
        /**
         * Registers global callbacks
        */
        /**
         * Registers global callbacks
         * @private
         * @return {?}
         */
        ReCaptcha2Component.prototype.registerCallbacks = /**
         * Registers global callbacks
         * @private
         * @return {?}
         */
        function () {
            window[this.windowOnErrorCallbackProperty] = _super.prototype.handleErrorCallback.bind(this);
            window[this.windowOnExpireCallbackProperty] = _super.prototype.handleExpireCallback.bind(this);
        };
        ReCaptcha2Component.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-recaptcha2',
                        template: "\n  <div #captchaWrapperElem></div>",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return ReCaptcha2Component; })),
                                multi: true,
                            }
                        ]
                    }] }
        ];
        /** @nocollapse */
        ReCaptcha2Component.ctorParameters = function () { return [
            { type: core.Renderer2 },
            { type: core.NgZone },
            { type: core.Injector },
            { type: ScriptService }
        ]; };
        ReCaptcha2Component.propDecorators = {
            theme: [{ type: core.Input }],
            size: [{ type: core.Input }],
            hl: [{ type: core.Input }],
            captchaWrapperElem: [{ type: core.ViewChild, args: ['captchaWrapperElem', { static: false },] }]
        };
        return ReCaptcha2Component;
    }(BaseReCaptchaComponent));
    if (false) {
        /**
         * Name of the global expire callback
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.windowOnErrorCallbackProperty;
        /**
         * Name of the global error callback
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.windowOnExpireCallbackProperty;
        /**
         * Theme
         * @type {?}
         */
        ReCaptcha2Component.prototype.theme;
        /**
         * Size
         * @type {?}
         */
        ReCaptcha2Component.prototype.size;
        /**
         * Language code. Auto-detects the user's language if unspecified.
         * @type {?}
         */
        ReCaptcha2Component.prototype.hl;
        /** @type {?} */
        ReCaptcha2Component.prototype.captchaWrapperElem;
        /**
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.recaptchaType;
        /**
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.renderer;
        /**
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.zone;
        /**
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.injector;
        /**
         * @type {?}
         * @protected
         */
        ReCaptcha2Component.prototype.scriptService;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/services/recaptcha_v3.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ReCaptchaV3Service = /** @class */ (function () {
        function ReCaptchaV3Service(scriptService, zone) {
            this.scriptService = scriptService;
            this.zone = zone;
        }
        /**
         * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
         * this callback in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param siteKey Site key found in your google admin panel
         * @param action Action to log
         */
        /**
         * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
         * this callback in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param {?} siteKey Site key found in your google admin panel
         * @param {?} action Action to log
         * @param {?} callback
         * @param {?=} config
         * @return {?}
         */
        ReCaptchaV3Service.prototype.execute = /**
         * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
         * this callback in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param {?} siteKey Site key found in your google admin panel
         * @param {?} action Action to log
         * @param {?} callback
         * @param {?=} config
         * @return {?}
         */
        function (siteKey, action, callback, config) {
            this.executeAsPromise(siteKey, action, config).then(callback);
        };
        /**
         * Executes reCaptcha v3 with given action and returns token via Promise. You need to verify
         * this token in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param siteKey Site key found in your google admin panel
         * @param action Action to log
         */
        /**
         * Executes reCaptcha v3 with given action and returns token via Promise. You need to verify
         * this token in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param {?} siteKey Site key found in your google admin panel
         * @param {?} action Action to log
         * @param {?=} config
         * @return {?}
         */
        ReCaptchaV3Service.prototype.executeAsPromise = /**
         * Executes reCaptcha v3 with given action and returns token via Promise. You need to verify
         * this token in your backend to get meaningful results.
         *
         * For more information see https://developers.google.com/recaptcha/docs/v3
         *
         * @param {?} siteKey Site key found in your google admin panel
         * @param {?} action Action to log
         * @param {?=} config
         * @return {?}
         */
        function (siteKey, action, config) {
            var _this = this;
            return new Promise((/**
             * @param {?} resolve
             * @param {?} reject
             * @return {?}
             */
            function (resolve, reject) {
                /** @type {?} */
                var useGlobalDomain = config && config.useGlobalDomain ? true : false;
                /** @type {?} */
                var onRegister = (/**
                 * @param {?} grecaptcha
                 * @return {?}
                 */
                function (grecaptcha) {
                    _this.zone.runOutsideAngular((/**
                     * @return {?}
                     */
                    function () {
                        try {
                            grecaptcha
                                .execute(siteKey, { action: action })
                                .then((/**
                             * @param {?} token
                             * @return {?}
                             */
                            function (token) { return _this.zone.run((/**
                             * @return {?}
                             */
                            function () { return resolve(token); })); }));
                        }
                        catch (error) {
                            reject(error);
                        }
                    }));
                });
                _this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, onRegister);
            }));
        };
        ReCaptchaV3Service.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        ReCaptchaV3Service.ctorParameters = function () { return [
            { type: ScriptService },
            { type: core.NgZone }
        ]; };
        return ReCaptchaV3Service;
    }());
    if (false) {
        /**
         * @type {?}
         * @protected
         */
        ReCaptchaV3Service.prototype.scriptService;
        /**
         * @type {?}
         * @protected
         */
        ReCaptchaV3Service.prototype.zone;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-captcha.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxCaptchaModule = /** @class */ (function () {
        function NgxCaptchaModule() {
        }
        NgxCaptchaModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [
                            ReCaptcha2Component,
                            InvisibleReCaptchaComponent
                        ],
                        providers: [
                            ScriptService,
                            ReCaptchaV3Service
                        ],
                        exports: [
                            ReCaptcha2Component,
                            InvisibleReCaptchaComponent
                        ]
                    },] }
        ];
        return NgxCaptchaModule;
    }());

    exports.BaseReCaptchaComponent = BaseReCaptchaComponent;
    exports.InvisibleReCaptchaComponent = InvisibleReCaptchaComponent;
    exports.NgxCaptchaModule = NgxCaptchaModule;
    exports.ReCaptcha2Component = ReCaptcha2Component;
    exports.ReCaptchaType = ReCaptchaType;
    exports.ReCaptchaV3Service = ReCaptchaV3Service;
    exports.ScriptService = ScriptService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-captcha.umd.js.map
