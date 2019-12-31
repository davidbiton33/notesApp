import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServiceService {
  private number = 3;
  constructor() { }

  getCurrentNumber() :number {
    return this.number;
  }

  updateNumber():number
  {
    this.number++;
    return this.number;
  }
}
