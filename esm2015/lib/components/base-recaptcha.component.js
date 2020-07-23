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
export class BaseReCaptchaComponent {
    /**
     * @protected
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
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
    ngAfterViewInit() {
        try {
            this.control = this.injector.get(NgControl).control;
        }
        catch (_a) { }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.setupCaptcha) {
            this.setupCaptcha = false;
            this.setupComponent();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * Gets captcha response as per reCaptcha docs
     * @return {?}
     */
    getResponse() {
        return this.reCaptchaApi.getResponse(this.captchaId);
    }
    /**
     * Gets Id of captcha widget
     * @return {?}
     */
    getCaptchaId() {
        return this.captchaId;
    }
    /**
     * Resets captcha
     * @return {?}
     */
    resetCaptcha() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            // reset captcha using Google js api
            this.reCaptchaApi.reset();
            // required due to forms
            this.onChange(undefined);
            this.onTouched(undefined);
            // trigger reset event
            this.reset.next();
        }));
    }
    /**
     * Gets last submitted captcha response
     * @return {?}
     */
    getCurrentResponse() {
        return this.currentResponse;
    }
    /**
     * Reload captcha. Useful when properties (i.e. theme) changed and captcha need to reflect them
     * @return {?}
     */
    reloadCaptcha() {
        this.setupComponent();
    }
    /**
     * @protected
     * @param {?} captchaElemId
     * @return {?}
     */
    ensureCaptchaElem(captchaElemId) {
        /** @type {?} */
        const captchaElem = document.getElementById(captchaElemId);
        if (!captchaElem) {
            throw Error(`Captcha element with id '${captchaElemId}' was not found`);
        }
        // assign captcha alem
        this.captchaElem = captchaElem;
    }
    /**
     * Responsible for instantiating captcha element
     * @protected
     * @return {?}
     */
    renderReCaptcha() {
        // run outside angular zone due to timeout issues when testing
        // details: https://github.com/Enngage/ngx-captcha/issues/26
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this.captchaId = this.reCaptchaApi.render(this.captchaElemId, this.getCaptchaProperties());
            this.ready.next();
        }));
    }
    /**
     * Called when captcha receives response
     * @protected
     * @param {?} callback Callback
     * @return {?}
     */
    handleCallback(callback) {
        this.currentResponse = callback;
        this.success.next(callback);
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(callback);
            this.onTouched(callback);
        }));
        if (this.resetCaptchaAfterSuccess) {
            this.resetCaptcha();
        }
    }
    /**
     * @private
     * @return {?}
     */
    getPseudoUniqueNumber() {
        return new Date().getUTCMilliseconds() + Math.floor(Math.random() * 9999);
    }
    /**
     * @private
     * @return {?}
     */
    setupComponent() {
        // captcha specific setup
        this.captchaSpecificSetup();
        // create captcha wrapper
        this.createAndSetCaptchaElem();
        this.scriptService.registerCaptchaScript(this.useGlobalDomain, 'explicit', (/**
         * @param {?} grecaptcha
         * @return {?}
         */
        (grecaptcha) => {
            this.onloadCallback(grecaptcha);
        }), this.hl);
    }
    /**
     * Called when google's recaptcha script is ready
     * @private
     * @param {?} grecapcha
     * @return {?}
     */
    onloadCallback(grecapcha) {
        // assign reference to reCaptcha Api once its loaded
        this.reCaptchaApi = grecapcha;
        if (!this.reCaptchaApi) {
            throw Error(`ReCaptcha Api was not initialized correctly`);
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
    }
    /**
     * @private
     * @return {?}
     */
    generateNewElemId() {
        return this.captchaElemPrefix + this.getPseudoUniqueNumber();
    }
    /**
     * @private
     * @return {?}
     */
    createAndSetCaptchaElem() {
        // generate new captcha id
        this.captchaElemId = this.generateNewElemId();
        if (!this.captchaElemId) {
            throw Error(`Captcha elem Id is not set`);
        }
        if (!this.captchaWrapperElem) {
            throw Error(`Captcha DOM element is not initialized`);
        }
        // remove old html
        this.captchaWrapperElem.nativeElement.innerHTML = '';
        // create new wrapper for captcha
        /** @type {?} */
        const newElem = this.renderer.createElement('div');
        newElem.id = this.captchaElemId;
        this.renderer.appendChild(this.captchaWrapperElem.nativeElement, newElem);
        // update captcha elem
        this.ensureCaptchaElem(this.captchaElemId);
    }
    /**
     * To be aligned with the ControlValueAccessor interface we need to implement this method
     * However as we don't want to update the recaptcha, this doesn't need to be implemented
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) { }
    /**
     * This method helps us tie together recaptcha and our formControl values
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * At some point we might be interested whether the user has touched our component
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * Handles error callback
     * @protected
     * @return {?}
     */
    handleErrorCallback() {
        this.zone.run((/**
         * @return {?}
         */
        () => {
            this.onChange(undefined);
            this.onTouched(undefined);
        }));
        this.error.next();
    }
    /**
     * Handles expired callback
     * @protected
     * @return {?}
     */
    handleExpireCallback() {
        this.expire.next();
        // reset captcha on expire callback
        this.resetCaptcha();
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1yZWNhcHRjaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNhcHRjaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9iYXNlLXJlY2FwdGNoYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBSUgsWUFBWSxFQUVaLEtBQUssRUFHTCxNQUFNLEdBR1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFxQyxTQUFTLEVBQW1CLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFNL0YsTUFBTSxPQUFnQixzQkFBc0I7Ozs7Ozs7O0lBNkh4QyxZQUNjLFFBQW1CLEVBQ25CLElBQVksRUFDWixRQUFrQixFQUNsQixhQUE0QjtRQUg1QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7O1FBNUh2QixzQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztRQUVqRCxpQkFBWSxHQUFZLElBQUksQ0FBQzs7OztRQVc1QixvQkFBZSxHQUFZLEtBQUssQ0FBQzs7OztRQUtqQyxTQUFJLEdBQXNCLE9BQU8sQ0FBQzs7OztRQVVsQyxhQUFRLEdBQUcsQ0FBQyxDQUFDOzs7OztRQU1aLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBS3JDLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDOzs7O1FBS2xDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7O1FBS2pDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7O1FBS2pDLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7O1FBS2pDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDOzs7O1FBT3BDLG1CQUFjLEdBQUcsS0FBSyxDQUFDOzs7OztRQXFCckIsNkJBQXdCLEdBQUcs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Ozs7O0lBTXRCLHlDQUErQzs7Ozs7SUFLL0Msc0NBQTRDOzs7OztJQUs1Qyx1Q0FBMkM7Ozs7O0lBSzNDLHVDQUEyQzs7Ozs7SUFLM0MsdUNBQTJDOzs7OztJQUszQyx3Q0FBNEM7O0lBRTVDLG9EQUF5Qzs7Ozs7O0lBS3pDLGdEQUErQjs7Ozs7O0lBSy9CLDZDQUFvQzs7Ozs7O0lBS3BDLDJDQUE2Qjs7Ozs7O0lBSzdCLGlEQUFtQzs7Ozs7OztJQU1uQywwREFBMkM7Ozs7OztJQUszQywrQ0FBZ0Q7Ozs7OztJQUtoRCwwQ0FBd0Q7Ozs7O0lBQ3hELDJDQUF5RDs7Ozs7SUFLekQsMENBQXdCOzs7OztJQUt4Qiw4Q0FBMEI7Ozs7O0lBSzFCLCtDQUE4Qjs7Ozs7SUFLOUIseUNBQXdDOzs7OztJQUdwQywwQ0FBNkI7Ozs7O0lBQzdCLHNDQUFzQjs7Ozs7SUFDdEIsMENBQTRCOzs7OztJQUM1QiwrQ0FBc0M7Ozs7Ozs7SUFvQjFDLHdFQUErQzs7Ozs7OztJQUsvQyx3RUFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFmdGVyVmlld0NoZWNrZWQsXG4gICAgQWZ0ZXJWaWV3SW5pdCxcbiAgICBFbGVtZW50UmVmLFxuICAgIEV2ZW50RW1pdHRlcixcbiAgICBJbmplY3RvcixcbiAgICBJbnB1dCxcbiAgICBOZ1pvbmUsXG4gICAgT25DaGFuZ2VzLFxuICAgIE91dHB1dCxcbiAgICBSZW5kZXJlcjIsXG4gICAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgRm9ybUNvbnRyb2wsIE5nQ29udHJvbCwgQWJzdHJhY3RDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSZUNhcHRjaGFUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL3JlY2FwdGNoYS10eXBlLmVudW0nO1xuaW1wb3J0IHsgU2NyaXB0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NjcmlwdC5zZXJ2aWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VSZUNhcHRjaGFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBBZnRlclZpZXdJbml0LCBBZnRlclZpZXdDaGVja2VkIHtcblxuICAgIC8qKlxuICAgICogUHJlZml4IG9mIHRoZSBjYXB0Y2hhIGVsZW1lbnRcbiAgICAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjYXB0Y2hhRWxlbVByZWZpeCA9ICduZ3hfY2FwdGNoYV9pZF8nO1xuXG4gICAgcHJpdmF0ZSBzZXR1cENhcHRjaGE6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgKiBHb29nbGUncyBzaXRlIGtleS5cbiAgICAqIFlvdSBjYW4gZmluZCB0aGlzIHVuZGVyIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhXG4gICAgKi9cbiAgICBASW5wdXQoKSBzaXRlS2V5OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBJbmRpY2F0ZXMgaWYgZ2xvYmFsIGRvbWFpbiAncmVjYXB0Y2hhLm5ldCcgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZCBvZiBkZWZhdWx0IGRvbWFpbiAoJ2dvb2dsZS5jb20nKVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHVzZUdsb2JhbERvbWFpbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgKiBUeXBlXG4gICAgKi9cbiAgICBASW5wdXQoKSB0eXBlOiAnYXVkaW8nIHwgJ2ltYWdlJyA9ICdpbWFnZSc7XG5cbiAgICAvKipcbiAgICAqIExhbmd1YWdlIGNvZGUuIEF1dG8tZGV0ZWN0cyB0aGUgdXNlcidzIGxhbmd1YWdlIGlmIHVuc3BlY2lmaWVkLlxuICAgICovXG4gICAgQElucHV0KCkgaGw6IHN0cmluZztcblxuICAgIC8qKlxuICAgICogVGFiIGluZGV4XG4gICAgKi9cbiAgICBASW5wdXQoKSB0YWJJbmRleCA9IDA7XG5cbiAgICAvKipcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgcmVjZWl2ZXMgc3VjY2Vzc2Z1bCByZXNwb25zZS5cbiAgICAqIENhcHRjaGEgcmVzcG9uc2UgdG9rZW4gaXMgcGFzc2VkIHRvIGV2ZW50LlxuICAgICovXG4gICAgQE91dHB1dCgpIHN1Y2Nlc3MgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gY2FwdGNoYSBpcyBsb2FkZWQuIEV2ZW50IHJlY2VpdmVzIGlkIG9mIHRoZSBjYXB0Y2hhXG4gICAgKi9cbiAgICBAT3V0cHV0KCkgbG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBjYXB0Y2hhIGlzIHJlc2V0LlxuICAgICovXG4gICAgQE91dHB1dCgpIHJlc2V0ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgKiBDYWxsZWQgd2hlbiBjYXB0Y2hhIGlzIGxvYWRlZCAmIHJlYWR5LiBJLmUuIHdoZW4geW91IG5lZWQgdG8gZXhlY3V0ZSBjYXB0Y2hhIG9uIGNvbXBvbmVudCBsb2FkLlxuICAgICovXG4gICAgQE91dHB1dCgpIHJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgKiBFcnJvciBjYWxsYmFja1xuICAgICovXG4gICAgQE91dHB1dCgpIGVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgLyoqXG4gICAgKiBFeHBpcmVkIGNhbGxiYWNrXG4gICAgKi9cbiAgICBAT3V0cHV0KCkgZXhwaXJlID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgYWJzdHJhY3QgY2FwdGNoYVdyYXBwZXJFbGVtPzogRWxlbWVudFJlZjtcblxuICAgIC8qKlxuICAgICogSW5kaWNhdGVzIGlmIGNhcHRjaGEgc2hvdWxkIGJlIHNldCBvbiBsb2FkXG4gICAgKi9cbiAgICBwcml2YXRlIHNldHVwQWZ0ZXJMb2FkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIENhcHRjaGEgZWxlbWVudFxuICAgICovXG4gICAgcHJvdGVjdGVkIGNhcHRjaGFFbGVtPzogSFRNTEVsZW1lbnQ7XG5cbiAgICAvKipcbiAgICAqIElkIG9mIHRoZSBjYXB0Y2hhIGVsZW1cbiAgICAqL1xuICAgIHByb3RlY3RlZCBjYXB0Y2hhSWQ/OiBudW1iZXI7XG5cbiAgICAvKipcbiAgICAqIEhvbGRzIGxhc3QgcmVzcG9uc2UgdmFsdWVcbiAgICAqL1xuICAgIHByb3RlY3RlZCBjdXJyZW50UmVzcG9uc2U/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAqIElmIGVuYWJsZWQsIGNhcHRjaGEgd2lsbCByZXNldCBhZnRlciByZWNlaXZpbmcgc3VjY2VzcyByZXNwb25zZS4gVGhpcyBpcyB1c2VmdWxcbiAgICAqIHdoZW4gaW52aXNpYmxlIGNhcHRjaGEgbmVlZCB0byBiZSByZXNvbHZlZCBtdWx0aXBsZSB0aW1lcyBvbiBzYW1lIHBhZ2VcbiAgICAqL1xuICAgIHByb3RlY3RlZCByZXNldENhcHRjaGFBZnRlclN1Y2Nlc3MgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICogQ2FwdGNoYSB0eXBlXG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgYWJzdHJhY3QgcmVjYXB0Y2hhVHlwZTogUmVDYXB0Y2hhVHlwZTtcblxuICAgIC8qKlxuICAgICogUmVxdWlyZWQgYnkgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICAqL1xuICAgIHByb3RlY3RlZCBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG4gICAgcHJvdGVjdGVkIG9uVG91Y2hlZDogKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWQ7XG5cbiAgICAvKipcbiAgICAqIEluZGljYXRlcyBpZiBjYXB0Y2hhIGlzIGxvYWRlZFxuICAgICovXG4gICAgcHVibGljIGlzTG9hZGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAqIFJlZmVyZW5jZSB0byBnbG9iYWwgcmVDYXB0Y2hhIEFQSVxuICAgICovXG4gICAgcHVibGljIHJlQ2FwdGNoYUFwaT86IGFueTtcblxuICAgIC8qKlxuICAgICogSWQgb2YgdGhlIERPTSBlbGVtZW50IHdyYXBwaW5nIGNhcHRjaGFcbiAgICAqL1xuICAgIHB1YmxpYyBjYXB0Y2hhRWxlbUlkPzogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgKiBGb3JtIENvbnRyb2wgdG8gYmUgZW5hYmxlIHVzYWdlIGluIHJlYWN0aXZlIGZvcm1zXG4gICAgKi9cbiAgICBwdWJsaWMgY29udHJvbD86IEFic3RyYWN0Q29udHJvbCB8IG51bGw7XG5cbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgICAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgICAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgICAgICBwcm90ZWN0ZWQgc2NyaXB0U2VydmljZTogU2NyaXB0U2VydmljZSxcbiAgICApIHsgfVxuXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5jb250cm9sID0gdGhpcy5pbmplY3Rvci5nZXQ8TmdDb250cm9sPihOZ0NvbnRyb2wpLmNvbnRyb2w7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2gge31cbiAgICB9XG5cbiAgICBuZ0FmdGVyVmlld0NoZWNrZWQoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNldHVwQ2FwdGNoYSkge1xuICAgICAgICAgICAgdGhpcy5zZXR1cENhcHRjaGEgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBDb21wb25lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICogR2V0cyByZUNhcHRjaGEgcHJvcGVydGllc1xuICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGdldENhcHRjaGFQcm9wZXJ0aWVzKCk6IGFueTtcblxuICAgIC8qKlxuICAgICogVXNlZCBmb3IgY2FwdGNoYSBzcGVjaWZpYyBzZXR1cFxuICAgICovXG4gICAgcHJvdGVjdGVkIGFic3RyYWN0IGNhcHRjaGFTcGVjaWZpY1NldHVwKCk6IHZvaWQ7XG5cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIC8vIGNsZWFudXAgc2NyaXB0cyBpZiBsYW5ndWFnZSBjaGFuZ2VkIGJlY2F1c2UgdGhleSBuZWVkIHRvIGJlIHJlbG9hZGVkXG4gICAgICAgIGlmIChjaGFuZ2VzICYmIGNoYW5nZXMuaGwpIHtcbiAgICAgICAgICAgIC8vIGNsZWFudXAgc2NyaXB0cyB3aGVuIGxhbmd1YWdlIGNoYW5nZXNcbiAgICAgICAgICAgIGlmICghY2hhbmdlcy5obC5maXJzdENoYW5nZSAmJiAoY2hhbmdlcy5obC5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMuaGwucHJldmlvdXNWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcmlwdFNlcnZpY2UuY2xlYW51cCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoYW5nZXMgJiYgY2hhbmdlcy51c2VHbG9iYWxEb21haW4pIHtcbiAgICAgICAgICAgIC8vIGNsZWFudXAgc2NyaXB0cyB3aGVuIGRvbWFpbiBjaGFuZ2VzXG4gICAgICAgICAgICBpZiAoIWNoYW5nZXMudXNlR2xvYmFsRG9tYWluLmZpcnN0Q2hhbmdlICYmIChjaGFuZ2VzLnVzZUdsb2JhbERvbWFpbi5jdXJyZW50VmFsdWUgIT09IGNoYW5nZXMudXNlR2xvYmFsRG9tYWluLnByZXZpb3VzVmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLmNsZWFudXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0dXBDYXB0Y2hhID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIEdldHMgY2FwdGNoYSByZXNwb25zZSBhcyBwZXIgcmVDYXB0Y2hhIGRvY3NcbiAgICAqL1xuICAgIGdldFJlc3BvbnNlKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlQ2FwdGNoYUFwaS5nZXRSZXNwb25zZSh0aGlzLmNhcHRjaGFJZCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXRzIElkIG9mIGNhcHRjaGEgd2lkZ2V0XG4gICAgKi9cbiAgICBnZXRDYXB0Y2hhSWQoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FwdGNoYUlkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVzZXRzIGNhcHRjaGFcbiAgICAqL1xuICAgIHJlc2V0Q2FwdGNoYSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAvLyByZXNldCBjYXB0Y2hhIHVzaW5nIEdvb2dsZSBqcyBhcGlcbiAgICAgICAgICAgIHRoaXMucmVDYXB0Y2hhQXBpLnJlc2V0KCk7XG5cbiAgICAgICAgICAgIC8vIHJlcXVpcmVkIGR1ZSB0byBmb3Jtc1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQodW5kZWZpbmVkKTtcblxuXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHJlc2V0IGV2ZW50XG4gICAgICAgICAgICB0aGlzLnJlc2V0Lm5leHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBHZXRzIGxhc3Qgc3VibWl0dGVkIGNhcHRjaGEgcmVzcG9uc2VcbiAgICAqL1xuICAgIGdldEN1cnJlbnRSZXNwb25zZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UmVzcG9uc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBSZWxvYWQgY2FwdGNoYS4gVXNlZnVsIHdoZW4gcHJvcGVydGllcyAoaS5lLiB0aGVtZSkgY2hhbmdlZCBhbmQgY2FwdGNoYSBuZWVkIHRvIHJlZmxlY3QgdGhlbVxuICAgICovXG4gICAgcmVsb2FkQ2FwdGNoYSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5zZXR1cENvbXBvbmVudCgpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBlbnN1cmVDYXB0Y2hhRWxlbShjYXB0Y2hhRWxlbUlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgY2FwdGNoYUVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjYXB0Y2hhRWxlbUlkKTtcblxuICAgICAgICBpZiAoIWNhcHRjaGFFbGVtKSB7XG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgQ2FwdGNoYSBlbGVtZW50IHdpdGggaWQgJyR7Y2FwdGNoYUVsZW1JZH0nIHdhcyBub3QgZm91bmRgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFzc2lnbiBjYXB0Y2hhIGFsZW1cbiAgICAgICAgdGhpcy5jYXB0Y2hhRWxlbSA9IGNhcHRjaGFFbGVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogUmVzcG9uc2libGUgZm9yIGluc3RhbnRpYXRpbmcgY2FwdGNoYSBlbGVtZW50XG4gICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVuZGVyUmVDYXB0Y2hhKCk6IHZvaWQge1xuICAgICAgICAvLyBydW4gb3V0c2lkZSBhbmd1bGFyIHpvbmUgZHVlIHRvIHRpbWVvdXQgaXNzdWVzIHdoZW4gdGVzdGluZ1xuICAgICAgICAvLyBkZXRhaWxzOiBodHRwczovL2dpdGh1Yi5jb20vRW5uZ2FnZS9uZ3gtY2FwdGNoYS9pc3N1ZXMvMjZcbiAgICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2FwdGNoYUlkID0gdGhpcy5yZUNhcHRjaGFBcGkucmVuZGVyKHRoaXMuY2FwdGNoYUVsZW1JZCwgdGhpcy5nZXRDYXB0Y2hhUHJvcGVydGllcygpKTtcbiAgICAgICAgICAgIHRoaXMucmVhZHkubmV4dCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIENhbGxlZCB3aGVuIGNhcHRjaGEgcmVjZWl2ZXMgcmVzcG9uc2VcbiAgICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFja1xuICAgICovXG4gICAgcHJvdGVjdGVkIGhhbmRsZUNhbGxiYWNrKGNhbGxiYWNrOiBhbnkpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzcG9uc2UgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5zdWNjZXNzLm5leHQoY2FsbGJhY2spO1xuXG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShjYWxsYmFjayk7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hlZChjYWxsYmFjayk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnJlc2V0Q2FwdGNoYUFmdGVyU3VjY2Vzcykge1xuICAgICAgICAgICAgdGhpcy5yZXNldENhcHRjaGEoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UHNldWRvVW5pcXVlTnVtYmVyKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSgpLmdldFVUQ01pbGxpc2Vjb25kcygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOTk5OSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXR1cENvbXBvbmVudCgpOiB2b2lkIHtcbiAgICAgICAgLy8gY2FwdGNoYSBzcGVjaWZpYyBzZXR1cFxuICAgICAgICB0aGlzLmNhcHRjaGFTcGVjaWZpY1NldHVwKCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGNhcHRjaGEgd3JhcHBlclxuICAgICAgICB0aGlzLmNyZWF0ZUFuZFNldENhcHRjaGFFbGVtKCk7XG5cbiAgICAgICAgdGhpcy5zY3JpcHRTZXJ2aWNlLnJlZ2lzdGVyQ2FwdGNoYVNjcmlwdCh0aGlzLnVzZUdsb2JhbERvbWFpbiwgJ2V4cGxpY2l0JywgKGdyZWNhcHRjaGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25sb2FkQ2FsbGJhY2soZ3JlY2FwdGNoYSk7XG4gICAgICAgIH0sIHRoaXMuaGwpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogQ2FsbGVkIHdoZW4gZ29vZ2xlJ3MgcmVjYXB0Y2hhIHNjcmlwdCBpcyByZWFkeVxuICAgICovXG4gICAgcHJpdmF0ZSBvbmxvYWRDYWxsYmFjayhncmVjYXBjaGE6IGFueSk6IHZvaWQge1xuICAgICAgICAvLyBhc3NpZ24gcmVmZXJlbmNlIHRvIHJlQ2FwdGNoYSBBcGkgb25jZSBpdHMgbG9hZGVkXG4gICAgICAgIHRoaXMucmVDYXB0Y2hhQXBpID0gZ3JlY2FwY2hhO1xuXG4gICAgICAgIGlmICghdGhpcy5yZUNhcHRjaGFBcGkpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBSZUNhcHRjaGEgQXBpIHdhcyBub3QgaW5pdGlhbGl6ZWQgY29ycmVjdGx5YCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsb2FkZWQgZmxhZ1xuICAgICAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcblxuICAgICAgICAvLyBmaXJlIGxvYWQgZXZlbnRcbiAgICAgICAgdGhpcy5sb2FkLm5leHQoKTtcblxuICAgICAgICAvLyByZW5kZXIgY2FwdGNoYVxuICAgICAgICB0aGlzLnJlbmRlclJlQ2FwdGNoYSgpO1xuXG4gICAgICAgIC8vIHNldHVwIGNvbXBvbmVudCBpZiBpdCB3YXMgZmxhZ2dlZCBhcyBzdWNoXG4gICAgICAgIGlmICh0aGlzLnNldHVwQWZ0ZXJMb2FkKSB7XG4gICAgICAgICAgICB0aGlzLnNldHVwQWZ0ZXJMb2FkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnNldHVwQ29tcG9uZW50KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGdlbmVyYXRlTmV3RWxlbUlkKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcHRjaGFFbGVtUHJlZml4ICsgdGhpcy5nZXRQc2V1ZG9VbmlxdWVOdW1iZXIoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyZWF0ZUFuZFNldENhcHRjaGFFbGVtKCk6IHZvaWQge1xuICAgICAgICAvLyBnZW5lcmF0ZSBuZXcgY2FwdGNoYSBpZFxuICAgICAgICB0aGlzLmNhcHRjaGFFbGVtSWQgPSB0aGlzLmdlbmVyYXRlTmV3RWxlbUlkKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhcHRjaGFFbGVtSWQpIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDYXB0Y2hhIGVsZW0gSWQgaXMgbm90IHNldGApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmNhcHRjaGFXcmFwcGVyRWxlbSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoYENhcHRjaGEgRE9NIGVsZW1lbnQgaXMgbm90IGluaXRpYWxpemVkYCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW1vdmUgb2xkIGh0bWxcbiAgICAgICAgdGhpcy5jYXB0Y2hhV3JhcHBlckVsZW0ubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSAnJztcblxuICAgICAgICAvLyBjcmVhdGUgbmV3IHdyYXBwZXIgZm9yIGNhcHRjaGFcbiAgICAgICAgY29uc3QgbmV3RWxlbSA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5ld0VsZW0uaWQgPSB0aGlzLmNhcHRjaGFFbGVtSWQ7XG5cbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmNhcHRjaGFXcmFwcGVyRWxlbS5uYXRpdmVFbGVtZW50LCBuZXdFbGVtKTtcblxuICAgICAgICAvLyB1cGRhdGUgY2FwdGNoYSBlbGVtXG4gICAgICAgIHRoaXMuZW5zdXJlQ2FwdGNoYUVsZW0odGhpcy5jYXB0Y2hhRWxlbUlkKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUbyBiZSBhbGlnbmVkIHdpdGggdGhlIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGludGVyZmFjZSB3ZSBuZWVkIHRvIGltcGxlbWVudCB0aGlzIG1ldGhvZFxuICAgICAqIEhvd2V2ZXIgYXMgd2UgZG9uJ3Qgd2FudCB0byB1cGRhdGUgdGhlIHJlY2FwdGNoYSwgdGhpcyBkb2Vzbid0IG5lZWQgdG8gYmUgaW1wbGVtZW50ZWRcbiAgICAgKi9cbiAgICBwdWJsaWMgd3JpdGVWYWx1ZShvYmo6IGFueSk6IHZvaWQgeyB9XG5cbiAgICAvKipcbiAgICAgKiBUaGlzIG1ldGhvZCBoZWxwcyB1cyB0aWUgdG9nZXRoZXIgcmVjYXB0Y2hhIGFuZCBvdXIgZm9ybUNvbnRyb2wgdmFsdWVzXG4gICAgICovXG4gICAgcHVibGljIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBBdCBzb21lIHBvaW50IHdlIG1pZ2h0IGJlIGludGVyZXN0ZWQgd2hldGhlciB0aGUgdXNlciBoYXMgdG91Y2hlZCBvdXIgY29tcG9uZW50XG4gICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogSGFuZGxlcyBlcnJvciBjYWxsYmFja1xuICAgICovXG4gICAgcHJvdGVjdGVkIGhhbmRsZUVycm9yQ2FsbGJhY2soKTogdm9pZCB7XG4gICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSh1bmRlZmluZWQpO1xuICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQodW5kZWZpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5lcnJvci5uZXh0KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBIYW5kbGVzIGV4cGlyZWQgY2FsbGJhY2tcbiAgICAqL1xuICAgIHByb3RlY3RlZCBoYW5kbGVFeHBpcmVDYWxsYmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5leHBpcmUubmV4dCgpO1xuXG4gICAgICAgIC8vIHJlc2V0IGNhcHRjaGEgb24gZXhwaXJlIGNhbGxiYWNrXG4gICAgICAgIHRoaXMucmVzZXRDYXB0Y2hhKCk7XG4gICAgfVxufVxuXG4iXX0=