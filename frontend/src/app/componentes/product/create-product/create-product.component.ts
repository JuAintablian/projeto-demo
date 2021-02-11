import { Product } from './../../../model/product';
import { ProductsService } from './../../../core/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product: Product = {
    nome: '',
    preco: null
  }

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
  }

  adicionarProduto() {
    this.productService.criar(this.product).subscribe(data => {
      console.log(data)
      this.product.nome = ''
      this.product.preco = ''
      
    })
  }

}
