import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'user/:id', component: UserComponent, data: { animation: 'userPage' } },
  { path: 'users', component: UsersComponent, data: { animation: 'usersPage' }  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
