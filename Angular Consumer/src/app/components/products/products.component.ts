import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IProduct } from 'src/app/ViewModels/interfaces/iproduct';
import { ProductService } from 'src/app/Services/product.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit,AfterViewInit {
  public displayedColumns = ['Name', 'Price', 'Description', 'Details', 'Edit', 'Delete'];
  public dataSource = new MatTableDataSource<IProduct>();
  PrdList: IProduct[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private ProdServ: ProductService,private route: Router) { }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
 
  ngOnInit() {
    if (environment.access_token == '') {
      this.route.navigate(['/Login']);
    }
    this.getAllProducts();
  }
 
  public getAllProducts = () => {
    this.ProdServ.getAllProducts()
    .subscribe(res => {
      this.PrdList=res as IProduct[];
      this.dataSource = new MatTableDataSource<IProduct>(this.PrdList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
 
  public ShowDetails = (id: number) => {
    this.route.navigate([`/ProductDetails/${id}`]);
  }
 
  public Edit = (id: number) => {
    this.route.navigate([`/EditProduct/${id}`]);
  }

  public AddProduct = () => {
    this.route.navigate(["/AddProduct"]);
  }
 
  public Delete = (id: number) => {
    this.ProdServ.DeleteProduct(id).subscribe(
      res => {
        this.PrdList.splice(this.PrdList.indexOf(this.PrdList.find(prd=>prd.Id==id)),1);
        this.dataSource = new MatTableDataSource<IProduct>(this.PrdList);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
      ,
      err => console.log(err)
    )
  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
