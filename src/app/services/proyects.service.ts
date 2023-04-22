import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/enviroments/enviroment';
import { Proyects } from '../models/proyects';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectsService {

  private apiServerUrl=environment.apiBaseUrl 

  constructor(private http : HttpClient){}

  getProyects():Observable<Proyects[]> {
    return this.http.get<Proyects[]>(`${this.apiServerUrl}/proyects`)
  }

  addProyects(newProyects : Proyects):Observable<Proyects> {
    return this.http.post<Proyects>(`${this.apiServerUrl}/proyects`, newProyects)
  }

  updateProyects(proyectToUpdate : Proyects):Observable<Proyects> {
    return this.http.put<Proyects>(`${this.apiServerUrl}/proyects`, proyectToUpdate)
  }

  deleteProyects(id : number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/proyects/${id}`)
  }

  
}
