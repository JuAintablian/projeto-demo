import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from './../../../../model/product';
import { ProductsService } from 'src/app/core/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = {
    nome: null,
    preco: null
  }

  constructor(private productService: ProductsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
   const id = +this.route.snapshot.paramMap.get('id')

   this.getProduct(id)
  }

  getProduct(id: number) {
    this.productService.getById(id).subscribe((product: Product) => {
      this.product = product
    })
  }

  editProduct() {
    this.productService.editProduct(this.product).subscribe((product: Product) => {
      console.log(product);
      
    })
  }

}
