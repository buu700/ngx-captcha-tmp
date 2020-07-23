/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/recaptcha-2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ElementRef, forwardRef, Injector, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
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
export { ReCaptcha2Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhLTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNhcHRjaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yZWNhcHRjaGEtMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUdOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVwRTtJQVl5Qyx1Q0FBc0I7SUErQjdELDZCQUNZLFFBQW1CLEVBQ25CLElBQVksRUFDWixRQUFrQixFQUNsQixhQUE0QjtRQUp4QyxZQU1FLGtCQUFNLFFBQVEsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLGFBQWEsQ0FBQyxTQUMvQztRQU5XLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsVUFBSSxHQUFKLElBQUksQ0FBUTtRQUNaLGNBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsbUJBQWEsR0FBYixhQUFhLENBQWU7Ozs7UUE5QnJCLG1DQUE2QixHQUFHLDRCQUE0QixDQUFDOzs7O1FBSzdELG9DQUE4QixHQUFHLDZCQUE2QixDQUFDOzs7O1FBS3pFLFdBQUssR0FBcUIsT0FBTyxDQUFDOzs7O1FBS2xDLFVBQUksR0FBeUIsUUFBUSxDQUFDO1FBU3JDLG1CQUFhLEdBQWtCLGFBQWEsQ0FBQyxVQUFVLENBQUM7O0lBU2xFLENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLGlCQUFNLFdBQVcsWUFBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYO1FBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRVMsa0RBQW9COzs7O0lBQTlCO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVEOztNQUVFOzs7Ozs7SUFDUSxrREFBb0I7Ozs7O0lBQTlCO1FBQUEsaUJBV0M7UUFWQyxPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFVBQVU7Ozs7WUFBRSxVQUFDLFFBQVEsSUFBSyxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQTdCLENBQTZCLEVBQUMsRUFBbEQsQ0FBa0QsQ0FBQTtZQUM1RSxrQkFBa0I7OztZQUFFLGNBQU0sT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLGNBQU0sT0FBQSxLQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBM0IsQ0FBMkIsRUFBQyxFQUFoRCxDQUFnRCxDQUFBO1lBQzFFLGdCQUFnQjs7O1lBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUExQixDQUEwQixFQUFDLEVBQS9DLENBQStDLENBQUE7WUFDdkUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzFCLENBQUM7SUFDSixDQUFDO0lBRUQ7O01BRUU7Ozs7OztJQUNNLCtDQUFpQjs7Ozs7SUFBekI7UUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsaUJBQU0sbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xGLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsR0FBRyxpQkFBTSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEYsQ0FBQzs7Z0JBdkZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUscUNBQ3NCO29CQUNoQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLEVBQUM7NEJBQ2xELEtBQUssRUFBRSxJQUFJO3lCQUNaO3FCQUNGO2lCQUNGOzs7O2dCQXJCQyxTQUFTO2dCQUhULE1BQU07Z0JBRk4sUUFBUTtnQkFZRCxhQUFhOzs7d0JBOEJuQixLQUFLO3VCQUtMLEtBQUs7cUJBS0wsS0FBSztxQ0FFTCxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQWlEbkQsMEJBQUM7Q0FBQSxBQXhGRCxDQVl5QyxzQkFBc0IsR0E0RTlEO1NBNUVZLG1CQUFtQjs7Ozs7OztJQUs5Qiw0REFBZ0Y7Ozs7OztJQUtoRiw2REFBa0Y7Ozs7O0lBS2xGLG9DQUEyQzs7Ozs7SUFLM0MsbUNBQStDOzs7OztJQUsvQyxpQ0FBb0I7O0lBRXBCLGlEQUFrRjs7Ozs7SUFFbEYsNENBQWtFOzs7OztJQUdoRSx1Q0FBNkI7Ozs7O0lBQzdCLG1DQUFzQjs7Ozs7SUFDdEIsdUNBQTRCOzs7OztJQUM1Qiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFJlQ2FwdGNoYVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvcmVjYXB0Y2hhLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1yZWNhcHRjaGEuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlY2FwdGNoYTInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjYXB0Y2hhV3JhcHBlckVsZW0+PC9kaXY+YCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZUNhcHRjaGEyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZUNhcHRjaGEyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgKiBOYW1lIG9mIHRoZSBnbG9iYWwgZXhwaXJlIGNhbGxiYWNrXG4gICovXG4gIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eSA9ICduZ3hfY2FwdGNoYV9lcnJvcl9jYWxsYmFjayc7XG5cbiAgLyoqXG4gICogTmFtZSBvZiB0aGUgZ2xvYmFsIGVycm9yIGNhbGxiYWNrXG4gICovXG4gIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkV4cGlyZUNhbGxiYWNrUHJvcGVydHkgPSAnbmd4X2NhcHRjaGFfZXhwaXJlX2NhbGxiYWNrJztcblxuICAvKipcbiAgICogVGhlbWVcbiAgICovXG4gIEBJbnB1dCgpIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnID0gJ2xpZ2h0JztcblxuICAvKipcbiAgKiBTaXplXG4gICovXG4gIEBJbnB1dCgpIHNpemU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvZGUuIEF1dG8tZGV0ZWN0cyB0aGUgdXNlcidzIGxhbmd1YWdlIGlmIHVuc3BlY2lmaWVkLlxuICAgKi9cbiAgQElucHV0KCkgaGw6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdjYXB0Y2hhV3JhcHBlckVsZW0nLCB7IHN0YXRpYzogZmFsc2V9KSBjYXB0Y2hhV3JhcHBlckVsZW06IEVsZW1lbnRSZWY7XG5cbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLlJlQ2FwdGNoYTI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBzY3JpcHRTZXJ2aWNlOiBTY3JpcHRTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlciwgem9uZSwgaW5qZWN0b3IsIHNjcmlwdFNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgd2luZG93W3RoaXMud2luZG93T25FcnJvckNhbGxiYWNrUHJvcGVydHldID0ge307XG4gICAgd2luZG93W3RoaXMud2luZG93T25FeHBpcmVDYWxsYmFja1Byb3BlcnR5XSA9IHt9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhcHRjaGFTcGVjaWZpY1NldHVwKCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFja3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHJlQ2FwdGNoYSBwcm9wZXJ0aWVzXG4gICovXG4gIHByb3RlY3RlZCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnc2l0ZWtleSc6IHRoaXMuc2l0ZUtleSxcbiAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUNhbGxiYWNrKHJlc3BvbnNlKSksXG4gICAgICAnZXhwaXJlZC1jYWxsYmFjayc6ICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5oYW5kbGVFeHBpcmVDYWxsYmFjaygpKSxcbiAgICAgICdlcnJvci1jYWxsYmFjayc6ICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5oYW5kbGVFcnJvckNhbGxiYWNrKCkpLFxuICAgICAgJ3RoZW1lJzogdGhpcy50aGVtZSxcbiAgICAgICd0eXBlJzogdGhpcy50eXBlLFxuICAgICAgJ3NpemUnOiB0aGlzLnNpemUsXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgZ2xvYmFsIGNhbGxiYWNrc1xuICAqL1xuICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2tzKCk6IHZvaWQge1xuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXJyb3JDYWxsYmFja1Byb3BlcnR5XSA9IHN1cGVyLmhhbmRsZUVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkV4cGlyZUNhbGxiYWNrUHJvcGVydHldID0gc3VwZXIuaGFuZGxlRXhwaXJlQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxufVxuXG4iXX0=