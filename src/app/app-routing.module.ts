import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ProdottivitaComponent } from './prodottivita/prodottivita.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
 
const routes: Routes = [
  {path:"", component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'chisiamo', component: ChisiamoComponent},
  {path: 'prodottivita', component: ProdottivitaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'userpage', component: UserpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
