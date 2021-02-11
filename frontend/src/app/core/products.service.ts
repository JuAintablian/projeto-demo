import { Product } from './../model/product';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  URL = "http://localhost:3000/produto"

  constructor(private http: HttpClient) { }

  criar(product: Product): Observable<Product> {
    return this.http.post<Product>(this.URL,product)
  }
}
