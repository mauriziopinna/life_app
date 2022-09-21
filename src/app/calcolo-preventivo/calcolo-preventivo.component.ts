import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import preventivo_options from '/src/assets/sources/preventivo_options.json'
@Component({
  selector: 'app-calcolo-preventivo',
  templateUrl: './calcolo-preventivo.component.html',
  styleUrls: ['./calcolo-preventivo.component.css']
})
export class CalcoloPreventivoComponent implements OnInit {
  public smoke_list = preventivo_options["fumatore"];
  public capitali_list = preventivo_options["capitale_assicurato"];
  public durata_list = preventivo_options["durata_polizza"];
  public studio_list = preventivo_options["titolo_studio"];
  public professione_list = preventivo_options["professione"];
  public calcola_pressed:boolean=false;

  @ViewChild("firstCard")
  firstCardRef!:ElementRef;
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.smoke_list);
  }

  calcolaPreventivo(){
    this.calcola_pressed=true;
  }

  confermaApprova(){
    window.location.href="/prodottivita"
  }

  selectPlan(cardSelected:string){
    if(cardSelected=="first"){
      // this.firstCardRef.nativeElement.
    }
  }

}
