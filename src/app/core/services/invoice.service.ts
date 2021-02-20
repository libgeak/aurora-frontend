import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { urlBackendInvoices } from '../constants/baseUrl';
import { Invoice } from '../models/Invoice';
import { InvoiceDetail } from '../models/InvoiceDetail';
import { ResponseBackend } from '../models/ResponseBackend';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private readonly BASE_URL: string = urlBackendInvoices;


  constructor(private http: HttpClient) { }

  saveInvoice(invoice: Invoice): Observable<Invoice>{
    return this.http.post<Invoice>(`${this.BASE_URL}/create`, invoice);
  }

  listInvoicesByCustomer(id: String): Observable<Invoice[]>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/listInvoiceByCustomer/${id}`)
    .pipe(
      map(invoice => invoice.result)
    );
  }

  listInvoicesDetail(id: String): Observable<InvoiceDetail[]>{
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/listDetailsInvoice/${id}`)
    .pipe(
      map(invoiceDetail => invoiceDetail.result)
    );
  }

  sumTotalInvoice(): Observable<number> {
    return this.http.get<ResponseBackend>(`${this.BASE_URL}/sumTotalInvoice`)
    .pipe(
      map(invoiceDetail => invoiceDetail.result)
    );
  }
}
