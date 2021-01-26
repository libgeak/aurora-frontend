import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'productos',
    loadChildren:() => import('../products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'ventas',
    loadChildren:() => import('../invoices/invoices.module').then(m => m.InvoicesModule)
  },
  {
    path: 'clientes',
    loadChildren:() => import('../customers/customers.module').then(m => m.CustomersModule)
  },
  /*{
    path: '**',
    redirectTo: 'productos',
    pathMatch: 'full'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
