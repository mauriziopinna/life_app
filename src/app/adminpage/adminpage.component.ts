import { Component, OnInit } from '@angular/core';
import matches from '/src/assets/sources/matches.json';
import { Match } from '../match';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent implements OnInit {
  public matchList:{cod_prodotto:string, cod_prev:string, status:string, email:string, name:string, surname:string}[];
  ngOnInit(): void { 
    this.matchList = JSON.parse(localStorage.getItem("matches")!);
  }
  constructor() {
    this.matchList = JSON.parse(localStorage.getItem("matches")!);
  }

}