import { Component, OnInit } from '@angular/core';
import { CoffeesService } from '../../services/coffees.services';
import { Coffee } from '../../models/coffee';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-coffees',
  templateUrl: './coffees.component.html',
  styleUrls: ['./coffees.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class CoffeesComponent implements OnInit {
  coffees: Coffee[] = [];
  filters = {
    sort: '',
    search: '',
    color: '',
    minPrice: '',
    maxPrice: '',
  };

  constructor(private coffeesService: CoffeesService) {}

  ngOnInit(): void {
    this.loadCoffees();
  }

  loadCoffees(): void {
    this.coffeesService.getCoffees().subscribe((data) => {
      this.coffees = data;
    });
  }

  applyFilters(): void {
    this.coffeesService.getFilteredCoffees(this.filters).subscribe((data) => {
      this.coffees = data;
    });
  }
}
