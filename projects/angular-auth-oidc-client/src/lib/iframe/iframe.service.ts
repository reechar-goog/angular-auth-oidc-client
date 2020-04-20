import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class IFrameService2 {
    addIFrameToWindowBody(identifier: string): HTMLIFrameElement {
        const iFrame = window.document.createElement('iframe');
        iFrame.id = identifier;
        // iFrame.style.display = 'none';
        window.document.body.appendChild(iFrame);
        return iFrame;
    }

    moveIframeToUrl(iFrame: any, url: string) {
        iFrame.src = url;
    }

    listenToMessageFromIframe() {
        // maybe remove eventlistener again
        return new Observable((observer) => {
            window.addEventListener(
                'message',
                (e) => {
                    observer.next(e.data);
                    observer.complete();
                },
                false
            );
        });
    }

    getExistingIFrame(identifier: string): HTMLIFrameElement | null {
        const iFrameOnSelf = this.getIFrameFromWindow(identifier);
        if (this.isIFrameElement(iFrameOnSelf)) {
            return iFrameOnSelf;
        }
        return null;
    }

    private getIFrameFromWindow(identifier: string): HTMLIFrameElement | null {
        const iFrameElement = window.document.getElementById(identifier);
        if (this.isIFrameElement(iFrameElement)) {
            return iFrameElement;
        }
        return null;
    }

    private isIFrameElement(element: HTMLElement | null): element is HTMLIFrameElement {
        return !!element && element instanceof HTMLIFrameElement;
    }
}
