import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      h3 {
        color: dodgerblue;
      }
    `,
  ],
})
export class AppComponent {
  showDetails = false;
  logs = [];
  numClick = 0;

  handleClick() {
    this.showDetails = !this.showDetails;
    this.numClick++;
    this.logs.push({
      show: this.showDetails,
      number: this.numClick,
      text: `Times clicked: ${this.numClick}, ${
        this.showDetails ? 'showing' : 'hiding'
      } secret`,
    });
  }
}
