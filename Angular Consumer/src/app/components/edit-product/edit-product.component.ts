import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/ViewModels/interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  myform: FormGroup;
  prod: IProduct;
  prodId:number;
  constructor(private _actvivateRouterServ:ActivatedRoute,private fb: FormBuilder, private prodServ: ProductService, private route: Router) { 
    console.log("rdit");
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
    this.prodId=this._actvivateRouterServ.snapshot.params['pid'];
    this.prodServ.getProductByID(this.prodId).subscribe(
      res => {
        this.prod.Id=res.Id;
        this.prod.Name=res.Name;
        this.prod.Price=res.Price;
        this.prod.Description=res.Description;
        this.myform.controls['Name'].setValue(this.prod.Name);
        this.myform.controls['Price'].setValue(this.prod.Price);
        this.myform.controls['Description'].setValue(this.prod.Description);
      },
      err => console.log("err")
    )
    this.myform = this.fb.group({
      Name: ['', [Validators.required, Validators.minLength(4)]],
      Price: ['', [Validators.required, Validators.min(1)]],
      Description: ['', []]
    });
  }
EditProduct(){
  this.prod = {
    Id: this.prodId,
    Name: this.myform.controls['Name'].value,
    Price: this.myform.controls['Price'].value,
    Description: this.myform.controls['Description'].value
  };
  this.prodServ.EditProduct(this.prod).subscribe(
    res => {
      this.route.navigate(['/ProductDetails',this.prod.Id]);
    },
    err => console.log("err")
  )
}
}