import { __decorate } from "tslib";
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let ProductService = class ProductService {
    constructor(_http) {
        this._http = _http;
    }
    getAllProducts() {
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
            'Authorization': environment.access_token
        });
        return this._http.get(`${environment.ApiUrl}api/product`, { headers: httpOptions });
    }
    getProductByID(pID) {
        console.log(pID);
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
            'Authorization': environment.access_token
        });
        return this._http.get(`${environment.ApiUrl}api/product/${pID}`, { headers: httpOptions });
    }
    insertProduct(Prd) {
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
            'Authorization': environment.access_token
        });
        return this._http.post(`${environment.ApiUrl}api/product`, Prd, { headers: httpOptions });
    }
    EditProduct(Prd) {
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
            'Authorization': environment.access_token
        });
        return this._http.put(`${environment.ApiUrl}api/product/${Prd.Id}`, Prd, { headers: httpOptions });
    }
    DeleteProduct(pID) {
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
            'Authorization': environment.access_token
        });
        return this._http.delete(`${environment.ApiUrl}api/product/${pID}`, { headers: httpOptions });
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map