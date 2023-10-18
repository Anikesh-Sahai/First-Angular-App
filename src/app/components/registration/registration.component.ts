import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(private user:UserService){}
  ngOnInit(): void {}
  submit(login:any):void{
    if(login.form.value.password === login.form.value.confirmPassword){
      const newUser:User={
        email:login.form.value.email,
        password:login.form.value.password
      }
      
      console.log(newUser)
      this.user.addUser(newUser).subscribe((response)=>(console.log(response)))
    }
    else alert("password not match with confirm password")
  }
}
