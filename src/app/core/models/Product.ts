import { Unit } from "./Unit";

export interface Product {
  id: string;
  name: string;
  unitValue: string;
  unit: Unit;
  idUnit: number;
  state: string;
}
