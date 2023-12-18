import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  fetchAllData() {
    return this.http.get(this.baseUrl);
  }

  postNewUser(data: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    })
    return this.http.post(this.baseUrl, data, {
      headers: headers
    });
  }
}
