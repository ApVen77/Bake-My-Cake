import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cake } from '../models/cakes';

@Injectable({
  providedIn: 'root',
})
export class CakeService {
  URL: string = 'http://localhost:3000/cakes';
  constructor(private http: HttpClient) {}

  getCakes(): Observable<Array<Cake>> {
    return this.http.get<Array<Cake>>(this.URL);
  }

  addCakes(cake: Cake): Observable<Cake> {
    return this.http.post<Cake>(this.URL, cake);
  }

  getCake(cakeId: number): Observable<Cake> {
    return this.http.get<Cake>(`${this.URL}/${cakeId}`);
  }

  editCake(cakeId: number, cake: Cake): Observable<Cake> {
    return this.http.put<Cake>(`${this.URL}/${cakeId}`, cake);
  }

  deleteCake(cakeId: number): Observable<Cake> {
    return this.http.delete<Cake>(`${this.URL}/${cakeId}`);
  }
}
