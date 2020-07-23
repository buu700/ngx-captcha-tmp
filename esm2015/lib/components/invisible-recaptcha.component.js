/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/invisible-recaptcha.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, forwardRef, Injector, Input, NgZone, Renderer2, ViewChild, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
export class InvisibleReCaptchaComponent extends BaseReCaptchaComponent {
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
         * This size representing invisible captcha
         */
        this.size = 'invisible';
        /**
         * Theme
         */
        this.theme = 'light';
        /**
         * Badge
         */
        this.badge = 'bottomright';
        this.recaptchaType = ReCaptchaType.InvisibleReCaptcha;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
    }
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     * @return {?}
     */
    execute() {
        // execute captcha
        this.zone.runOutsideAngular((/**
         * @return {?}
         */
        () => this.reCaptchaApi.execute(this.captchaId)));
    }
    /**
     * @protected
     * @return {?}
     */
    captchaSpecificSetup() {
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
            'badge': this.badge,
            'type': this.type,
            'tabindex': this.tabIndex,
            'size': this.size,
            'theme': this.theme
        };
    }
}
InvisibleReCaptchaComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-invisible-recaptcha',
                template: `
  <div #captchaWrapperElem></div>`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => InvisibleReCaptchaComponent)),
                        multi: true,
                    }
                ]
            }] }
];
/** @nocollapse */
InvisibleReCaptchaComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: Injector },
    { type: ScriptService }
];
InvisibleReCaptchaComponent.propDecorators = {
    theme: [{ type: Input }],
    badge: [{ type: Input }],
    hl: [{ type: Input }],
    captchaWrapperElem: [{ type: ViewChild, args: ['captchaWrapperElem', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52aXNpYmxlLXJlY2FwdGNoYS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2ludmlzaWJsZS1yZWNhcHRjaGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLFFBQVEsRUFDUixLQUFLLEVBQ0wsTUFBTSxFQUVOLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQWNwRSxNQUFNLE9BQU8sMkJBQTRCLFNBQVEsc0JBQXNCOzs7Ozs7O0lBMEJyRSxZQUNZLFFBQW1CLEVBQ25CLElBQVksRUFDWixRQUFrQixFQUNsQixhQUE0QjtRQUV0QyxLQUFLLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFMckMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTs7OztRQXpCckIsU0FBSSxHQUFHLFdBQVcsQ0FBQzs7OztRQUs3QixVQUFLLEdBQXFCLE9BQU8sQ0FBQzs7OztRQUtsQyxVQUFLLEdBQTRDLGFBQWEsQ0FBQztRQVM5RCxrQkFBYSxHQUFrQixhQUFhLENBQUMsa0JBQWtCLENBQUM7SUFTMUUsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQUtELE9BQU87UUFDTCxrQkFBa0I7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUI7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxDQUFDO0lBQy9FLENBQUM7Ozs7O0lBRVMsb0JBQW9CO0lBQzlCLENBQUM7Ozs7OztJQUtTLG9CQUFvQjtRQUM1QixPQUFPO1lBQ0wsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3ZCLFVBQVU7Ozs7WUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFDLENBQUE7WUFDNUUsa0JBQWtCOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFDLENBQUE7WUFDMUUsZ0JBQWdCOzs7WUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFDLENBQUE7WUFDdkUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2pCLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSztTQUNwQixDQUFDO0lBQ0osQ0FBQzs7O1lBN0VGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxRQUFRLEVBQUU7a0NBQ3NCO2dCQUNoQyxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywyQkFBMkIsRUFBQzt3QkFDMUQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjs7OztZQXJCQyxTQUFTO1lBRlQsTUFBTTtZQUZOLFFBQVE7WUFXRCxhQUFhOzs7b0JBeUJuQixLQUFLO29CQUtMLEtBQUs7aUJBS0wsS0FBSztpQ0FFTCxTQUFTLFNBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7Ozs7OztJQWpCbEQsMkNBQXNDOzs7OztJQUt0Qyw0Q0FBMkM7Ozs7O0lBSzNDLDRDQUF3RTs7Ozs7SUFLeEUseUNBQW9COztJQUVwQix5REFBbUY7Ozs7O0lBRW5GLG9EQUEwRTs7Ozs7SUFHeEUsK0NBQTZCOzs7OztJQUM3QiwyQ0FBc0I7Ozs7O0lBQ3RCLCtDQUE0Qjs7Ozs7SUFDNUIsb0RBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBJbmplY3RvcixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgUmVDYXB0Y2hhVHlwZSB9IGZyb20gJy4uL21vZGVscy9yZWNhcHRjaGEtdHlwZS5lbnVtJztcbmltcG9ydCB7IFNjcmlwdFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zY3JpcHQuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlUmVDYXB0Y2hhQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLXJlY2FwdGNoYS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtaW52aXNpYmxlLXJlY2FwdGNoYScsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2NhcHRjaGFXcmFwcGVyRWxlbT48L2Rpdj5gLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEludmlzaWJsZVJlQ2FwdGNoYUNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW52aXNpYmxlUmVDYXB0Y2hhQ29tcG9uZW50IGV4dGVuZHMgQmFzZVJlQ2FwdGNoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgLyoqXG4gICAqIFRoaXMgc2l6ZSByZXByZXNlbnRpbmcgaW52aXNpYmxlIGNhcHRjaGFcbiAgICovXG4gIHByb3RlY3RlZCByZWFkb25seSBzaXplID0gJ2ludmlzaWJsZSc7XG5cbiAgLyoqXG4gICAqIFRoZW1lXG4gICAqL1xuICBASW5wdXQoKSB0aGVtZTogJ2RhcmsnIHwgJ2xpZ2h0JyA9ICdsaWdodCc7XG5cbiAgLyoqXG4gICAqIEJhZGdlXG4gICAqL1xuICBASW5wdXQoKSBiYWRnZTogJ2JvdHRvbXJpZ2h0JyB8ICdib3R0b21sZWZ0JyB8ICdpbmxpbmUnID0gJ2JvdHRvbXJpZ2h0JztcblxuICAvKipcbiAgICogTGFuZ3VhZ2UgY29kZS4gQXV0by1kZXRlY3RzIHRoZSB1c2VyJ3MgbGFuZ3VhZ2UgaWYgdW5zcGVjaWZpZWQuXG4gICAqL1xuICBASW5wdXQoKSBobDogc3RyaW5nO1xuXG4gIEBWaWV3Q2hpbGQoJ2NhcHRjaGFXcmFwcGVyRWxlbScsIHsgc3RhdGljOiBmYWxzZSB9KSBjYXB0Y2hhV3JhcHBlckVsZW06IEVsZW1lbnRSZWY7XG5cbiAgcHJvdGVjdGVkIHJlY2FwdGNoYVR5cGU6IFJlQ2FwdGNoYVR5cGUgPSBSZUNhcHRjaGFUeXBlLkludmlzaWJsZVJlQ2FwdGNoYTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIocmVuZGVyZXIsIHpvbmUsIGluamVjdG9yLCBzY3JpcHRTZXJ2aWNlKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uQ2hhbmdlcyhjaGFuZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm9ncmFtYXRpY2FsbHkgaW52b2tlIHRoZSByZUNBUFRDSEEgY2hlY2suIFVzZWQgaWYgdGhlIGludmlzaWJsZSByZUNBUFRDSEEgaXMgb24gYSBkaXYgaW5zdGVhZCBvZiBhIGJ1dHRvbi5cbiAgICovXG4gIGV4ZWN1dGUoKTogdm9pZCB7XG4gICAgLy8gZXhlY3V0ZSBjYXB0Y2hhXG4gICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHRoaXMucmVDYXB0Y2hhQXBpLmV4ZWN1dGUodGhpcy5jYXB0Y2hhSWQpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBjYXB0Y2hhU3BlY2lmaWNTZXR1cCgpOiB2b2lkIHtcbiAgfVxuXG4gIC8qKlxuICAqIEdldHMgcmVDYXB0Y2hhIHByb3BlcnRpZXNcbiAgKi9cbiAgcHJvdGVjdGVkIGdldENhcHRjaGFQcm9wZXJ0aWVzKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzaXRla2V5JzogdGhpcy5zaXRlS2V5LFxuICAgICAgJ2NhbGxiYWNrJzogKHJlc3BvbnNlKSA9PiB0aGlzLnpvbmUucnVuKCgpID0+IHRoaXMuaGFuZGxlQ2FsbGJhY2socmVzcG9uc2UpKSxcbiAgICAgICdleHBpcmVkLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUV4cGlyZUNhbGxiYWNrKCkpLFxuICAgICAgJ2Vycm9yLWNhbGxiYWNrJzogKCkgPT4gdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmhhbmRsZUVycm9yQ2FsbGJhY2soKSksXG4gICAgICAnYmFkZ2UnOiB0aGlzLmJhZGdlLFxuICAgICAgJ3R5cGUnOiB0aGlzLnR5cGUsXG4gICAgICAndGFiaW5kZXgnOiB0aGlzLnRhYkluZGV4LFxuICAgICAgJ3NpemUnOiB0aGlzLnNpemUsXG4gICAgICAndGhlbWUnOiB0aGlzLnRoZW1lXG4gICAgfTtcbiAgfVxuXG5cbn1cblxuIl19