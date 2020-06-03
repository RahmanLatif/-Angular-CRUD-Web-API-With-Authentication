import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
let UserService = class UserService {
    constructor(_http) {
        this._http = _http;
    }
    Register(user) {
        console.log(user);
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': ' */*',
        });
        return this._http.post(`${environment.ApiUrl}/api/Account`, user, { headers: httpOptions });
    }
    Login(user) {
        console.log(JSON.stringify(user));
        const httpOptions = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': '*/*'
        });
        return this._http.post(`${environment.ApiUrl}login`, `username=${user.username}&password=${user.password}&grant_type=password`, { headers: httpOptions });
    }
};
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map