import { Invoice } from "./Invoice";
import { Product } from "./Product";

export interface InvoiceDetail {
  id: string;
  product: Product;
  invoice: Invoice;
  amount: number;
  quality: number;
  subtotal: number;
  codeUnit: string;
}
