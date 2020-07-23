/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/recaptcha-2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, Injector, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
export class ReCaptcha2Component extends BaseReCaptchaComponent {
    /**
     * @param {?} renderer
     * @param {?} zone
     * @param {?} injector
     * @param {?} scriptService
     */
    constructor(renderer, zone, injector, scriptService) {
        super(renderer, zone, injector, scriptService);
        this.renderer = renderer;
        this.zone = zone;
        this.injector = injector;
        this.scriptService = scriptService;
        /**
         * Name of the global expire callback
         */
        this.windowOnErrorCallbackProperty = 'ngx_captcha_error_callback';
        /**
         * Name of the global error callback
         */
        this.windowOnExpireCallbackProperty = 'ngx_captcha_expire_callback';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Size
         */
        this.size = 'normal';
        this.recaptchaType = ReCaptchaType.ReCaptcha2;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        window[this.windowOnErrorCallbackProperty] = {};
        window[this.windowOnExpireCallbackProperty] = {};
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
        this.registerCallbacks();
    }
    /**
     * Gets reCaptcha properties
     * @protected
     * @return {?}
     */
    getCaptchaProperties() {
        return {
            'sitekey': this.siteKey,
            'callback': (/**
             * @param {?} response
             * @return {?}
             */
            (response) => this.zone.run((/**
             * @return {?}
             */
            () => this.handleCallback(response)))),
            'expired-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleExpireCallback()))),
            'error-callback': (/**
             * @return {?}
             */
            () => this.zone.run((/**
             * @return {?}
             */
            () => this.handleErrorCallback()))),
            'theme': this.theme,
            'type': this.type,
            'size': this.size,
            'tabindex': this.tabIndex
        };
    }
    /**
     * Registers global callbacks
     * @private
     * @return {?}
     */
    registerCallbacks() {
        window[this.windowOnErrorCallbackProperty] = super.handleErrorCallback.bind(this);
        window[this.windowOnExpireCallbackProperty] = super.handleExpireCallback.bind(this);
    }
}
ReCaptcha2Component.decorators = [
    { type: Component, args: [{
                selector: 'ngx-recaptcha2',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => ReCaptcha2Component)),
                        multi: true,
                    }
                ]
            }] }
];
/** @nocollapse */
ReCaptcha2Component.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: Injector },
    { type: ScriptService }
];
ReCaptcha2Component.propDecorators = {
    theme: [{ type: Input }],
    size: [{ type: Input }],
    hl: [{ type: Input }],
    captchaWrapperElem: [{ type: ViewChild, args: ['captchaWrapperElem', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhLTIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNhcHRjaGEvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9yZWNhcHRjaGEtMi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsUUFBUSxFQUNSLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUVULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzNELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBY3BFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxzQkFBc0I7Ozs7Ozs7SUErQjdELFlBQ1ksUUFBbUIsRUFDbkIsSUFBWSxFQUNaLFFBQWtCLEVBQ2xCLGFBQTRCO1FBRXRDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUxyQyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGtCQUFhLEdBQWIsYUFBYSxDQUFlOzs7O1FBOUJyQixrQ0FBNkIsR0FBRyw0QkFBNEIsQ0FBQzs7OztRQUs3RCxtQ0FBOEIsR0FBRyw2QkFBNkIsQ0FBQzs7OztRQUt6RSxVQUFLLEdBQXFCLE9BQU8sQ0FBQzs7OztRQUtsQyxTQUFJLEdBQXlCLFFBQVEsQ0FBQztRQVNyQyxrQkFBYSxHQUFrQixhQUFhLENBQUMsVUFBVSxDQUFDO0lBU2xFLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbkQsQ0FBQzs7Ozs7SUFFUyxvQkFBb0I7UUFDNUIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7Ozs7O0lBS1Msb0JBQW9CO1FBQzVCLE9BQU87WUFDTCxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDdkIsVUFBVTs7OztZQUFFLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQTtZQUM1RSxrQkFBa0I7OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUMsQ0FBQTtZQUMxRSxnQkFBZ0I7OztZQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUMsQ0FBQTtZQUN2RSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUtPLGlCQUFpQjtRQUN2QixNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRixNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLEdBQUcsS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7WUF2RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTtrQ0FDc0I7Z0JBQ2hDLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLG1CQUFtQixFQUFDO3dCQUNsRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOzs7O1lBckJDLFNBQVM7WUFIVCxNQUFNO1lBRk4sUUFBUTtZQVlELGFBQWE7OztvQkE4Qm5CLEtBQUs7bUJBS0wsS0FBSztpQkFLTCxLQUFLO2lDQUVMLFNBQVMsU0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUM7Ozs7Ozs7O0lBdEJqRCw0REFBZ0Y7Ozs7OztJQUtoRiw2REFBa0Y7Ozs7O0lBS2xGLG9DQUEyQzs7Ozs7SUFLM0MsbUNBQStDOzs7OztJQUsvQyxpQ0FBb0I7O0lBRXBCLGlEQUFrRjs7Ozs7SUFFbEYsNENBQWtFOzs7OztJQUdoRSx1Q0FBNkI7Ozs7O0lBQzdCLG1DQUFzQjs7Ozs7SUFDdEIsdUNBQTRCOzs7OztJQUM1Qiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIEluamVjdG9yLFxuICBJbnB1dCxcbiAgTmdab25lLFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IFJlQ2FwdGNoYVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvcmVjYXB0Y2hhLXR5cGUuZW51bSc7XG5pbXBvcnQgeyBTY3JpcHRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2NyaXB0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCB9IGZyb20gJy4vYmFzZS1yZWNhcHRjaGEuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXJlY2FwdGNoYTInLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNjYXB0Y2hhV3JhcHBlckVsZW0+PC9kaXY+YCxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBSZUNhcHRjaGEyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBSZUNhcHRjaGEyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICAvKipcbiAgKiBOYW1lIG9mIHRoZSBnbG9iYWwgZXhwaXJlIGNhbGxiYWNrXG4gICovXG4gIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkVycm9yQ2FsbGJhY2tQcm9wZXJ0eSA9ICduZ3hfY2FwdGNoYV9lcnJvcl9jYWxsYmFjayc7XG5cbiAgLyoqXG4gICogTmFtZSBvZiB0aGUgZ2xvYmFsIGVycm9yIGNhbGxiYWNrXG4gICovXG4gIHByb3RlY3RlZCByZWFkb25seSB3aW5kb3dPbkV4cGlyZUNhbGxiYWNrUHJvcGVydHkgPSAnbmd4X2NhcHRjaGFfZXhwaXJlX2NhbGxiYWNrJztcblxuICAvKipcbiAgICogVGhlbWVcbiAgICovXG4gIEBJbnB1dCgpIHRoZW1lOiAnZGFyaycgfCAnbGlnaHQnID0gJ2xpZ2h0JztcblxuICAvKipcbiAgKiBTaXplXG4gICovXG4gIEBJbnB1dCgpIHNpemU6ICdjb21wYWN0JyB8ICdub3JtYWwnID0gJ25vcm1hbCc7XG5cbiAgLyoqXG4gICAqIExhbmd1YWdlIGNvZGUuIEF1dG8tZGV0ZWN0cyB0aGUgdXNlcidzIGxhbmd1YWdlIGlmIHVuc3BlY2lmaWVkLlxuICAgKi9cbiAgQElucHV0KCkgaGw6IHN0cmluZztcblxuICBAVmlld0NoaWxkKCdjYXB0Y2hhV3JhcHBlckVsZW0nLCB7IHN0YXRpYzogZmFsc2V9KSBjYXB0Y2hhV3JhcHBlckVsZW06IEVsZW1lbnRSZWY7XG5cbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLlJlQ2FwdGNoYTI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByb3RlY3RlZCBzY3JpcHRTZXJ2aWNlOiBTY3JpcHRTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcihyZW5kZXJlciwgem9uZSwgaW5qZWN0b3IsIHNjcmlwdFNlcnZpY2UpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHN1cGVyLm5nT25DaGFuZ2VzKGNoYW5nZXMpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgd2luZG93W3RoaXMud2luZG93T25FcnJvckNhbGxiYWNrUHJvcGVydHldID0ge307XG4gICAgd2luZG93W3RoaXMud2luZG93T25FeHBpcmVDYWxsYmFja1Byb3BlcnR5XSA9IHt9O1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhcHRjaGFTcGVjaWZpY1NldHVwKCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJDYWxsYmFja3MoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHJlQ2FwdGNoYSBwcm9wZXJ0aWVzXG4gICovXG4gIHByb3RlY3RlZCBnZXRDYXB0Y2hhUHJvcGVydGllcygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICAnc2l0ZWtleSc6IHRoaXMuc2l0ZUtleSxcbiAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUNhbGxiYWNrKHJlc3BvbnNlKSksXG4gICAgICAnZXhwaXJlZC1jYWxsYmFjayc6ICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5oYW5kbGVFeHBpcmVDYWxsYmFjaygpKSxcbiAgICAgICdlcnJvci1jYWxsYmFjayc6ICgpID0+IHRoaXMuem9uZS5ydW4oKCkgPT4gdGhpcy5oYW5kbGVFcnJvckNhbGxiYWNrKCkpLFxuICAgICAgJ3RoZW1lJzogdGhpcy50aGVtZSxcbiAgICAgICd0eXBlJzogdGhpcy50eXBlLFxuICAgICAgJ3NpemUnOiB0aGlzLnNpemUsXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgZ2xvYmFsIGNhbGxiYWNrc1xuICAqL1xuICBwcml2YXRlIHJlZ2lzdGVyQ2FsbGJhY2tzKCk6IHZvaWQge1xuICAgIHdpbmRvd1t0aGlzLndpbmRvd09uRXJyb3JDYWxsYmFja1Byb3BlcnR5XSA9IHN1cGVyLmhhbmRsZUVycm9yQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgICB3aW5kb3dbdGhpcy53aW5kb3dPbkV4cGlyZUNhbGxiYWNrUHJvcGVydHldID0gc3VwZXIuaGFuZGxlRXhwaXJlQ2FsbGJhY2suYmluZCh0aGlzKTtcbiAgfVxufVxuXG4iXX0=