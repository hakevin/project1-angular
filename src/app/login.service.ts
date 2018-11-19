import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private static user: User;
  constructor(private hClient: HttpClient) { }
  getLogin (username, password) {
  const creds = {
    username: username,
    password: password
  };
  return this.hClient.post<any>('http://localhost:8080/project1/login/', creds);
  }

  setUser(user) {
    LoginService.user = user;
  }

  getUser() {
    return LoginService.user;
  }
}


