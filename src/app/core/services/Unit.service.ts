import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { urlBackendUnits } from '../constants/baseUrl';
import { Unit } from '../models/Unit';
import { ResponseBackend } from '../models/ResponseBackend';

@Injectable({
  providedIn: 'root'
})
export class UnitService {

  private readonly BASE_URL: string = urlBackendUnits;

  constructor(private http: HttpClient ) { }

  create(unit: Unit): Observable<Unit>{
    return this.http.post<Unit>(`${this.BASE_URL}/create`, unit);
  }

  list(state: string = ""): Observable<Unit[]>{
    const param = state ?  `/${state}`: "";
    console.log(`${this.BASE_URL}/list${param}`);
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/list${param}`)
    .pipe(
      map(unit => unit.result)
    )
    ;
  }
  get(id: number){
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/search/${id}`)
    .pipe(
      map(unit => unit.result)
    );
  }
}
