import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollingService {
  private styleTag: HTMLStyleElement;
  constructor() {
    this.styleTag = this.buildStyleElement();
  }

  public disable() {
    document.body.appendChild(this.styleTag);
  }

  public enable() {
    document.body.removeChild(this.styleTag);
  }

  private buildStyleElement() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.setAttribute('data-debug', 'Injected by WindowScrolling service.');
    style.textContent = `
        body {
            overflow: hidden !important ;
        }
    `;
    return (style);
  }
}
