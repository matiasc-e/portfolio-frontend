import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroment';
import { Skills } from '../models/skills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiServerUrl=environment.apiBaseUrl 
  constructor(private http : HttpClient) { }

  getSkills():Observable<Skills[]> {
    return this.http.get<Skills[]>(`${this.apiServerUrl}/skills`)
  }

  deleteSkills(idSk : number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/skills/${idSk}`)
  }

  updateSkills(skillToUpdate : Skills): Observable<Skills> {
    return this.http.put<Skills>(`${this.apiServerUrl}/skills`, skillToUpdate)
  }

  addSkills(newSkill : Skills): Observable<Skills> {
    return this.http.post<Skills>(`${this.apiServerUrl}/skills`, newSkill)
  }

}
