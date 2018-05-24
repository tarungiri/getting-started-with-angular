import { Component, OnInit } from '@angular/core';
import { IUser } from './user';
import {AbstractControl,FormGroup,FormBuilder,Validators} from '@angular/forms'
import { UserService } from './user.service';

function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('Password');
  const cpwd= c.parent.get('ConfirmPassword')

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
      return { invalid: true };

  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel : IUser;
  submitted: boolean = false;

  registrationForm: FormGroup;  

  constructor(private regFB : FormBuilder, private userSvc: UserService) { 
    this.userModel = {id:0,FirstName : '',LastName :'',Email :'',PhoneNumber :'',Password :'',Sex :""};
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.regFB.group({
    FirstName: [this.userModel.FirstName,
      Validators.compose([Validators.required,Validators.minLength(3)])],
    LastName: [this.userModel.LastName,Validators.required],
    Email: [this.userModel.Email,
      Validators.compose([Validators.required,Validators.email])],
    PhoneNumber: [this.userModel.PhoneNumber,
      Validators.compose([Validators.required,
        Validators.minLength(10),
        Validators.pattern('^[0-9]{1,10}$')])],
    Password: [this.userModel.Password,Validators.compose([Validators.required,Validators.minLength(5)])],
    ConfirmPassword: ['',Validators.compose([Validators.required,passwordConfirming])],
    Sex: [this.userModel.Sex,Validators.required],
    });
  }
  onSubmit() {
    this.submitted = true;  
    this.userSvc.AddUser(this.registrationForm.value);
    //alert(JSON.stringify(this.userSvc.geUserById(this.registrationForm.value.id)));
  }
  
  ngOnInit() {

  }

}
