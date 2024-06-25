import { Component, OnInit } from '@angular/core';
import { EspressoMachinesService } from '../../services/espressomachines.services';
import { EspressoMachine } from '../../models/espressomachine';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'anguapp-espressomachines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './espressomachines.component.html',
  styleUrl: './espressomachines.component.css',
})
export class EspressomachinesComponent implements OnInit {
  espressoMachines: EspressoMachine[] = [];

  constructor(private espressoMachinesService: EspressoMachinesService) {}

  ngOnInit(): void {
    this.espressoMachinesService.getAll().subscribe((machines) => {
      this.espressoMachines = machines;
    });
  }
}
