import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductStatus } from 'src/app/shared/const/productEnum';
import { Iproduct } from 'src/app/shared/modal/product';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  productStatus = ProductStatus;
  selectedProductId: number = 2;
  productDetails!: Iproduct;
  canEditProduct : number = 1;
  constructor(private productService: ProductService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedProductId = +params['id']
      this.productDetails = this.productService.getSingleProduct(this.selectedProductId)!
    })

    this.route.queryParams.subscribe((params: Params) => {
      // console.log(params);
      this.canEditProduct = +params['canEdit'];
      console.log(`Can Edit Status ${this.canEditProduct}`);
      
    })
  }

  onProductUpdate(productName: HTMLInputElement, productStatus: HTMLSelectElement) {
    console.log(productName.value, productStatus.value);
    this.productService.updateProduct(productName.value, productStatus.value, this.selectedProductId);
    this.router.navigate(['products'])
  }

}
