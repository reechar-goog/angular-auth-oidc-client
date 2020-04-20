import { Injectable } from '@angular/core';
import { IFrameService2 } from './iframe.service';

const IFRAME_FOR_SILENT_RENEW_IDENTIFIER = 'myiFrameForSilentRenew';

@Injectable()
export class SilentRenewService {
    constructor(private iFrameService: IFrameService2) {}

    sendAuthorizeReqestUsingSilentRenew(url: string) {
        const iFrame = this.iFrameService.addIFrameToWindowBody(IFRAME_FOR_SILENT_RENEW_IDENTIFIER);
        this.iFrameService.moveIframeToUrl(iFrame, url);
        return this.iFrameService.listenToMessageFromIframe();
    }
}
