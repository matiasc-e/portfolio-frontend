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

  public addEducation (newEducation : Education) : Observable<Education> {
    return this.http.post<Education>(`${this.apiServerUrl}/education`, newEducation)
  }

  public updateEducation (educationToUpdate : Education) : Observable<Education> {
    return this.http.put<Education>(`${this.apiServerUrl}/education`, educationToUpdate)
  }

  public deleteEducation (idEdu : number) : Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/education/${idEdu}`)
  }

}
