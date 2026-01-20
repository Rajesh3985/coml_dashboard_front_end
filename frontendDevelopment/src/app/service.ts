import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Base URL for API
  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  /* ================= AUTH ================= */
  login(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, data);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/logout`, {});
  }

  /* ================= GOODS ================= */
  // Submit single goods row
  submitGoods(goodsData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/goods`, goodsData);
  }

  // Fetch all goods
  getGoods(): Observable<any> {
    return this.http.get(`${this.baseUrl}/goods`);
  }

  // Fetch single goods by ID
  getGoodsById(id: number | string): Observable<any> {
    return this.http.get(`${this.baseUrl}/goods/${id}`);
  }

  // Update goods by ID
  updateGoods(id: number | string, goodsData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/goods/${id}`, goodsData);
  }

  // Delete goods by ID
  deleteGoods(id: number | string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/goods/${id}`);
  }

  /* ================= OTHER API CALLS ================= */
  // Example: fetch commodities list
  getCommodities(): Observable<any> {
    return this.http.get(`${this.baseUrl}/commodities`);
  }

  // Example: fetch orders
  getOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/orders`);
  }
}
