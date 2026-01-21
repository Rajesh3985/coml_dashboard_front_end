import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  /* AUTH */
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  /* GOODS */
  storeGoods(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/store`, data);
  }

  listGoods(): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/list`, {});
  }

  viewGoods(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/view`, { id });
  }

  updateGoods(id: number, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/update`, {
      id,
      ...data
    });
  }

  deleteGoods(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/delete`, { id });
  }
}
