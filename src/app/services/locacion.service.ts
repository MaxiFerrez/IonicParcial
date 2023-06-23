import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocacionInd, RespuestaLocacion, personaje } from '../interfaces/interface_locacion';


@Injectable({
  providedIn: 'root'
})
export class LocacionService {

  constructor(private http:HttpClient) { }

  getLocacion(){
    return this.http.get<RespuestaLocacion>('https://rickandmortyapi.com/api/location')
  }

  getLocacionInd(id: number){
    return this.http.get<LocacionInd>('https://rickandmortyapi.com/api/location/'+ id)
  }

  getpersonaje(id: number){
    return this.http.get<personaje>('https://rickandmortyapi.com/api/character/'+ id)
  }
}
