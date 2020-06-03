import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';



const routes: Routes = [
  {path:'ProductDetails/:pid',component:ProductDetailsComponent},
  {path:'EditProduct/:pid',component:EditProductComponent},
  {path:'AddProduct',component:AddProductComponent},
  {path:'Products',component:ProductsComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
  {path:'',redirectTo:'/Products',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
