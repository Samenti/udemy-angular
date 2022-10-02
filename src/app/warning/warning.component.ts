import { Component } from '@angular/core';

@Component({
  selector: '.warning-component',
  template: `<h4>Warning: this is the warning component!</h4>`,
  styles: [
    `
      h4 {
        font-weight: bold;
        color: tomato;
      }
    `,
  ],
})
export class WarningComponent {}
