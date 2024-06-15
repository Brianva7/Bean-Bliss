import { Component } from '@angular/core';

@Component({
  selector: 'anguapp-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  businessEmail = 'Contact@beanbliss.com';

  constructor() {}

  ngOnInit(): void {}
}
