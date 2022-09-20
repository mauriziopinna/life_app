import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ProdottivitaComponent } from './prodottivita/prodottivita.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { RegistratiComponent } from './registrati/registrati.component';
import { CalcoloPreventivoComponent } from './calcolo-preventivo/calcolo-preventivo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChisiamoComponent,
    ProdottivitaComponent,
    HomeComponent,
    LoginComponent,
    UserpageComponent,
    AdminpageComponent,
    RegistratiComponent,
    CalcoloPreventivoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
