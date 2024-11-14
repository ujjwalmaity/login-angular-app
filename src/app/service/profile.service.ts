import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProfileDetails } from '../model/profile-details';
import { Observable } from 'rxjs';
import { Helper } from '../util/helper';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  fetchProfileDetails(): Observable<ProfileDetails> {
    return this.httpClient.get<ProfileDetails>(Helper.urlProfile);
  }

}
