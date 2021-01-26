import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(private productService: ProductService,
              private router: Router ) {
    this.products =  this.productService.list();
   }

  ngOnInit(): void {
  }

  sendEdit(product: Product){
    this.router.navigate(["product/crear-productos", {id: product.id }])
  }

}
