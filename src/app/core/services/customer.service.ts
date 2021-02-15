import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlBackendCustomers } from '../constants/baseUrl';
import { Customer } from '../models/Customer';
import { ResponseBackend } from '../models/ResponseBackend';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly BASE_URL: string = urlBackendCustomers;

  constructor(private http: HttpClient) { }

  create(customer: Customer): Observable<Customer>{
    if(customer?.id){
      return this.http.put<Customer>(`${this.BASE_URL}/create`, customer);
    }
    return this.http.post<Customer>(`${this.BASE_URL}/create`, customer);
  }

  list(): Observable<Customer[]>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/list`)
    .pipe(
      map(response => response.result)
    );
  }

  get(id: string): Observable<Customer>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/search/${id}`)
    .pipe(
      map(response => response.result)
    );
  }

  findByParam(name: string): Observable<Customer[]>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/searchByParam/${name}`)
    .pipe(
      map(response => response.result)
    );
  }

}
