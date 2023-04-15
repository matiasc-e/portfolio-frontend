import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http : HttpClient) { }

  public getUser():Observable<User> {
    return this.http.get<User>(`${this.apiServerUrl}/user/1`)
  }

  public updateUser(newUser : User):Observable<User> {
    return this.http.put<User>(`${this.apiServerUrl}/user`, newUser)
  }
}
