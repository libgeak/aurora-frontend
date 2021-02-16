import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Observable<Product[]> =  of([]);

  @Input()
  showSelected: boolean = false;
  @Input()
  title = 'Lista de productos';

  @Output()
  productEmitter: EventEmitter<Product> = new EventEmitter();

  productsSelected: Product[] = [];
  nameProduct: string = '' ;

  constructor(private productService: ProductService,
              private router: Router ) {

  }

  ngOnInit(): void {
  }

  sendEdit(product: Product){
    this.router.navigate(["product/crear-productos", {id: product.id }])
  }

  searchByParams() {
    this.products = this.productService.findByParam(this.nameProduct);
  }

  list(){
    this.products =  this.productService.list();
  }

  selectedProduct(product?: Product){
    if(product === undefined){
      product = {} as Product;
    }
    this.productsSelected.push(product)

    this.productEmitter.emit(product);
  }
/*
  isProductSelected(product: Product){
    return this.productsSelected.includes(product);
  }
*/
}
