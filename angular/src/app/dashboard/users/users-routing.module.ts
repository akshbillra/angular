import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent} from './users.component';
import { AdduserComponent} from './adduser/adduser.component';
import { UpdateuserComponent} from './updateuser/updateuser.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'add',
    component: AdduserComponent
  },
  {
    path: 'edit/:id',
    component: UpdateuserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
