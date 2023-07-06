import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CursosComponent } from './pages/cursos/cursos.component';

import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { JuegosInteractivosComponent } from './pages/juegos-interactivos/juegos-interactivos.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { SendEmailComponent } from './auth/send-email/send-email.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,

    /* Componentes de la página */
    HomePageComponent,
    ContactoComponent,
    CursosComponent,
    JuegosInteractivosComponent,

    /* Componentes de Shared */
    HeaderComponent,
    FooterComponent,
    SendEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
