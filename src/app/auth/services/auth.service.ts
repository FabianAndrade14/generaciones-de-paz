import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/auth/User';


@Injectable()

export class AuthService {

  public user: User;

  constructor(public afAuth: AngularFireAuth,) { }

  async sendVerificationEmail(): Promise<void> {
    return await (await this.afAuth.currentUser).sendEmailVerification();
  }
  //Método para realizar al registro realizado
  async login( email: string, password: string ){

    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }
    catch(error){
      console.log("Algo ha sucedido")
    }
    
  }
 
  //Método para realizar el registro de un usuario
  async register(nombrecompleto: string, correo: string, contraseña: string) {
  
    try{
      const result = await this.afAuth.createUserWithEmailAndPassword(correo, contraseña);
      return result;
    } 
    catch(error) {
      console.log("error");
    }
    
  }

  //Método para salir de la sesión iniciada
  async logout() {
    try {
      await this.afAuth.signOut();  
    } catch (error) {
      console.log("error");
    }
    
  }

  //Método para obtener el usuario actual
  getCurrentUser() {
    try {
      return this.afAuth.authState.pipe(first()).toPromise();
    } catch (error) {
      console.log("Error al obtener un usuario")
    }
  }

  
}
