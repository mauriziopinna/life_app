import { Component, OnInit } from '@angular/core';
import { ManageUsersService } from '../manage-users.service';
import { User } from '../user';
@Component({
  selector: 'app-registrati',
  templateUrl: './registrati.component.html',
  styleUrls: ['./registrati.component.css']
})
export class RegistratiComponent implements OnInit {
  // public formUser:User = new User("pincopallo","prova1","user");
  public formUser:User = new User("", "", "","","","","","","","","");
  public registrationSuccess = true;
  public signUpPressed = false;
  constructor(private manageUserService:ManageUsersService) { }

  ngOnInit(): void {
    let returnedList = this.manageUserService.loadUsers();
    console.log(returnedList);
  }

  addUser(){
    this.registrationSuccess = this.manageUserService.addUser(this.formUser);
    this.signUpPressed = true;
    if(this.registrationSuccess){
      window.location.href="/login"
    }
    
  }

}
