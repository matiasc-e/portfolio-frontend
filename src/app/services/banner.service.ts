import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Info } from '../models/info';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private apiServerUrl=environment.apiBaseUrl
  constructor(private http : HttpClient) { }

  public getUser():Observable<Info> {
    return this.http.get<Info>(`${this.apiServerUrl}/info/3`)
  }

  public updateUser(newUser : Info):Observable<Info> {
    return this.http.put<Info>(`${this.apiServerUrl}/info`, newUser)
  }
}
