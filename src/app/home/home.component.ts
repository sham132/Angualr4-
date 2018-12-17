import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent implements OnInit {
  User: any;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  this.getUsers();

  }
  getUsers() {
  this.userService.getUsers().subscribe((data: any) => {
     this.User = data;
   console.log(data);
  });
  }

  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }

  delUser(id) {
    this.userService.deleteUser(id).subscribe(res => {
      console.log(res);
        });
  }


}
