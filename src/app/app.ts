import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <iframe [src]="url"></iframe>
    `,
})
export class App {
  url = 'http://www.wings.msn.to/';
}