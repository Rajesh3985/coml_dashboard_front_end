import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  /* ================= AUTH ================= */
  login(data: any) {
    return this.http.post(this.baseUrl + '/login', data);
  }
}
