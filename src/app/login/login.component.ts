import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {
noms = [
  {nom: 'Chahid', prenom: 'Yahya', age: 25, specialite: 'Angular'},
  {nom: 'Benaziz', prenom: 'Intissar',age : 22, specialite: 'React'},
{nom: 'Immer', prenom: 'Houda', age:23, specialite: 'Vue'},
{nom: 'Akil', prenom: 'Younnes', age: 18, specialite: 'Spring'},
];
ajoutActive=false;
nom="";
prenom="";
age=0;
specialite="";
OnSubmit(){
  const newLogin = new Login();
  newLogin.nom = this.nom;
  newLogin.age = this.age;
  newLogin.specialite = this.specialite;
  newLogin.prenom = this.prenom;
  this.noms.push(newLogin);
}
ngOnInit(): void {
    setTimeout(()=>{
      this.ajoutActive = true;
    },2000)
}
}
