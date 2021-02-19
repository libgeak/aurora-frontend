import { Injectable } from "@angular/core";
import { Customer } from "../models/Customer";

@Injectable()
export class CustomerUtil {

  buildDirection(customer: Customer): String {
    return `${customer.direction}, ${customer.city} - ${customer.department }`
  }

}
