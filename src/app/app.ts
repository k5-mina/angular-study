import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<div>{{msg}}</div>',
})
export class App {
  msg: string = `<script>window.alert("ようこそ！"):</script>
          <div style="font-size:20px;">
            <p>WINGSプロジェクト</p>
          </div>
          <a href="http://www.wings.msn.to/">Web</a>
          <button>同意する</button>
          <input type="button" onclick="alert('OK')" value="クリック" />`;
}