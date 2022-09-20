import { Component, OnInit } from '@angular/core';
import preventivo_options from '/src/assets/sources/preventivo_options.json'

@Component({
  selector: 'app-calcolo-preventivo',
  templateUrl: './calcolo-preventivo.component.html',
  styleUrls: ['./calcolo-preventivo.component.css']
})
export class CalcoloPreventivoComponent implements OnInit {
  public smoke_list = preventivo_options["fumatore"];
  constructor() { }

  ngOnInit(): void {
    console.log(this.smoke_list);
  }

}
