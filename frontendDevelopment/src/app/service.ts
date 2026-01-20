import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://127.0.0.1:8000/api'; 
  // 🔁 change port if needed

  constructor(private http: HttpClient) {}

  /* =========================
     AUTH
  ========================== */

  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  /* =========================
     GOODS
  ========================== */

  // Store goods
  storeGoods(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/store`, data);
  }

  // List goods
  listGoods(): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/list`, {});
  }

  // View single goods (by id)
  viewGoods(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/view`, { id });
  }

  // Update goods
  updateGoods(id: number, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/update`, {
      id,
      ...data
    });
  }

  // Delete goods
  deleteGoods(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods/delete`, { id });
  }
}
