import { ElementRef, Injector, NgZone, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { ReCaptchaType } from '../models/recaptcha-type.enum';
import { ScriptService } from '../services/script.service';
import { BaseReCaptchaComponent } from './base-recaptcha.component';
export declare class ReCaptcha2Component extends BaseReCaptchaComponent implements OnChanges, OnDestroy {
    protected renderer: Renderer2;
    protected zone: NgZone;
    protected injector: Injector;
    protected scriptService: ScriptService;
    /**
    * Name of the global expire callback
    */
    protected readonly windowOnErrorCallbackProperty = "ngx_captcha_error_callback";
    /**
    * Name of the global error callback
    */
    protected readonly windowOnExpireCallbackProperty = "ngx_captcha_expire_callback";
    /**
     * Theme
     */
    theme: 'dark' | 'light';
    /**
    * Size
    */
    size: 'compact' | 'normal';
    /**
     * Language code. Auto-detects the user's language if unspecified.
     */
    hl: string;
    captchaWrapperElem: ElementRef;
    protected recaptchaType: ReCaptchaType;
    constructor(renderer: Renderer2, zone: NgZone, injector: Injector, scriptService: ScriptService);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    protected captchaSpecificSetup(): void;
    /**
     * Gets reCaptcha properties
    */
    protected getCaptchaProperties(): any;
    /**
     * Registers global callbacks
    */
    private registerCallbacks;
}
