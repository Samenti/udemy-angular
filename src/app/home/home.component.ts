import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  // private firstObsSubscription: Subscription;
  private secondObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    // Observable.create() is deprecated:
    // const customIntervalObservable = Observable.create(observer => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count);
    //     count++;
    //   }, 1000);
    // });
    const customIntervalObservable = new Observable((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
    });

    this.secondObsSubscription = customIntervalObservable.subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy(): void {
    // this.firstObsSubscription.unsubscribe();
    this.secondObsSubscription.unsubscribe();
  }
}
