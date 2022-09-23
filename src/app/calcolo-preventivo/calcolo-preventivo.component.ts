import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import preventivo_options from '/src/assets/sources/preventivo_options.json'
import { ManageUsersService } from '../manage-users.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { preventivo } from '../preventivo';
@Component({
  selector: 'app-calcolo-preventivo',
  templateUrl: './calcolo-preventivo.component.html',
  styleUrls: ['./calcolo-preventivo.component.css']
})
export class CalcoloPreventivoComponent implements OnInit {
  public smoke_list = preventivo_options["fumatore"];
  public comuni_list = preventivo_options['comuni'];
  public capitali_list = preventivo_options["capitale_assicurato"];
  public durata_list = preventivo_options["durata_polizza"];
  public studio_list = preventivo_options["titolo_studio"];
  public professione_list = preventivo_options["professione"];
  public calcola_pressed:boolean=false;
  public first_card_selected:boolean = true;
  public second_card_selected:boolean=false;
  public userLogged:User = this.manageUserService.getUserLogged();
  preventivoCompile:preventivo;
  constructor(private router:Router, private manageUserService:ManageUsersService) { 
    this.preventivoCompile = new preventivo("seleziona1","seleziona2","seleziona",0,0,false,false,false,0,0);
  }
  
  

  ngOnInit(): void {
    console.log(this.smoke_list);
  }

  calcolaPreventivo(){
    this.calcola_pressed=true;
    console.log("fumatore:" + this.preventivoCompile.fumatore);
    console.log("altezza" + this.userLogged.altezza);
    console.log("peso "+ this.userLogged.peso);
    console.log("capitale ass "+ this.preventivoCompile.capitale);
    console.log("durata polizza "+ this.preventivoCompile.durata);
    console.log("data_nascita" + this.userLogged.birthdate);
    console.log("comune_nascita " + this.userLogged.birth_place);
    console.log("sesso " + this.userLogged.sesso);
    console.log("codice_fiscale " + this.userLogged.titolo_studio);
    console.log("codice_fiscale " + this.userLogged.professione);

    console.log("portafoglio > 500: " + this.preventivoCompile.portafoglio_greater_500);
    console.log("work finance " + this.preventivoCompile.work_finance);
    console.log("altre polizze" + this.preventivoCompile.altre_polizze);

  }

  confermaApprova(){
    window.location.href="/userpage?email=pincopallo"
  }

  selectFirstCard(){
    this.first_card_selected=true;
    this.second_card_selected=false;
  }

  selectSecondCard(){
    this.second_card_selected=true;
    this.first_card_selected=false;
  }

}
