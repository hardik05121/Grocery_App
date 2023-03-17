import { Component } from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  Ltitle= 'Login Form';
 
  LoginForm = new FormGroup({
    email: new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
    pass: new FormControl ('',[Validators.required,Validators.pattern('')]) 
  })

 get email(){
    return this.LoginForm.get('email')
 };
 get phone(){
    return this.LoginForm.get('phone')
 };
 get pass(){
    return this.LoginForm.get('pass')
 };

 LogIn(){
  console.warn(this.LoginForm.value);
 }
}


