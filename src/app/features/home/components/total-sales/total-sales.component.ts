import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/core/services/invoice.service';

@Component({
  selector: 'app-total-sales',
  templateUrl: './total-sales.component.html',
  styleUrls: ['./total-sales.component.css']
})
export class TotalSalesComponent implements OnInit {

  totalInvoice = 0;

  constructor(private invoiceService: InvoiceService ) { }

  ngOnInit(): void {
    this.getTotalInvoices();
    setInterval(() =>{
      this.getTotalInvoices();
    },10000 );
  }

  getTotalInvoices(){
    console.log('Ejecutado');
    this.invoiceService
        .sumTotalInvoice()
        .subscribe(total => {

          this.totalInvoice = total;
      })
  }

}
