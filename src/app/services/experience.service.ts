import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Experience } from '../models/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {  
  private apiServerUrl=environment.apiBaseUrl 

  constructor(private http : HttpClient){}

  getExperience():Observable<Experience[]> {
    return this.http.get<Experience[]>(`${this.apiServerUrl}/experience`)
  }

  addExperience(newExperience : Experience):Observable<Experience> {
    return this.http.post<Experience>(`${this.apiServerUrl}/experience`, newExperience)
  }

  updateExperience(experienceToUpdate : Experience):Observable<Experience> {
    return this.http.put<Experience>(`${this.apiServerUrl}/experience`, experienceToUpdate)
  }

  deleteExperience(id : number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/experience/${id}`)
  }

}
