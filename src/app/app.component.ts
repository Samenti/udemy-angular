import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() counterEvent: number;
  odds: number[] = [];
  evens: number[] = [];

  public onCounterEvent(counter) {
    if (counter % 2 === 1) {
      this.odds.push(counter);
    } else if (counter % 2 === 0) {
      this.evens.push(counter);
    }
  }
}
