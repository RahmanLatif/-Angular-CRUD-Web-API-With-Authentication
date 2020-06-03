import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
let LoginComponent = class LoginComponent {
    constructor(fb, userServ, route) {
        this.fb = fb;
        this.userServ = userServ;
        this.route = route;
        this.user = {
            username: '',
            password: '',
            grant_type: 'password'
        };
    }
    ngOnInit() {
        this.myform = this.fb.group({
            Username: ['', [Validators.required, Validators.minLength(4)]],
            Password: ['', [Validators.required, Validators.minLength(5)]]
        });
    }
    Login() {
        this.user = {
            username: '' + this.myform.controls['Username'].value,
            password: '' + this.myform.controls['Password'].value,
            grant_type: 'password'
        };
        this.userServ.Login(this.user).subscribe(res => {
            environment.access_token = "bearer " + res.access_token;
            environment.userName = this.myform.controls['Username'].value;
            console.log(res);
            console.log(environment.access_token);
            this.route.navigate(['/Products']);
        }, err => {
            console.log(err);
        });
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map