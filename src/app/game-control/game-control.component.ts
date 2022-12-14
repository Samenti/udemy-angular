import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  num: number = 0;
  interval: number;
  @Output() counterEvent: EventEmitter<number> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  public startGame() {
    this.interval = window.setInterval(() => {
      this.num = this.num + 1;
      this.counterEvent.emit(this.num);
    }, 1000);
  }

  public stopGame() {
    window.clearInterval(this.interval);
  }
}
