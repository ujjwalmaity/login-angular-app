import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ProfileService } from '../../service/profile.service';
import { ProfileResponse } from '../../model/profile-response';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profileResponse?: ProfileResponse;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.fetchProfile().subscribe(
      (profile: ProfileResponse) => {
        this.profileResponse = profile;
      }
    );
  }

}
