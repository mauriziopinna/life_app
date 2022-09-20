import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageUsersService } from '../manage-users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private manageUserService:ManageUsersService) { }

  ngOnInit(): void {
    this.manageUserService.loadUsers();
  }

}
