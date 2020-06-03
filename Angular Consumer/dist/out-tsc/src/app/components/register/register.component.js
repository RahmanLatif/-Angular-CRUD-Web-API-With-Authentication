import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Validators } from '@angular/forms';
let RegisterComponent = class RegisterComponent {
    constructor(fb, userServ, route) {
        this.fb = fb;
        this.userServ = userServ;
        this.route = route;
        this.userRegister = {
            UserName: '',
            Password: '',
            ConfirmPassword: ''
        };
        this.userLogin = {
            username: '',
            password: '',
            grant_type: 'password'
        };
    }
    ngOnInit() {
        this.myform = this.fb.group({
            Username: ['', [Validators.required, Validators.minLength(4)]],
            Password: ['', [Validators.required, Validators.minLength(5)]],
            ConfirmPassword: ['', [Validators.required, Validators.minLength(5)]]
        });
    }
    Register() {
        console.log(this.userRegister);
        this.userRegister = {
            UserName: this.myform.controls['Username'].value,
            Password: this.myform.controls['Password'].value,
            ConfirmPassword: this.myform.controls['ConfirmPassword'].value
        };
        console.log(this.userRegister);
        this.userServ.Register(this.userRegister).subscribe(res => {
            this.Login();
        }, err => {
            console.log(err);
        });
    }
    Login() {
        this.userLogin = {
            username: '' + this.myform.controls['Username'].value,
            password: '' + this.myform.controls['Password'].value,
            grant_type: 'password'
        };
        this.userServ.Login(this.userLogin).subscribe(res => {
            environment.access_token = "bearer " + res.access_token;
            environment.userName = this.myform.controls['Username'].value;
            this.route.navigate(['/Products']);
        }, err => {
            console.log(err);
        });
    }
};
RegisterComponent = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.component.html',
        styleUrls: ['./register.component.css']
    })
], RegisterComponent);
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map