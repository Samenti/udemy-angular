import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor() {}

  ngOnInit() {
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        count++;
      }, 1000);
    });

    const roundsIntervalObservable = customIntervalObservable.pipe(
      filter((data) => {
        return data > 0;
      }),
      map((data: number) => {
        return 'Round: ' + data;
      })
    );

    this.subscription = roundsIntervalObservable.subscribe({
      next: (data) => console.log(data),
      error: (error) => {
        console.log(error);
        alert(error.message);
      },
      complete: () => {
        console.log('Observable is completed!');
      },
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
