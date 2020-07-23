/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/recaptcha_v3.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { ScriptService } from './script.service';
export class ReCaptchaV3Service {
    /**
     * @param {?} scriptService
     * @param {?} zone
     */
    constructor(scriptService, zone) {
        this.scriptService = scriptService;
        this.zone = zone;
    }
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
    execute(siteKey, action, callback, config) {
        this.executeAsPromise(siteKey, action, config).then(callback);
    }
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
    executeAsPromise(siteKey, action, config) {
        return new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            /** @type {?} */
            const useGlobalDomain = config && config.useGlobalDomain ? true : false;
            /** @type {?} */
            const onRegister = (/**
             * @param {?} grecaptcha
             * @return {?}
             */
            grecaptcha => {
                this.zone.runOutsideAngular((/**
                 * @return {?}
                 */
                () => {
                    try {
                        grecaptcha
                            .execute(siteKey, { action })
                            .then((/**
                         * @param {?} token
                         * @return {?}
                         */
                        token => this.zone.run((/**
                         * @return {?}
                         */
                        () => resolve(token)))));
                    }
                    catch (error) {
                        reject(error);
                    }
                }));
            });
            this.scriptService.registerCaptchaScript(useGlobalDomain, siteKey, onRegister);
        }));
    }
}
ReCaptchaV3Service.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ReCaptchaV3Service.ctorParameters = () => [
    { type: ScriptService },
    { type: NgZone }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjYXB0Y2hhX3YzLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2FwdGNoYS8iLCJzb3VyY2VzIjpbImxpYi9zZXJ2aWNlcy9yZWNhcHRjaGFfdjMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdqRCxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQUM3QixZQUFzQixhQUE0QixFQUFZLElBQVk7UUFBcEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQzs7Ozs7Ozs7Ozs7OztJQVc5RSxPQUFPLENBQ0wsT0FBZSxFQUNmLE1BQWMsRUFDZCxRQUFpQyxFQUNqQyxNQUVDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7Ozs7OztJQVdELGdCQUFnQixDQUNkLE9BQWUsRUFDZixNQUFjLEVBQ2QsTUFFQztRQUVELE9BQU8sSUFBSSxPQUFPOzs7OztRQUFDLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxFQUFFOztrQkFDL0IsZUFBZSxHQUFHLE1BQU0sSUFBSSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7O2tCQUVqRSxVQUFVOzs7O1lBQUcsVUFBVSxDQUFDLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCOzs7Z0JBQUMsR0FBRyxFQUFFO29CQUMvQixJQUFJO3dCQUNGLFVBQVU7NkJBQ1AsT0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDOzZCQUM1QixJQUFJOzs7O3dCQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFDLEVBQUMsQ0FBQztxQkFDdkQ7b0JBQUMsT0FBTyxLQUFLLEVBQUU7d0JBQ2QsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUNmO2dCQUNILENBQUMsRUFBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFBO1lBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FDdEMsZUFBZSxFQUNmLE9BQU8sRUFDUCxVQUFVLENBQ1gsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBN0RGLFVBQVU7Ozs7WUFGRixhQUFhO1lBRkQsTUFBTTs7Ozs7OztJQU1iLDJDQUFzQzs7Ozs7SUFBRSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU2NyaXB0U2VydmljZSB9IGZyb20gJy4vc2NyaXB0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVDYXB0Y2hhVjNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNjcmlwdFNlcnZpY2U6IFNjcmlwdFNlcnZpY2UsIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUpIHt9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHJlQ2FwdGNoYSB2MyB3aXRoIGdpdmVuIGFjdGlvbiBhbmQgcGFzc2VzIHRva2VuIHZpYSBjYWxsYmFjay4gWW91IG5lZWQgdG8gdmVyaWZ5XG4gICAqIHRoaXMgY2FsbGJhY2sgaW4geW91ciBiYWNrZW5kIHRvIGdldCBtZWFuaW5nZnVsIHJlc3VsdHMuXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvZG9jcy92M1xuICAgKlxuICAgKiBAcGFyYW0gc2l0ZUtleSBTaXRlIGtleSBmb3VuZCBpbiB5b3VyIGdvb2dsZSBhZG1pbiBwYW5lbFxuICAgKiBAcGFyYW0gYWN0aW9uIEFjdGlvbiB0byBsb2dcbiAgICovXG4gIGV4ZWN1dGUoXG4gICAgc2l0ZUtleTogc3RyaW5nLFxuICAgIGFjdGlvbjogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAodG9rZW46IHN0cmluZykgPT4gdm9pZCxcbiAgICBjb25maWc/OiB7XG4gICAgICB1c2VHbG9iYWxEb21haW46IGJvb2xlYW47XG4gICAgfVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmV4ZWN1dGVBc1Byb21pc2Uoc2l0ZUtleSwgYWN0aW9uLCBjb25maWcpLnRoZW4oY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEV4ZWN1dGVzIHJlQ2FwdGNoYSB2MyB3aXRoIGdpdmVuIGFjdGlvbiBhbmQgcmV0dXJucyB0b2tlbiB2aWEgUHJvbWlzZS4gWW91IG5lZWQgdG8gdmVyaWZ5XG4gICAqIHRoaXMgdG9rZW4gaW4geW91ciBiYWNrZW5kIHRvIGdldCBtZWFuaW5nZnVsIHJlc3VsdHMuXG4gICAqXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvZG9jcy92M1xuICAgKlxuICAgKiBAcGFyYW0gc2l0ZUtleSBTaXRlIGtleSBmb3VuZCBpbiB5b3VyIGdvb2dsZSBhZG1pbiBwYW5lbFxuICAgKiBAcGFyYW0gYWN0aW9uIEFjdGlvbiB0byBsb2dcbiAgICovXG4gIGV4ZWN1dGVBc1Byb21pc2UoXG4gICAgc2l0ZUtleTogc3RyaW5nLFxuICAgIGFjdGlvbjogc3RyaW5nLFxuICAgIGNvbmZpZz86IHtcbiAgICAgIHVzZUdsb2JhbERvbWFpbjogYm9vbGVhbjtcbiAgICB9XG4gICk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHVzZUdsb2JhbERvbWFpbiA9IGNvbmZpZyAmJiBjb25maWcudXNlR2xvYmFsRG9tYWluID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgICBjb25zdCBvblJlZ2lzdGVyID0gZ3JlY2FwdGNoYSA9PiB7XG4gICAgICAgIHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGdyZWNhcHRjaGFcbiAgICAgICAgICAgICAgLmV4ZWN1dGUoc2l0ZUtleSwgeyBhY3Rpb24gfSlcbiAgICAgICAgICAgICAgLnRoZW4odG9rZW4gPT4gdGhpcy56b25lLnJ1bigoKSA9PiByZXNvbHZlKHRva2VuKSkpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICB0aGlzLnNjcmlwdFNlcnZpY2UucmVnaXN0ZXJDYXB0Y2hhU2NyaXB0KFxuICAgICAgICB1c2VHbG9iYWxEb21haW4sXG4gICAgICAgIHNpdGVLZXksXG4gICAgICAgIG9uUmVnaXN0ZXJcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==