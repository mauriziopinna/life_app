import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { preventivo } from '../preventivo';
import { User } from '../user';
@Component({
  selector: 'app-gestionepreventivo',
  templateUrl: './gestionepreventivo.component.html',
  styleUrls: ['./gestionepreventivo.component.css']
})
export class GestionepreventivoComponent implements OnInit {
  public codice: any;
  public userDisplay:User;
  public preventivoDisplay:preventivo;
  constructor(private route: ActivatedRoute) { 
    this.userDisplay = new User("", "", "","","","","","","","","","","","","","",0,0, []);
    this.preventivoDisplay = new preventivo("selezioan0","seleziona1","provetta","seleziona",0,0,false,false,false,0,0);
  }
  
  ngOnInit() 
  {
    this.route.queryParams  /* Passaggio parametri ricevuti da URL di routingLink */
      .subscribe(params => {
        this.codice = params;
      }
    );
    
    let userList = JSON.parse(localStorage.getItem("users")!);
    console.log("this.codice.email: " + this.codice.email);
    for(let utente of userList){
      console.log("user.email: "+utente.email);
      if(this.codice.email===utente.email){
        console.log(utente.email);
        console.log("trovato mail" + utente.email);
        this.userDisplay = utente;
        for(let prev of utente.preventivi){
          if(prev.cod_prev==this.codice.cod_prev){
            this.preventivoDisplay = prev;
          }
        }
      }
    }
  }

  approvaRifiuta(approve:boolean){
    let matchesList = JSON.parse(localStorage.getItem("matches")!);
    let userList = JSON.parse(localStorage.getItem("users")!);
    if(approve){
      this.preventivoDisplay.status="approved";    
    }
    else{
      this.preventivoDisplay.status="rejected";
    }

    //aggiorno lo stato nella matches
    for(var idx in matchesList){
      if(this.userDisplay.email==matchesList[idx].email && this.preventivoDisplay.cod_prev == matchesList[idx].cod_prev){
        matchesList[idx].status = this.preventivoDisplay.status;
        break;
      }
    }
    localStorage.removeItem("matches");
    localStorage.setItem("matches", JSON.stringify(matchesList));

    //aggiorno lo stato nella userlist
    for(let item of userList){
      if(item.email==this.userDisplay.email){
        for(let idx in item.preventivi){
          if(item.preventivi[idx].cod_prev == this.preventivoDisplay.cod_prev){
              item.preventivi[idx].status = this.preventivoDisplay.status;
              break;
          }
        }
      }
    }

    localStorage.removeItem("users");
    localStorage.setItem("users", JSON.stringify(userList));

    

    window.location.href="/adminpage";

    
  }


}