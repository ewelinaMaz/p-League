import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { List } from '../interface/list';

@Injectable({
  providedIn: 'root'
})

export class ListService {

  listUrl = 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2021&sort=asc'

  constructor(private http: HttpClient) {
    this.http = http;
   }


   getList():Observable<List[]> {
    return this.http.get<List[]>(this.listUrl)
   }
}
