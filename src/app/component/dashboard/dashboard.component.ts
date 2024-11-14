import { Component } from '@angular/core';
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { MostActive } from '../../model/most-active';
import { DashboardService } from '../../service/dashboard.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavBarComponent, JsonPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  mostActive?: MostActive;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.fetchMostActive().subscribe(
      (data: MostActive) => {
        this.mostActive = data;
      }
    );
  }
}
