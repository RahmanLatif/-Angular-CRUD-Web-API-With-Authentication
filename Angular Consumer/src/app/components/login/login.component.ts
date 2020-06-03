import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILogin } from 'src/app/ViewModels/interfaces/ilogin';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myform: FormGroup;
  user: ILogin;
  constructor(private fb: FormBuilder, private userServ: UserService, private route: Router) {
    environment.access_token='';
    environment.userName='';
    this.user = {
      username: '',
      password: '',
      grant_type: 'password'
    };
  }

  ngOnInit(): void {
    this.myform = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(4)]],
      Password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }
  Login() {
    this.user = {
      username: ''+this.myform.controls['Username'].value,
      password: ''+this.myform.controls['Password'].value,
      grant_type:'password'
    };
    this.userServ.Login(this.user).subscribe(
      res => {
        environment.access_token = "bearer " + res.access_token;
        environment.userName = this.myform.controls['Username'].value;
        console.log(res);
        console.log(environment.access_token);
        this.route.navigate(['/Products']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
