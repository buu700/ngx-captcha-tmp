/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
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
export { ScriptService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSW5EO0lBaUJJLHVCQUNjLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFROzs7O1FBWlAscUJBQWdCLEdBQUcsWUFBWSxDQUFDOzs7O1FBS2hDLGlDQUE0QixHQUFHLDZCQUE2QixDQUFDO1FBRTdELGlCQUFZLEdBQVcsZUFBZSxDQUFDO1FBRXZDLGtCQUFhLEdBQVcsWUFBWSxDQUFDO0lBS3hELENBQUM7Ozs7Ozs7O0lBRUQsNkNBQXFCOzs7Ozs7O0lBQXJCLFVBQXNCLGVBQXdCLEVBQUUsTUFBYyxFQUFFLE1BQWlDLEVBQUUsUUFBaUI7UUFBcEgsaUJBeUJDO1FBeEJHLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUU7WUFDL0IscUNBQXFDO1lBQ3JDLHlCQUF5QjtZQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDO2dCQUNWLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUMxQyxDQUFDLEVBQUMsQ0FBQztZQUNILE9BQU87U0FDVjtRQUVELDhGQUE4RjtRQUM5Rix3REFBd0Q7UUFDeEQsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLG1CQUFLOzs7UUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSSxFQUFFLE1BQU0sQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUNuRCxFQUZ1RCxDQUV2RCxFQUFDLEVBQUEsQ0FBQzs7O1lBR0csVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ25ELFVBQVUsQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDN0UsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDeEIsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFFeEIsdUJBQXVCO1FBQ3ZCLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckUsQ0FBQzs7OztJQUVELCtCQUFPOzs7SUFBUDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDdEQsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUM5QyxDQUFDO0lBRUQ7O09BRUc7Ozs7OztJQUNLLDhDQUFzQjs7Ozs7SUFBOUI7UUFDSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUUsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLHdDQUFnQjs7Ozs7O0lBQXhCLFVBQXlCLEVBQVc7UUFDaEMsSUFBSSxDQUFDLEVBQUUsRUFBRTtZQUNMLE9BQU8sRUFBRSxDQUFDO1NBQ2I7UUFFRCxPQUFPLFNBQU8sRUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7TUFFRTs7Ozs7Ozs7O0lBQ00sMkNBQW1COzs7Ozs7OztJQUEzQixVQUE0QixlQUF3QixFQUFFLE1BQWMsRUFBRSxRQUFpQjs7WUFDN0UsTUFBTSxHQUFHLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWE7UUFFdkUsMkNBQTJDO1FBQzNDLE9BQU8saUJBQWUsTUFBTSxpQ0FBNEIsSUFBSSxDQUFDLDRCQUE0QixnQkFBVyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBRyxDQUFDO0lBQ25KLENBQUM7O2dCQW5GSixVQUFVOzs7O2dCQUpVLE1BQU07O0lBeUYzQixvQkFBQztDQUFBLEFBckZELElBcUZDO1NBcEZZLGFBQWE7Ozs7Ozs7SUFLdEIseUNBQW1EOzs7Ozs7SUFLbkQscURBQWdGOzs7OztJQUVoRixxQ0FBMEQ7Ozs7O0lBRTFELHNDQUF3RDs7Ozs7SUFHcEQsNkJBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGRvY3VtZW50OiBhbnk7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTY3JpcHRTZXJ2aWNlIHtcblxuICAgIC8qKlxuICAgICAqIE5hbWUgb2YgdGhlIGdsb2JhbCBnb29nbGUgcmVjYXB0Y2hhIHNjcmlwdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dHcmVjYXB0Y2hhID0gJ2dyZWNhcHRjaGEnO1xuXG4gICAgLyoqXG4gICAgKiBOYW1lIG9mIHRoZSBnbG9iYWwgY2FsbGJhY2tcbiAgICAqL1xuICAgIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkxvYWRDYWxsYmFja1Byb3BlcnR5ID0gJ25neF9jYXB0Y2hhX29ubG9hZF9jYWxsYmFjayc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZ2xvYmFsRG9tYWluOiBzdHJpbmcgPSAncmVjYXB0Y2hhLm5ldCc7XG5cbiAgICBwcm90ZWN0ZWQgcmVhZG9ubHkgZGVmYXVsdERvbWFpbjogc3RyaW5nID0gJ2dvb2dsZS5jb20nO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgKSB7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDYXB0Y2hhU2NyaXB0KHVzZUdsb2JhbERvbWFpbjogYm9vbGVhbiwgcmVuZGVyOiBzdHJpbmcsIG9uTG9hZDogKGdyZWNhcHRjaGE6IGFueSkgPT4gdm9pZCwgbGFuZ3VhZ2U/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuZ3JlY2FwdGNoYVNjcmlwdExvYWRlZCgpKSB7XG4gICAgICAgICAgICAvLyByZWNhcHRjaGEgc2NyaXB0IGlzIGFscmVhZHkgbG9hZGVkXG4gICAgICAgICAgICAvLyBqdXN0IGNhbGwgdGhlIGNhbGxiYWNrXG4gICAgICAgICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBvbkxvYWQod2luZG93W3RoaXMud2luZG93R3JlY2FwdGNoYV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBuZWVkIHRvIHBhdGNoIHRoZSBjYWxsYmFjayB0aHJvdWdoIGdsb2JhbCB2YXJpYWJsZSwgb3RoZXJ3aXNlIGNhbGxiYWNrIGlzIG5vdCBhY2Nlc3NpYmxlXG4gICAgICAgIC8vIG5vdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Fbm5nYWdlL25neC1jYXB0Y2hhL2lzc3Vlcy8yXG4gICAgICAgIHdpbmRvd1t0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHldID0gPGFueT4oKCkgPT4gdGhpcy56b25lLnJ1bihcbiAgICAgICAgICAgIG9uTG9hZC5iaW5kKHRoaXMsIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdKVxuICAgICAgICApKTtcblxuICAgICAgICAvLyBwcmVwYXJlIHNjcmlwdCBlbGVtXG4gICAgICAgIGNvbnN0IHNjcmlwdEVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0RWxlbS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgc2NyaXB0RWxlbS5zcmMgPSB0aGlzLmdldENhcHRjaGFTY3JpcHRVcmwodXNlR2xvYmFsRG9tYWluLCByZW5kZXIsIGxhbmd1YWdlKTtcbiAgICAgICAgc2NyaXB0RWxlbS5hc3luYyA9IHRydWU7XG4gICAgICAgIHNjcmlwdEVsZW0uZGVmZXIgPSB0cnVlO1xuXG4gICAgICAgIC8vIGFkZCBzY3JpcHQgdG8gaGVhZGVyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0RWxlbSk7XG4gICAgfVxuXG4gICAgY2xlYW51cCgpOiB2b2lkIHtcbiAgICAgICAgd2luZG93W3RoaXMud2luZG93T25Mb2FkQ2FsbGJhY2tQcm9wZXJ0eV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyBpZiBnb29nbGUgcmVjYXB0Y2hhIHNjcmlwdCBpcyBhdmFpbGFibGUgYW5kIHJlYWR5IHRvIGJlIHVzZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGdyZWNhcHRjaGFTY3JpcHRMb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh3aW5kb3dbdGhpcy53aW5kb3dPbkxvYWRDYWxsYmFja1Byb3BlcnR5XSAmJiB3aW5kb3dbdGhpcy53aW5kb3dHcmVjYXB0Y2hhXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEdldHMgbGFuZ3VhZ2UgcGFyYW0gdXNlZCBpbiBzY3JpcHQgdXJsXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRMYW5ndWFnZVBhcmFtKGhsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKCFobCkge1xuICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAmaGw9JHtobH1gO1xuICAgIH1cblxuICAgIC8qKlxuICAgICogVXJsIHRvIGdvb2dsZSBhcGkgc2NyaXB0XG4gICAgKi9cbiAgICBwcml2YXRlIGdldENhcHRjaGFTY3JpcHRVcmwodXNlR2xvYmFsRG9tYWluOiBib29sZWFuLCByZW5kZXI6IHN0cmluZywgbGFuZ3VhZ2U/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBkb21haW4gPSB1c2VHbG9iYWxEb21haW4gPyB0aGlzLmdsb2JhbERvbWFpbiA6IHRoaXMuZGVmYXVsdERvbWFpbjtcblxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIHJldHVybiBgaHR0cHM6Ly93d3cuJHtkb21haW59L3JlY2FwdGNoYS9hcGkuanM/b25sb2FkPSR7dGhpcy53aW5kb3dPbkxvYWRDYWxsYmFja1Byb3BlcnR5fSZyZW5kZXI9JHtyZW5kZXJ9JHt0aGlzLmdldExhbmd1YWdlUGFyYW0obGFuZ3VhZ2UpfWA7XG4gICAgfVxuXG59XG4iXX0=