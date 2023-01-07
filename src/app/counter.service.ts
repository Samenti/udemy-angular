import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  increment(resultingStatus: 'inactive' | 'active') {
    if (resultingStatus === 'inactive') {
      this.activeToInactiveCounter++;
      console.log('Active To Inactive: ' + this.activeToInactiveCounter);
    } else if (resultingStatus === 'active') {
      this.inactiveToActiveCounter++;
      console.log('Inactive To Active: ' + this.inactiveToActiveCounter);
    }
  }
}
