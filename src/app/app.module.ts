import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './home/menu/menu.component';
import { AplicativosComponent } from './home/aplicativos/aplicativos.component';
import { FontesComponent } from './home/fontes/fontes.component';
import { SaibaMaisComponent } from './home/saiba-mais/saiba-mais.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AplicativosComponent,
    FontesComponent,
    SaibaMaisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
