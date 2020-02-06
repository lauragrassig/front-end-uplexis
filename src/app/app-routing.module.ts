import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaibaMaisComponent } from './home/saiba-mais/saiba-mais.component';
import { AplicativosComponent } from './home/aplicativos/aplicativos.component';
import { FontesComponent } from './home/fontes/fontes.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'saiba-mais',
        component: SaibaMaisComponent
      },
      {
        path: '',
        component: AplicativosComponent
      },
      {
        path: 'fontes',
        component: FontesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
