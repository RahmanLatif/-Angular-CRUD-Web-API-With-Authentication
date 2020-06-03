import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IProduct } from 'src/app/ViewModels/interfaces/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  myform: FormGroup;
  prod: IProduct;
  prodId:number;
  constructor(private _actvivateRouterServ:ActivatedRoute,private fb: FormBuilder, private prodServ: ProductService, private route: Router) { 
    this.prod = {
      Id: 0,
      Name: '',
      Price: 0,
      Description: ''
    };
  }

  ngOnInit(): void {
    if (environment.access_token == '') {
      this.route.navigate(['/Login']);
    }
    this.prodId=this._actvivateRouterServ.snapshot.params['pid'];
    console.log(this.prodId);
    this.prodServ.getProductByID(this.prodId).subscribe(
      res => {
        console.log(res);
        this.prod.Id=res.Id;
        this.prod.Name=res.Name;
        this.prod.Price=res.Price;
        this.prod.Description=res.Description;
      },
      err => console.log("err")
    )
  }
  BackToList(){
    this.route.navigate(['/Products']);
}
}
