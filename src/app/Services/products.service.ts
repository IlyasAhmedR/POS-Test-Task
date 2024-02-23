import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl = 'https://dummyjson.com/products';
  
  constructor(private http: HttpClient) {}
  
  // Function to fetch data using a GET request
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
 
}

 