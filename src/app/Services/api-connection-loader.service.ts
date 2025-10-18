import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionLoaderService {

  public loaderLogic: BehaviorSubject<boolean> = new BehaviorSubject(false);

  StartLoading() {
    this.loaderLogic.next(true)
  }

  StopLoading() {
    this.loaderLogic.next(false)
  }
}
