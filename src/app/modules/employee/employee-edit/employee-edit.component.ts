import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  single_empData;
  employeeDetails;

  constructor(private empService : EmployeeService, private router : Router) { }

  ngOnInit() {
    this.single_empData = this.empService.getEmpData();
  }

  empDetails(empData){
    console.log("change employee details");
    
    this.empService.currentEmployeesData.subscribe(data=>{
      this.employeeDetails = data;
    });

    for(let emp of this.employeeDetails){
      if(empData.id == emp.id){
        let index = this.employeeDetails.indexOf(emp);
        this.employeeDetails.splice(index,1);
        this.employeeDetails.push(empData);
        this.empService.changeEmployeeData(this.employeeDetails);
      }
    }
    this.router.navigate(['/employee'])
  }

}
