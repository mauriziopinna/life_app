import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ProdottivitaComponent } from './prodottivita/prodottivita.component';
import { HomeComponent } from './home/home.component';
 
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'chisiamo', component: ChisiamoComponent},
  {path: 'prodottivita', component: ProdottivitaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
