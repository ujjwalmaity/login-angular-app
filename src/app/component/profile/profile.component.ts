import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { ProfileService } from '../../service/profile.service';
import { ProfileDetails } from '../../model/profile-details';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NavBarComponent, JsonPipe],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  profileDetails?: ProfileDetails;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileService.fetchProfileDetails().subscribe(
      (data: ProfileDetails) => {
        this.profileDetails = data;
      }
    );
  }

}
