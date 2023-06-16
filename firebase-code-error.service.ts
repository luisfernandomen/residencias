import { Injectable } from '@angular/core';
import { FirebaseCodeErrorEnum } from '../utils/firebase-code-error';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/employees/${id}`, data); 
  }
  

  getEmployeeList(): Observable<any>{
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }
  
  codeError(code: String){
    switch(code){

      // el correo ya existe
      case FirebaseCodeErrorEnum.EmailAlreadyInUse:
        return 'el usuario ya existe';

      //la contraseña es muy debil  
      case FirebaseCodeErrorEnum.weakPasssword:
        return 'la contraseña es muy debil';
        
      // correo invalido  
      case FirebaseCodeErrorEnum.invalidEmail:
        return 'correo invalido';
      
      // constraseña incorrecta
      case FirebaseCodeErrorEnum.wrongPassword:
        return 'Contraseña incorrecta';

      // usuario no existe
      case FirebaseCodeErrorEnum.userNotFound:
        return 'el usuario no existe';  
      default:
        return 'Error desconocido';
    }
  }
}
