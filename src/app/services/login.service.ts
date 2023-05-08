import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiServerUrl=environment.apiUrlLogin 


  constructor(private http : HttpClient) { }

  login (creds : User) {
    return this.http.post(`${this.apiServerUrl}`, creds, {
      observe : 'response'
    }).pipe(map((res : HttpResponse<any>) => {
      const body = res.body
      const headers = res.headers

      const bearerToken = headers.get('Authorization')
      const token = bearerToken?.replace('Bearer', '') || ''

      localStorage.setItem('token', token)

      return body

    }))
  
  }

  getToken() : string | undefined{
    const token = window.localStorage.getItem('token');
    return token ? token.trim() : undefined;
  }

}
