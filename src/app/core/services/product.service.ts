import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlBackendProducts } from '../constants/baseUrl';
import { Product } from '../models/Product';
import { ResponseBackend } from '../models/ResponseBackend';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private readonly BASE_URL: string = urlBackendProducts;

  constructor(private http: HttpClient) { }

  create(product: Product): Observable<Product>{
    if(product?.id){
      return this.http.put<Product>(`${this.BASE_URL}/create`, product);
    }
    return this.http.post<Product>(`${this.BASE_URL}/create`, product);
  }

  list(): Observable<Product[]>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/list`)
    .pipe(
      map(product => product.result)
    );
  }

  get(id: string): Observable<Product>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/search/${id}`)
    .pipe(
      map(product => product.result)
    );
  }


}
