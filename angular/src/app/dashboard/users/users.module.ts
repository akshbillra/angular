import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdduserComponent, UpdateuserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
