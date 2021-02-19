import { Customer } from "./Customer";

export interface Invoice {
  id: string;
  createdAt: Date;
  customer: Customer;
  total: number;
}
