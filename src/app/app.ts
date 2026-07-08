import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
    <iframe [src]="safeUrl"></iframe>
    `,
})
export class App {
  safeUrl: SafeResourceUrl;
  url = 'http://www.wings.msn.to/';

  // リソースが信頼済みであることをマークする
  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }
}