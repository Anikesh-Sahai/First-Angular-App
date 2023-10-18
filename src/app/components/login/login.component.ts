import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private user:UserService){}
  form:FormGroup | any
  currUser:any;
  
  ngOnInit(): void {
    this.form=this.fb.group({
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(7)]],
    })
    
  }
  onsubmit(form:FormGroup) {
    console.log('Valid?', form.valid); // true or false
    
    const newUser:User={
      email:form.value.email,
      password:form.value.password
    }

    this.user.getUser(newUser)
    .subscribe((response:any)=>{
      this.currUser=response[0]
      if(newUser.password===this.currUser.password){
        alert("Success")
      }
      else alert("Invalid Credentials")
    })
  }
    
  }
  


