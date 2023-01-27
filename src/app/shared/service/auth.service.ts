import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedInStatus: boolean = false;
  constructor() { }


  isAuthenitcated() : Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedInStatus)
      }, 300);
    })
  }


  getLoggedInStatus() {
    return this.loggedInStatus;
  }

  logInToApplication() {
    /// api call {email, password >> res >> success}
    this.loggedInStatus = true;
  }

  logOutFromApplication() {
    // log out
    this.loggedInStatus = false;
  }
}
