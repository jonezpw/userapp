import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';

import { DataSoruceService } from '../../services/data-soruce.service';
import { IUser } from 'src/app/interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: number;
  user: IUser = <IUser>{knowledge: []};
  city = new FormControl('');

  constructor(private dataService: DataSoruceService, private router: Router, private activedRoute: ActivatedRoute) {
    this.activedRoute.params.pipe(map(d => d['id'])).subscribe(d => (this.id = d));
  }

  ngOnInit() {
    this.dataService.getUser(this.id).subscribe(d => (this.user = d));
  }
  back() {
    this.router.navigate(['/']);
  }

  updateCity() {
    this.user.city = this.city.value;
    this.dataService.updateUser(this.user.id, this.user.city).subscribe();
  }
}
