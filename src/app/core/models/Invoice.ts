import { Customer } from "./Customer";

export interface Invoice {
  id: string;
  createAt: Date;
  customer: Customer;
  total: number;
}
