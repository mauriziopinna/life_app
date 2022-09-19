import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'life_app';
  constructor(public router:Router){}

  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    console.log("hey there!");
    this.isSticky = window.pageYOffset >= 250;
  }

  redirection(){
    window.location.href="/login"
  }


}
