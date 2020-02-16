import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;
  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('to inactive ' + this.activeToInactive);
  }
  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('to active ' + this.inactiveToActive);
  }
  constructor() { }
}
