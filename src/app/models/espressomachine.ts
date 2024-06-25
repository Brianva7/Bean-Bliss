export interface EspressoMachine {
  id: string;
  title: string;
  image: string;
  shortDescription: string;
  longDescription: string;
  price: number;
  technicalSpecifications: string[];
  availableColors: string[];
  dimensions: string;
  weight: string;
  power: string;
  waterTankCapacity: string;
  beanHopperCapacity: string;
  warranty: string;
  rating: number;
}
