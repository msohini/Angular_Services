
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Injectable()
export class CountService {
  count: number = 0;
  constructor() {

  }
  CountLog() {
    this.count++;
    console.log("Status Changed Count  "+this.count);
  }
}
