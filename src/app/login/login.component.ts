import { Component, OnInit } from '@angular/core';
import users from '/src/assets/sources/users.json';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
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
  private previousPage:any;
  constructor(
    private router:Router, 
    private manageUserService:ManageUsersService,
    private route:ActivatedRoute
    
    ) { 
    this.myUser = new User("", "", "","","","","","","","","","","","","","",0,0, []);
  }
  ngOnInit(): void {
    this.manageUserService.isUserLogged();
    this.route.queryParams
      .subscribe(params=>
        this.previousPage=params)
    this.manageUserService.loadUsers();
  }

  verifyUser(){
    let userCheck = this.manageUserService.checkUserLogin(this.myUser);
    console.log(userCheck);
    this.loginPressed=true;
    if(userCheck>=2){
      this.isPresent=true;
      this.passwordCorrect=true;
      if(userCheck==3){ //sono un admin
        window.location.href="/adminpage";
      }
      else{
        if(this.previousPage['previous']=="vita"){
          window.location.href="/calcolopreventivo";
        }
        else{
          window.location.href="/userpage?email="+this.myUser.email;
        }
      }      
      
    }
    else if(userCheck==1){
      this.isPresent=true;
    } 
      
  }

}
