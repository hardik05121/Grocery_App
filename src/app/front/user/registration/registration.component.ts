import { Component } from '@angular/core';
import { FormGroup, FormControl,FormControlName, Validators } from '@angular/forms';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  Rtitle= 'Registration Form';
 
  RegistrationForm = new FormGroup({
    fname: new FormControl ('',[Validators.required,Validators.pattern('')]),
    lname: new FormControl ('',[Validators.required,Validators.pattern('')]),
    email: new FormControl ('',[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
    phone: new FormControl ('',[Validators.required,Validators.minLength(8)]),
    pass: new FormControl ('',[Validators.required,Validators.pattern('')])
    
  })

 get fname(){
    return this.RegistrationForm.get('fname')
 };
 get lname(){
    return this.RegistrationForm.get('lname')
 };
 get email(){
    return this.RegistrationForm.get('email')
 };
 get phone(){
    return this.RegistrationForm.get('phone')
 };
 get pass(){
    return this.RegistrationForm.get('pass')
 };

 submit(){
  console.warn(this.RegistrationForm.value);
 }
}
