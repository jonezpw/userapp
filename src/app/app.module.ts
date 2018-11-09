import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataSoruceService } from './services/data-soruce.service';
import { UserComponent } from './Components/user/user.component';
import { UsersComponent } from './Components/users/users.component';

import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GraphQLModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [DataSoruceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
