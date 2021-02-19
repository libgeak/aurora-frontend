import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from 'src/app/shared/components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'

  },
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
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
   }

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
