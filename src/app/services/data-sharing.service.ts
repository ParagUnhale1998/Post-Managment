import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataSharingService {
  userRegister$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public readonly userRegister = this.userRegister$.asObservable();

  constructor() {}

  setUserRegister(value: boolean) {
    this.userRegister$.next(value);
  }

  getUserRegister() {
    return this.userRegister;
  }
}
