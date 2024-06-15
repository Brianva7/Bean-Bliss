import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'anguapp-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {}
