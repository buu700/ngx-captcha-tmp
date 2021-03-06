import { ElementRef, Injector, NgZone, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
export declare class InvisibleReCaptchaComponent extends BaseReCaptchaComponent implements OnChanges {
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected injector: Injector;
    protected scriptService: ScriptService;
    /**
     * This size representing invisible captcha
     */
    protected readonly size = "invisible";
    /**
     * Theme
     */
    theme: 'dark' | 'light';
    /**
     * Badge
     */
    badge: 'bottomright' | 'bottomleft' | 'inline';
    /**
     * Language code. Auto-detects the user's language if unspecified.
     */
    hl: string;
    captchaWrapperElem: ElementRef;
    protected recaptchaType: ReCaptchaType;
    constructor(renderer: Renderer2, zone: NgZone, injector: Injector, scriptService: ScriptService);
    ngOnChanges(changes: SimpleChanges): void;
    /**
     * Programatically invoke the reCAPTCHA check. Used if the invisible reCAPTCHA is on a div instead of a button.
     */
    execute(): void;
    protected captchaSpecificSetup(): void;
    /**
    * Gets reCaptcha properties
    */
    protected getCaptchaProperties(): any;
}
