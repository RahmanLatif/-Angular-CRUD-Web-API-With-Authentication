import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/ViewModels/interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  myform: FormGroup;
  prod: IProduct;
  constructor(private fb: FormBuilder, private prodServ: ProductService, private route: Router) {
    this.prod = {
      Id: 0,
      Name: '',
      Price: 0,
      Description: ''
    };
  }

  ngOnInit(): void {
    if (environment.access_token == '') {
      this.route.navigate(['/Login'])
    }
    this.myform = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(4)]],
      Price: ['', [Validators.required, Validators.min(1)]],
      Description: ['', []]
    });
  }
  AddProduct() {
    this.prod = {
      Id: 0,
      Name: this.myform.controls['Name'].value,
      Price: this.myform.controls['Price'].value,
      Description: this.myform.controls['Description'].value
    };
    this.prodServ.insertProduct(this.prod).subscribe(
      res => this.route.navigate(['/Products']),
      err => console.log("err")
    )
  }
}
