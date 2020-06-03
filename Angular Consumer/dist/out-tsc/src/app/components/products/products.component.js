import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
let ProductsComponent = class ProductsComponent {
    constructor(ProdServ) {
        this.ProdServ = ProdServ;
        this.displayedColumns = ['Name', 'Price', 'Description', 'Details', 'Edit', 'Delete'];
        this.dataSource = new MatTableDataSource();
        this.getAllProducts = () => {
            this.ProdServ.getAllProducts()
                .subscribe(res => {
                this.dataSource.data = res;
            });
        };
        this.ShowDetails = (id) => {
        };
        this.Edit = (id) => {
        };
        this.Delete = (id) => {
        };
    }
    ngOnInit() {
        this.getAllProducts();
    }
};
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css']
    })
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map