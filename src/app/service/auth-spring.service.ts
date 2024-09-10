import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthSpringService {

  private loginUrl: string = 'http://localhost:8080/login'; // Spring Security login endpoint.

  constructor(private http: HttpClient) {}

  public login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post(this.loginUrl, body.toString(), {
      headers,
      withCredentials: true // This will ensure that cookies (JSESSIONID) are stored and sent automatically
    });
  }
}
