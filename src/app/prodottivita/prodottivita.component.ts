import { Component, OnInit } from '@angular/core';
import prodotti from '/src/assets/sources/prodotti.json';
import { User } from '../user';
@Component({
  selector: 'app-prodottivita',
  templateUrl: './prodottivita.component.html',
  styleUrls: ['./prodottivita.component.css']
})
export class ProdottivitaComponent implements OnInit {
  public prodottiList = prodotti;
  private userLogged:User|null = null;
  constructor() { }
  ngOnInit(): void {
  }

  calcolaPreventivo(){
    let usergetted = localStorage.getItem("userLogged");
    if(usergetted!=null){
      this.userLogged = JSON.parse(usergetted);
      window.location.href="/calcolopreventivo";
    }
    else{
      window.location.href="/login?previous=vita";
    }
    
  }
}