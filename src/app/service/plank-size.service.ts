import { Injectable } from '@angular/core';
import { PlankSize} from '../core/plank-size';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlankSizeService {

  private plankSizeUrl: string;

  constructor(private http: HttpClient) {
    this.plankSizeUrl = 'http://localhost:8080/plankSize/getAll';
  }

  public findAll(): Observable<PlankSize[]> {
    return this.http.get<PlankSize[]>(this.plankSizeUrl);
  }
}
