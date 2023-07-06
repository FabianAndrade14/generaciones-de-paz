import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
/* Componentes importados*/
import { CursosComponent } from "./pages/cursos/cursos.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { JuegosInteractivosComponent } from "./pages/juegos-interactivos/juegos-interactivos.component";
/* Componentes de registro y login */
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { SendEmailComponent } from "./auth/send-email/send-email.component";


const app_routes: Routes = [
    { 
        path: '', component: HomePageComponent 
    },
    { 
        path: 'juegos', component: JuegosInteractivosComponent
    },
    { 
        path: 'cursos', component: CursosComponent
    },
    { 
        path: 'about', component: ContactoComponent 
    },
    {
        path: 'login', 
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
    },
    { 
        path: 'register', 
        loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) 
    },
    {
        path: 'verification-email',
        component: SendEmailComponent,
    },
    { 
        path: '**', 
        pathMatch: 'full', 
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }
