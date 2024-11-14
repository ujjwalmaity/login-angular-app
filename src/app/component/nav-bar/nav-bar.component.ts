import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Helper } from '../../util/helper';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(private router: Router) { }

  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
