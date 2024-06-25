import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EspressoMachinesService } from '../../../services/espressomachines.services';
import { EspressoMachine } from '../../../models/espressomachine';

@Component({
  selector: 'anguapp-espressomachine',
  standalone: true,
  imports: [],
  templateUrl: './espressomachine.component.html',
  styleUrls: ['./espressomachine.component.css'],
})
export class EspressomachineComponent implements OnInit {
  espressoMachine: EspressoMachine | null = null;

  constructor(
    private espressoMachinesService: EspressoMachinesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.espressoMachinesService.getOne(id).subscribe((machine) => {
        if (machine) {
          this.espressoMachine = machine;
        } else {
          // Manejar el caso cuando la máquina de espresso no se encuentra
          this.router.navigate(['/not-found']);
        }
      });
    }
  }
}
