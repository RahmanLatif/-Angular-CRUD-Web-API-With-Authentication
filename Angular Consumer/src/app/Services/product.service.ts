import { environment } from './../../environments/environment';
import { IProduct } from './../ViewModels/interfaces/iproduct';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }
  getAllProducts():Observable<IProduct[]>{
    const httpOptions =  new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
        'Authorization': environment.access_token
      });
   return this._http.get<IProduct[]>(`${environment.ApiUrl}api/product`,{headers:httpOptions});
  }
  getProductByID(pID):any{
    console.log(pID);
    const httpOptions =  new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
        'Authorization': environment.access_token
      });
    return this._http.get(`${environment.ApiUrl}api/product/${pID}`,{headers:httpOptions});
    
  }
  insertProduct(Prd:IProduct):Observable<IProduct>{
  const httpOptions =  new HttpHeaders({
    'Content-Type': 'application/json',
     'Accept': ' */*',
      'Authorization': environment.access_token
    });
   return this._http.post<IProduct>(`${environment.ApiUrl}api/product`,Prd,{headers:httpOptions})
  }
  EditProduct(Prd:IProduct):any{
    const httpOptions =  new HttpHeaders({
      'Content-Type': 'application/json',
       'Accept': ' */*',
        'Authorization': environment.access_token
      });
     return this._http.put(`${environment.ApiUrl}api/product/${Prd.Id}`,Prd,{headers:httpOptions})
    }
    DeleteProduct(pID):any{
      const httpOptions =  new HttpHeaders({
        'Content-Type': 'application/json',
         'Accept': ' */*',
          'Authorization': environment.access_token
        });
       return this._http.delete(`${environment.ApiUrl}api/product/${pID}`,{headers:httpOptions})
      }

}
