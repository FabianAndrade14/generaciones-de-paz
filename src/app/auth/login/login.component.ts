import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  async onLogin() {
    const {email, password} = this.loginForm.value;    
    try {
      const user = await this.authService.login(email, password); 
      if(user && user.user.emailVerified) {
        //redireccionamiento a la página principal
        this.router.navigate(['/'])
      } else if (user) {
        this.router.navigate(['/verification-email']);
      } else {
        this.router.navigate(['/register']);
      }
    } catch (error) {
      console.log('error')
    }
    
  }
}
