import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector("#username").value;
    // const username = <HTMLInputElement>target.querySelector("#username").value;
    const password = target.querySelector("#password").value;
    console.log(event);
    console.log(username, password);
    this.Auth.getUserDetails(username, password);
  }
}
