import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private dataLogin : LoginService) { }

  public isLogged () : boolean {
    const token = this.dataLogin.getToken();
    const tokenPattern = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    const isAuthorizated = !!token && tokenPattern.test(token)
    return isAuthorizated;
  }



  public logout () : void {
    window.localStorage.removeItem('token')
  }
}
