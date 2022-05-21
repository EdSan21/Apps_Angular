import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { BusquedaComponent } from './Pages/busqueda/busqueda.component';
import { ArtistaComponent } from './Pages/artista/artista.component';
const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'search', component: BusquedaComponent},
  {path: 'artists/:id', component: ArtistaComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
