import { Product } from './../../../model/product';
import { ProductsService } from 'src/app/core/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductsService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')
    this.productService.getById(id).subscribe((product: Product) => {
      this.product = product
      console.log(this.product)
    })
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id).subscribe(() => {
      this.router.navigate(['/produto'])
    })
  }

  cancelaDelete() {
    this.router.navigate(['/produto'])
  }

}
