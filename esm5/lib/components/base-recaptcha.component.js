/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/base-recaptcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { EventEmitter, Input, Output, } from '@angular/core';
import { NgControl } from '@angular/forms';
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
export { BaseReCaptchaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWNhcHRjaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNhcHRjaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLXJlY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBSUgsWUFBWSxFQUVaLEtBQUssRUFHTCxNQUFNLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQyxTQUFTLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNL0Y7SUE2SEksZ0NBQ2MsUUFBbUIsRUFDbkIsSUFBWSxFQUNaLFFBQWtCLEVBQ2xCLGFBQTRCO1FBSDVCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQWU7Ozs7UUE1SHZCLHNCQUFpQixHQUFHLGlCQUFpQixDQUFDO1FBRWpELGlCQUFZLEdBQVksSUFBSSxDQUFDOzs7O1FBVzVCLG9CQUFlLEdBQVksS0FBSyxDQUFDOzs7O1FBS2pDLFNBQUksR0FBc0IsT0FBTyxDQUFDOzs7O1FBVWxDLGFBQVEsR0FBRyxDQUFDLENBQUM7Ozs7O1FBTVosWUFBTyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFLckMsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7UUFLbEMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFLakMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFLakMsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFLakMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7Ozs7UUFPcEMsbUJBQWMsR0FBRyxLQUFLLENBQUM7Ozs7O1FBcUJyQiw2QkFBd0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFnQnBDLGFBQVEs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TUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRW5CLG1DQUFtQztRQUNuQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7MEJBeldBLEtBQUs7a0NBS0wsS0FBSzt1QkFLTCxLQUFLO3FCQUtMLEtBQUs7MkJBS0wsS0FBSzswQkFNTCxNQUFNO3VCQUtOLE1BQU07d0JBS04sTUFBTTt3QkFLTixNQUFNO3dCQUtOLE1BQU07eUJBS04sTUFBTTs7SUF1VFgsNkJBQUM7Q0FBQSxBQXZYRCxJQXVYQztTQXZYcUIsc0JBQXNCOzs7Ozs7O0lBS3hDLG1EQUF5RDs7Ozs7SUFFekQsOENBQXFDOzs7Ozs7SUFNckMseUNBQXlCOzs7OztJQUt6QixpREFBMEM7Ozs7O0lBSzFDLHNDQUEyQzs7Ozs7SUFLM0Msb0NBQW9COzs7OztJQUtwQiwwQ0FBc0I7Ozs7OztJQU10Qix5Q0FBK0M7Ozs7O0lBSy9DLHNDQUE0Qzs7Ozs7SUFLNUMsdUNBQTJDOzs7OztJQUszQyx1Q0FBMkM7Ozs7O0lBSzNDLHVDQUEyQzs7Ozs7SUFLM0Msd0NBQTRDOztJQUU1QyxvREFBeUM7Ozs7OztJQUt6QyxnREFBK0I7Ozs7OztJQUsvQiw2Q0FBb0M7Ozs7OztJQUtwQywyQ0FBNkI7Ozs7OztJQUs3QixpREFBbUM7Ozs7Ozs7SUFNbkMsMERBQTJDOzs7Ozs7SUFLM0MsK0NBQWdEOzs7Ozs7SUFLaEQsMENBQXdEOzs7OztJQUN4RCwyQ0FBeUQ7Ozs7O0lBS3pELDBDQUF3Qjs7Ozs7SUFLeEIsOENBQTBCOzs7OztJQUsxQiwrQ0FBOEI7Ozs7O0lBSzlCLHlDQUF3Qzs7Ozs7SUFHcEMsMENBQTZCOzs7OztJQUM3QixzQ0FBc0I7Ozs7O0lBQ3RCLDBDQUE0Qjs7Ozs7SUFDNUIsK0NBQXNDOzs7Ozs7O0lBb0IxQyx3RUFBK0M7Ozs7Ozs7SUFLL0Msd0VBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBZnRlclZpZXdDaGVja2VkLFxuICAgIEFmdGVyVmlld0luaXQsXG4gICAgRWxlbWVudFJlZixcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgSW5qZWN0b3IsXG4gICAgSW5wdXQsXG4gICAgTmdab25lLFxuICAgIE9uQ2hhbmdlcyxcbiAgICBPdXRwdXQsXG4gICAgUmVuZGVyZXIyLFxuICAgIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEZvcm1Db250cm9sLCBOZ0NvbnRyb2wsIEFic3RyYWN0Q29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgUmVDYXB0Y2hhVHlwZSB9IGZyb20gJy4uL21vZGVscy9yZWNhcHRjaGEtdHlwZS5lbnVtJztcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG5cbiAgICAvKipcbiAgICAqIFByZWZpeCBvZiB0aGUgY2FwdGNoYSBlbGVtZW50XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2FwdGNoYUVsZW1QcmVmaXggPSAnbmd4X2NhcHRjaGFfaWRfJztcblxuICAgIHByaXZhdGUgc2V0dXBDYXB0Y2hhOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKlxuICAgICogR29vZ2xlJ3Mgc2l0ZSBrZXkuXG4gICAgKiBZb3UgY2FuIGZpbmQgdGhpcyB1bmRlciBodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYVxuICAgICovXG4gICAgQElucHV0KCkgc2l0ZUtleTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIGdsb2JhbCBkb21haW4gJ3JlY2FwdGNoYS5uZXQnIHNob3VsZCBiZSB1c2VkIGluc3RlYWQgb2YgZGVmYXVsdCBkb21haW4gKCdnb29nbGUuY29tJylcbiAgICAgKi9cbiAgICBASW5wdXQoKSB1c2VHbG9iYWxEb21haW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogVHlwZVxuICAgICovXG4gICAgQElucHV0KCkgdHlwZTogJ2F1ZGlvJyB8ICdpbWFnZScgPSAnaW1hZ2UnO1xuXG4gICAgLyoqXG4gICAgKiBMYW5ndWFnZSBjb2RlLiBBdXRvLWRldGVjdHMgdGhlIHVzZXIncyBsYW5ndWFnZSBpZiB1bnNwZWNpZmllZC5cbiAgICAqL1xuICAgIEBJbnB1dCgpIGhsOiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAqIFRhYiBpbmRleFxuICAgICovXG4gICAgQElucHV0KCkgdGFiSW5kZXggPSAwO1xuXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBjYXB0Y2hhIHJlY2VpdmVzIHN1Y2Nlc3NmdWwgcmVzcG9uc2UuXG4gICAgKiBDYXB0Y2hhIHJlc3BvbnNlIHRva2VuIGlzIHBhc3NlZCB0byBldmVudC5cbiAgICAqL1xuICAgIEBPdXRwdXQoKSBzdWNjZXNzID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgICAvKipcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgaXMgbG9hZGVkLiBFdmVudCByZWNlaXZlcyBpZCBvZiB0aGUgY2FwdGNoYVxuICAgICovXG4gICAgQE91dHB1dCgpIGxvYWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSBpcyByZXNldC5cbiAgICAqL1xuICAgIEBPdXRwdXQoKSByZXNldCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSBpcyBsb2FkZWQgJiByZWFkeS4gSS5lLiB3aGVuIHlvdSBuZWVkIHRvIGV4ZWN1dGUgY2FwdGNoYSBvbiBjb21wb25lbnQgbG9hZC5cbiAgICAqL1xuICAgIEBPdXRwdXQoKSByZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICogRXJyb3IgY2FsbGJhY2tcbiAgICAqL1xuICAgIEBPdXRwdXQoKSBlcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIC8qKlxuICAgICogRXhwaXJlZCBjYWxsYmFja1xuICAgICovXG4gICAgQE91dHB1dCgpIGV4cGlyZSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICAgIGFic3RyYWN0IGNhcHRjaGFXcmFwcGVyRWxlbT86IEVsZW1lbnRSZWY7XG5cbiAgICAvKipcbiAgICAqIEluZGljYXRlcyBpZiBjYXB0Y2hhIHNob3VsZCBiZSBzZXQgb24gbG9hZFxuICAgICovXG4gICAgcHJpdmF0ZSBzZXR1cEFmdGVyTG9hZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBDYXB0Y2hhIGVsZW1lbnRcbiAgICAqL1xuICAgIHByb3RlY3RlZCBjYXB0Y2hhRWxlbT86IEhUTUxFbGVtZW50O1xuXG4gICAgLyoqXG4gICAgKiBJZCBvZiB0aGUgY2FwdGNoYSBlbGVtXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgY2FwdGNoYUlkPzogbnVtYmVyO1xuXG4gICAgLyoqXG4gICAgKiBIb2xkcyBsYXN0IHJlc3BvbnNlIHZhbHVlXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgY3VycmVudFJlc3BvbnNlPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBJZiBlbmFibGVkLCBjYXB0Y2hhIHdpbGwgcmVzZXQgYWZ0ZXIgcmVjZWl2aW5nIHN1Y2Nlc3MgcmVzcG9uc2UuIFRoaXMgaXMgdXNlZnVsXG4gICAgKiB3aGVuIGludmlzaWJsZSBjYXB0Y2hhIG5lZWQgdG8gYmUgcmVzb2x2ZWQgbXVsdGlwbGUgdGltZXMgb24gc2FtZSBwYWdlXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzZXRDYXB0Y2hhQWZ0ZXJTdWNjZXNzID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIENhcHRjaGEgdHlwZVxuICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGU7XG5cbiAgICAvKipcbiAgICAqIFJlcXVpcmVkIGJ5IENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuICAgIHByb3RlY3RlZCBvblRvdWNoZWQ6ICh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkO1xuXG4gICAgLyoqXG4gICAgKiBJbmRpY2F0ZXMgaWYgY2FwdGNoYSBpcyBsb2FkZWRcbiAgICAqL1xuICAgIHB1YmxpYyBpc0xvYWRlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBSZWZlcmVuY2UgdG8gZ2xvYmFsIHJlQ2FwdGNoYSBBUElcbiAgICAqL1xuICAgIHB1YmxpYyByZUNhcHRjaGFBcGk/OiBhbnk7XG5cbiAgICAvKipcbiAgICAqIElkIG9mIHRoZSBET00gZWxlbWVudCB3cmFwcGluZyBjYXB0Y2hhXG4gICAgKi9cbiAgICBwdWJsaWMgY2FwdGNoYUVsZW1JZD86IHN0cmluZztcblxuICAgIC8qKlxuICAgICogRm9ybSBDb250cm9sIHRvIGJlIGVuYWJsZSB1c2FnZSBpbiByZWFjdGl2ZSBmb3Jtc1xuICAgICovXG4gICAgcHVibGljIGNvbnRyb2w/OiBBYnN0cmFjdENvbnRyb2wgfCBudWxsO1xuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICAgICAgcHJvdGVjdGVkIGluamVjdG9yOiBJbmplY3RvcixcbiAgICAgICAgcHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2UsXG4gICAgKSB7IH1cblxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbCA9IHRoaXMuaW5qZWN0b3IuZ2V0PE5nQ29udHJvbD4oTmdDb250cm9sKS5jb250cm9sO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIHt9XG4gICAgfVxuXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5zZXR1cENhcHRjaGEpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBDYXB0Y2hhID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldHVwQ29tcG9uZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcbiAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnk7XG5cbiAgICAvKipcbiAgICAqIFVzZWQgZm9yIGNhcHRjaGEgc3BlY2lmaWMgc2V0dXBcbiAgICAqL1xuICAgIHByb3RlY3RlZCBhYnN0cmFjdCBjYXB0Y2hhU3BlY2lmaWNTZXR1cCgpOiB2b2lkO1xuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICAvLyBjbGVhbnVwIHNjcmlwdHMgaWYgbGFuZ3VhZ2UgY2hhbmdlZCBiZWNhdXNlIHRoZXkgbmVlZCB0byBiZSByZWxvYWRlZFxuICAgICAgICBpZiAoY2hhbmdlcyAmJiBjaGFuZ2VzLmhsKSB7XG4gICAgICAgICAgICAvLyBjbGVhbnVwIHNjcmlwdHMgd2hlbiBsYW5ndWFnZSBjaGFuZ2VzXG4gICAgICAgICAgICBpZiAoIWNoYW5nZXMuaGwuZmlyc3RDaGFuZ2UgJiYgKGNoYW5nZXMuaGwuY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLmhsLnByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMudXNlR2xvYmFsRG9tYWluKSB7XG4gICAgICAgICAgICAvLyBjbGVhbnVwIHNjcmlwdHMgd2hlbiBkb21haW4gY2hhbmdlc1xuICAgICAgICAgICAgaWYgKCFjaGFuZ2VzLnVzZUdsb2JhbERvbWFpbi5maXJzdENoYW5nZSAmJiAoY2hhbmdlcy51c2VHbG9iYWxEb21haW4uY3VycmVudFZhbHVlICE9PSBjaGFuZ2VzLnVzZUdsb2JhbERvbWFpbi5wcmV2aW91c1ZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5jbGVhbnVwKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldHVwQ2FwdGNoYSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXRzIGNhcHRjaGEgcmVzcG9uc2UgYXMgcGVyIHJlQ2FwdGNoYSBkb2NzXG4gICAgKi9cbiAgICBnZXRSZXNwb25zZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5yZUNhcHRjaGFBcGkuZ2V0UmVzcG9uc2UodGhpcy5jYXB0Y2hhSWQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0cyBJZCBvZiBjYXB0Y2hhIHdpZGdldFxuICAgICovXG4gICAgZ2V0Q2FwdGNoYUlkKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcHRjaGFJZDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlc2V0cyBjYXB0Y2hhXG4gICAgKi9cbiAgICByZXNldENhcHRjaGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgLy8gcmVzZXQgY2FwdGNoYSB1c2luZyBHb29nbGUganMgYXBpXG4gICAgICAgICAgICB0aGlzLnJlQ2FwdGNoYUFwaS5yZXNldCgpO1xuXG4gICAgICAgICAgICAvLyByZXF1aXJlZCBkdWUgdG8gZm9ybXNcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKHVuZGVmaW5lZCk7XG5cblxuICAgICAgICAgICAgLy8gdHJpZ2dlciByZXNldCBldmVudFxuICAgICAgICAgICAgdGhpcy5yZXNldC5uZXh0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0cyBsYXN0IHN1Ym1pdHRlZCBjYXB0Y2hhIHJlc3BvbnNlXG4gICAgKi9cbiAgICBnZXRDdXJyZW50UmVzcG9uc2UoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFJlc3BvbnNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVsb2FkIGNhcHRjaGEuIFVzZWZ1bCB3aGVuIHByb3BlcnRpZXMgKGkuZS4gdGhlbWUpIGNoYW5nZWQgYW5kIGNhcHRjaGEgbmVlZCB0byByZWZsZWN0IHRoZW1cbiAgICAqL1xuICAgIHJlbG9hZENhcHRjaGEoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2V0dXBDb21wb25lbnQoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZW5zdXJlQ2FwdGNoYUVsZW0oY2FwdGNoYUVsZW1JZDogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNhcHRjaGFFbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY2FwdGNoYUVsZW1JZCk7XG5cbiAgICAgICAgaWYgKCFjYXB0Y2hhRWxlbSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENhcHRjaGEgZWxlbWVudCB3aXRoIGlkICcke2NhcHRjaGFFbGVtSWR9JyB3YXMgbm90IGZvdW5kYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhc3NpZ24gY2FwdGNoYSBhbGVtXG4gICAgICAgIHRoaXMuY2FwdGNoYUVsZW0gPSBjYXB0Y2hhRWxlbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFJlc3BvbnNpYmxlIGZvciBpbnN0YW50aWF0aW5nIGNhcHRjaGEgZWxlbWVudFxuICAgICovXG4gICAgcHJvdGVjdGVkIHJlbmRlclJlQ2FwdGNoYSgpOiB2b2lkIHtcbiAgICAgICAgLy8gcnVuIG91dHNpZGUgYW5ndWxhciB6b25lIGR1ZSB0byB0aW1lb3V0IGlzc3VlcyB3aGVuIHRlc3RpbmdcbiAgICAgICAgLy8gZGV0YWlsczogaHR0cHM6Ly9naXRodWIuY29tL0VubmdhZ2Uvbmd4LWNhcHRjaGEvaXNzdWVzLzI2XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhcHRjaGFJZCA9IHRoaXMucmVDYXB0Y2hhQXBpLnJlbmRlcih0aGlzLmNhcHRjaGFFbGVtSWQsIHRoaXMuZ2V0Q2FwdGNoYVByb3BlcnRpZXMoKSk7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Lm5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBjYXB0Y2hhIHJlY2VpdmVzIHJlc3BvbnNlXG4gICAgKiBAcGFyYW0gY2FsbGJhY2sgQ2FsbGJhY2tcbiAgICAqL1xuICAgIHByb3RlY3RlZCBoYW5kbGVDYWxsYmFjayhjYWxsYmFjazogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFJlc3BvbnNlID0gY2FsbGJhY2s7XG4gICAgICAgIHRoaXMuc3VjY2Vzcy5uZXh0KGNhbGxiYWNrKTtcblxuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoY2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQoY2FsbGJhY2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy5yZXNldENhcHRjaGFBZnRlclN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDYXB0Y2hhKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFBzZXVkb1VuaXF1ZU51bWJlcigpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRVVENNaWxsaXNlY29uZHMoKSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDk5OTkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc2V0dXBDb21wb25lbnQoKTogdm9pZCB7XG4gICAgICAgIC8vIGNhcHRjaGEgc3BlY2lmaWMgc2V0dXBcbiAgICAgICAgdGhpcy5jYXB0Y2hhU3BlY2lmaWNTZXR1cCgpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBjYXB0Y2hhIHdyYXBwZXJcbiAgICAgICAgdGhpcy5jcmVhdGVBbmRTZXRDYXB0Y2hhRWxlbSgpO1xuXG4gICAgICAgIHRoaXMuc2NyaXB0U2VydmljZS5yZWdpc3RlckNhcHRjaGFTY3JpcHQodGhpcy51c2VHbG9iYWxEb21haW4sICdleHBsaWNpdCcsIChncmVjYXB0Y2hhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9ubG9hZENhbGxiYWNrKGdyZWNhcHRjaGEpO1xuICAgICAgICB9LCB0aGlzLmhsKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENhbGxlZCB3aGVuIGdvb2dsZSdzIHJlY2FwdGNoYSBzY3JpcHQgaXMgcmVhZHlcbiAgICAqL1xuICAgIHByaXZhdGUgb25sb2FkQ2FsbGJhY2soZ3JlY2FwY2hhOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgLy8gYXNzaWduIHJlZmVyZW5jZSB0byByZUNhcHRjaGEgQXBpIG9uY2UgaXRzIGxvYWRlZFxuICAgICAgICB0aGlzLnJlQ2FwdGNoYUFwaSA9IGdyZWNhcGNoYTtcblxuICAgICAgICBpZiAoIXRoaXMucmVDYXB0Y2hhQXBpKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgUmVDYXB0Y2hhIEFwaSB3YXMgbm90IGluaXRpYWxpemVkIGNvcnJlY3RseWApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbG9hZGVkIGZsYWdcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8gZmlyZSBsb2FkIGV2ZW50XG4gICAgICAgIHRoaXMubG9hZC5uZXh0KCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNhcHRjaGFcbiAgICAgICAgdGhpcy5yZW5kZXJSZUNhcHRjaGEoKTtcblxuICAgICAgICAvLyBzZXR1cCBjb21wb25lbnQgaWYgaXQgd2FzIGZsYWdnZWQgYXMgc3VjaFxuICAgICAgICBpZiAodGhpcy5zZXR1cEFmdGVyTG9hZCkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cEFmdGVyTG9hZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZW5lcmF0ZU5ld0VsZW1JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jYXB0Y2hhRWxlbVByZWZpeCArIHRoaXMuZ2V0UHNldWRvVW5pcXVlTnVtYmVyKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcmVhdGVBbmRTZXRDYXB0Y2hhRWxlbSgpOiB2b2lkIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgbmV3IGNhcHRjaGEgaWRcbiAgICAgICAgdGhpcy5jYXB0Y2hhRWxlbUlkID0gdGhpcy5nZW5lcmF0ZU5ld0VsZW1JZCgpO1xuXG4gICAgICAgIGlmICghdGhpcy5jYXB0Y2hhRWxlbUlkKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ2FwdGNoYSBlbGVtIElkIGlzIG5vdCBzZXRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5jYXB0Y2hhV3JhcHBlckVsZW0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIERPTSBlbGVtZW50IGlzIG5vdCBpbml0aWFsaXplZGApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBodG1sXG4gICAgICAgIHRoaXMuY2FwdGNoYVdyYXBwZXJFbGVtLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG5cbiAgICAgICAgLy8gY3JlYXRlIG5ldyB3cmFwcGVyIGZvciBjYXB0Y2hhXG4gICAgICAgIGNvbnN0IG5ld0VsZW0gPSB0aGlzLnJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuZXdFbGVtLmlkID0gdGhpcy5jYXB0Y2hhRWxlbUlkO1xuXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQodGhpcy5jYXB0Y2hhV3JhcHBlckVsZW0ubmF0aXZlRWxlbWVudCwgbmV3RWxlbSk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGNhcHRjaGEgZWxlbVxuICAgICAgICB0aGlzLmVuc3VyZUNhcHRjaGFFbGVtKHRoaXMuY2FwdGNoYUVsZW1JZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG8gYmUgYWxpZ25lZCB3aXRoIHRoZSBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2Ugd2UgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyBtZXRob2RcbiAgICAgKiBIb3dldmVyIGFzIHdlIGRvbid0IHdhbnQgdG8gdXBkYXRlIHRoZSByZWNhcHRjaGEsIHRoaXMgZG9lc24ndCBuZWVkIHRvIGJlIGltcGxlbWVudGVkXG4gICAgICovXG4gICAgcHVibGljIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHsgfVxuXG4gICAgLyoqXG4gICAgICogVGhpcyBtZXRob2QgaGVscHMgdXMgdGllIHRvZ2V0aGVyIHJlY2FwdGNoYSBhbmQgb3VyIGZvcm1Db250cm9sIHZhbHVlc1xuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQXQgc29tZSBwb2ludCB3ZSBtaWdodCBiZSBpbnRlcmVzdGVkIHdoZXRoZXIgdGhlIHVzZXIgaGFzIHRvdWNoZWQgb3VyIGNvbXBvbmVudFxuICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEhhbmRsZXMgZXJyb3IgY2FsbGJhY2tcbiAgICAqL1xuICAgIHByb3RlY3RlZCBoYW5kbGVFcnJvckNhbGxiYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UodW5kZWZpbmVkKTtcbiAgICAgICAgICAgIHRoaXMub25Ub3VjaGVkKHVuZGVmaW5lZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXJyb3IubmV4dCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogSGFuZGxlcyBleHBpcmVkIGNhbGxiYWNrXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgaGFuZGxlRXhwaXJlQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuZXhwaXJlLm5leHQoKTtcblxuICAgICAgICAvLyByZXNldCBjYXB0Y2hhIG9uIGV4cGlyZSBjYWxsYmFja1xuICAgICAgICB0aGlzLnJlc2V0Q2FwdGNoYSgpO1xuICAgIH1cbn1cblxuIl19