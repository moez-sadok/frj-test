import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  /** BehaviorSubject for the current league*/
  public _currentLeagueName: BehaviorSubject<string> = new BehaviorSubject<string>('');
  set currentLeagueName(value: string) {
    this._currentLeagueName.next(value);
  }

  public currentTeam = '';

  constructor() {}
}
