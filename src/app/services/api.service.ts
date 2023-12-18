import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl: string = 'https://azure-demo-app-1.azurewebsites.net/api/users';

  constructor(private http: HttpClient) { }

  fetchAllData() {
    return this.http.get(this.baseUrl);
  }

  postNewUser(data: any) {
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post(this.baseUrl, { data: data }, headers);
  }
}
