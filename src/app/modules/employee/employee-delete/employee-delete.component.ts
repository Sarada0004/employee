import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {

  single_empData;
  employeeDetails;

  constructor(private empService : EmployeeService, private activeModal : NgbActiveModal) { }

  ngOnInit() {
    this.single_empData = this.empService.getEmpData();
  }

  deleteEmp(){
    this.empService.currentEmployeesData.subscribe(data=>{
      this.employeeDetails = data;
    });
    for(let emp of this.employeeDetails){
      if(emp.id == this.single_empData.id){
        let index = this.employeeDetails.indexOf(emp);
        this.employeeDetails.splice(index,1);
        this.empService.changeEmployeeData(this.employeeDetails);
      }
    }
    this.activeModal.close();
  }

  cancel(){
    this.activeModal.close();
  }

}
