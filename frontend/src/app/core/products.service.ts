import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = 'http://localhost:3000/produto';

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL);
  }

  getById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.URL}/${id}`)
  }

  criar(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL, product);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.URL}/${id}`)
  }
}
