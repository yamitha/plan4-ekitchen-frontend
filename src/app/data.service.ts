import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private cart = new BehaviorSubject<any>({});

  currentCart = this.cart.asObservable();

  constructor() { }

  changeCart(cartVal: any) {
    this.cart.next(cartVal);
  }

}
