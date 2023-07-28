import { Component,Input } from '@angular/core';
import { Login } from '../login.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
@Input() model!: Login;

}
