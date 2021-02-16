import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductComponent } from './componentes/product/create-product/create-product.component';
import { ProductCrudComponent } from './componentes/product/product-crud/product-crud.component';
import { ReadProductComponent } from './componentes/product/read-product/read-product.component';


const routes: Routes = [
  {
    path: 'produto',
    component: ProductCrudComponent,
    children: [
      {
        path: '',
        component: ReadProductComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
