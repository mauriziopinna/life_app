import { Component, OnInit } from '@angular/core';
import users from '/src/assets/sources/users.json';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { preventivo } from '../preventivo';


@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {

  public userList:{
    email: string, 
    password: string, 
    type: string, 
    name: string, 
    surname: string, 
    birthdate: string, 
    telephone: string, 
    address: string, 
    state: string, 
    region: string, 
    zip: string, 
    birth_place: string, 
    sesso: string, 
    codice_fiscale: string, 
    titolo_studio: string, 
    professione: string, 
    altezza: number, peso: number, 
    preventivi: any
  } [] = users.users;
    
  // public userLogged = new User("", "", "","","","","","","","","","","","","","",0,0, []);
  public userLogged:User;

  // public preventivi:preventivo[]=users.users.preventivi;
  public preventivi:preventivo[];
  //public userEmail: any;

  constructor(private route: ActivatedRoute) { 
    let userLoggedJSON = localStorage.getItem("userLogged");
    this.userLogged = JSON.parse(userLoggedJSON!);
    console.log(this.userLogged);
    this.preventivi = this.userLogged.preventivi;
  }

  ngOnInit(): void {
    
    console.log("stampa da user page:" +this.userLogged);
    console.log("stampa da user page:" +this.userLogged.email);
    console.log("stampa da user page:" +this.preventivi);
    //console.log("stampa da user page:" +this.preventivi[0].work_finance);
  }



}
