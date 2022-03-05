import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = environment.api;
  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any[]>(this.url + 'products');

  }
}
