import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from '../models/coffee';

@Injectable({
  providedIn: 'root',
})
export class CoffeesService {
  private apiUrl = 'https://6664b568932baf9032abe091.mockapi.io/api/coffees';
  constructor(private http: HttpClient) {}

  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl);
  }

  getCoffee(id: string): Observable<Coffee> {
    return this.http.get<Coffee>(`${this.apiUrl}/${id}`);
  }

  getFilteredCoffees(filters: any): Observable<Coffee[]> {
    const params = new URLSearchParams(filters).toString();
    return this.http.get<Coffee[]>(`${this.apiUrl}?${params}`);
  }
}
