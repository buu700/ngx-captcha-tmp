/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
export class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
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
    registerCaptchaScript(useGlobalDomain, render, onLoad, language) {
        if (this.grecaptchaScriptLoaded()) {
            // recaptcha script is already loaded
            // just call the callback
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onLoad(window[this.windowGrecaptcha]);
            }));
            return;
        }
        // we need to patch the callback through global variable, otherwise callback is not accessible
        // note: https://github.com/Enngage/ngx-captcha/issues/2
        window[this.windowOnLoadCallbackProperty] = (/** @type {?} */ (((/**
         * @return {?}
         */
        () => this.zone.run(onLoad.bind(this, window[this.windowGrecaptcha]))))));
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.innerHTML = '';
        scriptElem.src = this.getCaptchaScriptUrl(useGlobalDomain, render, language);
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @return {?}
     */
    cleanup() {
        window[this.windowOnLoadCallbackProperty] = undefined;
        window[this.windowGrecaptcha] = undefined;
    }
    /**
     * Indicates if google recaptcha script is available and ready to be used
     * @private
     * @return {?}
     */
    grecaptchaScriptLoaded() {
        if (window[this.windowOnLoadCallbackProperty] && window[this.windowGrecaptcha]) {
            return true;
        }
        return false;
    }
    /**
     * Gets language param used in script url
     * @private
     * @param {?=} hl
     * @return {?}
     */
    getLanguageParam(hl) {
        if (!hl) {
            return '';
        }
        return `&hl=${hl}`;
    }
    /**
     * Url to google api script
     * @private
     * @param {?} useGlobalDomain
     * @param {?} render
     * @param {?=} language
     * @return {?}
     */
    getCaptchaScriptUrl(useGlobalDomain, render, language) {
        /** @type {?} */
        const domain = useGlobalDomain ? this.globalDomain : this.defaultDomain;
        // tslint:disable-next-line:max-line-length
        return `https://www.${domain}/recaptcha/api.js?onload=${this.windowOnLoadCallbackProperty}&render=${render}${this.getLanguageParam(language)}`;
    }
}
ScriptService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBS25ELE1BQU0sT0FBTyxhQUFhOzs7O0lBZ0J0QixZQUNjLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFROzs7O1FBWlAscUJBQWdCLEdBQUcsWUFBWSxDQUFDOzs7O1FBS2hDLGlDQUE0QixHQUFHLDZCQUE2QixDQUFDO1FBRTdELGlCQUFZLEdBQVcsZUFBZSxDQUFDO1FBRXZDLGtCQUFhLEdBQVcsWUFBWSxDQUFDO0lBS3hELENBQUM7Ozs7Ozs7O0lBRUQscUJBQXFCLENBQUMsZUFBd0IsRUFBRSxNQUFjLEVBQUUsTUFBaUMsRUFBRSxRQUFpQjtRQUNoSCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFO1lBQy9CLHFDQUFxQztZQUNyQyx5QkFBeUI7WUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2YsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzFDLENBQUMsRUFBQyxDQUFDO1lBQ0gsT0FBTztTQUNWO1FBRUQsOEZBQThGO1FBQzlGLHdEQUF3RDtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLEdBQUcsbUJBQUs7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FDbkQsRUFBQyxFQUFBLENBQUM7OztjQUdHLFVBQVUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUNuRCxVQUFVLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUMxQixVQUFVLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzdFLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBRXhCLHVCQUF1QjtRQUN2QixRQUFRLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUN0RCxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsU0FBUyxDQUFDO0lBQzlDLENBQUM7Ozs7OztJQUtPLHNCQUFzQjtRQUMxQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDNUUsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFLTyxnQkFBZ0IsQ0FBQyxFQUFXO1FBQ2hDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDTCxPQUFPLEVBQUUsQ0FBQztTQUNiO1FBRUQsT0FBTyxPQUFPLEVBQUUsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7Ozs7OztJQUtPLG1CQUFtQixDQUFDLGVBQXdCLEVBQUUsTUFBYyxFQUFFLFFBQWlCOztjQUM3RSxNQUFNLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYTtRQUV2RSwyQ0FBMkM7UUFDM0MsT0FBTyxlQUFlLE1BQU0sNEJBQTRCLElBQUksQ0FBQyw0QkFBNEIsV0FBVyxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbkosQ0FBQzs7O1lBbkZKLFVBQVU7Ozs7WUFKVSxNQUFNOzs7Ozs7OztJQVV2Qix5Q0FBbUQ7Ozs7OztJQUtuRCxxREFBZ0Y7Ozs7O0lBRWhGLHFDQUEwRDs7Ozs7SUFFMUQsc0NBQXdEOzs7OztJQUdwRCw2QkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZGVjbGFyZSB2YXIgZG9jdW1lbnQ6IGFueTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcmlwdFNlcnZpY2Uge1xuXG4gICAgLyoqXG4gICAgICogTmFtZSBvZiB0aGUgZ2xvYmFsIGdvb2dsZSByZWNhcHRjaGEgc2NyaXB0XG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHdpbmRvd0dyZWNhcHRjaGEgPSAnZ3JlY2FwdGNoYSc7XG5cbiAgICAvKipcbiAgICAqIE5hbWUgb2YgdGhlIGdsb2JhbCBjYWxsYmFja1xuICAgICovXG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IHdpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHkgPSAnbmd4X2NhcHRjaGFfb25sb2FkX2NhbGxiYWNrJztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBnbG9iYWxEb21haW46IHN0cmluZyA9ICdyZWNhcHRjaGEubmV0JztcblxuICAgIHByb3RlY3RlZCByZWFkb25seSBkZWZhdWx0RG9tYWluOiBzdHJpbmcgPSAnZ29vZ2xlLmNvbSc7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICApIHtcbiAgICB9XG5cbiAgICByZWdpc3RlckNhcHRjaGFTY3JpcHQodXNlR2xvYmFsRG9tYWluOiBib29sZWFuLCByZW5kZXI6IHN0cmluZywgb25Mb2FkOiAoZ3JlY2FwdGNoYTogYW55KSA9PiB2b2lkLCBsYW5ndWFnZT86IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5ncmVjYXB0Y2hhU2NyaXB0TG9hZGVkKCkpIHtcbiAgICAgICAgICAgIC8vIHJlY2FwdGNoYSBzY3JpcHQgaXMgYWxyZWFkeSBsb2FkZWRcbiAgICAgICAgICAgIC8vIGp1c3QgY2FsbCB0aGUgY2FsbGJhY2tcbiAgICAgICAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIG9uTG9hZCh3aW5kb3dbdGhpcy53aW5kb3dHcmVjYXB0Y2hhXSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcGF0Y2ggdGhlIGNhbGxiYWNrIHRocm91Z2ggZ2xvYmFsIHZhcmlhYmxlLCBvdGhlcndpc2UgY2FsbGJhY2sgaXMgbm90IGFjY2Vzc2libGVcbiAgICAgICAgLy8gbm90ZTogaHR0cHM6Ly9naXRodWIuY29tL0VubmdhZ2Uvbmd4LWNhcHRjaGEvaXNzdWVzLzJcbiAgICAgICAgd2luZG93W3RoaXMud2luZG93T25Mb2FkQ2FsbGJhY2tQcm9wZXJ0eV0gPSA8YW55PigoKSA9PiB0aGlzLnpvbmUucnVuKFxuICAgICAgICAgICAgb25Mb2FkLmJpbmQodGhpcywgd2luZG93W3RoaXMud2luZG93R3JlY2FwdGNoYV0pXG4gICAgICAgICkpO1xuXG4gICAgICAgIC8vIHByZXBhcmUgc2NyaXB0IGVsZW1cbiAgICAgICAgY29uc3Qgc2NyaXB0RWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHRFbGVtLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBzY3JpcHRFbGVtLnNyYyA9IHRoaXMuZ2V0Q2FwdGNoYVNjcmlwdFVybCh1c2VHbG9iYWxEb21haW4sIHJlbmRlciwgbGFuZ3VhZ2UpO1xuICAgICAgICBzY3JpcHRFbGVtLmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgc2NyaXB0RWxlbS5kZWZlciA9IHRydWU7XG5cbiAgICAgICAgLy8gYWRkIHNjcmlwdCB0byBoZWFkZXJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHRFbGVtKTtcbiAgICB9XG5cbiAgICBjbGVhbnVwKCk6IHZvaWQge1xuICAgICAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkxvYWRDYWxsYmFja1Byb3BlcnR5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgd2luZG93W3RoaXMud2luZG93R3JlY2FwdGNoYV0gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIGlmIGdvb2dsZSByZWNhcHRjaGEgc2NyaXB0IGlzIGF2YWlsYWJsZSBhbmQgcmVhZHkgdG8gYmUgdXNlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZ3JlY2FwdGNoYVNjcmlwdExvYWRlZCgpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHdpbmRvd1t0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHldICYmIHdpbmRvd1t0aGlzLndpbmRvd0dyZWNhcHRjaGFdKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR2V0cyBsYW5ndWFnZSBwYXJhbSB1c2VkIGluIHNjcmlwdCB1cmxcbiAgICAgKi9cbiAgICBwcml2YXRlIGdldExhbmd1YWdlUGFyYW0oaGw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgICAgICBpZiAoIWhsKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCZobD0ke2hsfWA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBVcmwgdG8gZ29vZ2xlIGFwaSBzY3JpcHRcbiAgICAqL1xuICAgIHByaXZhdGUgZ2V0Q2FwdGNoYVNjcmlwdFVybCh1c2VHbG9iYWxEb21haW46IGJvb2xlYW4sIHJlbmRlcjogc3RyaW5nLCBsYW5ndWFnZT86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgICAgIGNvbnN0IGRvbWFpbiA9IHVzZUdsb2JhbERvbWFpbiA/IHRoaXMuZ2xvYmFsRG9tYWluIDogdGhpcy5kZWZhdWx0RG9tYWluO1xuXG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgcmV0dXJuIGBodHRwczovL3d3dy4ke2RvbWFpbn0vcmVjYXB0Y2hhL2FwaS5qcz9vbmxvYWQ9JHt0aGlzLndpbmRvd09uTG9hZENhbGxiYWNrUHJvcGVydHl9JnJlbmRlcj0ke3JlbmRlcn0ke3RoaXMuZ2V0TGFuZ3VhZ2VQYXJhbShsYW5ndWFnZSl9YDtcbiAgICB9XG5cbn1cbiJdfQ==