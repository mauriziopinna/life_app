import { Component, OnInit } from '@angular/core';
import users from '/src/assets/sources/users.json';
import { User } from '../user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myUser:User;
  isPresent:boolean=false;
  passwordCorrect:boolean = false;
  loginPressed:boolean=false;
  constructor(private router:Router) { 
    this.myUser = new User("", "", "");
  }
  public userList:{email:string, password:string}[] = users.users;
  ngOnInit(): void {
  }

  verifyUser(){
    for(let item of this.userList){
      if(item.email == this.myUser.email){
        this.isPresent=true;
        if(item.password==this.myUser.password)
          this.passwordCorrect=true;
        break;
      }      
    }
    this.loginPressed=true;
    if(this.isPresent&&this.passwordCorrect){
      this.router.navigate(['/userpage']);
    }
      
  }

}
