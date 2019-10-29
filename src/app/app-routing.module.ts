import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent} from './modules/employee/employee-list/employee-list.component'
import { EmployeeEditComponent } from './modules/employee/employee-edit/employee-edit.component';

const routes: Routes = [
  {
    path : '',
    redirectTo : 'employees',
    pathMatch : "full"
  },
  {
    path : 'employees',
    component : EmployeeListComponent
  },
  {
    path : 'employee/edit',
    component : EmployeeEditComponent
  },
  {
    path : '**',
    component : EmployeeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
