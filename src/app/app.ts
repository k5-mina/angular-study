import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: '<div [innerHTML]="safeMsg"></div>',
})
export class App {
  safeMsg: SafeHtml;
  msg: string = `<script>window.alert("ようこそ！"):</script>
          <div style="font-size:20px;">
            <p>WINGSプロジェクト</p>
          </div>
          <a href="http://www.wings.msn.to/">Web</a>
          <button>同意する</button>
          <input type="button" onclick="alert('OK')" value="クリック" />`;

  constructor(private sanitizer: DomSanitizer) {
    // msgプロパティの内容に信頼済みマークを付与
    this.safeMsg = sanitizer.bypassSecurityTrustHtml(this.msg);
  }
}