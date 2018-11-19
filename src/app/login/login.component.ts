import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { setDefaultService } from 'selenium-webdriver/chrome';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private logService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  // calls endpoint
  getFromLogin(username, password) {
    this.logService.getLogin(username, password).subscribe(user => this.logService.setUser(user));
    this.pageChange(this.logService.getUser());
  }

  pageChange(user) {
    if (user.roleId === 1) {
      this.router.navigate(['/', 'employee', 'view']);
    } else {
      this.router.navigate(['/', 'manager', 'view']);
    }
  }
}
