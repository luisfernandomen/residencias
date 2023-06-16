import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent implements OnInit {
  verificarCorreo: FormGroup;
  loading: boolean = false;

  constructor (
    private fb: FormBuilder,
    private afAuth: AngularFireAuth, 
    private router:Router,
    private firebaseError: FirebaseCodeErrorService
  ){

    this.verificarCorreo = this.fb.group({

    });
  }

  ngOnInit(): void {}

  verificar(){
    const email = this.verificarCorreo;
     

    this.loading = true;

  }

}
