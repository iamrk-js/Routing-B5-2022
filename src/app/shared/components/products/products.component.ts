import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../modal/product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productData : Iproduct[]= [];
  slectedProdId :number = 1;
  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.productData = this.productsService.getAllProducts()
    // this.router.navigate(['products', this.slectedProdId])
  }
  setActiveClass(id:number){
    this.slectedProdId = id
  }
}
