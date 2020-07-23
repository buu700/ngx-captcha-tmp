/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/invisible-recaptcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ElementRef, forwardRef, Injector, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
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
export { InvisibleReCaptchaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXNpYmxlLXJlY2FwdGNoYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ludmlzaWJsZS1yZWNhcHRjaGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixRQUFRLEVBQ1IsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBRVQsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFcEU7SUFZaUQsK0NBQXNCO0lBMEJyRSxxQ0FDWSxRQUFtQixFQUNuQixJQUFZLEVBQ1osUUFBa0IsRUFDbEIsYUFBNEI7UUFKeEMsWUFNRSxrQkFBTSxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsU0FDL0M7UUFOVyxjQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFVBQUksR0FBSixJQUFJLENBQVE7UUFDWixjQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLG1CQUFhLEdBQWIsYUFBYSxDQUFlOzs7O1FBekJyQixVQUFJLEdBQUcsV0FBVyxDQUFDOzs7O1FBSzdCLFdBQUssR0FBcUIsT0FBTyxDQUFDOzs7O1FBS2xDLFdBQUssR0FBNEMsYUFBYSxDQUFDO1FBUzlELG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQzs7SUFTMUUsQ0FBQzs7Ozs7SUFFRCxpREFBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsaUJBQU0sV0FBVyxZQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2Q0FBTzs7OztJQUFQO1FBQUEsaUJBR0M7UUFGQyxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLEVBQXpDLENBQXlDLEVBQUMsQ0FBQztJQUMvRSxDQUFDOzs7OztJQUVTLDBEQUFvQjs7OztJQUE5QjtJQUNBLENBQUM7SUFFRDs7TUFFRTs7Ozs7O0lBQ1EsMERBQW9COzs7OztJQUE5QjtRQUFBLGlCQVlDO1FBWEMsT0FBTztZQUNMLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTztZQUN2QixVQUFVOzs7O1lBQUUsVUFBQyxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUE3QixDQUE2QixFQUFDLEVBQWxELENBQWtELENBQUE7WUFDNUUsa0JBQWtCOzs7WUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxjQUFNLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixFQUFFLEVBQTNCLENBQTJCLEVBQUMsRUFBaEQsQ0FBZ0QsQ0FBQTtZQUMxRSxnQkFBZ0I7OztZQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBMUIsQ0FBMEIsRUFBQyxFQUEvQyxDQUErQyxDQUFBO1lBQ3ZFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNqQixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7U0FDcEIsQ0FBQztJQUNKLENBQUM7O2dCQTdFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsUUFBUSxFQUFFLHFDQUNzQjtvQkFDaEMsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDJCQUEyQixFQUEzQixDQUEyQixFQUFDOzRCQUMxRCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjtpQkFDRjs7OztnQkFyQkMsU0FBUztnQkFGVCxNQUFNO2dCQUZOLFFBQVE7Z0JBV0QsYUFBYTs7O3dCQXlCbkIsS0FBSzt3QkFLTCxLQUFLO3FCQUtMLEtBQUs7cUNBRUwsU0FBUyxTQUFDLG9CQUFvQixFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE4Q3BELGtDQUFDO0NBQUEsQUFoRkQsQ0FZaUQsc0JBQXNCLEdBb0V0RTtTQXBFWSwyQkFBMkI7Ozs7Ozs7SUFLdEMsMkNBQXNDOzs7OztJQUt0Qyw0Q0FBMkM7Ozs7O0lBSzNDLDRDQUF3RTs7Ozs7SUFLeEUseUNBQW9COztJQUVwQix5REFBbUY7Ozs7O0lBRW5GLG9EQUEwRTs7Ozs7SUFHeEUsK0NBQTZCOzs7OztJQUM3QiwyQ0FBc0I7Ozs7O0lBQ3RCLCtDQUE0Qjs7Ozs7SUFDNUIsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVDYXB0Y2hhVHlwZSB9IGZyb20gJy4uL21vZGVscy9yZWNhcHRjaGEtdHlwZS5lbnVtJztcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLXJlY2FwdGNoYS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtaW52aXNpYmxlLXJlY2FwdGNoYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2NhcHRjaGFXcmFwcGVyRWxlbT48L2Rpdj5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEludmlzaWJsZVJlQ2FwdGNoYUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIFRoaXMgc2l6ZSByZXByZXNlbnRpbmcgaW52aXNpYmxlIGNhcHRjaGFcbiAgICovXG4gIHByb3RlY3RlZCByZWFkb25seSBzaXplID0gJ2ludmlzaWJsZSc7XG5cbiAgLyoqXG4gICAqIFRoZW1lXG4gICAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyA9ICdsaWdodCc7XG5cbiAgLyoqXG4gICAqIEJhZGdlXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZTogJ2JvdHRvbXJpZ2h0JyB8ICdib3R0b21sZWZ0JyB8ICdpbmxpbmUnID0gJ2JvdHRvbXJpZ2h0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29kZS4gQXV0by1kZXRlY3RzIHRoZSB1c2VyJ3MgbGFuZ3VhZ2UgaWYgdW5zcGVjaWZpZWQuXG4gICAqL1xuICBASW5wdXQoKSBobDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhcHRjaGFXcmFwcGVyRWxlbScsIHsgc3RhdGljOiBmYWxzZSB9KSBjYXB0Y2hhV3JhcHBlckVsZW06IEVsZW1lbnRSZWY7XG5cbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLkludmlzaWJsZVJlQ2FwdGNoYTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIHpvbmUsIGluamVjdG9yLCBzY3JpcHRTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgaW52b2tlIHRoZSByZUNBUFRDSEEgY2hlY2suIFVzZWQgaWYgdGhlIGludmlzaWJsZSByZUNBUFRDSEEgaXMgb24gYSBkaXYgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICovXG4gIGV4ZWN1dGUoKTogdm9pZCB7XG4gICAgLy8gZXhlY3V0ZSBjYXB0Y2hhXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMucmVDYXB0Y2hhQXBpLmV4ZWN1dGUodGhpcy5jYXB0Y2hhSWQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYXB0Y2hhU3BlY2lmaWNTZXR1cCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcbiAgKi9cbiAgcHJvdGVjdGVkIGdldENhcHRjaGFQcm9wZXJ0aWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzaXRla2V5JzogdGhpcy5zaXRlS2V5LFxuICAgICAgJ2NhbGxiYWNrJzogKHJlc3BvbnNlKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuaGFuZGxlQ2FsbGJhY2socmVzcG9uc2UpKSxcbiAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrKCkpLFxuICAgICAgJ2Vycm9yLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUVycm9yQ2FsbGJhY2soKSksXG4gICAgICAnYmFkZ2UnOiB0aGlzLmJhZGdlLFxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4LFxuICAgICAgJ3NpemUnOiB0aGlzLnNpemUsXG4gICAgICAndGhlbWUnOiB0aGlzLnRoZW1lXG4gICAgfTtcbiAgfVxuXG5cbn1cblxuIl19