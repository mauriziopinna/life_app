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
    birthdate:string,
    telephone:string,
    address:string,
    state:string,
    region:string,
    zip:string,
    birth_place:string,
    sesso:string,
    codice_fiscale:string,
    titolo_studio:string,
    professione:string,
    altezza:number,
    peso:number,
    preventivi: any
  }[] = [];

  private userLogged:User = new User(
   "" //email
  ,"" //password
  ,"" //type
  ,"" //name
  ,"" //surname
  ,"" //birthdate
  ,"" //telephone
  ,"" //address
  ,"" //state
  ,"" //region
  ,"" //zip
  ,"" //birth_place
  ,"" //sesso
  ,"" //codice_fiscale
  ,"" //titolo_studio
  ,"" //professione
  ,0 //altezza
  ,0 //peso
  ,[]);

  public isLogged:boolean = false;

  constructor() {
  }

  loadUsers():any{
    this.userList=users.users;
    let storage_users = localStorage.getItem("users");
    if(storage_users==null){
      if(this.userList.length){
        localStorage.setItem("users", JSON.stringify(this.userList));
      }
    }
    else{
      let userListJSON = localStorage.getItem("users");
      this.userList = JSON.parse(userListJSON!);
    }

    // if(this.userList.length===0){
    //   let storage_users = localStorage.getItem("users");
    //   if(storage_users!=null)
    //     this.userList = JSON.parse(storage_users);
    //   else
    //     this.userList = users.users; 
    // }   
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
        localStorage.removeItem("userLogged");
        localStorage.setItem("userLogged", JSON.stringify(item));
        this.userLogged=item;
        this.isLogged=true;
      }        
    }
    return returnValue;
  }

  getUserLogged(){
    return this.userLogged;
  }

  isUserLogged(){
    let userLoggedJson = localStorage.getItem("userLogged");
    if(userLoggedJson!=null){
      this.isLogged=true;
      this.userLogged = JSON.parse(userLoggedJson);
    }
    return this.isLogged;
  }

  logOutUserService(){
    this.isLogged = false;
    localStorage.removeItem("userLogged");
  }

  

}
