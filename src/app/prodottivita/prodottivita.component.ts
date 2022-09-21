import { Component, OnInit } from '@angular/core';
import prodotti from '/src/assets/sources/prodotti.json';
@Component({
  selector: 'app-prodottivita',
  templateUrl: './prodottivita.component.html',
  styleUrls: ['./prodottivita.component.css']
})
export class ProdottivitaComponent implements OnInit {
  public prodottiList = prodotti;
  constructor() { }
  ngOnInit(): void {
  }
}