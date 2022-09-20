import { useAnimation } from '@angular/animations';
import { Injectable } from '@angular/core';
import { User } from './user';
import users from '/src/assets/sources/users.json';
@Injectable({
  providedIn: 'root'
})
export class ManageUsersService {
  private userList:{
    email:string, 
    password:string,
    type:string,
    name:string,
    surname:string,
    telephone:string,
    address:string,
    state:string,
    region:string,
    zip:string  
  }[] = [];

  constructor() {
  }

  loadUsers():any{
    if(this.userList.length===0){
      let storage_users = localStorage.getItem("users");
      if(storage_users!=null)
        this.userList = JSON.parse(storage_users);
      else
        this.userList = users.users; 
    }   
    return this.userList;      
  }

  addUser(user_to_add:User):boolean{
    let returnValue = true;
    for(let item of this.userList){
      if(user_to_add.email===item.email){
        returnValue = false;
        break;
      }        
    }
    if(returnValue==true){
      this.userList.push(user_to_add);
      localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify(this.userList)); 
    }       
    return returnValue;
  }

  checkUserLogin(user_to_check:User):number{
    let returnValue:number = 0
    for(let item of this.userList){
      if(user_to_check.email===item.email){
        returnValue = returnValue+1;
      }        
      if(user_to_check.password===item.password){
        returnValue = returnValue+1;
      }        
    }
    return returnValue;
  }

  

}
