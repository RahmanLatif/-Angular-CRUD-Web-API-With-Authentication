import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/ViewModels/interfaces/iregister';
import { ILogin } from 'src/app/ViewModels/interfaces/ilogin';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myform: FormGroup;
  userRegister: IRegister;
  userLogin: ILogin;
  constructor(private fb: FormBuilder, private userServ: UserService,private route:Router) {
    environment.access_token='';
    environment.userName='';
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

  ngOnInit(): void {
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
    this.userServ.Register(this.userRegister).subscribe(
      res => {
        this.Login();
      },
      err => {
        console.log(err);
      }
    )
  }
  Login() {
    this.userLogin = {
      username: ''+this.myform.controls['Username'].value,
      password: ''+this.myform.controls['Password'].value,
      grant_type:'password'
    };
    this.userServ.Login(this.userLogin).subscribe(
      res => {
       environment.access_token = "bearer " + res.access_token;
        environment.userName = this.myform.controls['Username'].value;
        this.route.navigate(['/Products']);
      },
      err => {
        console.log(err);
      }
    )
  }
}
