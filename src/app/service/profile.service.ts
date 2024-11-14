import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileResponse } from '../model/profile-response';
import { Observable } from 'rxjs';
import { Helper } from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
    console.log('ProfileService - constructor');
  }

  fetchProfile(): Observable<ProfileResponse> {
    return this.httpClient.get<ProfileResponse>(Helper.urlProfile);
  }
}
