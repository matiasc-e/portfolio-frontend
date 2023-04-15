import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl=environment.apiBaseUrl 
  constructor(private http : HttpClient) { }

  public getEducation (): Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/education`)
  }

}
