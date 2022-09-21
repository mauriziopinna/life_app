import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-gestionepreventivo',
  templateUrl: './gestionepreventivo.component.html',
  styleUrls: ['./gestionepreventivo.component.css']
})
export class GestionepreventivoComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  public codice: any;
  ngOnInit() 
  {
    this.route.queryParams  /* Passaggio parametri ricevuti da URL di routingLink */
      .subscribe(params => {
        this.codice = params;
      }
    );
  }
}