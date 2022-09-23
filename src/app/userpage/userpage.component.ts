import { Component, OnInit } from '@angular/core';
import users from '/src/assets/sources/users.json';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';


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
    preventivi: any} [] = users.users;

    userEmailFound = new User("", "", "","","","","","","","","","","","","","",0,0, []);


  public preventivi:{cod_prodotto: string, status: string, fumatore: string, capitale: number, durata: number, portafoglio_greater_500: boolean, work_finance: boolean, altre_polizze:boolean, premio_capitale_cost:number, premio_cap_descri:number}[]=users.users.preventivi;

  public userEmail: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams  /* Passaggio parametri ricevuti da URL di routingLink */
    .subscribe(params => {
      this.userEmail = params;
    }
  );
  }

  // CheckEmailfromURL(){
  //   for(let item of this.userList){
  //     if(item.email==this.userEmail)
  //     {
  //       console.log(item);
  //       this.userEmailFound=item;
  //     }
  //     else 
  //     {
  //       console.log("Utente non registrato");
  //     }
  //   }

  }
