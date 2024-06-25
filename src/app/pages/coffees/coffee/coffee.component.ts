import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoffeesService } from '../../../services/coffees.services';
import { Coffee } from '../../../models/coffee';

@Component({
  selector: 'app-coffee-detail',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css'],
  standalone: true,
  imports: [],
})
export class CoffeeComponent implements OnInit {
  coffee: Coffee | null = null;

  constructor(
    private coffeesService: CoffeesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.coffeesService.getCoffee(id).subscribe((coffee) => {
        this.coffee = coffee;
      });
    }
  }
}
