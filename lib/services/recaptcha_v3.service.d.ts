import { NgZone } from '@angular/core';
import { ScriptService } from './script.service';
export declare class ReCaptchaV3Service {
    protected scriptService: ScriptService;
    protected zone: NgZone;
    constructor(scriptService: ScriptService, zone: NgZone);
    /**
     * Executes reCaptcha v3 with given action and passes token via callback. You need to verify
     * this callback in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    execute(siteKey: string, action: string, callback: (token: string) => void, config?: {
        useGlobalDomain: boolean;
    }): void;
    /**
     * Executes reCaptcha v3 with given action and returns token via Promise. You need to verify
     * this token in your backend to get meaningful results.
     *
     * For more information see https://developers.google.com/recaptcha/docs/v3
     *
     * @param siteKey Site key found in your google admin panel
     * @param action Action to log
     */
    executeAsPromise(siteKey: string, action: string, config?: {
        useGlobalDomain: boolean;
    }): Promise<string>;
}
