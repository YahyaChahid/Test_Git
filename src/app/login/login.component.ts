import { Component, OnInit } from '@angular/core';
import { Login } from './login.model';
import { TestService } from '../shared/test.service';
@Component({

  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],


})
export class LoginComponent implements OnInit {
/*noms = [
  {nom: 'Chahid', prenom: 'Yahya', age: 25, specialite: 'Angular'},
  {nom: 'Benaziz', prenom: 'Intissar',age : 22, specialite: 'React'},
{nom: 'Immer', prenom: 'Houda', age:23, specialite: 'Vue'},
{nom: 'Akil', prenom: 'Younnes', age: 18, specialite: 'Spring'},
];*/
noms:Login[]=[];

ajoutActive=false;
nom="";
prenom="";
age=0;
specialite="";
l:Login = new Login();
OnSubmit(){
  const newLogin = new Login();
  newLogin.nom = this.nom;
  newLogin.age = this.age;
  newLogin.specialite = this.specialite;
  newLogin.prenom = this.prenom;
  this.l=newLogin;
  this.noms.push(newLogin);

}
constructor(private testService:TestService) {}
ngOnInit(): void {
 this.getNoms();
    setTimeout(()=>{
      this.ajoutActive = true;
    },2000)
}
getNoms(){
  this.testService.getNoms().subscribe(noms => this.noms = noms);
}
}
