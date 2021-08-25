import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";

  validUsers = [{'email': 'jett@email.com', 'password': '1234'}, {'email': 'callum@email.com', 'password': '4321'}, {'email': 'ryan@email.com', 'password': 'password'}]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logIn() {
    var valid = false

    for (let i = 0; i < this.validUsers.length; i++) {
      if (this.email == this.validUsers[i].email && this.password == this.validUsers[i].password){
        valid = true
      }
    }
    
    if (valid == true){
      this.router.navigateByUrl('/account');
    } else {
      this.forgot()
    }
  }

  forgot(){
    alert("well, sucks to be you")
  }

}
