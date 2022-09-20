import { Component, OnInit } from '@angular/core';
import users from '/src/assets/sources/users.json';
import { User } from '../user';
import { Router } from '@angular/router';
import { ManageUsersService } from '../manage-users.service';
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
  constructor(private router:Router, private manageUserService:ManageUsersService) { 
    this.myUser = new User("", "", "","","","","","","","","");
  }
  ngOnInit(): void {
    this.manageUserService.loadUsers();
  }

  verifyUser(){
    // if(sessionStorage.getItem("users")==null)
    //   console.log("é nullooooo");
    // for(let item of this.userList){
    //   if(item.email == this.myUser.email){
    //     this.isPresent=true;
    //     if(item.password==this.myUser.password)
    //       this.passwordCorrect=true;
    //     break;
    //   }      
    // }
    // this.loginPressed=true;
    // if(this.isPresent&&this.passwordCorrect){
    //   this.router.navigate(['/userpage']);
    // }


    let userCheck = this.manageUserService.checkUserLogin(this.myUser);
    console.log(userCheck);
    this.loginPressed=true;
    if(userCheck==2){
      this.isPresent=true;
      this.passwordCorrect=true;
      this.router.navigate(['/userpage']);
    }
    else if(userCheck==1){
      this.isPresent=true;
    } 
      
  }

}
