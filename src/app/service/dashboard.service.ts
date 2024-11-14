import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Helper } from '../util/helper';
import { MostActive } from '../model/most-active';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpClient: HttpClient) { }

  fetchMostActive(): Observable<MostActive> {
    return this.httpClient.get<MostActive>(Helper.urlMostActive);
  }

}
