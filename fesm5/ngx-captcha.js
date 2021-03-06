import { EventEmitter, Input, Output, Injectable, NgZone, Component, forwardRef, Renderer2, Injector, ViewChild, NgModule } from '@angular/core';
import { NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { __extends } from 'tslib';
import { CommonModule } from '@angular/common';

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
        this.success = new EventEmitter();
        /**
         * Called when captcha is loaded. Event receives id of the captcha
         */
        this.load = new EventEmitter();
        /**
         * Called when captcha is reset.
         */
        this.reset = new EventEmitter();
        /**
         * Called when captcha is loaded & ready. I.e. when you need to execute captcha on component load.
         */
        this.ready = new EventEmitter();
        /**
         * Error callback
         */
        this.error = new EventEmitter();
        /**
         * Expired callback
         */
        this.expire = new EventEmitter();
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
            this.control = this.injector.get(NgControl).control;
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
        siteKey: [{ type: Input }],
        useGlobalDomain: [{ type: Input }],
        type: [{ type: Input }],
        hl: [{ type: Input }],
        tabIndex: [{ type: Input }],
        success: [{ type: Output }],
        load: [{ type: Output }],
        reset: [{ type: Output }],
        ready: [{ type: Output }],
        error: [{ type: Output }],
        expire: [{ type: Output }]
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ScriptService.ctorParameters = function () { return [
        { type: NgZone }
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
        { type: Component, args: [{
                    selector: 'ngx-invisible-recaptcha',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
        { type: Renderer2 },
        { type: NgZone },
        { type: Injector },
        { type: ScriptService }
    ]; };
    InvisibleReCaptchaComponent.propDecorators = {
        theme: [{ type: Input }],
        badge: [{ type: Input }],
        hl: [{ type: Input }],
        captchaWrapperElem: [{ type: ViewChild, args: ['captchaWrapperElem', { static: false },] }]
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
        { type: Component, args: [{
                    selector: 'ngx-recaptcha2',
                    template: "\n  <div #captchaWrapperElem></div>",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
        { type: Renderer2 },
        { type: NgZone },
        { type: Injector },
        { type: ScriptService }
    ]; };
    ReCaptcha2Component.propDecorators = {
        theme: [{ type: Input }],
        size: [{ type: Input }],
        hl: [{ type: Input }],
        captchaWrapperElem: [{ type: ViewChild, args: ['captchaWrapperElem', { static: false },] }]
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
        { type: Injectable }
    ];
    /** @nocollapse */
    ReCaptchaV3Service.ctorParameters = function () { return [
        { type: ScriptService },
        { type: NgZone }
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-captcha.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BaseReCaptchaComponent, InvisibleReCaptchaComponent, NgxCaptchaModule, ReCaptcha2Component, ReCaptchaType, ReCaptchaV3Service, ScriptService };
//# sourceMappingURL=ngx-captcha.js.map
