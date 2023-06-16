import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean=false;

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth, 
    private router:Router,
    private firebaseError: FirebaseCodeErrorService
    ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]],
      repetirPassword:['',Validators.required]
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;

    console.log(this.registrarUsuario)

    this.loading =true;
    this.afAuth
    .createUserWithEmailAndPassword(email,password)
    .then(() =>{
      this.loading = false;
      this.verificarCorreo();

    }).catch((error) => {
      console.log(error);
      alert (this.firebaseError.codeError(error.code));
    });
  }

  verificarCorreo(){
    this.afAuth.currentUser.then(user => user?.sendEmailVerification());
    this.router.navigate(['/login']);
  }


}
