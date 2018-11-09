import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataSoruceService } from '../../services/data-soruce.service';
import { IUser } from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[] = [];

  constructor(private dataService: DataSoruceService, private router: Router) {}

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => (this.users = users));
  }

  onClick(id: number) {
    this.router.navigate(['/user', id]);
  }

  getKnowledge(user: IUser): string {
    let result = '';
    if (user.knowledge != null) {
      result = [...user.knowledge].map(x => x.language).join(', ');
    }
    return result;
  }
}
