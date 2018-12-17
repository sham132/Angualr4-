import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './user.model';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  registerUser(user: User) {
    console.log(user.email);
    console.log(user.password);
    const body: User = {
      email: user.email,
      password: user.password
      };

    // tslint:disable-next-line:prefer-const
    const reqHeader = new HttpHeaders({'No-Auth': 'True'});

      return this.http.post(this.rootUrl + '/signup', body, {headers : reqHeader});
  }
  userAuthentication(user) { console.log(user.UserName);
  console.log(user.Password);
    const reqHeader = new HttpHeaders({ 'Content-Type': 'application/json', 'No-Auth': 'True' });
    return this.http.post(this.rootUrl + '/signin',
    {
      email: user.UserName,
      password: user.Password
    } , { headers: reqHeader }
  );
  }

  getUsers() {
   return  this.http.get(this.rootUrl + '/list');
  }


deleteUser(id: String) {
   const url = `${this.rootUrl + '/deleteuser'}/${id}`;
   return this.http.delete(url);
}
}
