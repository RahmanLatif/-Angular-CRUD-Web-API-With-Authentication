import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRegister } from '../ViewModels/interfaces/iregister';
import { environment } from 'src/environments/environment';
import { ILogin } from '../ViewModels/interfaces/ilogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  Register(user: IRegister): any {
    console.log(user);
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': ' */*',
    });
    return this._http.post(`${environment.ApiUrl}/api/Account`, user, { headers: httpOptions });
  }
  Login(user: ILogin): any {
    console.log(JSON.stringify(user));
    const httpOptions = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': '*/*'
    });
    return this._http.post(`${environment.ApiUrl}login`, `username=${user.username}&password=${user.password}&grant_type=password`, { headers: httpOptions });
  }
}
