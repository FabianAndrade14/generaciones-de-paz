import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [AuthService],
})
export class HeaderComponent {

  public user$: Observable<any> = this.authService.afAuth.user;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  /* Método para salir de la sesión */
  async onLogout() {
    try {
      await this.authService.logout();      
      this.router.navigate(['/']);
    } catch (error) {
      console.log("Error")
    }
  }

}
