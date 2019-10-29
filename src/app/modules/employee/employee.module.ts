import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee-delete/employee-delete.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { MatTableModule,MatSortModule,MatPaginatorModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeEditComponent, EmployeeDeleteComponent, EmployeeDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports : [EmployeeListComponent, EmployeeEditComponent, EmployeeDeleteComponent, EmployeeDetailComponent]
})
export class EmployeeModule { }
