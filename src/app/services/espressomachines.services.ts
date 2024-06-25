import { EspressoMachine } from '../models/espressomachine';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EspressoMachinesService {
  espressoMachines: EspressoMachine[] = [
    {
      id: '1',
      title: 'Beanbliss Barista Pro',
      image: 'images/beanbliss-barista-pro.jpg',
      shortDescription: 'Professional-grade espresso machine for your home.',
      longDescription:
        'The Beanbliss Barista Pro is designed to bring the coffee shop experience to your kitchen. With precise temperature control, a powerful steam wand, and a user-friendly interface, it ensures perfect coffee every time.',
      price: 799.99,
      technicalSpecifications: [
        'Precise PID temperature control',
        '15-bar Italian pump',
        'ThermoJet heating system',
        'Manual microfoam milk texturing',
      ],
      availableColors: ['Stainless Steel', 'Black', 'Red'],
      dimensions: '34 x 32 x 40 cm',
      weight: '7.5 kg',
      power: '1600W',
      waterTankCapacity: '2L',
      beanHopperCapacity: '250g',
      warranty: '2 years',
      rating: 4.8,
    },
    {
      id: '2',
      title: 'Beanbliss Espresso Deluxe',
      image: 'images/beanbliss-espresso-deluxe.jpg',
      shortDescription:
        'Luxury espresso machine with all the features you need.',
      longDescription:
        'Experience the luxury of the Beanbliss Espresso Deluxe, featuring a sleek design, intuitive controls, and high-performance components. Perfect for both beginners and seasoned baristas.',
      price: 999.99,
      technicalSpecifications: [
        'Dual boiler system',
        'Automatic milk frother',
        'LCD display with touch controls',
        'Integrated coffee grinder',
      ],
      availableColors: ['Matte Black', 'White', 'Silver'],
      dimensions: '38 x 35 x 45 cm',
      weight: '9.2 kg',
      power: '1800W',
      waterTankCapacity: '2.5L',
      beanHopperCapacity: '300g',
      warranty: '3 years',
      rating: 4.9,
    },
    {
      id: '3',
      title: 'Beanbliss Compact',
      image: 'images/beanbliss-compact.jpg',
      shortDescription:
        'Compact and powerful espresso machine for small spaces.',
      longDescription:
        'The Beanbliss Compact is perfect for those who love great coffee but have limited space. Despite its small size, it packs a punch with powerful brewing capabilities and an easy-to-use design.',
      price: 499.99,
      technicalSpecifications: [
        'Compact design',
        'Fast heat-up time',
        'Automatic shut-off',
        'Adjustable brew strength',
      ],
      availableColors: ['Silver', 'Blue', 'Green'],
      dimensions: '28 x 25 x 35 cm',
      weight: '4.3 kg',
      power: '1200W',
      waterTankCapacity: '1.2L',
      beanHopperCapacity: '150g',
      warranty: '1 year',
      rating: 4.5,
    },
  ];

  getAll(): Observable<EspressoMachine[]> {
    return of(this.espressoMachines);
  }

  getOne(id: string): Observable<EspressoMachine | undefined> {
    const espressoMachine = this.espressoMachines.find(
      (machine) => machine.id === id
    );
    return of(espressoMachine);
  }
}
