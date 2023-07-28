import { Injectable } from '@angular/core';
import { Login } from '../login/login.model';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  noms = [
    {nom: 'Chahid', prenom: 'Yahya', age: 25, specialite: 'Angular'},
    {nom: 'Benaziz', prenom: 'Intissar',age : 22, specialite: 'React'},
  {nom: 'Immer', prenom: 'Houda', age:23, specialite: 'Vue'},
  {nom: 'Akil', prenom: 'Younnes', age: 18, specialite: 'Spring'},
  ];
  constructor() { }
  getNoms():Observable<Login[]>{
    return of(this.noms);
  };
}

